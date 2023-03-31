"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moduleLoader_1 = require("../modules/moduleLoader");
const utils_1 = require("../parser/utils");
const inspector_1 = require("../stdlib/inspector");
const walkers_1 = require("../utils/walkers");
// Context Utils
/**
 * Small function to determine the variant to be used
 * by a program, as both context and options can have
 * a variant. The variant provided in options will
 * have precedence over the variant provided in context.
 *
 * @param context The context of the program.
 * @param options Options to be used when
 *                running the program.
 *
 * @returns The variant that the program is to be run in
 */
function determineVariant(context, options) {
    if (options.variant) {
        return options.variant;
    }
    else {
        return context.variant;
    }
}
exports.determineVariant = determineVariant;
function determineExecutionMethod(theOptions, context, program, verboseErrors) {
    if (theOptions.executionMethod !== 'auto') {
        context.executionMethod = theOptions.executionMethod;
        return;
    }
    if (context.executionMethod !== 'auto') {
        return;
    }
    let isNativeRunnable;
    if (verboseErrors) {
        isNativeRunnable = false;
    }
    else if (inspector_1.areBreakpointsSet()) {
        isNativeRunnable = false;
    }
    else if (theOptions.executionMethod === 'auto') {
        if (context.executionMethod === 'auto') {
            if (verboseErrors) {
                isNativeRunnable = false;
            }
            else if (inspector_1.areBreakpointsSet()) {
                isNativeRunnable = false;
            }
            else {
                let hasDebuggerStatement = false;
                walkers_1.simple(program, {
                    DebuggerStatement(node) {
                        hasDebuggerStatement = true;
                    }
                });
                isNativeRunnable = !hasDebuggerStatement;
            }
            context.executionMethod = isNativeRunnable ? 'native' : 'ec-evaluator';
        }
        else {
            isNativeRunnable = context.executionMethod === 'native';
        }
    }
    else {
        let hasDebuggerStatement = false;
        walkers_1.simple(program, {
            DebuggerStatement(_node) {
                hasDebuggerStatement = true;
            }
        });
        isNativeRunnable = !hasDebuggerStatement;
    }
    context.executionMethod = isNativeRunnable ? 'native' : 'ec-evaluator';
}
exports.determineExecutionMethod = determineExecutionMethod;
/**
 * Add UI tabs needed for modules to program context
 *
 * @param program AST of program to be ran
 * @param context The context of the program
 */
function appendModulesToContext(program, context) {
    for (const node of program.body) {
        if (node.type !== 'ImportDeclaration')
            break;
        const moduleName = node.source.value.trim();
        // Load the module's tabs
        if (!(moduleName in context.moduleContexts)) {
            context.moduleContexts[moduleName] = {
                state: null,
                tabs: moduleLoader_1.loadModuleTabs(moduleName)
            };
        }
        else if (context.moduleContexts[moduleName].tabs === null) {
            context.moduleContexts[moduleName].tabs = moduleLoader_1.loadModuleTabs(moduleName);
        }
    }
}
exports.appendModulesToContext = appendModulesToContext;
// AST Utils
function hasVerboseErrors(theCode) {
    const theProgramFirstExpression = utils_1.parseAt(theCode, 0);
    if (theProgramFirstExpression && theProgramFirstExpression.type === 'Literal') {
        return theProgramFirstExpression.value === 'enable verbose';
    }
    return false;
}
exports.hasVerboseErrors = hasVerboseErrors;
exports.resolvedErrorPromise = Promise.resolve({ status: 'error' });
//# sourceMappingURL=utils.js.map