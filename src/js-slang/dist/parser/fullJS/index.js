"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const acorn_1 = require("acorn");
const errors_1 = require("../errors");
const utils_1 = require("../utils");
class FullJSParser {
    parse(programStr, context, options, throwOnError) {
        try {
            return acorn_1.parse(programStr, Object.assign({ sourceType: 'module', ecmaVersion: 'latest', locations: true }, options));
        }
        catch (error) {
            if (error instanceof SyntaxError) {
                error = new errors_1.FatalSyntaxError(utils_1.positionToSourceLocation(error.loc), error.toString());
            }
            if (throwOnError)
                throw error;
            context.errors.push(error);
        }
        return null;
    }
    validate(_ast, _context, _throwOnError) {
        return true;
    }
    toString() {
        return 'FullJSParser';
    }
}
exports.FullJSParser = FullJSParser;
//# sourceMappingURL=index.js.map