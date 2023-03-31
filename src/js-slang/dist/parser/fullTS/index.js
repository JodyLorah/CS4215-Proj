"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("@babel/parser");
const bootstrap_1 = require("@ts-morph/bootstrap");
const typeErrorChecker_1 = require("../../typeChecker/typeErrorChecker");
const errors_1 = require("../errors");
const utils_1 = require("../source/typed/utils");
const utils_2 = require("../utils");
const IMPORT_TOP_LEVEL_ERROR = 'An import declaration can only be used at the top level of a namespace or module.';
const START_OF_MODULE_ERROR = 'Cannot find module ';
class FullTSParser {
    parse(programStr, context, options, throwOnError) {
        let code = '';
        // Add builtins to code
        // Each declaration is replaced with a single constant declaration with type `any`
        // to reduce evaluation time
        for (const builtin of context.nativeStorage.builtins) {
            code += `const ${builtin[0]}: any = 1\n`;
        }
        // Add prelude functions to code
        // Each declaration is replaced with a single constant declaration with type `any`
        // to reduce evaluation time
        if (context.prelude) {
            const preludeFns = context.prelude.split('\nfunction ').slice(1);
            preludeFns.forEach(fnString => {
                const fnName = fnString.split('(')[0];
                // Functions in prelude that start with $ are not added
                if (fnName.startsWith('$')) {
                    return;
                }
                code += `const ${fnName}: any = 1\n`;
            });
        }
        // Get line offset
        const lineOffset = code.split('\n').length - 1;
        // Add program string to code string,
        // wrapping it in a block to allow redeclaration of variables
        code = code + '{' + programStr + '}';
        // Initialize file to analyze
        const project = bootstrap_1.createProjectSync({ useInMemoryFileSystem: true });
        const filename = 'program.ts';
        project.createSourceFile(filename, code);
        // Get TS diagnostics from file, formatted as TS error string
        const diagnostics = bootstrap_1.ts.getPreEmitDiagnostics(project.createProgram());
        const formattedString = project.formatDiagnosticsWithColorAndContext(diagnostics);
        // Reformat TS error string to Source error by getting line number using regex
        // This is because logic to retrieve line number is only present in
        // formatDiagnosticsWithColorAndContext and cannot be called directly
        const lineNumRegex = /(?<=\[7m)\d+/;
        diagnostics.forEach(diagnostic => {
            const message = diagnostic.messageText.toString();
            // Ignore errors regarding imports
            // as TS does not have information about Source modules
            if (message === IMPORT_TOP_LEVEL_ERROR || message.startsWith(START_OF_MODULE_ERROR)) {
                return;
            }
            const lineNumRegExpArr = lineNumRegex.exec(formattedString.split(message)[1]);
            const lineNum = (lineNumRegExpArr === null ? 0 : parseInt(lineNumRegExpArr[0])) - lineOffset;
            // Ignore any errors that occur in builtins/prelude (line number <= 0)
            if (lineNum <= 0) {
                return;
            }
            const position = { line: lineNum, column: 0, offset: 0 };
            context.errors.push(new errors_1.FatalSyntaxError(utils_2.positionToSourceLocation(position), message));
        });
        if (context.errors.length > 0) {
            return null;
        }
        // Parse code into Babel AST, which supports type syntax
        const ast = parser_1.parse(programStr, Object.assign(Object.assign({}, utils_2.defaultBabelOptions), { sourceFilename: options === null || options === void 0 ? void 0 : options.sourceFile, errorRecovery: throwOnError !== null && throwOnError !== void 0 ? throwOnError : true }));
        if (ast.errors.length) {
            ast.errors
                .filter(error => error instanceof SyntaxError)
                .forEach(error => {
                context.errors.push(new errors_1.FatalSyntaxError(utils_2.positionToSourceLocation(error.loc, options === null || options === void 0 ? void 0 : options.sourceFile), error.toString()));
            });
            return null;
        }
        // Transform Babel AST into ESTree AST
        const typedProgram = ast.program;
        const transpiledProgram = typeErrorChecker_1.removeTSNodes(typedProgram);
        utils_1.transformBabelASTToESTreeCompliantAST(transpiledProgram);
        return transpiledProgram;
    }
    validate(_ast, _context, _throwOnError) {
        return true;
    }
    toString() {
        return 'FullTSParser';
    }
}
exports.FullTSParser = FullTSParser;
//# sourceMappingURL=index.js.map