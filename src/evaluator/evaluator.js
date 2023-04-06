// If you use Node.js and not https://sourceacademy.org,
// uncomment the following two lines:
Object.entries(require('sicp'))
    .forEach(([name, exported]) => global[name] = exported);

// import parsed code as tokens
var CodeTokens = require('../parser/antlr/antlr_tokens.json');
// import Parse from '../parser/antlr/antlr_parser.js';
/* ****************************************
 * Explicit-control evaluator for C
 * ****************************************/

/* *************
 * dictionary functions
 * *************/
const dict_has_key = (d, val) => {
    if (d.length === 0) {
        return false
    }
    return d[val] != undefined ? true : false
}

const dict_get = (d, val) => {
    return dict_has_key(d, val) ? d[val] : error(d, "No value in ")
}

const dict_set = (d, key, input) => {
    d[key] = input;
}

/* *************
 * parse to JSON
 * *************/

function printNestedArray(arr) {
    process.stdout.write("[");
    arr.forEach((el, index) => {
        if (Array.isArray(el)) {
            printNestedArray(el);
        } else {
            process.stdout.write(JSON.stringify(el));
        }
        if (index !== arr.length - 1) {
            process.stdout.write(", ");
        }
    });
    process.stdout.write("]");
}

const list_to_array = xs =>
    is_null(xs)
        ? []
        : [head(xs)].concat(list_to_array(tail(xs)))

const make_param_obj = xs => {
    if (head(xs) != 'name') {
        return ast_to_json(xs)
    }

    // for func dec
    return {sym: head(tail(xs)), type: head(tail(tail(xs)))}
}

// simplify parameter format
const parameters = (rtn, xs) => {
    if (is_null(xs) || xs.length == 0) {
        return rtn
    }
    let obj = make_param_obj(head(xs))
    rtn.push(obj)
    if (is_null(tail(xs))) {
        return rtn
    }
    return parameters(rtn, tail(xs))
}

