// If you use Node.js and not https://sourceacademy.org,
// uncomment the following two lines:
Object.entries(require('sicp'))
    .forEach(([name, exported]) => global[name] = exported);

// import parsed code as tokens
var tokens_test1 = require('../testing/tokens/tokens_test1.json');
var tokens_test2 = require('../testing/tokens/tokens_test2.json');
var tokens_test3 = require('../testing/tokens/tokens_test3.json');
var tokens_test4 = require('../testing/tokens/tokens_test4.json');
var tokens_test5 = require('../testing/tokens/tokens_test5.json');
var tokens_test6 = require('../testing/tokens/tokens_test6.json');
var tokens_test7 = require('../testing/tokens/tokens_test7.json');
var tokens_test8 = require('../testing/tokens/tokens_test8.json');
var tokens_test9 = require('../testing/tokens/tokens_test9.json');
var tokens_test10 = require('../testing/tokens/tokens_test10.json');
var tokens_test11 = require('../testing/tokens/tokens_test11.json');
var tokens_test12 = require('../testing/tokens/tokens_test12.json');
var tokens_test13 = require('../testing/tokens/tokens_test13.json');
var tokens_test14 = require('../testing/tokens/tokens_test14.json');
var tokens_test15 = require('../testing/tokens/tokens_test15.json');
var tokens_test16 = require('../testing/tokens/tokens_test16.json');
var tokens_test17 = require('../testing/tokens/tokens_test17.json');

var tokens_error1 = require('../testing/tokens/tokens_error1.json');
var tokens_error2 = require('../testing/tokens/tokens_error2.json');
var tokens_error3 = require('../testing/tokens/tokens_error3.json');
var tokens_error4 = require('../testing/tokens/tokens_error4.json');
var tokens_error5 = require('../testing/tokens/tokens_error5.json');
var tokens_error6 = require('../testing/tokens/tokens_error6.json');
var tokens_error7 = require('../testing/tokens/tokens_error7.json');
var tokens_error8 = require('../testing/tokens/tokens_error8.json');

var code_tokens = require('../parser/antlr/antlr_tokens.json')

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

const list_to_array = xs =>
    is_null(xs)
        ? []
        : [head(xs)].concat(list_to_array(tail(xs)))

// makes an object for a given parameter 
// int x would return object {sym: x, type: 'int'}
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

