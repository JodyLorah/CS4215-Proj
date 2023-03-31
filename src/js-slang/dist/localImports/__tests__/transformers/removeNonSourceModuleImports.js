"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../../../mocks/context");
const parser_1 = require("../../../parser/parser");
const types_1 = require("../../../types");
const removeNonSourceModuleImports_1 = require("../../transformers/removeNonSourceModuleImports");
const utils_1 = require("../utils");
describe('removeNonSourceModuleImports', () => {
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
        removeNonSourceModuleImports_1.removeNonSourceModuleImports(actualProgram);
        expect(utils_1.stripLocationInfo(actualProgram)).toEqual(utils_1.stripLocationInfo(expectedProgram));
    };
    test('removes ImportDefaultSpecifier nodes', () => {
        const actualCode = `
      import a from "./a.js";
      import x from "source-module";
    `;
        const expectedCode = '';
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
    // While 'removeNonSourceModuleImports' will remove ImportNamespaceSpecifier nodes, we
    // cannot actually test it because ImportNamespaceSpecifier nodes are banned in the parser.
    // test('removes ImportNamespaceSpecifier nodes', () => {
    //   const actualCode = `
    //     import * as a from "./a.js";
    //     import * as x from "source-module";
    //   `
    //   const expectedCode = ''
    //   assertASTsAreEquivalent(actualCode, expectedCode)
    // })
    test('removes only non-Source module ImportSpecifier nodes', () => {
        const actualCode = `
      import { a, b, c } from "./a.js";
      import { x, y, z } from "source-module";
    `;
        const expectedCode = `
      import { x, y, z } from "source-module";
    `;
        assertASTsAreEquivalent(actualCode, expectedCode);
    });
});
//# sourceMappingURL=removeNonSourceModuleImports.js.map