"use strict";
// Variable determining chapter of Source is contained in this file.
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const gpu_lib = require("./gpu/lib");
const schedulers_1 = require("./schedulers");
const lazyList_prelude_1 = require("./stdlib/lazyList.prelude");
const list = require("./stdlib/list");
const list_1 = require("./stdlib/list");
const list_prelude_1 = require("./stdlib/list.prelude");
const localImport_prelude_1 = require("./stdlib/localImport.prelude");
const misc = require("./stdlib/misc");
const non_det_prelude_1 = require("./stdlib/non-det.prelude");
const parser = require("./stdlib/parser");
const stream = require("./stdlib/stream");
const stream_prelude_1 = require("./stdlib/stream.prelude");
const utils_1 = require("./typeChecker/utils");
const types_1 = require("./types");
const makeWrapper_1 = require("./utils/makeWrapper");
const operators = require("./utils/operators");
const stringify_1 = require("./utils/stringify");
class LazyBuiltIn {
    constructor(func, evaluateArgs) {
        this.func = func;
        this.evaluateArgs = evaluateArgs;
    }
}
exports.LazyBuiltIn = LazyBuiltIn;
class EnvTree {
    constructor() {
        this._root = null;
        this.map = new Map();
    }
    get root() {
        return this._root;
    }
    insert(environment) {
        const tailEnvironment = environment.tail;
        if (tailEnvironment === null) {
            if (this._root === null) {
                this._root = new EnvTreeNode(environment, null);
                this.map.set(environment, this._root);
            }
        }
        else {
            const parentNode = this.map.get(tailEnvironment);
            if (parentNode) {
                const childNode = new EnvTreeNode(environment, parentNode);
                parentNode.addChild(childNode);
                this.map.set(environment, childNode);
            }
        }
    }
    getTreeNode(environment) {
        return this.map.get(environment);
    }
}
exports.EnvTree = EnvTree;
class EnvTreeNode {
    constructor(environment, parent) {
        this.environment = environment;
        this.parent = parent;
        this._children = [];
    }
    get children() {
        return this._children;
    }
    resetChildren(newChildren) {
        this.clearChildren();
        this.addChildren(newChildren);
        newChildren.forEach(c => (c.parent = this));
    }
    clearChildren() {
        this._children = [];
    }
    addChildren(newChildren) {
        this._children.push(...newChildren);
    }
    addChild(newChild) {
        this._children.push(newChild);
        return newChild;
    }
}
exports.EnvTreeNode = EnvTreeNode;
const createEmptyRuntime = () => ({
    break: false,
    debuggerOn: true,
    isRunning: false,
    environmentTree: new EnvTree(),
    environments: [],
    value: undefined,
    nodes: []
});
const createEmptyDebugger = () => ({
    observers: { callbacks: Array() },
    status: false,
    state: {
        it: (function* () {
            return;
        })(),
        scheduler: new schedulers_1.AsyncScheduler()
    }
});
exports.createGlobalEnvironment = () => ({
    tail: null,
    name: 'global',
    head: {},
    id: '-1'
});
const createNativeStorage = () => ({
    builtins: new Map(),
    previousProgramsIdentifiers: new Set(),
    operators: new Map(Object.entries(operators)),
    gpu: new Map(Object.entries(gpu_lib)),
    maxExecTime: constants_1.JSSLANG_PROPERTIES.maxExecTime,
    evaller: null
});
exports.createEmptyContext = (chapter, variant = types_1.Variant.DEFAULT, externalSymbols, externalContext) => {
    return {
        chapter,
        externalSymbols,
        errors: [],
        externalContext,
        runtime: createEmptyRuntime(),
        numberOfOuterEnvironments: 1,
        prelude: null,
        debugger: createEmptyDebugger(),
        nativeStorage: createNativeStorage(),
        executionMethod: 'auto',
        variant,
        moduleContexts: {},
        unTypecheckedCode: [],
        typeEnvironment: utils_1.createTypeEnvironment(chapter),
        previousPrograms: [],
        shouldIncreaseEvaluationTimeout: false
    };
};
exports.ensureGlobalEnvironmentExist = (context) => {
    if (!context.runtime) {
        context.runtime = createEmptyRuntime();
    }
    if (!context.runtime.environments) {
        context.runtime.environments = [];
    }
    if (!context.runtime.environmentTree) {
        context.runtime.environmentTree = new EnvTree();
    }
    if (context.runtime.environments.length === 0) {
        const globalEnvironment = exports.createGlobalEnvironment();
        context.runtime.environments.push(globalEnvironment);
        context.runtime.environmentTree.insert(globalEnvironment);
    }
};
exports.defineSymbol = (context, name, value) => {
    const globalEnvironment = context.runtime.environments[0];
    Object.defineProperty(globalEnvironment.head, name, {
        value,
        writable: false,
        enumerable: true
    });
    context.nativeStorage.builtins.set(name, value);
    const typeEnv = context.typeEnvironment[0];
    // if the global type env doesn't already have the imported symbol,
    // we set it to a type var T that can typecheck with anything.
    if (!typeEnv.declKindMap.has(name)) {
        typeEnv.typeMap.set(name, utils_1.tForAll(utils_1.tVar('T1')));
        typeEnv.declKindMap.set(name, 'const');
    }
};
// Defines a builtin in the given context
// If the builtin is a function, wrap it such that its toString hides the implementation
function defineBuiltin(context, name, value, minArgsNeeded = undefined) {
    if (typeof value === 'function') {
        const funName = name.split('(')[0].trim();
        const repr = `function ${name} {\n\t[implementation hidden]\n}`;
        value.toString = () => repr;
        value.minArgsNeeded = minArgsNeeded;
        exports.defineSymbol(context, funName, value);
    }
    else if (value instanceof LazyBuiltIn) {
        const wrapped = (...args) => value.func(...args);
        const funName = name.split('(')[0].trim();
        const repr = `function ${name} {\n\t[implementation hidden]\n}`;
        wrapped.toString = () => repr;
        makeWrapper_1.makeWrapper(value.func, wrapped);
        exports.defineSymbol(context, funName, new LazyBuiltIn(wrapped, value.evaluateArgs));
    }
    else {
        exports.defineSymbol(context, name, value);
    }
}
exports.defineBuiltin = defineBuiltin;
exports.importExternalSymbols = (context, externalSymbols) => {
    exports.ensureGlobalEnvironmentExist(context);
    externalSymbols.forEach(symbol => {
        exports.defineSymbol(context, symbol, constants_1.GLOBAL[symbol]);
    });
};
/**
 * Imports builtins from standard and external libraries.
 */