// turn tagged list syntax from parse into JSON object
const ast_to_json = (t) => {
    // printNestedArray(t)
    // console.log()
    // console.log()
    switch (head(t)) {
        case "literal":
            return { tag: "lit", val: head(tail(t)) }
        case "name": {
            let type = tail(tail(t))
            if (!is_null(type)) {
                type = head(type)
            }
            return { tag: "nam", sym: head(tail(t)), type: type }
        }
        case "application":
            return {
                tag: "app",
                fun: ast_to_json(head(tail(t))),
                args: parameters([], head(tail(tail(t))))
                    .reverse()  // microcode for app expects arg
                                // expressions in reverse order
            }
        case "logical_composition":
            return {
                tag: "log",
                sym: head(tail(t)),
                frst: ast_to_json(head(tail(tail(t)))),
                scnd: ast_to_json(head(tail(tail(tail(t)))))
            }
        case "binary_operator_combination":
            return {
                tag: "binop",
                sym: head(tail(t)),
                frst: ast_to_json(head(tail(tail(t)))),
                scnd: ast_to_json(head(tail(tail(tail(t)))))
            }
        case "object_access": {
            if (is_pair(tail(tail(t))) &&
                head(head(tail(tail(t)))) === "property" &&
                head(tail(head(tail(tail(t))))) === "length") {
                return {
                    tag: "arr_len",
                    expr: ast_to_json(head(tail(t)))
                }
            } else {
                let obj = {
                    tag: "arr_acc",
                    arr: ast_to_json(head(tail(t))),
                    ind: ast_to_json(head(tail(tail(t))))
                }
                return obj
            }
        }
        case "object_access":
            return {
                tag: "arr_acc",
                arr: ast_to_json(head(tail(t))),
                ind: ast_to_json(head(tail(tail(t)))),
            }
        case "object_assignment":
            return {
                tag: "arr_assmt",
                arr: ast_to_json(head(tail(head(tail(t))))),
                ind: ast_to_json(head(tail(tail(head(tail(t)))))),
                expr: ast_to_json(head(tail(tail(t))))
            }
        case "array_expression": {
            let size = head(tail(tail(t)))
            let items = head(tail(t))
            let is_empty_items = true;

            if (!is_null(size)) {
                size = head(tail(size))
            }

            // if there are items, add as elem
            // else, init empty obj and allocate to elems  
            if (!is_null(items)) {
                is_empty_items = false
                items = parameters([], head(tail(t)))
            } else {
                items = new Array(size)
            }

            // if there are items && size declared, check if they tally
            if (!is_null(size) && !is_empty_items) {
                if (items.length != size) {
                    error("array does not match declared size")
                }
            }

            return {
                tag: "arr_lit",
                elems: items
            }
            
        }
            
        case "unary_operator_combination":
            return {
                tag: "unop",
                sym: head(tail(t)),
                frst: ast_to_json(head(tail(tail(t))))
            }
        case "lambda_expression":
            return {
                tag: "lam",
                prms: head(tail(t)),
                prms: parameters([], head(tail(t))),
                body: ast_to_json(head(tail(tail(t))))
            }
        case "sequence": {
            return {
                tag: "seq",
                stmts: list_to_array(map(ast_to_json, head(tail(t))))
            }
        }
            
        case "block":
            return {
                tag: "blk",
                body: ast_to_json(head(tail(t)))
            }
        case "variable_declaration":
            let exp = head(tail(tail(t)))

            // handle cases like int a;
            if (!is_null(exp)) {
                exp = ast_to_json(head(tail(tail(t))))
            } 
            return {
                tag: "let",
                sym: head(tail(head(tail(t)))),
                type: head(tail(tail(head(tail(t))))),
                expr: exp
            }
        case "constant_declaration":
            return {
                tag: "const",
                sym: head(tail(head(tail(t)))),
                expr: ast_to_json(head(tail(tail(t))))
            }
        case "assignment": {
            // TO REPLACE   
            sym = head(tail(head(tail(t))))
            if (head(sym) === "name") {
                sym = ast_to_json(sym)
                sym = sym.sym
            }
            return {
                tag: "assmt",
                sym: sym,
                expr: ast_to_json(head(tail(tail(t))))
            }}
        case "conditional_statement":
            return {
                tag: "cond_stmt",
                pred: ast_to_json(head(tail(t))),
                cons: ast_to_json(head(tail(tail(t)))),
                alt: ast_to_json(head(tail(tail(tail(t)))))
            }
        case "while_loop":
            return {
                tag: "while",
                pred: ast_to_json(head(tail(t))),
                body: ast_to_json(head(tail(tail(t))))
            }
        case "break_statement":
            return { tag: "break" }
        case "continue_statement":
            return { tag: "cont" }
        case "conditional_expression":
            return {
                tag: "cond_expr",
                pred: ast_to_json(head(tail(t))),
                cons: ast_to_json(head(tail(tail(t)))),
                alt: ast_to_json(head(tail(tail(tail(t)))))
            }
        case "function_declaration":
            return {
                tag: "fun",
                sym: head(tail(head(tail(t)))),
                type: head(tail(tail(head(tail(t))))),
                // prms: head(tail(tail(t))),
                prms: parameters([], head(tail(tail(t)))),
                body: ast_to_json(head(tail(tail(tail(t)))))
            }
        case "return_statement":
            return {
                tag: "ret",
                expr: ast_to_json(head(tail(t)))
            }
        case "try_statement":
            return {
                tag: "try",
                body: ast_to_json(head(tail(t))),
                sym: head(tail(head(tail(tail(t))))),
                catch: ast_to_json(head(tail(tail(tail(t)))))
            }
        case "throw_statement":
            return {
                tag: "throw",
                expr: ast_to_json(head(tail(t)))
            }
        default:
            error(t, "unknown syntax:")
    }
}

// parse, turn into json (using ast_to_json), 
// and wrap in a block
const parse_to_json = tokens =>
    ({tag: "blk",
        body: ast_to_json(tokens)});


/* *************************
 * values of the interpreter
 * *************************/

// for numbers, strings, booleans, undefined, null
// we use the value directly

// closures aka function values
const is_closure = x =>
    x !== null &&
    typeof x === "object" &&
    x.tag === 'closure'

const is_builtin = x =>
    x !== null &&
    typeof x === "object" &&
    x.tag == 'builtin'

// catching closure and builtins to get short displays
const value_to_string = x =>
    is_closure(x)
        ? '<closure>'
        : is_builtin(x)
            ? '<builtin: ' + x.sym + '>'
            : stringify(x)

/* **********************
 * operators and builtins
 * **********************/
function is_int(n){
    return Number(n) === n && n % 1 === 0;
}

function is_double(n){
    return Number(n) === n && n % 1 !== 0;
}

