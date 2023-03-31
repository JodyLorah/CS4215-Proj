"use strict";
/**
 * This interpreter implements an explicit-control evaluator.
 *
 * Heavily adapted from https://github.com/source-academy/JSpike/
 * and the legacy interpreter at '../interpreter/interpreter'
 */
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const constants_1 = require("../constants");
const errors = require("../errors/errors");
const runtimeSourceError_1 = require("../errors/runtimeSourceError");
const closure_1 = require("../interpreter/closure");
const inspector_1 = require("../stdlib/inspector");
const ast = require("../utils/astCreator");
const operators_1 = require("../utils/operators");
const rttc = require("../utils/rttc");
const instr = require("./instrCreator");
const types_1 = require("./types");
const utils_1 = require("./utils");
/**
 * The agenda is a list of commands that still needs to be executed by the machine.
 * It contains syntax tree nodes or instructions.
 */
class Agenda extends utils_1.Stack {
    constructor(program) {
        super();
        // Evaluation of last statement is undefined if stash is empty
        this.push(instr.pushUndefIfNeededInstr());
        // Load program into agenda stack
        this.push(program);
    }
}
exports.Agenda = Agenda;
/**
 * The stash is a list of values that stores intermediate results.
 */
class Stash extends utils_1.Stack {
    constructor() {
        super();
    }
}
exports.Stash = Stash;
/**
 * Function to be called when a program is to be interpreted using
 * the explicit control evaluator.
 *
 * @param program The program to evaluate.
 * @param context The context to evaluate the program in.
 * @returns The result of running the ECE machine.
 */
function evaluate(program, context) {
    try {
        context.runtime.isRunning = true;
        context.runtime.agenda = new Agenda(program);
        context.runtime.stash = new Stash();
        return runECEMachine(context, context.runtime.agenda, context.runtime.stash);
    }
    catch (error) {
        return new types_1.ECError();
    }
    finally {
        context.runtime.isRunning = false;
    }
}
exports.evaluate = evaluate;
/**
 * Function that is called when a user wishes to resume evaluation after
 * hitting a breakpoint.
 * This should only be called after the first 'evaluate' function has been called so that
 * context.runtime.agenda and context.runtime.stash are defined.
 * @param context The context to continue evaluating the program in.
 * @returns The result of running the ECE machine.
 */
function resumeEvaluate(context) {
    try {
        context.runtime.isRunning = true;
        return runECEMachine(context, context.runtime.agenda, context.runtime.stash);
    }
    catch (error) {
        return new types_1.ECError();
    }
    finally {
        context.runtime.isRunning = false;
    }
}
exports.resumeEvaluate = resumeEvaluate;
/**
 * Function that returns the appropriate Promise<Result> given the output of ec evaluating, depending
 * on whether the program is finished evaluating, ran into a breakpoint or ran into an error.
 * @param context The context of the program.
 * @param value The value of ec evaluating the program.
 * @returns The corresponding promise.
 */
function ECEResultPromise(context, value) {
    return new Promise((resolve, reject) => {
        if (value instanceof types_1.ECEBreak) {
            resolve({ status: 'suspended-ec-eval', context });
        }
        else if (value instanceof types_1.ECError) {
            resolve({ status: 'error' });
        }
        else {
            resolve({ status: 'finished', context, value });
        }
    });
}
exports.ECEResultPromise = ECEResultPromise;
/**
 *
 * @param context The context to evaluate the program in.
 * @param agenda Points to the current context.runtime.agenda
 * @param stash Points to the current context.runtime.stash
 * @returns A special break object if the program is interrupted by a break point;
 * else the top value of the stash. It is usually the return value of the program.
 */
