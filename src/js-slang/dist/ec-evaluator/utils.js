"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const errors = require("../errors/errors");
const closure_1 = require("../interpreter/closure");
const ast = require("../utils/astCreator");
const instr = require("./instrCreator");
const types_1 = require("./types");
class Stack {
    constructor() {
        // Bottom of the array is at index 0
        this.storage = [];
    }
    push(...items) {
        for (const item of items) {
            this.storage.push(item);
        }
    }
    pop() {
        return this.storage.pop();
    }
    peek() {
        if (this.size() === 0) {
            return undefined;
        }
        return this.storage[this.size() - 1];
    }
    size() {
        return this.storage.length;
    }
}
exports.Stack = Stack;
/**
 * Typeguard for Instr to distinguish between program statements and instructions.
 *
 * @param command An AgendaItem
 * @returns true if the AgendaItem is an instruction and false otherwise.
 */
exports.isInstr = (command) => {
    return command.instrType !== undefined;
};
/**
 * Typeguard for esNode to distinguish between program statements and instructions.
 *
 * @param command An AgendaItem
 * @returns true if the AgendaItem is an esNode and false if it is an instruction.
 */
exports.isNode = (command) => {
    return command.type !== undefined;
};
/**
 * Typeguard for esIdentifier. To verify if an esNode is an esIdentifier.
 *
 * @param node an esNode
 * @returns true if node is an esIdentifier, false otherwise.
 */
exports.isIdentifier = (node) => {
    return node.name !== undefined;
};
/**
 * Typeguard for esBlockStatement. To verify if a function body is a block statement.
 *
 * @param body the function body
 * @returns true if node is an esIdentifier, false otherwise.
 */
exports.isExpressionBody = (body) => {
    return body.type !== 'BlockStatement';
};
/**
 * Typeguard for AssmtInstr. To verify if an instruction is an assignment instruction.
 *
 * @param instr an instruction
 * @returns true if instr is an AssmtInstr, false otherwise.
 */
exports.isAssmtInstr = (instr) => {
    return instr.instrType === types_1.InstrType.ASSIGNMENT;
};
/**
 * A helper function for handling sequences of statements.
 * Statements must be pushed in reverse order, and each statement is separated by a pop
 * instruction so that only the result of the last statement remains on stash.
 * Value producing statements have an extra pop instruction.
 *
 * @param seq Array of statements.
 * @returns Array of commands to be pushed into agenda.
 */
exports.handleSequence = (seq) => {
    const result = [];
    let valueProduced = false;
    for (const command of seq) {
        if (exports.valueProducing(command)) {
            valueProduced ? result.push(instr.popInstr()) : (valueProduced = true);
        }
        result.push(command);
    }
    return result.reverse();
};
/**
 * This function is used for ConditionalExpressions and IfStatements, to create the sequence
 * of agenda items to be added.
 */
exports.reduceConditional = (node) => {
    return [instr.branchInstr(node.consequent, node.alternate, node), node.test];
};
/**
 * To determine if an agenda item is value producing. JavaScript distinguishes valu producing
 * statements and non-value producing statements.
 * Refer to https://sourceacademy.nus.edu.sg/sicpjs/4.1.2 exercise 4.8.
 *
 * @param command Agenda item to determine if it is value producing.
 * @returns true if it is value producing, false otherwise.
 */
exports.valueProducing = (command) => {
    const type = command.type;
    return (type !== 'VariableDeclaration' &&
        type !== 'FunctionDeclaration' &&
        type !== 'ContinueStatement' &&
        type !== 'BreakStatement' &&
        type !== 'ReturnStatement' &&
        (type !== 'BlockStatement' || command.body.some(exports.valueProducing)));
};
/**
 * Environments
 */
exports.currentEnvironment = (context) => context.runtime.environments[0];
exports.createEnvironment = (closure, args, callExpression) => {
    const environment = {
        name: exports.isIdentifier(callExpression.callee) ? callExpression.callee.name : closure.functionName,
        tail: closure.environment,
        head: {},
        id: lodash_1.uniqueId(),
        callExpression: Object.assign(Object.assign({}, callExpression), { arguments: args.map(ast.primitive) })
    };
    closure.node.params.forEach((param, index) => {
        environment.head[param.name] = args[index];
    });
    return environment;
};
exports.popEnvironment = (context) => context.runtime.environments.shift();
exports.pushEnvironment = (context, environment) => {
    context.runtime.environments.unshift(environment);
    context.runtime.environmentTree.insert(environment);
};
exports.createBlockEnvironment = (context, name = 'blockEnvironment', head = {}) => {
    return {
        name,
        tail: exports.currentEnvironment(context),
        head,
        id: lodash_1.uniqueId()
    };
};
/**
 * Variables
 */