const get_type = (x) => {
    return x.tag === "lit"  
            ? get_type(x.val)
            : typeof(x) === "string"
            ? "string"
            : is_int(x) 
            ? "int"
            : is_double(x)
            ? "double"
            : x.type != undefined
            ? x.type
            : "undefined"
}

const get_info = key => {
    let curr = peek(LS)
    console.log("curr: ",curr)
    if (dict_has_key(curr, key)) {
        let rtn = dict_get(curr, key)
        return rtn
    }
    
    if (dict_has_key(SM, key)) {
        return dict_get(SM, key)
    } 
    return null;
}

const type_check = (x, y) => {
    if (typeof(x) === typeof(y)) {
        // string or number
        if (typeof(x) === "number") {
            // check if it is double or int
            if ((is_double(x) && is_double(y)) || (is_int(x) && is_int(y))) {
                return
            } 
        } else if (typeof(x) === "string") {
            return
        }
    } else {
        let info_x = get_info(x)
        let info_y = get_info(y)
        console.log("info x: ", info_x)
        console.log("info y: ", info_y)

        if (is_null(info_x)) {
            info_x = x
            console.log("x is: ", x)
        }

        if (is_null(info_y)) {
            info_y = y
            console.log("y is: ", y)
        }

        if (info_y.tag === "arr_lit") {
            let lst = info_y.elems
            for (var i in lst) {
                if (info_x.type != get_type(lst[i].val) ) {
                    error("array obj declared is of different type")
                }
            }
            return
        }
        console.log("type is: ", (info_y) )
        if (info_x.type === get_type(info_y)) {
            return
        } 
    }
    error("type mismatch")
}



const binop_microcode = {
    '+': (x, y)   => (is_number(x) && is_number(y)) ||
                     (is_string(x) && is_string(y))
                     ? x + y 
                     : error([x,y], "+ expects two numbers" + 
                                    " or two strings, got:"),
    // todo: add error handling to JS for the following, too
    '*':   (x, y) => x * y,
    '-':   (x, y) => x - y,
    '/':   (x, y) => x / y,
    '%':   (x, y) => x % y,
    '<':   (x, y) => x < y,
    '<=':  (x, y) => x <= y,
    '>=':  (x, y) => x >= y,
    '>':   (x, y) => x > y,
    '===': (x, y) => x === y,
    '!==': (x, y) => x !== y
}

// v2 is popped before v1
const apply_binop = (op, v2, v1) => {
    type_check(v1, v2)
    console.log(typeof(v1))
    return binop_microcode[op](v1, v2)
}

const unop_microcode = {
    '-unary': x => - x,
    '!'     : x => is_boolean(x)
        ? ! x
        : error(x, '! expects boolean, found:')
}

const apply_unop = (op, v) => unop_microcode[op](v)

const builtin_mapping = {
    display       : display,
    get_time      : get_time,
    stringify     : stringify,
    error         : error,
    prompt        : prompt,
    is_number     : is_number,
    is_string     : is_string,
    is_function   : x => typeof x === 'object' &&
        (x.tag == 'builtin' ||
            x.tag == 'closure'),
    is_boolean    : is_boolean,
    is_undefined  : is_undefined,
    parse_int     : parse_int,
    char_at       : char_at,
    arity         : x => typeof x === 'object'
        ? x.arity
        : error(x, 'arity expects function, received:'),
    math_abs      : math_abs,
    math_acos     : math_acos,
    math_acosh    : math_acosh,
    math_asin     : math_asin,
    math_asinh    : math_asinh,
    math_atan     : math_atan,
    math_atanh    : math_atanh,
    math_atan2    : math_atan2,
    math_ceil     : math_ceil,
    math_cbrt     : math_cbrt,
    math_expm1    : math_expm1,
    math_clz32    : math_clz32,
    math_cos      : math_cos,
    math_cosh     : math_cosh,
    math_exp      : math_exp,
    math_floor    : math_floor,
    math_fround   : math_fround,
    math_hypot    : math_hypot,
    math_imul     : math_imul,
    math_log      : math_log,
    math_log1p    : math_log1p,
    math_log2     : math_log2,
    math_log10    : math_log10,
    math_max      : math_max,
    math_min      : math_min,
    math_pow      : math_pow,
    math_random   : math_random,
    math_round    : math_round,
    math_sign     : math_sign,
    math_sin      : math_sin,
    math_sinh     : math_sinh,
    math_sqrt     : math_sqrt,
    math_tanh     : math_tanh,
    math_trunc    : math_trunc,
    pair          : pair,
    is_pair       : is_pair,
    head          : head,
    tail          : tail,
    is_null       : is_null,
    set_head      : set_head,
    set_tail      : set_tail,
    array_length  : array_length,
    is_array      : is_array,
    list          : list,
    is_list       : is_list,
    display_list  : display_list,
    // from list libarary
    equal         : equal,
    length        : length,
    list_to_string: list_to_string,
    reverse       : reverse,
    append        : append,
    member        : member,
    remove        : remove,
    remove_all    : remove_all,
    enum_list     : enum_list,
    list_ref      : list_ref,
    // misc
    draw_data     : draw_data,
    parse         : parse,
    tokenize      : tokenize,
    apply_in_underlying_javascript: apply_in_underlying_javascript
}

