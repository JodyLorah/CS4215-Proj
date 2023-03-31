"use strict";
/**
 * This file contains tests for regressions that TCO may have caused.
 * Please reference Issue #124 (https://github.com/source-academy/js-slang/issues/124)
 */
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const testing_1 = require("../../utils/testing");
const optionEC = { variant: types_1.Variant.EXPLICIT_CONTROL };
const optionEC3 = { chapter: types_1.Chapter.SOURCE_3, variant: types_1.Variant.EXPLICIT_CONTROL };
// This is bad practice. Don't do this!
test('Calling unreachable results in error', () => {
    return testing_1.expectParsedError(`
    function unreachable() {
      return 1 < true; // Will cause an error
    }
    function f() {
      unreachable();
      return 0;
    }
    f();
  `, optionEC).toMatchInlineSnapshot(`"Line 3: Expected number on right hand side of operation, got boolean."`);
});
// This is bad practice. Don't do this!
test('Bare early returns work', () => {
    return testing_1.expectResult(`
    function unreachable() {
      return 1 < true; // Will cause an error
    }
    function f() {
      return 1;
      unreachable();
      return 0;
      unreachable();
    }
    f();
  `, optionEC).toMatchInlineSnapshot(`1`);
});
// This is bad practice. Don't do this!
test('Recursive call early returns work', () => {
    return testing_1.expectResult(`
    function unreachable() {
      return 1 < true; // Will cause an error
    }
    function id(x) {
      return x;
    }
    function f() {
      return id(1) + id(2);
      unreachable();
      return 0;
      unreachable();
    }
    f();
  `, optionEC).toMatchInlineSnapshot(`3`);
});
// This is bad practice. Don't do this!
test('Tail call early returns work', () => {
    return testing_1.expectResult(`
    function unreachable() {
      return 1 < true; // Will cause an error
    }
    function id(x) {
      return x;
    }
    function f() {
      return id(1);
      unreachable();
      return 0;
      unreachable();
    }
    f();
  `, optionEC).toMatchInlineSnapshot(`1`);
});
// This is bad practice. Don't do this!
test('Bare early returns in if statements work', () => {
    return testing_1.expectResult(`
    function unreachable() {
      return 1 < true; // Will cause an error
    }
    function f() {
      if (true) {
        return 1;
        unreachable();
      } else {}
      unreachable();
      return 0;
      unreachable();
    }
    f();
  `, optionEC).toMatchInlineSnapshot(`1`);
});
// This is bad practice. Don't do this!
test('Recursive call early returns in if statements work', () => {
    return testing_1.expectResult(`
    function unreachable() {
      return 1 < true; // Will cause an error
    }
    function id(x) {
      return x;
    }
    function f() {
      if (true) {
        return id(1) + id(2);
        unreachable();
      } else {}
      unreachable();
      return 0;
      unreachable();
    }
    f();
  `, optionEC).toMatchInlineSnapshot(`3`);
});
// This is bad practice. Don't do this!
test('Tail call early returns in if statements work', () => {
    return testing_1.expectResult(`
    function unreachable() {
      return 1 < true; // Will cause an error
    }
    function id(x) {
      return x;
    }
    function f() {
      if (true) {
        return id(1);
        unreachable();
      } else {}
      unreachable();
      return 0;
      unreachable();
    }
    f();
  `, optionEC).toMatchInlineSnapshot(`1`);
});
// This is bad practice. Don't do this!
test('Bare early returns in while loops work', () => {
    return testing_1.expectResult(`
    function unreachable() {
      return 1 < true; // Will cause an error
    }
    function f() {
      while (true) {
        return 1;
        unreachable();
      }
      unreachable();
      return 0;
      unreachable();
    }
    f();
  `, optionEC3).toMatchInlineSnapshot(`1`);
});
// This is bad practice. Don't do this!
test('Recursive call early returns in while loops work', () => {
    return testing_1.expectResult(`
    function unreachable() {
      return 1 < true; // Will cause an error
    }
    function id(x) {
      return x;
    }
    function f() {
      while (true) {
        return id(1) + id(2);
        unreachable();
      }
      unreachable();
      return 0;
      unreachable();
    }
    f();
  `, optionEC3).toMatchInlineSnapshot(`3`);
});
// This is bad practice. Don't do this!
test('Tail call early returns in while loops work', () => {
    return testing_1.expectResult(`
    function unreachable() {
      return 1 < true; // Will cause an error
    }
    function id(x) {
      return x;
    }
    function f() {
      while (true) {
        return id(1);
        unreachable();
      }
      unreachable();
      return 0;
      unreachable();
    }
    f();
  `, optionEC3).toMatchInlineSnapshot(`1`);
});
// This is bad practice. Don't do this!
test('Bare early returns in for loops work', () => {
    return testing_1.expectResult(`
    function unreachable() {
      return 1 < true; // Will cause an error
    }
    function f() {
      for (let i = 0; i < 100; i = i + 1) {
        return i+1;
        unreachable();
      }
      unreachable();
      return 0;
      unreachable();
    }
    f();
  `, optionEC3).toMatchInlineSnapshot(`1`);
});
// This is bad practice. Don't do this!
test('Recursive call early returns in for loops work', () => {
    return testing_1.expectResult(`
    function unreachable() {
      return 1 < true; // Will cause an error
    }
    function id(x) {
      return x;
    }
    function f() {
      for (let i = 0; i < 100; i = i + 1) {
        return id(i+1) + id(i+2);
      }
      return 0;
    }
    f();
  `, optionEC3).toMatchInlineSnapshot(`3`);
});
// This is bad practice. Don't do this!
test('Tail call early returns in for loops work', () => {
    return testing_1.expectResult(`
    function unreachable() {
      return 1 < true; // Will cause an error
    }
    function id(x) {
      return x;
    }
    function f() {
      for (let i = 0; i < 100; i = i + 1) {
        return id(i+1);
        unreachable();
      }
      unreachable();
      return 0;
      unreachable();
    }
    f();
  `, optionEC3).toMatchInlineSnapshot(`1`);
});
//# sourceMappingURL=ec-evaluator-return-regressions.js.map