exports.importBuiltins = (context, externalBuiltIns) => {
    exports.ensureGlobalEnvironmentExist(context);
    const rawDisplay = (v, ...s) => externalBuiltIns.rawDisplay(v, s[0], context.externalContext);
    const display = (v, ...s) => {
        if (s.length === 1 && s[0] !== undefined && typeof s[0] !== 'string') {
            throw new TypeError('display expects the second argument to be a string');
        }
        return rawDisplay(stringify_1.stringify(v), s[0]), v;
    };
    const displayList = (v, ...s) => {
        if (s.length === 1 && s[0] !== undefined && typeof s[0] !== 'string') {
            throw new TypeError('display_list expects the second argument to be a string');
        }
        return list.rawDisplayList(display, v, s[0]);
    };
    const prompt = (v) => {
        const start = Date.now();
        const promptResult = externalBuiltIns.prompt(v, '', context.externalContext);
        context.nativeStorage.maxExecTime += Date.now() - start;
        return promptResult;
    };
    const alert = (v) => {
        const start = Date.now();
        externalBuiltIns.alert(v, '', context.externalContext);
        context.nativeStorage.maxExecTime += Date.now() - start;
    };
    const visualiseList = (...v) => {
        externalBuiltIns.visualiseList(v, context.externalContext);
        return v[0];
    };
    if (context.chapter >= 1) {
        defineBuiltin(context, 'get_time()', misc.get_time);
        defineBuiltin(context, 'display(val, prepend = undefined)', display, 1);
        defineBuiltin(context, 'raw_display(str, prepend = undefined)', rawDisplay, 1);
        defineBuiltin(context, 'stringify(val, indent = 2, maxLineLength = 80)', stringify_1.stringify, 1);
        defineBuiltin(context, 'error(str, prepend = undefined)', misc.error_message, 1);
        defineBuiltin(context, 'prompt(str)', prompt);
        defineBuiltin(context, 'is_number(val)', misc.is_number);
        defineBuiltin(context, 'is_string(val)', misc.is_string);
        defineBuiltin(context, 'is_function(val)', misc.is_function);
        defineBuiltin(context, 'is_boolean(val)', misc.is_boolean);
        defineBuiltin(context, 'is_undefined(val)', misc.is_undefined);
        defineBuiltin(context, 'parse_int(str, radix)', misc.parse_int);
        defineBuiltin(context, 'char_at(str, index)', misc.char_at);
        defineBuiltin(context, 'arity(f)', misc.arity);
        defineBuiltin(context, 'undefined', undefined);
        defineBuiltin(context, 'NaN', NaN);
        defineBuiltin(context, 'Infinity', Infinity);
        // Define all Math libraries
        const mathLibraryNames = Object.getOwnPropertyNames(Math);
        // Short param names for stringified version of math functions
        const parameterNames = [...'abcdefghijklmnopqrstuvwxyz'];
        for (const name of mathLibraryNames) {
            const value = Math[name];
            if (typeof value === 'function') {
                let paramString;
                let minArgsNeeded = undefined;
                if (name === 'max' || name === 'min') {
                    paramString = '...values';
                    minArgsNeeded = 0;
                }
                else {
                    paramString = parameterNames.slice(0, value.length).join(', ');
                }
                defineBuiltin(context, `math_${name}(${paramString})`, value, minArgsNeeded);
            }
            else {
                defineBuiltin(context, `math_${name}`, value);
            }
        }
    }
    if (context.chapter >= 2) {
        // List library
        if (context.variant === types_1.Variant.LAZY) {
            defineBuiltin(context, 'pair(left, right)', new LazyBuiltIn(list.pair, false));
            defineBuiltin(context, 'list(...values)', new LazyBuiltIn(list.list, false), 0);
            defineBuiltin(context, 'is_pair(val)', new LazyBuiltIn(list.is_pair, true));
            defineBuiltin(context, 'head(xs)', new LazyBuiltIn(list.head, true));
            defineBuiltin(context, 'tail(xs)', new LazyBuiltIn(list.tail, true));
            defineBuiltin(context, 'is_null(val)', new LazyBuiltIn(list.is_null, true));
            defineBuiltin(context, 'draw_data(...xs)', new LazyBuiltIn(visualiseList, true), 1);
            defineBuiltin(context, 'is_list(val)', new LazyBuiltIn(list.is_list, true));
        }
        else {
            defineBuiltin(context, 'pair(left, right)', list.pair);
            defineBuiltin(context, 'is_pair(val)', list.is_pair);
            defineBuiltin(context, 'head(xs)', list.head);
            defineBuiltin(context, 'tail(xs)', list.tail);
            defineBuiltin(context, 'is_null(val)', list.is_null);
            defineBuiltin(context, 'list(...values)', list.list, 0);
            defineBuiltin(context, 'draw_data(...xs)', visualiseList, 1);
            defineBuiltin(context, 'display_list(val, prepend = undefined)', displayList, 0);
            defineBuiltin(context, 'is_list(val)', list.is_list);
        }
    }
    if (context.chapter >= 3) {
        defineBuiltin(context, 'set_head(xs, val)', list.set_head);
        defineBuiltin(context, 'set_tail(xs, val)', list.set_tail);
        defineBuiltin(context, 'array_length(arr)', misc.array_length);
        defineBuiltin(context, 'is_array(val)', misc.is_array);
        // Stream library
        defineBuiltin(context, 'stream_tail(stream)', stream.stream_tail);
        defineBuiltin(context, 'stream(...values)', stream.stream, 0);
    }
    if (context.chapter >= 4) {
        defineBuiltin(context, 'parse(program_string)', (str) => parser.parse(str, createContext(context.chapter)));
        defineBuiltin(context, 'tokenize(program_string)', (str) => parser.tokenize(str, createContext(context.chapter)));
        defineBuiltin(context, 'apply_in_underlying_javascript(fun, args)', 
        // tslint:disable-next-line:ban-types
        (fun, args) => fun.apply(fun, list_1.list_to_vector(args)));
        if (context.variant === types_1.Variant.GPU) {
            defineBuiltin(context, '__clearKernelCache()', gpu_lib.__clearKernelCache);
            defineBuiltin(context, '__createKernelSource(shape, extern, localNames, output, fun, kernelId)', gpu_lib.__createKernelSource);
        }
    }
    if (context.chapter === types_1.Chapter.LIBRARY_PARSER) {
        defineBuiltin(context, 'is_object(val)', misc.is_object);
        defineBuiltin(context, 'is_NaN(val)', misc.is_NaN);
        defineBuiltin(context, 'has_own_property(obj, prop)', misc.has_own_property);
        defineBuiltin(context, 'alert(val)', alert);
        // tslint:disable-next-line:ban-types
        defineBuiltin(context, 'timed(fun)', (f) => misc.timed(context, f, context.externalContext, externalBuiltIns.rawDisplay));
    }
    if (context.variant === types_1.Variant.LAZY) {
        defineBuiltin(context, 'wrapLazyCallee(f)', new LazyBuiltIn(operators.wrapLazyCallee, true));
        defineBuiltin(context, 'makeLazyFunction(f)', new LazyBuiltIn(operators.makeLazyFunction, true));
        defineBuiltin(context, 'forceIt(val)', new LazyBuiltIn(operators.forceIt, true));
        defineBuiltin(context, 'delayIt(xs)', new LazyBuiltIn(operators.delayIt, true));
    }
};
function importPrelude(context) {
    let prelude = '';
    if (context.chapter >= 2) {
        prelude += context.variant === types_1.Variant.LAZY ? lazyList_prelude_1.lazyListPrelude : list_prelude_1.listPrelude;
        prelude += localImport_prelude_1.localImportPrelude;
    }
    if (context.chapter >= 3) {
        prelude += stream_prelude_1.streamPrelude;
    }
    if (context.variant === types_1.Variant.NON_DET) {
        prelude += non_det_prelude_1.nonDetPrelude;
    }
    if (prelude !== '') {
        context.prelude = prelude;
    }
}
const defaultBuiltIns = {
    rawDisplay: misc.rawDisplay,
    // See issue #5
    prompt: misc.rawDisplay,
    // See issue #11
    alert: misc.rawDisplay,
    visualiseList: (_v) => {
        throw new Error('List visualizer is not enabled');
    }
};
const createContext = (chapter = types_1.Chapter.SOURCE_1, variant = types_1.Variant.DEFAULT, externalSymbols = [], externalContext, externalBuiltIns = defaultBuiltIns) => {
    if (chapter === types_1.Chapter.FULL_JS || chapter === types_1.Chapter.FULL_TS) {
        // fullJS will include all builtins and preludes of source 4
        return Object.assign(Object.assign({}, createContext(types_1.Chapter.SOURCE_4, variant, externalSymbols, externalContext, externalBuiltIns)), { chapter });
    }
    const context = exports.createEmptyContext(chapter, variant, externalSymbols, externalContext);
    exports.importBuiltins(context, externalBuiltIns);
    importPrelude(context);
    exports.importExternalSymbols(context, externalSymbols);
    return context;
};
exports.default = createContext;
//# sourceMappingURL=createContext.js.map