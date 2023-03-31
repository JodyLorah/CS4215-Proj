"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../../../mocks/context");
const parser_1 = require("../../../parser/parser");
const localImport_prelude_1 = require("../../../stdlib/localImport.prelude");
const types_1 = require("../../../types");
const transformProgramToFunctionDeclaration_1 = require("../../transformers/transformProgramToFunctionDeclaration");
const utils_1 = require("../utils");
describe('transformImportedFile', () => {
    const currentFileName = '/dir/a.js';
    const functionName = '__$dir$a$$dot$$js__';
    let actualContext = context_1.mockContext(types_1.Chapter.LIBRARY_PARSER);
    let expectedContext = context_1.mockContext(types_1.Chapter.LIBRARY_PARSER);
    beforeEach(() => {
        actualContext = context_1.mockContext(types_1.Chapter.LIBRARY_PARSER);
        expectedContext = context_1.mockContext(types_1.Chapter.LIBRARY_PARSER);
    });
    const assertASTsAreEquivalent = (actualCode, expectedCode) => {
        const actualProgram = parser_1.parse(actualCode, actualContext);
        const expectedProgram = parser_1.parse(expectedCode, expectedContext);
        if (actualProgram === null || expectedProgram === null) {
            throw utils_1.parseCodeError;
        }
        const actualFunctionDeclaration = transformProgramToFunctionDeclaration_1.transformProgramToFunctionDeclaration(actualProgram, currentFileName);
        const expectedFunctionDeclaration = expectedProgram.body[0];
        expect(expectedFunctionDeclaration.type).toEqual('FunctionDeclaration');
        expect(utils_1.stripLocationInfo(actualFunctionDeclaration)).toEqual(utils_1.stripLocationInfo(expectedFunctionDeclaration));
    };
    it('wraps the program body in a FunctionDeclaration', () => {
        const actualCode = `
      const square = x => x * x;
      const x = 42;
    `;
        const expectedCode = `
      function ${functionName}() {
        const square = x => x * x;
        const x = 42;

        return pair(null, list());
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns only exported variables', () => {
        const actualCode = `
      const x = 42;
      export let y = 53;
    `;
        const expectedCode = `
      function ${functionName}() {
        const x = 42;
        let y = 53;

        return pair(null, list(pair("y", y)));
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns only exported functions', () => {
        const actualCode = `
      function id(x) {
        return x;
      }
      export function square(x) {
        return x * x;
      }
    `;
        const expectedCode = `
      function ${functionName}() {
        function id(x) {
          return x;
        }
        function square(x) {
          return x * x;
        }

        return pair(null, list(pair("square", square)));
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns only exported arrow functions', () => {
        const actualCode = `
      const id = x => x;
      export const square = x => x * x;
    `;
        const expectedCode = `
      function ${functionName}() {
        const id = x => x;
        const square = x => x * x;

        return pair(null, list(pair("square", square)));
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns all exported names when there are multiple', () => {
        const actualCode = `
      export const x = 42;
      export let y = 53;
      export function id(x) {
        return x;
      }
      export const square = x => x * x;
    `;
        const expectedCode = `
      function ${functionName}() {
        const x = 42;
        let y = 53;
        function id(x) {
          return x;
        }
        const square = x => x * x;

        return pair(null, list(pair("x", x), pair("y", y), pair("id", id), pair("square", square)));
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns all exported names in {}-notation', () => {
        const actualCode = `
      const x = 42;
      let y = 53;
      function id(x) {
        return x;
      }
      const square = x => x * x;
      export { x, y, id, square };
    `;
        const expectedCode = `
      function ${functionName}() {
        const x = 42;
        let y = 53;
        function id(x) {
          return x;
        }
        const square = x => x * x;

        return pair(null, list(pair("x", x), pair("y", y), pair("id", id), pair("square", square)));
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns renamed exported names', () => {
        const actualCode = `
      const x = 42;
      let y = 53;
      function id(x) {
        return x;
      }
      const square = x => x * x;
      export { x as y, y as x, id as identity, square as sq };
    `;
        const expectedCode = `
      function ${functionName}() {
        const x = 42;
        let y = 53;
        function id(x) {
          return x;
        }
        const square = x => x * x;

        return pair(null, list(pair("y", x), pair("x", y), pair("identity", id), pair("sq", square)));
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    // Default exports of variable declarations and arrow function declarations
    // is not allowed in ES6, and will be caught by the Acorn parser.
    it('returns default export of function declaration', () => {
        const actualCode = `
      function id(x) {
        return x;
      }
      export default function square(x) {
        return x * x;
      }
    `;
        const expectedCode = `
      function ${functionName}() {
        function id(x) {
          return x;
        }
        function square(x) {
          return x * x;
        }

        return pair(square, list());
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns default export of variable', () => {
        const actualCode = `
      const x = 42;
      let y = 53;
      export default y;
    `;
        const expectedCode = `
      function ${functionName}() {
        const x = 42;
        let y = 53;

        return pair(y, list());
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns default export of function', () => {
        const actualCode = `
      function id(x) {
        return x;
      }
      function square(x) {
        return x * x;
      }
      export default square;
    `;
        const expectedCode = `
      function ${functionName}() {
        function id(x) {
          return x;
        }
        function square(x) {
          return x * x;
        }

        return pair(square, list());
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns default export of arrow function', () => {
        const actualCode = `
      const id = x => x;
      const square = x => x * x;
      export default square;
    `;
        const expectedCode = `
      function ${functionName}() {
        const id = x => x;
        const square = x => x * x;

        return pair(square, list());
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns default export of expression 1', () => {
        const actualCode = `
      export default 123;
    `;
        const expectedCode = `
      function ${functionName}() {
        return pair(123, list());
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns default export of expression 2', () => {
        const actualCode = `
      export default "Hello world!";
    `;
        const expectedCode = `
      function ${functionName}() {
        return pair("Hello world!", list());
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns default export of expression 3', () => {
        const actualCode = `
      export default 123 + 456;
    `;
        const expectedCode = `
      function ${functionName}() {
        // Expressions will be reduced when the function is invoked.
        return pair(123 + 456, list());
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns default export of expression 4', () => {
        const actualCode = `
      function square(x) {
        return x * x;
      }
      export default square(10);
    `;
        const expectedCode = `
      function ${functionName}() {
        function square(x) {
          return x * x;
        }

        // Expressions will be reduced when the function is invoked.
        return pair(square(10), list());
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('returns default export in {}-notation', () => {
        const actualCode = `
      const x = 42;
      let y = 53;
      function square(x) {
        return x * x;
      }
      const id = x => x;
      export { x, y, square as default, id };
    `;
        const expectedCode = `
      function ${functionName}() {
        const x = 42;
        let y = 53;
        function square(x) {
          return x * x;
        }
        const id = x => x;

        return pair(square, list(pair("x", x), pair("y", y), pair("id", id)));
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('handles named imports of local (non-Source) modules', () => {
        const actualCode = `
      import { x } from "./b.js";
      import { y } from "../dir2/c.js";
    `;
        const expectedCode = `
      function ${functionName}(___$dir$b$$dot$$js___, ___$dir2$c$$dot$$js___) {
        const x = __access_export__(___$dir$b$$dot$$js___, "x");
        const y = __access_export__(___$dir2$c$$dot$$js___, "y");

        return pair(null, list());
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('handles default imports of local (non-Source) modules', () => {
        const actualCode = `
      import x from "./b.js";
      import y from "../dir2/c.js";
    `;
        const expectedCode = `
      function ${functionName}(___$dir$b$$dot$$js___, ___$dir2$c$$dot$$js___) {
        const x = __access_export__(___$dir$b$$dot$$js___, "${localImport_prelude_1.defaultExportLookupName}");
        const y = __access_export__(___$dir2$c$$dot$$js___, "${localImport_prelude_1.defaultExportLookupName}");

        return pair(null, list());
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('limits resolved file paths to the root of the file system `/`', () => {
        const actualCode = `
      import { x } from "../../../../../../../../../dir/b.js";
      import { y } from "../../../../../dir2/c.js";
    `;
        const expectedCode = `
      function ${functionName}(___$dir$b$$dot$$js___, ___$dir2$c$$dot$$js___) {
        const x = __access_export__(___$dir$b$$dot$$js___, "x");
        const y = __access_export__(___$dir2$c$$dot$$js___, "y");

        return pair(null, list());
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('merges file paths that resolve to the same file', () => {
        const actualCode = `
      import { x } from "./b.js";
      import { y } from "../dir/b.js";
    `;
        const expectedCode = `
      function ${functionName}(___$dir$b$$dot$$js___) {
        const x = __access_export__(___$dir$b$$dot$$js___, "x");
        const y = __access_export__(___$dir$b$$dot$$js___, "y");

        return pair(null, list());
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    it('handles named imports of local (non-Source) modules when split across multiple import declarations', () => {
        const actualCode = `
      import { x } from "./b.js";
      import { y } from "./b.js";
      import { z } from "./b.js";

      export const a = x + y + z;
    `;
        const expectedCode = `
      function ${functionName}(___$dir$b$$dot$$js___) {
        const x = __access_export__(___$dir$b$$dot$$js___, "x");
        const y = __access_export__(___$dir$b$$dot$$js___, "y");
        const z = __access_export__(___$dir$b$$dot$$js___, "z");

        const a = x + y + z;

        return pair(null, list(pair("a", a)));
      }
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
});
//# sourceMappingURL=transformProgramToFunctionDeclaration.js.map