const DECLARED_BUT_NOT_YET_ASSIGNED = Symbol('Used to implement hoisting');
function declareIdentifier(context, name, node, environment) {
    if (environment.head.hasOwnProperty(name)) {
        const descriptors = Object.getOwnPropertyDescriptors(environment.head);
        return exports.handleRuntimeError(context, new errors.VariableRedeclaration(node, name, descriptors[name].writable));
    }
    environment.head[name] = DECLARED_BUT_NOT_YET_ASSIGNED;
    return environment;
}
function declareVariables(context, node, environment) {
    for (const declaration of node.declarations) {
        declareIdentifier(context, declaration.id.name, node, environment);
    }
}
function declareFunctionsAndVariables(context, node, environment) {
    let hasDeclarations = false;
    for (const statement of node.body) {
        switch (statement.type) {
            case 'VariableDeclaration':
                declareVariables(context, statement, environment);
                hasDeclarations = true;
                break;
            case 'FunctionDeclaration':
                declareIdentifier(context, statement.id.name, statement, environment);
                hasDeclarations = true;
                break;
        }
    }
    return hasDeclarations;
}
exports.declareFunctionsAndVariables = declareFunctionsAndVariables;
function defineVariable(context, name, value, constant = false, node) {
    const environment = exports.currentEnvironment(context);
    if (environment.head[name] !== DECLARED_BUT_NOT_YET_ASSIGNED) {
        return exports.handleRuntimeError(context, new errors.VariableRedeclaration(node, name, !constant));
    }
    Object.defineProperty(environment.head, name, {
        value,
        writable: !constant,
        enumerable: true
    });
    return environment;
}
exports.defineVariable = defineVariable;
exports.getVariable = (context, name, node) => {
    let environment = exports.currentEnvironment(context);
    while (environment) {
        if (environment.head.hasOwnProperty(name)) {
            if (environment.head[name] === DECLARED_BUT_NOT_YET_ASSIGNED) {
                return exports.handleRuntimeError(context, new errors.UnassignedVariable(name, node));
            }
            else {
                return environment.head[name];
            }
        }
        else {
            environment = environment.tail;
        }
    }
    return exports.handleRuntimeError(context, new errors.UndefinedVariable(name, node));
};
exports.setVariable = (context, name, value, node) => {
    let environment = exports.currentEnvironment(context);
    while (environment) {
        if (environment.head.hasOwnProperty(name)) {
            if (environment.head[name] === DECLARED_BUT_NOT_YET_ASSIGNED) {
                break;
            }
            const descriptors = Object.getOwnPropertyDescriptors(environment.head);
            if (descriptors[name].writable) {
                environment.head[name] = value;
                return undefined;
            }
            return exports.handleRuntimeError(context, new errors.ConstAssignment(node, name));
        }
        else {
            environment = environment.tail;
        }
    }
    return exports.handleRuntimeError(context, new errors.UndefinedVariable(name, node));
};
exports.handleRuntimeError = (context, error) => {
    context.errors.push(error);
    throw error;
};
exports.checkNumberOfArguments = (context, callee, args, exp) => {
    var _a;
    if (callee instanceof closure_1.default) {
        // User-defined or Pre-defined functions
        const params = callee.node.params;
        const hasVarArgs = ((_a = params[params.length - 1]) === null || _a === void 0 ? void 0 : _a.type) === 'RestElement';
        if (hasVarArgs ? params.length - 1 > args.length : params.length !== args.length) {
            return exports.handleRuntimeError(context, new errors.InvalidNumberOfArguments(exp, hasVarArgs ? params.length - 1 : params.length, args.length, hasVarArgs));
        }
    }
    else {
        // Pre-built functions
        const hasVarArgs = callee.minArgsNeeded != undefined;
        if (hasVarArgs ? callee.minArgsNeeded > args.length : callee.length !== args.length) {
            return exports.handleRuntimeError(context, new errors.InvalidNumberOfArguments(exp, hasVarArgs ? callee.minArgsNeeded : callee.length, args.length, hasVarArgs));
        }
    }
    return undefined;
};
/**
 * This function can be used to check for a stack overflow.
 * The current limit is set to be an agenda size of 1.0 x 10^5, if the agenda
 * flows beyond this limit an error is thrown.
 * This corresponds to about 10mb of space according to tests ran.
 */
exports.checkStackOverFlow = (context, agenda) => {
    if (agenda.size() > 100000) {
        const stacks = [];
        let counter = 0;
        for (let i = 0; counter < errors.MaximumStackLimitExceeded.MAX_CALLS_TO_SHOW &&
            i < context.runtime.environments.length; i++) {
            if (context.runtime.environments[i].callExpression) {
                stacks.unshift(context.runtime.environments[i].callExpression);
                counter++;
            }
        }
        exports.handleRuntimeError(context, new errors.MaximumStackLimitExceeded(context.runtime.nodes[0], stacks));
    }
};
//# sourceMappingURL=utils.js.map