const apply_builtin = (builtin_symbol, args) =>
    builtin_mapping[builtin_symbol](...args)

/* ************
 * environments
 * ************/

// Frames are objects that map symbols (strings) to values.

const global_frame = {}

// fill global frame with built-in objects
for (const key in builtin_mapping)
    global_frame[key] = { tag:   'builtin',
        sym:   key,
        arity: arity(builtin_mapping[key])
    }
// fill global frame with built-in constants
global_frame.undefined    = undefined
global_frame.math_E       = math_E
global_frame.math_LN10    = math_LN10
global_frame.math_LN2     = math_LN2
global_frame.math_LOG10E  = math_LOG10E
global_frame.math_LOG2E   = math_LOG2E
global_frame.math_PI      = math_PI
global_frame.math_SQRT1_2 = math_SQRT1_2
global_frame.math_SQRT2   = math_SQRT2

// An environment is null or a pair whose head is a frame 
// and whose tail is an environment.
const empty_environment = null
const global_environment = pair(global_frame, empty_environment)

const is_literal = x => {
    return (x.type === "int" || x.type === "double" || x.type === "char") ? true : false
}

const lookup = (key) => {
    LS.reverse()
    // search in all local and parent frames
    for (var i in LS) {
        let curr = LS[i]
        if (dict_has_key(curr, key)) {
            LS.reverse()
            let obj = dict_get(curr, key)
            if (is_literal(obj)) {
                return obj.val
            }
            console.log("obj is: ", obj)
            return obj
        }
    }
    LS.reverse()

    // search in static memory
    if (dict_has_key(SM, key)) {
        console.log("returning: ", dict_get(SM, key))
        return dict_get(SM, key)
    } else {
        error(x, 'unbound name:')
    }
}

const assign = (x, v) => {
    if (LS.length > 0) {
        let curr = LS.pop()

        // search in local frame
        if (dict_has_key(curr, x)) {
            if (v.tag === "closure") {
                let type = dict_get(curr, x).type
                v.type = type
                dict_set(curr, x, v)
                push(LS, curr)
                return
            } else if (v.tag === undefined) {
                if (v.type === undefined) {
                    let type = dict_get(curr, x).type
                    let obj = {val: v, type: type}
                    dict_set(curr, x, obj)
                    push(LS, curr)
                    return
                } else {
                    dict_set(curr, x, v)
                    push(LS, curr)
                    return 
                }
            } else if (v.tag === "arr_lit") {
                let obj = {val: v, type: dict_get(curr, x).type}
                dict_set(curr, x, obj)
                push(LS, curr)
                // console.log("LS is: ", LS)
                return
            
            }  else if (v.tag === "lit") { // assigning aft array retrieval
                push(LS, curr)
                assign(x, v.val)
                return
            } else {
                console.log("x is: ", x)
                console.log("v is: ", v)
                console.log("??????????????????????????")
            }
        }
        push(LS, curr)
    }
    
    // search in static memory
    if (dict_has_key(SM, x)) {
        console.log("assigning i ", v)
        if (v.tag === "closure") {
            let type = dict_get(SM, x).type
            v.type = type
            dict_set(SM, x, v)
            return
        } else if (v.tag === undefined) {
            if (v.type === undefined) { // literal assignments, to preserve type
                let type = dict_get(SM, x).type
                let obj = {val: v, type: type}
                dict_set(SM, x, obj)
                return
            } else {
                dict_set(SM, x, v)
                return 
            }
        } else {
            console.log("??????????????????????????")
        }
    } else {
        error(x, 'unbound name:')
    }
}

