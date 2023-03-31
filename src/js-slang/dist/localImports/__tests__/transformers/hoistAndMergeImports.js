"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../../../mocks/context");
const parser_1 = require("../../../parser/parser");
const types_1 = require("../../../types");
const hoistAndMergeImports_1 = require("../../transformers/hoistAndMergeImports");
const utils_1 = require("../utils");
describe('hoistAndMergeImports', () => {
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
        hoistAndMergeImports_1.hoistAndMergeImports(actualProgram);
        expect(utils_1.stripLocationInfo(actualProgram)).toEqual(utils_1.stripLocationInfo(expectedProgram));
    };
    test('hoists import declarations to the top of the program', () => {
        const actualCode = `
      function square(x) {
        return x * x;
      }

      import { a, b, c } from "./a.js";

      export { square };

      import x from "source-module";

      square(3);
    `;
        const expectedCode = `
      import { a, b, c } from "./a.js";
      import x from "source-module";

      function square(x) {
        return x * x;
      }

      export { square };

      square(3);
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    test('merges import declarations from the same module', () => {
        const actualCode = `
      import { a, b, c } from "./a.js";
      import { d } from "./a.js";
      import { x } from "./b.js";
      import { e, f } from "./a.js";
    `;
        const expectedCode = `
      import { a, b, c, d, e, f } from "./a.js";
      import { x } from "./b.js";
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
});
//# sourceMappingURL=hoistAndMergeImports.js.map