function runECEMachine(context, agenda, stash) {
    context.runtime.break = false;
    context.runtime.nodes = [];
    let command = agenda.pop();
    while (command) {
        if (utils_1.isNode(command)) {
            context.runtime.nodes.unshift(command);
            inspector_1.checkEditorBreakpoints(context, command);
            cmdEvaluators[command.type](command, context, agenda, stash);
            if (context.runtime.break && context.runtime.debuggerOn) {
                // We can put this under isNode since context.runtime.break
                // will only be updated after a debugger statement and so we will
                // run into a node immediately after.
                return new types_1.ECEBreak();
            }
            context.runtime.nodes.shift();
        }
        else {
            // Node is an instrucion
            cmdEvaluators[command.instrType](command, context, agenda, stash);
        }
        command = agenda.pop();
    }
    return stash.peek();
}
/**
 * Dictionary of functions which handle the logic for the response of the three registers of
 * the ASE machine to each AgendaItem.
 */
const cmdEvaluators = {
    /**
     * Statements
     */
    Program: function (command, context, agenda, stash) {
        const environment = utils_1.createBlockEnvironment(context, 'programEnvironment');
        // Push the environment only if it is non empty.
        if (utils_1.declareFunctionsAndVariables(context, command, environment)) {
            utils_1.pushEnvironment(context, environment);
        }
        // Push block body
        agenda.push(...utils_1.handleSequence(command.body));
    },
    BlockStatement: function (command, context, agenda) {
        // To restore environment after block ends
        agenda.push(instr.envInstr(utils_1.currentEnvironment(context)));
        const environment = utils_1.createBlockEnvironment(context, 'blockEnvironment');
        // Push the environment only if it is non empty.
        if (utils_1.declareFunctionsAndVariables(context, command, environment)) {
            utils_1.pushEnvironment(context, environment);
        }
        // Push block body
        agenda.push(...utils_1.handleSequence(command.body));
    },
    WhileStatement: function (command, context, agenda) {
        agenda.push(instr.breakMarkerInstr());
        agenda.push(instr.whileInstr(command.test, command.body, command));
        agenda.push(command.test);
        agenda.push(ast.identifier('undefined')); // Return undefined if there is no loop execution
    },
    ForStatement: function (command, context, agenda) {
        // All 3 parts will be defined due to parser rules
        const init = command.init;
        const test = command.test;
        const update = command.update;
        // Loop control variable present
        // Refer to Source §3 specifications https://docs.sourceacademy.org/source_3.pdf
        if (init.type === 'VariableDeclaration' && init.kind === 'let') {
            const id = init.declarations[0].id;
            const valueExpression = init.declarations[0].init;
            agenda.push(ast.blockStatement([
                init,
                ast.forStatement(ast.assignmentExpression(id, valueExpression), test, update, ast.blockStatement([
                    ast.variableDeclaration([
                        ast.variableDeclarator(ast.identifier(`_copy_of_${id.name}`), ast.identifier(id.name))
                    ]),
                    ast.blockStatement([
                        ast.variableDeclaration([
                            ast.variableDeclarator(ast.identifier(id.name), ast.identifier(`_copy_of_${id.name}`))
                        ]),
                        command.body
                    ])
                ]))
            ]));
        }
        else {
            agenda.push(instr.breakMarkerInstr());
            agenda.push(instr.forInstr(init, test, update, command.body, command));
            agenda.push(test);
            agenda.push(instr.popInstr()); // Pop value from init assignment
            agenda.push(init);
            agenda.push(ast.identifier('undefined')); // Return undefined if there is no loop execution
        }
    },
    IfStatement: function (command, context, agenda, stash) {
        agenda.push(...utils_1.reduceConditional(command));
    },
    ExpressionStatement: function (command, context, agenda) {
        agenda.push(command.expression);
    },
    DebuggerStatement: function (command, context) {
        context.runtime.break = true;
    },
    VariableDeclaration: function (command, context, agenda) {
        const declaration = command.declarations[0];
        const id = declaration.id;
        // Parser enforces initialisation during variable declaration
        const init = declaration.init;
        agenda.push(instr.popInstr());
        agenda.push(instr.assmtInstr(id.name, command.kind === 'const', true, command));
        agenda.push(init);
    },
    FunctionDeclaration: function (command, context, agenda) {
        // Function declaration desugared into constant declaration.
        const lambdaExpression = ast.blockArrowFunction(command.params, command.body, command.loc);
        const lambdaDeclaration = ast.constantDeclaration(command.id.name, lambdaExpression, command.loc);
        agenda.push(lambdaDeclaration);
    },
    ReturnStatement: function (command, context, agenda) {
        // Push return argument onto agenda as well as Reset Instruction to clear to ignore all statements after the return.
        agenda.push(instr.resetInstr());
        if (command.argument) {
            agenda.push(command.argument);
        }
    },
    ContinueStatement: function (command, context, agenda, stash) {
        agenda.push(instr.contInstr());
    },
    BreakStatement: function (command, context, agenda, stash) {
        agenda.push(instr.breakInstr());
    },
    /**
     * Expressions
     */
    Literal: function (command, context, agenda, stash) {
        stash.push(command.value);
    },
    AssignmentExpression: function (command, context, agenda) {
        if (command.left.type === 'MemberExpression') {
            agenda.push(instr.arrAssmtInstr());
            agenda.push(command.right);
            agenda.push(command.left.property);
            agenda.push(command.left.object);
        }
        else if (command.left.type === 'Identifier') {
            const id = command.left;
            agenda.push(instr.assmtInstr(id.name, false, false, command));
            agenda.push(command.right);
        }
    },
    ArrayExpression: function (command, context, agenda) {
        const elems = command.elements;
        const len = elems.length;
        agenda.push(instr.arrLitInstr(len));
        for (const elem of elems) {
            agenda.push(elem);
        }
    },
    MemberExpression: function (command, context, agenda, stash) {
        agenda.push(instr.arrAccInstr());
        agenda.push(command.property);
        agenda.push(command.object);
    },
    ConditionalExpression: function (command, context, agenda, stash) {
        agenda.push(...utils_1.reduceConditional(command));
    },
    Identifier: function (command, context, agenda, stash) {
        stash.push(utils_1.getVariable(context, command.name, command));
    },
    UnaryExpression: function (command, context, agenda) {
        agenda.push(instr.unOpInstr(command.operator, command));
        agenda.push(command.argument);
    },
    BinaryExpression: function (command, context, agenda) {
        agenda.push(instr.binOpInstr(command.operator, command));
        agenda.push(command.right);
        agenda.push(command.left);
    },
    LogicalExpression: function (command, context, agenda) {
        if (command.operator === '&&') {
            agenda.push(ast.conditionalExpression(command.left, command.right, ast.literal(false), command.loc));
        }
        else {
            agenda.push(ast.conditionalExpression(command.left, ast.literal(true), command.right, command.loc));
        }
    },
    ArrowFunctionExpression: function (command, context, agenda, stash) {
        // Reuses the Closure data structure from legacy interpreter
        const closure = closure_1.default.makeFromArrowFunction(command, utils_1.currentEnvironment(context), context, true);
        const next = agenda.peek();
        if (!(next && utils_1.isInstr(next) && utils_1.isAssmtInstr(next))) {
            if (closure instanceof closure_1.default) {
                Object.defineProperty(utils_1.currentEnvironment(context).head, lodash_1.uniqueId(), {
                    value: closure,
                    writable: false,
                    enumerable: true
                });
            }
        }
        stash.push(closure);
    },
    CallExpression: function (command, context, agenda) {
        // Push application instruction, function arguments and function onto agenda.
        agenda.push(instr.appInstr(command.arguments.length, command));
        for (let index = command.arguments.length - 1; index >= 0; index--) {
            agenda.push(command.arguments[index]);
        }
        agenda.push(command.callee);
    },
    /**
     * Instructions
     */
    [types_1.InstrType.RESET]: function (command, context, agenda, stash) {
        // Keep pushing reset instructions until marker is found.
        const cmdNext = agenda.pop();
        if (cmdNext && (utils_1.isNode(cmdNext) || cmdNext.instrType !== types_1.InstrType.MARKER)) {
            agenda.push(instr.resetInstr());
        }
    },
    [types_1.InstrType.WHILE]: function (command, context, agenda, stash) {
        const test = stash.pop();
        // Check if test condition is a boolean
        const error = rttc.checkIfStatement(command.srcNode, test, context.chapter);
        if (error) {
            utils_1.handleRuntimeError(context, error);
        }
        if (test) {
            agenda.push(command);
            agenda.push(command.test);
            agenda.push(instr.contMarkerInstr());
            agenda.push(instr.pushUndefIfNeededInstr()); // The loop returns undefined if the stash is empty
            agenda.push(command.body);
            agenda.push(instr.popInstr()); // Pop previous body value
        }
    },
    [types_1.InstrType.FOR]: function (command, context, agenda, stash) {
        const test = stash.pop();
        // Check if test condition is a boolean
        const error = rttc.checkIfStatement(command.srcNode, test, context.chapter);
        if (error) {
            utils_1.handleRuntimeError(context, error);
        }
        if (test) {
            agenda.push(command);
            agenda.push(command.test);
            agenda.push(instr.popInstr()); // Pop value from update
            agenda.push(command.update);
            agenda.push(instr.contMarkerInstr());
            agenda.push(instr.pushUndefIfNeededInstr()); // The loop returns undefined if the stash is empty
            agenda.push(command.body);
            agenda.push(instr.popInstr()); // Pop previous body value
        }
    },
    [types_1.InstrType.ASSIGNMENT]: function (command, context, agenda, stash) {
        command.declaration
            ? utils_1.defineVariable(context, command.symbol, stash.peek(), command.constant, command.srcNode)
            : utils_1.setVariable(context, command.symbol, stash.peek(), command.srcNode);
    },
    [types_1.InstrType.UNARY_OP]: function (command, context, agenda, stash) {
        const argument = stash.pop();
        const error = rttc.checkUnaryExpression(command.srcNode, command.symbol, argument, context.chapter);
        if (error) {
            utils_1.handleRuntimeError(context, error);
        }
        stash.push(operators_1.evaluateUnaryExpression(command.symbol, argument));
    },
    [types_1.InstrType.BINARY_OP]: function (command, context, agenda, stash) {
        const right = stash.pop();
        const left = stash.pop();
        const error = rttc.checkBinaryExpression(command.srcNode, command.symbol, context.chapter, left, right);
        if (error) {
            utils_1.handleRuntimeError(context, error);
        }
        stash.push(operators_1.evaluateBinaryExpression(command.symbol, left, right));
    },
    [types_1.InstrType.POP]: function (command, context, agenda, stash) {
        stash.pop();
    },
    [types_1.InstrType.APPLICATION]: function (command, context, agenda, stash) {
        var _a;
        utils_1.checkStackOverFlow(context, agenda);
        // Get function arguments from the stash
        const args = [];
        for (let index = 0; index < command.numOfArgs; index++) {
            args.unshift(stash.pop());
        }
        // Get function from the stash
        const func = stash.pop();
        if (func instanceof closure_1.default) {
            // Check for number of arguments mismatch error
            utils_1.checkNumberOfArguments(context, func, args, command.srcNode);
            // For User-defined and Pre-defined functions instruction to restore environment and marker for the reset instruction is required.
            const next = agenda.peek();
            if (!next || (!utils_1.isNode(next) && next.instrType === types_1.InstrType.ENVIRONMENT)) {
                // Pushing another Env Instruction would be redundant so only Marker needs to be pushed.
                agenda.push(instr.markerInstr());
            }
            else if (!utils_1.isNode(next) && next.instrType === types_1.InstrType.RESET) {
                // Reset Instruction will be replaced by Reset Instruction of new return statement.
                agenda.pop();
            }
            else {
                agenda.push(instr.envInstr(utils_1.currentEnvironment(context)));
                agenda.push(instr.markerInstr());
            }
            // Push function body on agenda and create environment for function parameters.
            // Name the environment if the function call expression is not anonymous
            agenda.push(func.node.body);
            const environment = utils_1.createEnvironment(func, args, command.srcNode);
            utils_1.pushEnvironment(context, environment);
        }
        else if (typeof func === 'function') {
            // Check for number of arguments mismatch error
            utils_1.checkNumberOfArguments(context, func, args, command.srcNode);
            // Directly stash result of applying pre-built functions without the ASE machine.
            try {
                const result = func(...args);
                stash.push(result);
            }
            catch (error) {
                if (!(error instanceof runtimeSourceError_1.RuntimeSourceError || error instanceof errors.ExceptionError)) {
                    // The error could've arisen when the builtin called a source function which errored.
                    // If the cause was a source error, we don't want to include the error.
                    // However if the error came from the builtin itself, we need to handle it.
                    const loc = (_a = command.srcNode.loc) !== null && _a !== void 0 ? _a : constants_1.UNKNOWN_LOCATION;
                    utils_1.handleRuntimeError(context, new errors.ExceptionError(error, loc));
                }
            }
        }
        else {
            utils_1.handleRuntimeError(context, new errors.CallingNonFunctionValue(func, command.srcNode));
        }
    },
    [types_1.InstrType.BRANCH]: function (command, context, agenda, stash) {
        const test = stash.pop();
        // Check if test condition is a boolean
        const error = rttc.checkIfStatement(command.srcNode, test, context.chapter);
        if (error) {
            utils_1.handleRuntimeError(context, error);
        }
        if (test) {
            agenda.push(command.consequent);
        }
        else if (command.alternate) {
            agenda.push(command.alternate);
        }
    },
    [types_1.InstrType.ENVIRONMENT]: function (command, context) {
        // Restore environment
        while (utils_1.currentEnvironment(context).id !== command.env.id) {
            utils_1.popEnvironment(context);
        }
    },
    [types_1.InstrType.PUSH_UNDEFINED_IF_NEEDED]: function (command, context, agenda, stash) {
        if (stash.size() === 0) {
            stash.push(undefined);
        }
    },
    [types_1.InstrType.ARRAY_LITERAL]: function (command, context, agenda, stash) {
        const arity = command.arity;
        const array = [];
        for (let i = 0; i < arity; ++i) {
            array.push(stash.pop());
        }
        stash.push(array);
    },
    [types_1.InstrType.ARRAY_ACCESS]: function (command, context, agenda, stash) {
        const index = stash.pop();
        const array = stash.pop();
        stash.push(array[index]);
    },
    [types_1.InstrType.ARRAY_ASSIGNMENT]: function (command, context, agenda, stash) {
        const value = stash.pop();
        const index = stash.pop();
        const array = stash.pop();
        array[index] = value;
        stash.push(value);
    },
    [types_1.InstrType.CONTINUE]: function (command, context, agenda, stash) {
        const next = agenda.pop();
        if (utils_1.isInstr(next) && next.instrType == types_1.InstrType.CONTINUE_MARKER) {
            // Encountered continue mark, stop popping
        }
        else if (utils_1.isInstr(next) && next.instrType == types_1.InstrType.ENVIRONMENT) {
            agenda.push(command);
            agenda.push(next); // Let instruction evaluate to restore env
        }
        else {
            // Continue popping from agenda by pushing same instruction on agenda
            agenda.push(command);
        }
    },
    [types_1.InstrType.CONTINUE_MARKER]: function () { },
    [types_1.InstrType.BREAK]: function (command, context, agenda, stash) {
        const next = agenda.pop();
        if (utils_1.isInstr(next) && next.instrType == types_1.InstrType.BREAK_MARKER) {
            // Encountered break mark, stop popping
        }
        else if (utils_1.isInstr(next) && next.instrType == types_1.InstrType.ENVIRONMENT) {
            agenda.push(command);
            agenda.push(next); // Let instruction evaluate to restore env
        }
        else {
            // Continue popping from agenda by pushing same instruction on agenda
            agenda.push(command);
        }
    },
    [types_1.InstrType.BREAK_MARKER]: function () { }
};
//# sourceMappingURL=interpreter.js.map