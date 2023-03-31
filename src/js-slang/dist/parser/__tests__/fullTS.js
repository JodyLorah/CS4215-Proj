"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const context_1 = require("../../mocks/context");
const types_1 = require("../../types");
const fullTS_1 = require("../fullTS");
const parser = new fullTS_1.FullTSParser();
let context = context_1.mockContext(types_1.Chapter.FULL_TS);
beforeEach(() => {
    context = context_1.mockContext(types_1.Chapter.FULL_TS);
});
describe('fullTS parser', () => {
    it('formats errors correctly', () => {
        const code = `type StringOrNumber = string | number;
      const x: StringOrNumber = true;
    `;
        parser.parse(code, context);
        expect(__1.parseError(context.errors)).toMatchInlineSnapshot(`"Line 2: Type \'boolean\' is not assignable to type \'StringOrNumber\'."`);
    });
    it('allows usage of builtins/preludes', () => {
        const code = `const xs = list(1);
      const ys = list(1);
      equal(xs, ys);
    `;
        parser.parse(code, context);
        expect(__1.parseError(context.errors)).toMatchInlineSnapshot(`""`);
    });
    it('allows usage of imports/modules', () => {
        const code = `import { show, heart } from "rune";
      show(heart);
    `;
        parser.parse(code, context);
        expect(__1.parseError(context.errors)).toMatchInlineSnapshot(`""`);
    });
    it('returns ESTree compliant program', () => {
        const code = `type StringOrNumber = string | number;
      const x: StringOrNumber = 1;
    `;
        // Resulting program should not have node for type alias declaration
        const parsedProgram = parser.parse(code, context);
        expect(parsedProgram).toMatchSnapshot();
    });
});
//# sourceMappingURL=fullTS.js.map