const extend = (xs, vs) => {
    console.log("extending params")
    // console.log(xs)
    // console.log(vs)
    if (vs.length > xs.length) error('too many arguments')
    if (vs.length < xs.length) error('too few arguments')
    const new_frame = {}
    for (let i = 0; i < xs.length; i++) {
        if (xs[i].type != get_type(vs[i])) {
            error("type mismatch for parameters!")
        }
        const obj = {val: vs[i], type: xs[i].type}
        dict_set(new_frame, xs[i].sym, obj)
    }
    push(LS, new_frame)
}

// At the start of executing a block, local 
// variables refer to unassigned values.
const unassigned = { tag: 'unassigned' }

const is_unassigned = v => {
    return v !== null &&
        typeof v === "object" &&
        v.hasOwnProperty('tag') &&
        v.tag === 'unassigned'
}

/* ******************
 * handling sequences
 * ******************/

// Every sequence pushes a single value on stash.
// Empty sequences push undefined.
// Commands from non-empty sequences are separated 
// by pop_i instructions so that only the result
// result of the last statement remains on stash.
const handle_sequence = seq => {
    if (seq.length === 0)
        return [{tag: "lit", undefined}]
    let result = []
    let first = true
    for (let cmd of seq) {
        first ? first = false
            : result.push({tag: 'pop_i'})
        result.push(cmd)
    }
    
    return result.reverse()
}

/* ***************
 * handling blocks
 * ***************/
const remove_declarations = (val_arr, removal_indexes) => {
    for (var i = removal_indexes.length -1; i >= 0; i--)
        val_arr.splice(removal_indexes[i],1);
}

// scanning out the declarations from (possibly nested)
// sequences of statements, ignoring blocks
const scan = comp => {
    let sf = {}; 
    if (LS.length > 0) {
        sf = LS.pop()
    }
    let dec_arr = []
    if (comp.tag === 'seq') {
        let stmts = comp.stmts
        for (var i in stmts) {
            if (stmts[i].tag === 'let' || stmts[i].tag === 'fun') {
                if (dict_has_key(sf, stmts[i].sym)) {
                    error("Multi declaration of same name not allowed.")
                }
                dict_set(sf, stmts[i].sym, {val: undefined, type: stmts[i].type})
                if (is_null(stmts[i].expr)) { // remove variable declaration
                    dec_arr.push(i)
                }
            }
        }
        remove_declarations(comp.stmts, dec_arr)
    } else if (comp.tag === 'let' || comp.tag === 'fun') {
        console.log("AAAAAAAAAAAAAAAAAAAAAAA")
        dict_set(sf, comp.sym, {})
        if (is_null(stmts[i].expr)) { // remove variable declaration
            dec_arr.push(i)
        }
        comp.stmts = remove_declarations(comp.stmts, dec_arr)
    }
    LS.push(sf)
}

/* **********************
 * using arrays as stacks
 * **********************/

// add values destructively to the end of 
// given array; return the array
const push = (array, ...items) => {
    array.splice(array.length, 0, ...items)
    return array
}

// return the last element of given array
// without changing the array
const peek = array =>
    array.slice(-1)[0]

/* **************************
 * interpreter configurations
 * **************************/

// An interpreter configuration has three parts:
// A: agenda: stack of commands
// S: stash: stack of values
// E: environment: list of frames

// local stack LS
// stores all local variables of the current function run
let LS

// stash S 

// stash S is array of values that stores intermediate 
// results. The stash follows strict stack discipline:
// pop, push, peek at the end of the array.

// Execution initializes stash S as an empty array.
let S

// Run time stack RTS

// stash S is array of values that stores instructions
// of main function.

// Execution initializes stash S as an empty array.

let RTS

// Static memory SM
// Stores all global variables / external declarations

// initialised as an empty dictionary
let SM

/* *********************
 * interpreter microcode
 * *********************/

// The interpreter dispaches for each command tag to the 
// microcode that belong to the tag.

// microcode.cmd_tag is the microcode for the command,
// a function that takes a command as argument and 
// changes the configuration according to the meaning of
// the command. The return value is not used.

let A // dummy init

