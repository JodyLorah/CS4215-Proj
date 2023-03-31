"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:max-line-length */
const types_1 = require("../../types");
const formatters_1 = require("../../utils/formatters");
const testing_1 = require("../../utils/testing");
const undefinedVariable = formatters_1.stripIndent `
im_undefined;
`;
const undefinedVariableVerbose = formatters_1.stripIndent `
"enable verbose";
im_undefined;
`;
const optionEC = { variant: types_1.Variant.EXPLICIT_CONTROL };
const optionEC1 = { chapter: types_1.Chapter.SOURCE_1, variant: types_1.Variant.EXPLICIT_CONTROL };
const optionEC2 = { chapter: types_1.Chapter.SOURCE_2, variant: types_1.Variant.EXPLICIT_CONTROL };
const optionEC3 = { chapter: types_1.Chapter.SOURCE_3, variant: types_1.Variant.EXPLICIT_CONTROL };
const optionEC4 = { chapter: types_1.Chapter.SOURCE_4, variant: types_1.Variant.EXPLICIT_CONTROL };
test('Undefined variable error is thrown', () => {
    return testing_1.expectParsedError(undefinedVariable, optionEC).toMatchInlineSnapshot(`"Line 1: Name im_undefined not declared."`);
});
test('Undefined variable error is thrown - verbose', () => {
    return testing_1.expectParsedError(undefinedVariableVerbose).toMatchInlineSnapshot(`
            "Line 2, Column 0: Name im_undefined not declared.
            Before you can read the value of im_undefined, you need to declare it as a variable or a constant. You can do this using the let or const keywords.
            "
          `);
});
test('Undefined variable error message differs from verbose version', () => {
    return testing_1.expectDifferentParsedErrors(undefinedVariable, undefinedVariableVerbose, optionEC).toBe(undefined);
});
const assignToBuiltin = formatters_1.stripIndent `
map = 5;
`;
const assignToBuiltinVerbose = formatters_1.stripIndent `
  "enable verbose";
  map = 5;
`;
test('Error when assigning to builtin', () => {
    return testing_1.expectParsedError(assignToBuiltin, optionEC3).toMatchInlineSnapshot(`"Line 1: Cannot assign new value to constant map."`);
});
test('Error when assigning to builtin - verbose', () => {
    return testing_1.expectParsedError(assignToBuiltinVerbose, optionEC3).toMatchInlineSnapshot(`
            "Line 2, Column 0: Cannot assign new value to constant map.
            As map was declared as a constant, its value cannot be changed. You will have to declare a new variable.
            "
          `);
});
test('Assigning to builtin error message differs from verbose version', () => {
    return testing_1.expectDifferentParsedErrors(assignToBuiltin, assignToBuiltinVerbose, {
        variant: types_1.Variant.EXPLICIT_CONTROL
    }).toBe(undefined);
});
const assignToBuiltin1 = formatters_1.stripIndent `
undefined = 5;
`;
const assignToBuiltinVerbose1 = formatters_1.stripIndent `
  "enable verbose";
  undefined = 5;
`;
test('Error when assigning to builtin', () => {
    return testing_1.expectParsedError(assignToBuiltin1, optionEC3).toMatchInlineSnapshot(`"Line 1: Cannot assign new value to constant undefined."`);
});
test('Error when assigning to builtin - verbose', () => {
    return testing_1.expectParsedError(assignToBuiltinVerbose1, optionEC3).toMatchInlineSnapshot(`
            "Line 2, Column 0: Cannot assign new value to constant undefined.
            As undefined was declared as a constant, its value cannot be changed. You will have to declare a new variable.
            "
          `);
});
test('Assigning to builtin error message differs from verbose version', () => {
    return testing_1.expectDifferentParsedErrors(assignToBuiltin1, assignToBuiltinVerbose1, {
        variant: types_1.Variant.EXPLICIT_CONTROL
    }).toBe(undefined);
});
test('Nice errors when errors occur inside builtins', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    parse_int("10");
  `, optionEC4).toMatchInlineSnapshot(`"Line 1: Expected 2 arguments, but got 1."`);
});
test('Nice errors when errors occur inside builtins', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    parse("'");
  `, optionEC4).toMatchInlineSnapshot(`"Line 1: ParseError: SyntaxError: Unterminated string constant (1:0)"`);
});
test("Builtins don't create additional errors when it's not their fault", () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    function f(x) {
      return a;
    }
    map(f, list(1, 2));
  `, optionEC4).toMatchInlineSnapshot(`"Line 2: Name a not declared."`);
});
test('Infinite recursion with a block bodied function', () => {
    return testing_1.expectParsedErrorNoSnapshot(formatters_1.stripIndent `
    function i(n) {
      return n === 0 ? 0 : 1 + i(n-1);
    }
    i(20000);
  `, optionEC4).toEqual(expect.stringMatching(/Maximum call stack size exceeded\n *(i\(\d*\)[^i]{2,4}){3}/));
}, 15000);
test('Infinite recursion with function calls in argument', () => {
    return testing_1.expectParsedErrorNoSnapshot(formatters_1.stripIndent `
    function i(n, redundant) {
      return n === 0 ? 0 : 1 + i(n-1, r());
    }
    function r() {
      return 1;
    }
    i(20000, 1);
  `, optionEC4).toEqual(expect.stringMatching(/Maximum call stack size exceeded\n *(i\(\d*, 1\)[^i]{2,4}){2}[ir]/));
}, 20000);
test('Infinite recursion of mutually recursive functions', () => {
    return testing_1.expectParsedErrorNoSnapshot(formatters_1.stripIndent `
    function f(n) {
      return n === 0 ? 0 : 1 + g(n - 1);
    }
    function g(n) {
      return 1 + f(n);
    }
    f(20000);
  `, optionEC4).toEqual(expect.stringMatching(/Maximum call stack size exceeded\n([^f]*f[^g]*g[^f]*f|[^g]*g[^f]*f[^g]*g)/));
});
const callingNonFunctionValueUndefined = formatters_1.stripIndent `
undefined();
`;
const callingNonFunctionValueUndefinedVerbose = formatters_1.stripIndent `
"enable verbose";
  undefined();
`;
// should not be different when error passing is fixed
test('Error when calling non function value undefined', () => {
    return testing_1.expectParsedError(callingNonFunctionValueUndefined, optionEC).toMatchInlineSnapshot(`"Line 1: Calling non-function value undefined."`);
});
test('Error when calling non function value undefined - verbose', () => {
    return testing_1.expectParsedError(callingNonFunctionValueUndefinedVerbose, optionEC)
        .toMatchInlineSnapshot(`
            "Line 2, Column 2: Calling non-function value undefined.
            Because undefined is not a function, you cannot run undefined().
            "
          `);
});
test('Calling non function value undefined error message differs from verbose version', () => {
    return testing_1.expectDifferentParsedErrors(callingNonFunctionValueUndefined, callingNonFunctionValueUndefinedVerbose, optionEC).toBe(undefined);
});
const callingNonFunctionValueUndefinedArgs = formatters_1.stripIndent `
undefined(1, true);
`;
const callingNonFunctionValueUndefinedArgsVerbose = formatters_1.stripIndent `
"enable verbose";
  undefined(1, true);
`;
// should not be different when error passing is fixed
test('Error when calling non function value undefined with arguments', () => {
    return testing_1.expectParsedError(callingNonFunctionValueUndefinedArgs, optionEC).toMatchInlineSnapshot(`"Line 1: Calling non-function value undefined."`);
});
test('Error when calling non function value undefined with arguments - verbose', () => {
    return testing_1.expectParsedError(callingNonFunctionValueUndefinedArgsVerbose, optionEC)
        .toMatchInlineSnapshot(`
            "Line 2, Column 2: Calling non-function value undefined.
            Because undefined is not a function, you cannot run undefined(1, true).
            "
          `);
});
test('Calling non function value undefined with arguments error message differs from verbose version', () => {
    return testing_1.expectDifferentParsedErrors(callingNonFunctionValueUndefinedArgs, callingNonFunctionValueUndefinedArgsVerbose, optionEC).toBe(undefined);
});
const callingNonFunctionValueNull = formatters_1.stripIndent `
null();
`;
const callingNonFunctionValueNullVerbose = formatters_1.stripIndent `
"enable verbose";
  null();
`;
test('Error when calling non function value null', () => {
    return testing_1.expectParsedError(callingNonFunctionValueNull, optionEC).toMatchInlineSnapshot(`"Line 1: null literals are not allowed."`);
});
test('Error when calling non function value null - verbose', () => {
    return testing_1.expectParsedError(callingNonFunctionValueNullVerbose, optionEC).toMatchInlineSnapshot(`
            "Line 2, Column 2: null literals are not allowed.
            They're not part of the Source §1 specs.
            "
          `);
});
test('Calling non function value null error message differs from verbose version', () => {
    return testing_1.expectDifferentParsedErrors(callingNonFunctionValueNull, callingNonFunctionValueNullVerbose, optionEC).toBe(undefined);
});
const callingNonFunctionValueTrue = formatters_1.stripIndent `
true();
`;
const callingNonFunctionValueTrueVerbose = formatters_1.stripIndent `
"enable verbose";
  true();
`;
test('Error when calling non function value true', () => {
    return testing_1.expectParsedError(callingNonFunctionValueTrue, optionEC).toMatchInlineSnapshot(`"Line 1: Calling non-function value true."`);
});
test('Error when calling non function value true - verbose', () => {
    return testing_1.expectParsedError(callingNonFunctionValueTrueVerbose, optionEC).toMatchInlineSnapshot(`
            "Line 2, Column 2: Calling non-function value true.
            Because true is not a function, you cannot run true().
            "
          `);
});
test('Calling non function value true error message differs from verbose version', () => {
    return testing_1.expectDifferentParsedErrors(callingNonFunctionValueTrue, callingNonFunctionValueTrueVerbose, optionEC).toBe(undefined);
});
const callingNonFunctionValue0 = formatters_1.stripIndent `
0();
`;
const callingNonFunctionValue0Verbose = formatters_1.stripIndent `
"enable verbose";
  0();
`;
test('Error when calling non function value 0', () => {
    return testing_1.expectParsedError(callingNonFunctionValue0, optionEC).toMatchInlineSnapshot(`"Line 1: Calling non-function value 0."`);
});
test('Error when calling non function value 0 - verbose', () => {
    return testing_1.expectParsedError(callingNonFunctionValue0Verbose, optionEC).toMatchInlineSnapshot(`
            "Line 2, Column 2: Calling non-function value 0.
            Because 0 is not a function, you cannot run 0(). If you were planning to perform multiplication by 0, you need to use the * operator.
            "
          `);
});
test('Calling non function value 0 error message differs from verbose version', () => {
    return testing_1.expectDifferentParsedErrors(callingNonFunctionValue0, callingNonFunctionValue0Verbose, optionEC).toBe(undefined);
});
const callingNonFunctionValueString = formatters_1.stripIndent `
'string'();
`;
const callingNonFunctionValueStringVerbose = formatters_1.stripIndent `
"enable verbose";
  'string'();
`;
test('Error when calling non function value "string"', () => {
    return testing_1.expectParsedError(callingNonFunctionValueString, optionEC).toMatchInlineSnapshot(`"Line 1: Calling non-function value \\"string\\"."`);
});
test('Error when calling non function value "string" - verbose', () => {
    return testing_1.expectParsedError(callingNonFunctionValueStringVerbose, optionEC).toMatchInlineSnapshot(`
            "Line 2, Column 2: Calling non-function value \\"string\\".
            Because \\"string\\" is not a function, you cannot run \\"string\\"().
            "
          `);
});
test('Calling non function value string error message differs from verbose version', () => {
    return testing_1.expectDifferentParsedErrors(callingNonFunctionValueString, callingNonFunctionValueStringVerbose, optionEC).toBe(undefined);
});
const callingNonFunctionValueArray = formatters_1.stripIndent `
[1]();
`;
const callingNonFunctionValueArrayVerbose = formatters_1.stripIndent `
"enable verbose";
[1]();
`;
test('Error when calling non function value array', () => {
    return testing_1.expectParsedError(callingNonFunctionValueArray, optionEC3).toMatchInlineSnapshot(`"Line 1: Calling non-function value [1]."`);
});
test('Error when calling non function value array - verbose', () => {
    return testing_1.expectParsedError(callingNonFunctionValueArrayVerbose, optionEC3).toMatchInlineSnapshot(`
            "Line 2, Column 0: Calling non-function value [1].
            Because [1] is not a function, you cannot run [1]().
            "
          `);
});
test('Calling non function value array error message differs from verbose version', () => {
    return testing_1.expectDifferentParsedErrors(callingNonFunctionValueArray, callingNonFunctionValueArrayVerbose, optionEC).toBe(undefined);
});
const callingNonFunctionValueObject = formatters_1.stripIndent `
({a: 1})();
`;
const callingNonFunctionValueObjectVerbose = formatters_1.stripIndent `
"enable verbose";
({a: 1})();
`;
test('Calling non function value object error message differs from verbose version', () => {
    return testing_1.expectDifferentParsedErrors(callingNonFunctionValueObject, callingNonFunctionValueObjectVerbose, optionEC).toBe(undefined);
});
test('Error when calling function with too few arguments', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    function f(x) {
      return x;
    }
    f();
  `, optionEC).toMatchInlineSnapshot(`"Line 4: Expected 1 arguments, but got 0."`);
});
test('Error when calling function with too few arguments - verbose', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    "enable verbose";
      function f(x) {
        return x;
      }
      f();
    `, optionEC).toMatchInlineSnapshot(`
            "Line 5, Column 2: Expected 1 arguments, but got 0.
            Try calling function f again, but with 1 argument instead. Remember that arguments are separated by a ',' (comma).
            "
          `);
});
test('Error when calling function with too many arguments', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    function f(x) {
      return x;
    }
    f(1, 2);
  `, optionEC).toMatchInlineSnapshot(`"Line 4: Expected 1 arguments, but got 2."`);
});
test('Error when calling function with too many arguments - verbose', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    "enable verbose";
      function f(x) {
        return x;
      }
      f(1, 2);
    `, optionEC).toMatchInlineSnapshot(`
            "Line 5, Column 2: Expected 1 arguments, but got 2.
            Try calling function f again, but with 1 argument instead. Remember that arguments are separated by a ',' (comma).
            "
          `);
});
test('Error when calling arrow function with too few arguments', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    const f = x => x;
    f();
  `, optionEC).toMatchInlineSnapshot(`"Line 2: Expected 1 arguments, but got 0."`);
});
test('Error when calling arrow function with too few arguments - verbose', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
  "enable verbose";
    const f = x => x;
    f();
  `, optionEC).toMatchInlineSnapshot(`
            "Line 3, Column 2: Expected 1 arguments, but got 0.
            Try calling function f again, but with 1 argument instead. Remember that arguments are separated by a ',' (comma).
            "
          `);
});
test('Error when calling arrow function with too many arguments', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    const f = x => x;
    f(1, 2);
  `, optionEC).toMatchInlineSnapshot(`"Line 2: Expected 1 arguments, but got 2."`);
});
test('Error when calling arrow function with too many arguments - verbose', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    "enable verbose";
      const f = x => x;
      f(1, 2);
    `, optionEC).toMatchInlineSnapshot(`
            "Line 3, Column 2: Expected 1 arguments, but got 2.
            Try calling function f again, but with 1 argument instead. Remember that arguments are separated by a ',' (comma).
            "
          `);
});
test('Error when calling function from member expression with too many arguments', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    const f = [x => x];
    f[0](1, 2);
  `, optionEC3).toMatchInlineSnapshot(`"Line 2: Expected 1 arguments, but got 2."`);
});
test('Error when calling function from member expression with too many arguments - verbose', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    "enable verbose";
      const f = [x => x];
      f[0](1, 2);
    `, optionEC3).toMatchInlineSnapshot(`
            "Line 3, Column 2: Expected 1 arguments, but got 2.
            Try calling function f[0] again, but with 1 argument instead. Remember that arguments are separated by a ',' (comma).
            "
          `);
});
test('Error when calling arrow function in tail call with too many arguments - verbose', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    "enable verbose";
    const g = () => 1;
    const f = x => g(x);
    f(1);
  `, optionEC).toMatchInlineSnapshot(`
            "Line 3, Column 15: Expected 0 arguments, but got 1.
            Try calling function g again, but with 0 arguments instead. Remember that arguments are separated by a ',' (comma).
            "
          `);
});
test('Error when calling arrow function in tail call with too many arguments', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    const g = () => 1;
    const f = x => g(x);
    f(1);
  `, optionEC).toMatchInlineSnapshot(`"Line 2: Expected 0 arguments, but got 1."`);
});
test('Error when calling builtin function in with too many arguments', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    is_number(1, 2, 3);
  `, optionEC).toMatchInlineSnapshot(`"Line 1: Expected 1 arguments, but got 3."`);
});
test('Error when calling builtin function in with too few arguments', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    parse_int("");
  `, optionEC).toMatchInlineSnapshot(`"Line 1: Expected 2 arguments, but got 1."`);
});
test('No error when calling list function in with variable arguments', () => {
    return testing_1.expectResult(formatters_1.stripIndent `
    list();
    list(1);
    list(1, 2, 3);
    list(1, 2, 3, 4, 5, 6, 6);
  `, optionEC2).toMatchInlineSnapshot(`
            Array [
              1,
              Array [
                2,
                Array [
                  3,
                  Array [
                    4,
                    Array [
                      5,
                      Array [
                        6,
                        Array [
                          6,
                          null,
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ]
          `);
});
test('No error when calling display function in with variable arguments', () => {
    return testing_1.expectResult(formatters_1.stripIndent `
    display(1);
    display(1, "test");
  `, optionEC2).toMatchInlineSnapshot(`1`);
});
test('No error when calling stringify function in with variable arguments', () => {
    return testing_1.expectResult(formatters_1.stripIndent `
    stringify(1, 2);
    stringify(1, 2, 3);
  `, optionEC2).toMatchInlineSnapshot(`"1"`);
});
test('No error when calling math_max function in with variable arguments', () => {
    return testing_1.expectResult(formatters_1.stripIndent `
    math_max();
    math_max(1, 2);
    math_max(1, 2, 3);
  `, optionEC2).toMatchInlineSnapshot(`3`);
});
test('No error when calling math_min function in with variable arguments', () => {
    return testing_1.expectResult(formatters_1.stripIndent `
    math_min();
    math_min(1, 2);
    math_min(1, 2, 3);
  `, optionEC2).toMatchInlineSnapshot(`1`);
});
test('Error with too many arguments passed to math_sin', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    math_sin(7,8);
  `, optionEC3).toMatchInlineSnapshot(`"Line 1: Expected 1 arguments, but got 2."`);
});
test('Error with too few arguments passed to rest parameters', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    function rest(a, b, ...c) {}
    rest(1);
  `, optionEC3).toMatchInlineSnapshot(`"Line 2: Expected 2 or more arguments, but got 1."`);
});
test('Error when redeclaring constant', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    const f = x => x;
    const f = x => x;
  `, optionEC3).toMatchInlineSnapshot(`"Line 2: SyntaxError: Identifier 'f' has already been declared (2:6)"`);
});
test('Error when redeclaring constant as variable', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    const f = x => x;
    let f = x => x;
  `, optionEC3).toMatchInlineSnapshot(`"Line 2: SyntaxError: Identifier 'f' has already been declared (2:4)"`);
});
test('Error when redeclaring variable as constant', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    let f = x => x;
    const f = x => x;
  `, optionEC3).toMatchInlineSnapshot(`"Line 2: SyntaxError: Identifier 'f' has already been declared (2:6)"`);
});
test('Error when redeclaring variable', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    let f = x => x;
    let f = x => x;
  `, optionEC3).toMatchInlineSnapshot(`"Line 2: SyntaxError: Identifier 'f' has already been declared (2:4)"`);
});
test('Error when redeclaring function after let', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    let f = x => x;
    function f() {}
  `, optionEC3).toMatchInlineSnapshot(`"Line 2: SyntaxError: Identifier 'f' has already been declared (2:9)"`);
});
test('Error when redeclaring function after let --verbose', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    "enable verbose";
    let f = x => x;
    function f() {}
  `, optionEC3).toMatchInlineSnapshot(`
            "Line 3, Column 9: SyntaxError: Identifier 'f' has already been declared (3:9)
            There is a syntax error in your program
            "
          `);
});
test('Error when redeclaring function after function', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    function f() {}
    function f() {}
  `, optionEC3).toMatchInlineSnapshot(`"Line 2: SyntaxError: Identifier 'f' has already been declared (2:9)"`);
});
test('Error when redeclaring function after function --verbose', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    "enable verbose";
    function f() {}
    function f() {}
  `, optionEC3).toMatchInlineSnapshot(`
            "Line 3, Column 9: SyntaxError: Identifier 'f' has already been declared (3:9)
            There is a syntax error in your program
            "
          `);
});
test('Error when redeclaring function after const', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    const f = x => x;
    function f() {}
  `, optionEC3).toMatchInlineSnapshot(`"Line 2: SyntaxError: Identifier 'f' has already been declared (2:9)"`);
});
test('Error when redeclaring function after const --verbose', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    "enable verbose";
    const f = x => x;
    function f() {}
  `, optionEC3).toMatchInlineSnapshot(`
            "Line 3, Column 9: SyntaxError: Identifier 'f' has already been declared (3:9)
            There is a syntax error in your program
            "
          `);
});
test('Error when redeclaring const after function', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    function f() {}
    const f = x => x;
  `, optionEC3).toMatchInlineSnapshot(`"Line 2: SyntaxError: Identifier 'f' has already been declared (2:6)"`);
});
test('Error when redeclaring const after function --verbose', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    "enable verbose";
    function f() {}
    const f = x => x;
  `, optionEC3).toMatchInlineSnapshot(`
            "Line 3, Column 6: SyntaxError: Identifier 'f' has already been declared (3:6)
            There is a syntax error in your program
            "
          `);
});
test('Error when redeclaring let after function', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    function f() {}
    let f = x => x;
  `, optionEC3).toMatchInlineSnapshot(`"Line 2: SyntaxError: Identifier 'f' has already been declared (2:4)"`);
});
test('Error when redeclaring let after function --verbose', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    "enable verbose";
    function f() {}
    let f = x => x;
  `, optionEC3).toMatchInlineSnapshot(`
            "Line 3, Column 4: SyntaxError: Identifier 'f' has already been declared (3:4)
            There is a syntax error in your program
            "
          `);
});
test('Type error with non boolean in if statement, error line at if statement, not at 1', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    if (
    1
    ) {
      2;
    } else {}
    `, optionEC1).toMatchInlineSnapshot(`"Line 1: Expected boolean as condition, got number."`);
});
test('Type error with <number> * <nonnumber>, error line at <number>, not <nonnumber>', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    12
    *
    'string';
    `, optionEC1).toMatchInlineSnapshot(`"Line 1: Expected number on right hand side of operation, got string."`);
});
test.skip('Cascading js errors work properly 1', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    function make_alternating_stream(stream) {
      return pair(head(stream), () => make_alternating_stream(
                                        negate_whole_stream(
                                            stream_tail(stream))));
    }

    function negate_whole_stream(stream) {
        return pair(-head(stream), () => negate_whole_stream(stream_tail(stream)));
    }

    const ones = pair(1, () => ones);
    eval_stream(make_alternating_stream(enum_stream(1, 9)), 10);
    `, optionEC3).toMatchInlineSnapshot(`"Line 8: Error: head(xs) expects a pair as argument xs, but encountered null"`);
});
test('Cascading js errors work properly', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    function h(p) {
      return head(p);
    }

    h(null);
    `, optionEC2).toMatchInlineSnapshot(`"Line 2: Error: head(xs) expects a pair as argument xs, but encountered null"`);
});
test('Check that stack is at most 10k in size', () => {
    return testing_1.expectParsedErrorNoSnapshot(formatters_1.stripIndent `
    function f(x) {
      if (x <= 0) {
        return 0;
      } else {
        return 1 + f(x-1);
      }
    }
    f(20000);
  `, optionEC).toEqual(expect.stringMatching(/Maximum call stack size exceeded\n([^f]*f){3}/));
}, 10000);
test('Cannot overwrite loop variables within a block', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
  function test(){
      let z = [];
      for (let x = 0; x < 2; x = x + 1) {
        x = 1;
      }
      return false;
  }
  test();
  `, optionEC3).toMatchInlineSnapshot(`"Line 4: Assignment to a for loop variable in the for loop is not allowed."`);
});
test('No hoisting of functions. Only the name is hoisted like let and const', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
      const v = f();
      function f() {
        return 1;
      }
      v;
    `, optionEC).toMatchInlineSnapshot(`"Line 1: Name f declared later in current scope but not yet assigned"`);
}, 30000);
test('Error when accessing temporal dead zone', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
    const a = 1;
    function f() {
      display(a);
      const a = 5;
    }
    f();
    `, optionEC).toMatchInlineSnapshot(`"Line 3: Name a declared later in current scope but not yet assigned"`);
}, 30000);
// tslint:disable-next-line:max-line-length
test('In a block, every going-to-be-defined variable in the block cannot be accessed until it has been defined in the block.', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
      const a = 1;
      {
        a + a;
        const a = 10;
      }
    `, optionEC).toMatchInlineSnapshot(`"Line 3: Name a declared later in current scope but not yet assigned"`);
}, 30000);
test('Shadowed variables may not be assigned to until declared in the current scope', () => {
    return testing_1.expectParsedError(formatters_1.stripIndent `
  let variable = 1;
  function test(){
    variable = 100;
    let variable = true;
    return variable;
  }
  test();
  `, optionEC3).toMatchInlineSnapshot(`"Line 3: Name variable not declared."`);
});
//# sourceMappingURL=ec-evaluator-errors.js.map