// turn tagged list syntax from tokens generated into JSON object
const ast_to_json = (t) => {
    switch (head(t)) {
        case "literal":
            return { tag: "lit", val: head(tail(t)) }
        case "name": {
            let type = tail(tail(t))
            if (!is_null(type)) {
                type = head(type)
            } else {
                type = get_info(head(tail(t))).type
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
                items = []

                for (let i = 0; i < size; i++) {
                    items.push({})
                }
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
            
        case "block": {
            return {
                tag: "blk",
                body: ast_to_json(head(tail(t)))
            }
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
            sym = head(tail(head(tail(t))))
            if (is_pair(sym) && head(sym) === "name") {
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
                prms: parameters([], head(tail(tail(t)))),
                body: ast_to_json(tail(tail(tail(t))))
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


/* **********************
 * operators and builtins
 * **********************/

// checks if a given input n is an integer
// if yes return true else return false
function is_int(n){
    return Number(n) === n && n % 1 === 0;
}

// checks if a given input n is a double
// if yes return true else return false
function is_double(n){
    return Number(n) === n && n % 1 !== 0;
}

// given a string or object, 
// the function returns the type of the string
const get_type = (x) => {
    return x.tag === "lit"  
            ? get_type(x.val)
            : typeof(x) === "string"
            ? "char"
            : is_int(x) 
            ? "int"
            : is_double(x)
            ? "double"
            : x.type != undefined
            ? x.type
            : "undefined"
}

// given a key, returns the value stored
// in the LS or SM
const get_info = key => {
    let curr = peek(LS)
    if (dict_has_key(curr, key)) {
        let rtn = dict_get(curr, key)
        return rtn
    }
    
    if (dict_has_key(SM, key)) {
        return dict_get(SM, key)
    } 
    return null;
}


// checks the type of x and y
// if both have the same type, return true
// else throws a type mismatch error
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

        if (is_null(info_x)) {
            info_x = x
        }

        if (is_null(info_y)) {
            info_y = y
        }
        
        if (info_y.tag === "arr_lit") {
            let lst = info_y.elems
            for (var i in lst) {
                if (Object.keys(lst[i]).length > 0 && info_x.type != get_type(lst[i].val)) {
                    error("array obj declared is of different type")
                }
            }
            return
        }
        if (info_x.type === get_type(info_y)) {
            return
        } else if (get_type(info_x) === get_type(info_y)){
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

// checks if a given object is a literal
// returns true if the object has type int, double or char
// returns false otherwise
const is_literal = x => {
    return (x.type === "int" || x.type === "double" || x.type === "char") ? true : false
}

// retrieves the value stored using a given key
// throws an unbound name error if the key cannot 
// be found in the top frame of the LS or SM
const lookup = (key) => {
    LS.reverse()
    // search in all local frames
    if (LS.length > 0) {
        let curr = LS[0]
        if (dict_has_key(curr, key)) {
            LS.reverse()
            let obj = dict_get(curr, key)
            if (is_literal(obj)) {
                return obj.val
            }
            return obj
        }
    }
    
    LS.reverse()

    // search in static memory
    if (dict_has_key(SM, key)) {
        return dict_get(SM, key)
    } else {
        error(x, 'unbound name:')
    }
}

// assigns a new value v to a given key x
// if x cannot be found in the top frame of
// LS or in the SM, throws an unbound name error
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
                return
            
            }  else if (v.tag === "lit") { // assigning aft array retrieval
                push(LS, curr)
                assign(x, v.val)
                return
            } 
        }
        push(LS, curr)
    }
    
    // search in static memory
    if (dict_has_key(SM, x)) {
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
        } 
    } else {
        error(x, 'unbound name:')
    }
}

// initialises a new frame with the parameter names and
// input values. This is used for new function calls.
const extend = (xs, vs) => {
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

        dict_set(sf, comp.sym, {val: undefined, type: comp.type})
        if (is_null(comp.expr)) { // remove variable declaration
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
// LS: Local Stack: list of local stack frames containing local variables declared
// S: stash: stack of values
// RTS: Runtime Stack: list of instructions to be executed
// SM: Static Memory: hashmap containing all global declarations including 
//                    variables and functions declared

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
            push(RTS, cmd.sym == '||'
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
            push(RTS, {tag: 'branch_i', cons: cmd.cons, alt: cmd.alt}, cmd.pred),
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
            push(S, {tag: 'closure', prms: cmd.prms, body: cmd.body})
        ,
    arr_acc:
        cmd =>
            push(RTS, {tag: 'arr_acc_i'}, cmd.ind, cmd.arr),
    arr_assmt:
        cmd =>
            push(RTS, {tag: 'arr_assmt_i', sym: cmd.arr.sym}, cmd.expr, cmd.ind, cmd.arr),
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
            push(RTS, {tag: 'branch_i', cons: cmd.cons, alt: cmd.alt},
                cmd.pred),
    blk:
        cmd => {
            scan(cmd.body)
            RTS.push(cmd.body)
        },
    let:
        cmd =>
            push(RTS,
                {tag: 'pop_i'},
                {tag: 'assmt', sym: cmd.sym, type: cmd.type, expr: cmd.expr}),
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
            push(RTS, {tag: 'lit', val: undefined},
                {tag: 'while_i', pred: cmd.pred, body: cmd.body},
                cmd.pred),

//
// instructions
//
    reset_i:
        cmd =>{
            let loc_frame = LS.pop()
            if (LS.length === 0) {
                let rtn_val = S.pop()
                let obj = dict_get(SM, "main")

                if (obj.type != get_type(rtn_val)) {
                    error("type mismatch with main")
                }
                
                if (rtn_val.val != undefined) {
                    rtn_val = rtn_val.val
                }

                obj.rtn = rtn_val
                dict_set(SM, "main", rtn_val)

                // clear RTS for early termination
                RTS = []
            } else {
                push(LS, loc_frame)
                let rtn_val = S.pop()
                if (loc_frame.return_type != get_type(rtn_val)) {
                    error("type mismatch with function")
                }
                if (rtn_val.val != undefined) {
                    rtn_val = rtn_val.val
                }
                LS.pop()
                push(S, rtn_val)
            }

            // return to main
            
        },
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
            } else {
                if (nxt.tag != "closure") {
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
            push(RTS, sf.body)
            if (is_null(sf.prms)) {
                sf.prms = []
            }
            extend(sf.prms, args)

            let curr = LS.pop()
            dict_set(curr, "return_type", sf.type)
            push(LS, curr)
        },
    branch_i:
        cmd =>
            push(RTS, S.pop() ? cmd.cons : cmd.alt),
    while_i:
        cmd =>
            S.pop()
                ? push(RTS, cmd,             // push while_i itself back on RTS
                    cmd.pred,
                    {tag: 'pop_i'},  // pop body value
                    cmd.body)
                : null,
    arr_acc_i:
        cmd => {
            const ind = S.pop()
            const arr_obj = S.pop()
            let arr; 
            if (arr_obj.val === undefined) {
                arr = arr_obj.elems
            } else {
                if (arr_obj.val.elems === undefined) {
                    arr = arr_obj.val
                } else {
                    arr = arr_obj.val.elems
                }
            }

            if (ind >= arr.length || ind < 0) {
                error("array access out of bounds")
            }
            push(S, arr[ind])
        },
    arr_assmt_i:
        cmd => {
            const val = S.pop()
            const ind = S.pop()
            let arr_obj = S.pop()

            let arr; 
            if (arr_obj.val === undefined) {
                arr = arr_obj.elems
            } else {
                arr = arr_obj.val.elems
            }
            if (ind >= arr.length || ind < 0) {
                error("array access out of bounds")
            }

            type_check(get_info(cmd.sym).type, get_type(val))
            
            arr[ind] = val
            let new_obj = {val: arr, type: get_type(val)}

            // let name = cmd.sym
            if (dict_has_key(peek(LS), cmd.sym)) {
                let curr = LS.pop()
                dict_set(curr, cmd.sym, new_obj)
                push(LS, curr)
            } else if (dict_has_key(SM, cmd.sym)) {
                dict_set(SM, cmd.sym, new_obj)
            } else {
                error("assigning to undeclared name")
            }

            push(S, val)
        }
}

/* ****************
 * interpreter loop
 * ****************/

const step_limit = 1000000

// first round of processing and storing global declarations
// used to generate SM (initially stored in LS, later transferred)
const process_global_dec = (decs) => {
    let i = 0
    RTS = [decs]
    LS = []
    while (i < step_limit) {
        if (RTS.length === 0) break
        const cmd = RTS.pop()

        if (microcode.hasOwnProperty(cmd.tag)) {
            microcode[cmd.tag](cmd)
        } else {
            error("", "unknown command: " , cmd)
        }
        i++
    }
    if (i === step_limit) {
        error("step limit " + stringify(step_limit) + " exceeded")
    }
    return LS[0]
}

// driver function to start processing tokens
const execute = (tokens) => {
    SM = {}
    S = []
    RTS = []

    const declarations = parse_to_json(tokens)
    SM = process_global_dec(declarations)
    LS = []

    // if no main func, error out
    if (!dict_has_key(SM, "main")) {
        error("main function not defined")
    }

    // injecting main function body into RTS since all C code
    // starts running from the main function body
    const starting_pt = ["application", 
                            [["name", ["main", [dict_get(SM, "main").type, null]]], 
                             [dict_get(SM, "main").prms, null]
                            ]
                        ]

    RTS = [ast_to_json(starting_pt)]

    let i = 0
    while (i < step_limit) {
        if (RTS.length == 0) break
        const cmd = RTS.pop()

        if (microcode.hasOwnProperty(cmd.tag)) {
            // for debugging
            // console.log("command is:", cmd)
            // console.log("S is:", S)
            // display("", "RTS:")
            // for (let cmd of RTS) 
            //     display('', command_to_string(cmd))
            // console.log()

            microcode[cmd.tag](cmd)
        } else {
            error("", "unknown command: " , cmd)
        }
        i++
    }
    if (i === step_limit) {
        error("step limit " + stringify(step_limit) + " exceeded")
    }

    console.log("Program finished with code", SM["main"])

    return SM["main"]
}

/* *********
 * debugging
 * *********/
const command_to_string = cmd =>
    (cmd.tag === 'env_i')
    ? '{ tag: "env_i", env: ...}'
    : JSON.stringify(cmd)

// used for display of environments
const all_except_last = xs =>
    is_null(tail(xs))
        ? null
        : pair(head(xs), all_except_last(tail(xs)))

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


/* *******
 * testing
 * *******/

// for testing regular tests
let counter = 1;

const test = (tokens, expected) => {
    console.log("Testing tokes from:", "tokens_test", counter)
    const result = execute(tokens)
    if (stringify(result) === stringify(expected)) {
        display(result, "success:")
    } else {
        display(expected, "FAILURE! expected:")
        error(result, "result:")
    }
    console.log()
    counter++
}

/* *******
 * test suite
 * 
 * uncomment to run
 * *******/
test(tokens_test1, 2)
test(tokens_test2, 3)
test(tokens_test3, 10)
test(tokens_test4, 133)
test(tokens_test5, 3)
test(tokens_test6, 0)
test(tokens_test7, 3)
test(tokens_test8, 6)
test(tokens_test9, 4)
test(tokens_test10, 0)
test(tokens_test11, 4)
test(tokens_test12, 0)
test(tokens_test13, 10)
test(tokens_test14, 2)
test(tokens_test15, 0)
test(tokens_test16, 720)
test(tokens_test17, 0)

let err_counter = 1
const test_error = (tokens, error_msg) => {
    console.log("Testing tokes from:", "tokens_error", err_counter)
    try {
        execute(tokens)
    } catch (e) {
        if (stringify(e) === error_msg) {
            display(e, "success:")
        } else {
            display(e, "FAILURE! expected:")
            error(e, "result:")
        }
    }
    console.log()
    err_counter++

}

/* *******
 * error test suite
 * 
 * uncomment to run
 * *******/
test_error(tokens_error1, "Error: \"type mismatch with function\"")
test_error(tokens_error2, "Error: \"type mismatch with function\"")
test_error(tokens_error3, "Error: \"type mismatch for parameters!\"")
test_error(tokens_error4, "Error: \"array access out of bounds\"")
test_error(tokens_error5, "Error: \"type mismatch\"")
test_error(tokens_error6, "Error: \"array obj declared is of different type\"" )
test_error(tokens_error7, "Error: \"array does not match declared size\"")
test_error(tokens_error8, "Error: \"main function not defined\"") // shows early termination of antlr due to syntactical errors


const test_custom = (tokens, expected) => {
    console.log("Testing tokes from:", "code.c")
    const result = execute(tokens)
    if (stringify(result) === stringify(expected)) {
        display(result, "success:")
    } else {
        display(expected, "FAILURE! expected:")
        error(result, "result:")
    }
    console.log()
}

/* *******
 * custom testing
 * 
 * uncomment to run
 * *******/
test_custom(code_tokens, /*insert value here*/ 55)