const microcode = {
//
// expressions
//
    lit:
        cmd =>
            push(S, cmd.val),
    nam:
        cmd =>
            push(S, lookup(cmd.sym)),
    unop:
        cmd =>
            push(RTS, {tag: 'unop_i', sym: cmd.sym}, cmd.frst),
    binop:
        cmd =>
            push(RTS, {tag: 'binop_i', sym: cmd.sym}, cmd.scnd, cmd.frst),
    log:
        cmd =>
            push(A, cmd.sym == '&&'
                ? {tag: 'cond_expr',
                    pred: cmd.frst,
                    cons: {tag: 'lit', val: true},
                    alt: cmd.scnd}
                : {tag: 'cond_expr',
                    pred: cmd.frst,
                    cons: cmd.scnd,
                    alt: {tag: 'lit', val: false}}),
    cond_expr:
        cmd =>
            push(A, {tag: 'branch_i', cons: cmd.cons, alt: cmd.alt}, cmd.pred),
    app:
        cmd =>
            push(RTS, {tag: 'app_i', arity: cmd.args.length},
                ...cmd.args, // already in reverse order, see ast_to_json
                cmd.fun),
    assmt:
        cmd =>
            push(RTS, {tag: 'assmt_i', sym: cmd.sym, type: cmd.type}, cmd.expr),
    lam:
        cmd =>
        {
            push(S, {tag: 'closure', prms: cmd.prms, body: cmd.body})

        },
    arr_acc:
        cmd =>
            push(RTS, {tag: 'arr_acc_i'}, cmd.ind, cmd.arr),
    arr_assmt:
        cmd =>
            push(RTS, {'tag': 'arr_assmt_i'}, cmd.expr, cmd.ind, cmd.arr),
    arr_len:
        cmd =>
            push(A, {tag: 'arr_len_i'}, cmd.expr),
    arr_lit:
        cmd =>
            push(S, {tag: cmd.tag, elems: cmd.elems}),

//
// statements
//
    seq:
        cmd => push(RTS, ...handle_sequence(cmd.stmts)),
    cond_stmt:
        cmd =>
            push(A, {tag: 'branch_i', cons: cmd.cons, alt: cmd.alt},
                cmd.pred),
    blk:
        cmd => {
            scan(cmd.body)
            RTS.push(cmd.body)

            // const unassigneds = locals.map(_ => unassigned)
            // below is to save prev env. since it is all on local stack, not needed
            // if (! (RTS.length === 0))
            //     push(RTS, {tag: 'loc_frame', env: E})
            // push(A, cmd.body)
            // E = extend(locals, unassigneds, E)
        },
    let:
        cmd =>
            push(RTS,
                {tag: 'pop_i'},
                {tag: 'assmt', sym: cmd.sym, expr: cmd.expr}),
    const:
        cmd =>
            push(RTS,
                {tag: 'pop_i'},
                {tag: 'assmt', sym: cmd.sym, type: cmd.type, expr: cmd.expr}),
    ret:
        cmd =>
            push(RTS, {tag: 'reset_i'}, cmd.expr),
    fun:
        cmd =>
            push(RTS, {tag:  'const',
                sym:  cmd.sym,
                type: cmd.type,
                expr: {tag: 'lam', prms: cmd.prms, body: cmd.body}}),
    while:
        cmd =>
            push(A, {tag: 'lit', val: undefined},
                {tag: 'while_i', pred: cmd.pred, body: cmd.body},
                cmd.pred),

//
// instructions
//
    reset_i:
        cmd =>{
            LS.pop()
            if (LS.length === 0) {
                let rtn_val = S.pop()
                let obj = dict_get(SM, "main")

                if (obj.type != get_type(rtn_val)) {
                    error("type mismatch with main")
                }
                obj.rtn = rtn_val
                dict_set(SM, "main", rtn_val)
            }

            // return to main
            
        },
            // RTS.pop().tag === 'mark_i'    // mark found?
            //     ? null                    // stop loop
            //     : push(A, cmd),           // continue loop by pushing same
                                          // reset_i instruction back on agenda
    assmt_i:
    // peek top of stash without popping:
    // the value remains on the stash
    // as the value of the assignment
        cmd => {
            let nxt = peek(S)
            if (nxt.tag == "closure" && dict_has_key(SM, "main")) {
                // run function
                S.pop()
                const arity = nxt.prms
                // push(RTS, {tag: 'assmt_i', sym: cmd.sym, type: cmd.type}, {tag: 'app', fun: {}})
                console.log(nxt)
                console.log("SM: ", SM)

                console.log("DONEEEEEE")
            } else {
                // if ()
                if (nxt.tag != "closure") {
                    // console.log("cmd is ", cmd)
                    // console.log("in assmt_i")
                    // console.log("cmd: ", cmd)
                    // console.log("nxt: ", nxt)
                    type_check(cmd.sym, nxt)
                }
            }

            assign(cmd.sym, peek(S)) // S may have changed due to closure

            
        },
    unop_i:
        cmd =>
            push(S, apply_unop(cmd.sym, S.pop())),
    binop_i:
        cmd =>
            push(S, apply_binop(cmd.sym, S.pop(), S.pop())),
    pop_i:
        _ =>
            S.pop(),
    app_i:
        cmd => {
            const arity = cmd.arity
            let args = []
            for (let i = arity - 1; i >= 0; i--)
                args[i] = S.pop()
            const sf = S.pop()
            if (sf.tag === 'builtin')
                return push(S, apply_builtin(sf.sym, args))
            // remaining case: sf.tag === 'closure'
            // closure:
            console.log("here")
            if (RTS.length === 0 /**|| peek(RTS).tag === 'env_i' **/) {
                // current E not needed:
                // just push mark, and not env_i
                // console.log("in a")
                // console.log(cmd)
                // error("done")
                // push(RTS, {tag: 'mark_i'})
            } else if (peek(RTS).tag === 'reset_i') {
                // tail call:
                // The callee's ret_i will push another reset_i
                // which will go to the correct mark.
                console.log("in b")
                // RTS.pop()
                // The current E is not needed, because
                // the following reset_i is the last body
                // instruction to be executed.
            } else {
                // general case:
                // push current environment
                console.log("in c")

                // push(RTS, {tag: 'env_i', env: E}, {tag: 'mark_i'})
            }
            push(RTS, sf.body)
            // console.log(LS)
            if (is_null(sf.prms)) {
                sf.prms = []
            }
            extend(sf.prms, args)
        },
    branch_i:
        cmd =>
            push(A, S.pop() ? cmd.cons : cmd.alt),
    while_i:
        cmd =>
            S.pop()
                ? push(A, cmd,             // push while_i itself back on agenda
                    cmd.pred,
                    {tag: 'pop_i'},  // pop body value
                    cmd.body)
                : null,
    env_i:
        cmd =>
            E = cmd.env,
    arr_acc_i:
        cmd => {
            const ind = S.pop()
            const arr_obj = S.pop()
            const arr = arr_obj.val.elems
            if (ind >= arr.length || ind < 0) {
                error("array access out of bounds")
            }
            push(S, arr[ind])
        },
    arr_assmt_i:
        cmd => {
            const val = S.pop()
            const ind = S.pop()
            const arr = S.pop()
            arr[ind] = val
            push(S, val)
        },
    arr_len_i:
        cmd => {
            const arr = S.pop()
            push(S, array_length(arr))
        },
    throw_i:
        cmd => {
            const next = A.pop()
            if (next.tag === 'catch_i') { // catch found?
                const catch_cmd = next  // stop loop
                push(A, {tag: 'env_i', env: catch_cmd.env},
                    catch_cmd.catch)
                E = extend([catch_cmd.sym],
                    [S.pop()],
                    catch_cmd.env)
            } else {          // continue loop by pushing same
                push(A, cmd)  // throw_i instruction back on agenda
            }
        }
}

