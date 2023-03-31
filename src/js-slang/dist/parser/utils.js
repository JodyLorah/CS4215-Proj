"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const acorn_1 = require("acorn");
const acorn_loose_1 = require("acorn-loose");
const constants_1 = require("../constants");
const validator_1 = require("../validator/validator");
const errors_1 = require("./errors");
/**
 * Generates options object for acorn parser
 *
 * @param ecmaVersion ECMA version
 * @param errors error container
 * @param throwOnError throw on error if true else push to error container and resume exec
 * @param options partial acorn options
 * @returns
 */
exports.createAcornParserOptions = (ecmaVersion, errors, options, throwOnError) => (Object.assign({ ecmaVersion, sourceType: 'module', locations: true, onInsertedSemicolon(_tokenEndPos, tokenPos) {
        const error = new errors_1.MissingSemicolonError(exports.positionToSourceLocation(tokenPos, options === null || options === void 0 ? void 0 : options.sourceFile));
        if (throwOnError)
            throw error;
        errors === null || errors === void 0 ? void 0 : errors.push(error);
    },
    onTrailingComma(_tokenEndPos, tokenPos) {
        const error = new errors_1.TrailingCommaError(exports.positionToSourceLocation(tokenPos, options === null || options === void 0 ? void 0 : options.sourceFile));
        if (throwOnError)
            throw error;
        errors === null || errors === void 0 ? void 0 : errors.push(error);
    } }, options));
/**
 * Parses a single expression at a specified offset
 *
 * @param programStr program string
 * @param offset position offset
 * @param ecmaVersion ECMA version
 * @returns acorn AST Node if parse succeeds else null
 */
function parseAt(programStr, offset, ecmaVersion = constants_1.DEFAULT_ECMA_VERSION) {
    try {
        return acorn_1.parseExpressionAt(programStr, offset, { ecmaVersion });
    }
    catch (_error) {
        return null;
    }
}
exports.parseAt = parseAt;
/**
 * Parse a program, returning alongside comments found within that program
 *
 * @param programStr program string
 * @param ecmaVersion ECMA version
 * @returns tuple consisting of the parsed program, and a list of comments found within the program string
 */
function parseWithComments(programStr, ecmaVersion = constants_1.DEFAULT_ECMA_VERSION) {
    let comments = [];
    const acornOptions = exports.createAcornParserOptions(ecmaVersion, undefined, {
        onComment: comments
    }, undefined);
    let ast;
    try {
        ast = acorn_1.parse(programStr, acornOptions);
    }
    catch (_a) {
        comments = [];
        ast = acorn_loose_1.parse(programStr, acornOptions);
    }
    return [ast, comments];
}
exports.parseWithComments = parseWithComments;
/**
 * Parse program with error-tolerant acorn parser
 *
 * @param programStr program string
 * @param context js-slang context
 * @returns ast for program string
 */
function looseParse(programStr, context) {
    return acorn_loose_1.parse(programStr, exports.createAcornParserOptions(constants_1.DEFAULT_ECMA_VERSION, context.errors));
}
exports.looseParse = looseParse;
/**
 * TODO
 *
 * @param programStr program string
 * @param context js-slang context
 * @returns ast for program string
 */
function typedParse(programStr, context) {
    const ast = looseParse(programStr, context);
    return validator_1.validateAndAnnotate(ast, context);
}
exports.typedParse = typedParse;
/**
 * Converts acorn parser Position object to SourceLocation object
 *
 * @param position acorn Position object
 * @returns SourceLocation
 */
exports.positionToSourceLocation = (position, source) => ({
    start: Object.assign({}, position),
    end: Object.assign(Object.assign({}, position), { column: position.column + 1 }),
    source
});
exports.defaultBabelOptions = {
    sourceType: 'module',
    plugins: ['typescript', 'estree']
};
//# sourceMappingURL=utils.js.map