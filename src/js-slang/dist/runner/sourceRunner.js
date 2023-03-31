"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const constants_1 = require("../constants");
const interpreter_1 = require("../ec-evaluator/interpreter");
const errors_1 = require("../errors/errors");
const localImportErrors_1 = require("../errors/localImportErrors");
const runtimeSourceError_1 = require("../errors/runtimeSourceError");
const timeoutErrors_1 = require("../errors/timeoutErrors");
const gpu_1 = require("../gpu/gpu");
const errors_2 = require("../infiniteLoops/errors");
const runtime_1 = require("../infiniteLoops/runtime");
const interpreter_2 = require("../interpreter/interpreter");
const interpreter_non_det_1 = require("../interpreter/interpreter-non-det");
const lazy_1 = require("../lazy/lazy");
const preprocessor_1 = require("../localImports/preprocessor");
const parser_1 = require("../parser/parser");
const schedulers_1 = require("../schedulers");
const stepper_1 = require("../stepper/stepper");
const evalContainer_1 = require("../transpiler/evalContainer");
const transpiler_1 = require("../transpiler/transpiler");
const types_1 = require("../types");
const operators_1 = require("../utils/operators");
const validator_1 = require("../validator/validator");
const svml_compiler_1 = require("../vm/svml-compiler");
const svml_machine_1 = require("../vm/svml-machine");
const _1 = require(".");
const errors_3 = require("./errors");
const fullJSRunner_1 = require("./fullJSRunner");
const utils_1 = require("./utils");
const DEFAULT_SOURCE_OPTIONS = {
    scheduler: 'async',
    steps: 1000,
    stepLimit: 1000,
    executionMethod: 'auto',
    variant: types_1.Variant.DEFAULT,
    originalMaxExecTime: 1000,
    useSubst: false,
    isPrelude: false,
    throwInfiniteLoops: true
};
let previousCode = null;
let isPreviousCodeTimeoutError = false;
function runConcurrent(program, context, options) {
    if (context.shouldIncreaseEvaluationTimeout) {
        context.nativeStorage.maxExecTime *= constants_1.JSSLANG_PROPERTIES.factorToIncreaseBy;
    }
    else {
        context.nativeStorage.maxExecTime = options.originalMaxExecTime;
    }
    try {
        return Promise.resolve({
            status: 'finished',
            context,
            value: svml_machine_1.runWithProgram(svml_compiler_1.compileForConcurrent(program, context), context)
        });
    }
    catch (error) {
        if (error instanceof runtimeSourceError_1.RuntimeSourceError || error instanceof errors_1.ExceptionError) {
            context.errors.push(error); // use ExceptionErrors for non Source Errors
            return utils_1.resolvedErrorPromise;
        }
        context.errors.push(new errors_1.ExceptionError(error, constants_1.UNKNOWN_LOCATION));
        return utils_1.resolvedErrorPromise;
    }
}
function runSubstitution(program, context, options) {
    const steps = stepper_1.getEvaluationSteps(program, context, options.stepLimit);
    const redexedSteps = [];
    for (const step of steps) {
        const redex = stepper_1.getRedex(step[0], step[1]);
        const redexed = stepper_1.redexify(step[0], step[1]);
        redexedSteps.push({
            code: redexed[0],
            redex: redexed[1],
            explanation: step[2],
            function: stepper_1.callee(redex)
        });
    }
    return Promise.resolve({
        status: 'finished',
        context,
        value: redexedSteps
    });
}
function runInterpreter(program, context, options) {
    let it = interpreter_2.evaluate(program, context);
    let scheduler;
    if (context.variant === types_1.Variant.NON_DET) {
        it = interpreter_non_det_1.nonDetEvaluate(program, context);
        scheduler = new schedulers_1.NonDetScheduler();
    }
    else if (options.scheduler === 'async') {
        scheduler = new schedulers_1.AsyncScheduler();
    }
    else {
        scheduler = new schedulers_1.PreemptiveScheduler(options.steps);
    }
    return scheduler.run(it, context);
}
function runNative(program, context, options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!options.isPrelude) {
            if (context.shouldIncreaseEvaluationTimeout && isPreviousCodeTimeoutError) {
                context.nativeStorage.maxExecTime *= constants_1.JSSLANG_PROPERTIES.factorToIncreaseBy;
            }
            else {
                context.nativeStorage.maxExecTime = options.originalMaxExecTime;
            }
        }
        // For whatever reason, the transpiler mutates the state of the AST as it is transpiling and inserts
        // a bunch of global identifiers to it. Once that happens, the infinite loop detection instrumentation
        // ends up generating code that has syntax errors. As such, we need to make a deep copy here to preserve
        // the original AST for future use, such as with the infinite loop detector.
        const transpiledProgram = _.cloneDeep(program);
        let transpiled;
        let sourceMapJson;
        try {
            utils_1.appendModulesToContext(transpiledProgram, context);
            // Repl module "default_js_slang" function support (Wang Zihan)
            if (context.moduleContexts['repl'] !== undefined) {
                ;
                context.moduleContexts['repl'].js_slang = {};
                context.moduleContexts['repl'].js_slang.sourceFilesRunner = sourceFilesRunner;
                if (context.moduleContexts['repl'].js_slang.context === undefined)
                    context.moduleContexts['repl'].js_slang.context = context;
            }
            switch (context.variant) {
                case types_1.Variant.GPU:
                    gpu_1.transpileToGPU(transpiledProgram);
                    break;
                case types_1.Variant.LAZY:
                    lazy_1.transpileToLazy(transpiledProgram);
                    break;
            }
            ;
            ({ transpiled, sourceMapJson } = transpiler_1.transpile(transpiledProgram, context));
            // console.log(transpiled);
            let value = yield evalContainer_1.sandboxedEval(transpiled, context);
            if (context.variant === types_1.Variant.LAZY) {
                value = operators_1.forceIt(value);
            }
            if (!options.isPrelude) {
                isPreviousCodeTimeoutError = false;
            }
            return Promise.resolve({
                status: 'finished',
                context,
                value
            });
        }
        catch (error) {
            const isDefaultVariant = options.variant === undefined || options.variant === types_1.Variant.DEFAULT;
            if (isDefaultVariant && errors_2.isPotentialInfiniteLoop(error)) {
                const detectedInfiniteLoop = runtime_1.testForInfiniteLoop(program, context.previousPrograms.slice(1));
                if (detectedInfiniteLoop !== undefined) {
                    if (options.throwInfiniteLoops) {
                        context.errors.push(detectedInfiniteLoop);
                        return utils_1.resolvedErrorPromise;
                    }
                    else {
                        error.infiniteLoopError = detectedInfiniteLoop;
                        if (error instanceof errors_1.ExceptionError) {
                            ;
                            error.error.infiniteLoopError = detectedInfiniteLoop;
                        }
                    }
                }
            }
            if (error instanceof runtimeSourceError_1.RuntimeSourceError) {
                context.errors.push(error);
                if (error instanceof timeoutErrors_1.TimeoutError) {
                    isPreviousCodeTimeoutError = true;
                }
                return utils_1.resolvedErrorPromise;
            }
            if (error instanceof errors_1.ExceptionError) {
                // if we know the location of the error, just throw it
                if (error.location.start.line !== -1) {
                    context.errors.push(error);
                    return utils_1.resolvedErrorPromise;
                }
                else {
                    error = error.error; // else we try to get the location from source map
                }
            }
            const sourceError = yield errors_3.toSourceError(error, sourceMapJson);
            context.errors.push(sourceError);
            return utils_1.resolvedErrorPromise;
        }
    });
}
function runECEvaluator(program, context, options) {
    const value = interpreter_1.evaluate(program, context);
    return interpreter_1.ECEResultPromise(context, value);
}
function sourceRunner(program, context, isVerboseErrorsEnabled, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const theOptions = Object.assign(Object.assign({}, DEFAULT_SOURCE_OPTIONS), options);
        context.variant = utils_1.determineVariant(context, options);
        validator_1.validateAndAnnotate(program, context);
        if (context.errors.length > 0) {
            return utils_1.resolvedErrorPromise;
        }
        if (context.variant === types_1.Variant.CONCURRENT) {
            return runConcurrent(program, context, theOptions);
        }
        if (theOptions.useSubst) {
            return runSubstitution(program, context, theOptions);
        }
        _1.determineExecutionMethod(theOptions, context, program, isVerboseErrorsEnabled);
        if (context.executionMethod === 'native' && context.variant === types_1.Variant.NATIVE) {
            return yield fullJSRunner_1.fullJSRunner(program, context, theOptions);
        }
        // All runners after this point evaluate the prelude.
        if (context.prelude !== null) {
            context.unTypecheckedCode.push(context.prelude);
            const prelude = parser_1.parse(context.prelude, context);
            if (prelude === null) {
                return utils_1.resolvedErrorPromise;
            }
            context.prelude = null;
            yield sourceRunner(prelude, context, isVerboseErrorsEnabled, Object.assign(Object.assign({}, options), { isPrelude: true }));
            return sourceRunner(program, context, isVerboseErrorsEnabled, options);
        }
        if (context.variant === types_1.Variant.EXPLICIT_CONTROL) {
            return runECEvaluator(program, context, theOptions);
        }
        if (context.executionMethod === 'ec-evaluator') {
            if (options.isPrelude) {
                return runECEvaluator(program, Object.assign(Object.assign({}, context), { runtime: Object.assign(Object.assign({}, context.runtime), { debuggerOn: false }) }), theOptions);
            }
            return runECEvaluator(program, context, theOptions);
        }
        if (context.executionMethod === 'native') {
            return runNative(program, context, theOptions);
        }
        return runInterpreter(program, context, theOptions);
    });
}
exports.sourceRunner = sourceRunner;
function sourceFilesRunner(files, entrypointFilePath, context, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const entrypointCode = files[entrypointFilePath];
        if (entrypointCode === undefined) {
            context.errors.push(new localImportErrors_1.CannotFindModuleError(entrypointFilePath));
            return utils_1.resolvedErrorPromise;
        }
        const isVerboseErrorsEnabled = _1.hasVerboseErrors(entrypointCode);
        context.variant = utils_1.determineVariant(context, options);
        // FIXME: The type checker does not support the typing of multiple files, so
        //        we only push the code in the entrypoint file. Ideally, all files
        //        involved in the program evaluation should be type-checked. Either way,
        //        the type checker is currently not used at all so this is not very
        //        urgent.
        context.unTypecheckedCode.push(entrypointCode);
        const currentCode = {
            files,
            entrypointFilePath
        };
        context.shouldIncreaseEvaluationTimeout = _.isEqual(previousCode, currentCode);
        previousCode = currentCode;
        const preprocessedProgram = preprocessor_1.default(files, entrypointFilePath, context);
        if (!preprocessedProgram) {
            return utils_1.resolvedErrorPromise;
        }
        context.previousPrograms.unshift(preprocessedProgram);
        return sourceRunner(preprocessedProgram, context, isVerboseErrorsEnabled, options);
    });
}
exports.sourceFilesRunner = sourceFilesRunner;
//# sourceMappingURL=sourceRunner.js.map