/* ****************
 * interpreter loop
 * ****************/

const step_limit = 1000000

function init_global_dec(g_dec) {
    let sf = {}
    let dec_arr = []
    if (g_dec.body.tag === 'seq') {
        let stmts = g_dec.body.stmts
        for (var i in stmts) {
            if (stmts[i].tag === 'let' || stmts[i].tag === 'fun') {
                if (dict_has_key(sf, stmts[i].sym)) {
                    error("Multi declaration of same name not allowed.")
                }
                dict_set(sf, stmts[i].sym, {val: "unassigned", type: stmts[i].type})
                if (is_null(stmts[i].expr)) { // remove variable declaration
                    dec_arr.push(i)
                }
            }
        }
        remove_declarations(g_dec.stmts, dec_arr)
    } else if (g_dec.tag === 'let' || g_dec.tag === 'fun') {
        dict_set(sf, g_dec.sym, {val: "unassigned", type: stmts[i].type})
        if (is_null(stmts[i].expr)) { // remove variable declaration
            dec_arr.push(i)
        }
        remove_declarations(g_dec, dec_arr)
    }
    return sf
}

const process_global_dec = (decs) => {
    let i = 0
    RTS = [decs]
    LS = []
    while (i < step_limit) {
        if (RTS.length === 0) break
        const cmd = RTS.pop()
        if (microcode.hasOwnProperty(cmd.tag)) {
            microcode[cmd.tag](cmd)
            //debug(cmd)
            console.log("command is: ", cmd)
            console.log("LS is: ", LS)
            // display("", "RTS:")
            // for (let cmd of RTS)
            //     display('', command_to_string(cmd))
            
            console.log()
        } else {
            error("", "unknown command: " + 
                      command_to_string(cmd))
        }
        i++
    }
    if (i === step_limit) {
        error("step limit " + stringify(step_limit) + " exceeded")
    }
    return LS[0]
}

const execute = () => {
    SM = {}
    S = []
    RTS = []

    const declarations = parse_to_json(CodeTokens)
    SM = process_global_dec(declarations)
    LS = []

    // if no main func, error out
    if (!dict_has_key(SM, "main")) {
        error("main function not defined")
    }
    console.log("done with global")
    // console.log("RTS: ", RTS)
    // console.log("stack: ", S)
    // console.log("local stack: ", LS)
    // console.log("static mem: ", SM)

    const starting_pt = ["application", [["name", ["main", [dict_get(SM, "main").type, null]]], [dict_get(SM, "main").prms, null]]]

    RTS = [ast_to_json(starting_pt)]

    
    let i = 0
    while (i < step_limit) {
        if (RTS.length == 0) break
        const cmd = RTS.pop()
        console.log("executing command: ", cmd)
        console.log("stack: ", S)
        console.log("local stack: ", LS)
        
        // console.log("new local stack: ", LS)


        if (microcode.hasOwnProperty(cmd.tag)) {
            microcode[cmd.tag](cmd)
            //debug(cmd)
            display("", "RTS:")
            for (let cmd of RTS)
                display('', command_to_string(cmd))
            console.log()

        } else {
            error("", "unknown command: " +
                command_to_string(cmd))
        }
        i++
    }

    console.log("parsing complete")
    console.log("RTS: ", RTS)
    console.log("stack: ", S)
    console.log("local stack: ", LS)
    console.log("static mem: ", SM)
}





    // A = [parse_to_json(program)]
    // S = []
    // E = global_environment
    // let i = 0
    // while (i < step_limit) {
    //     if (A.length === 0) break
    //     const cmd = A.pop()
    //     if (microcode.hasOwnProperty(cmd.tag)) {
    //         microcode[cmd.tag](cmd)
    //         //debug(cmd)
    //     } else {
    //         error("", "unknown command: " + 
    //                   command_to_string(cmd))
    //     }
    //     i++
    // }
    // if (i === step_limit) {
    //     error("step limit " + stringify(step_limit) + " exceeded")
    // }
    // if (S.length > 1 || S.length < 1) {
    //     error(S, 'internal error: stash must be singleton but is: ')
    // }
    // return display(S[0])



/* *********
 * debugging
 * *********/

// used for display of environments
const all_except_last = xs =>
    is_null(tail(xs))
        ? null
        : pair(head(xs), all_except_last(tail(xs)))

const command_to_string = cmd =>
    (cmd.tag === 'env_i')
        ? '{ tag: "env_i", env: ...}'
        : JSON.stringify(cmd)

const debug = (cmd) => {
    display(cmd.tag, "executed command:")
    display("", "A:")
    for (let cmd of A)
        display('', command_to_string(cmd))
    display("", "S:")
    for (let val of S)
        display('', value_to_string(val))
    display("", "E:")
    for_each(frame => {
            for (const key in frame) {
                display("", key + ": " + value_to_string(frame[key]))
            }
            display("",'               ')
        },
        all_except_last(E))

}

// CodeTokens = ["variable_declaration", [["name", ["i", null]], [["literal", [2, null]], null]]]




/* *******
 * testing
 * *******/

const test = (expected) => {
    display("", `
    
****************
Test case: ` + "\n")
    const result = execute()
    if (stringify(result) === stringify(expected)) {
        display(result, "success:")
    } else {
        display(expected, "FAILURE! expected:")
        error(result, "result:")
    }
}
test(undefined)

// printNestedArray(CodeTokens)