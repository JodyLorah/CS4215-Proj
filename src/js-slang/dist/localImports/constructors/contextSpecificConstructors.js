"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localImport_prelude_1 = require("../../stdlib/localImport.prelude");
const baseConstructors_1 = require("./baseConstructors");
/**
 * Constructs a call to the `pair` function.
 *
 * @param head The head of the pair.
 * @param tail The tail of the pair.
 */
exports.createPairCallExpression = (head, tail) => {
    return baseConstructors_1.createCallExpression('pair', [head, tail]);
};
/**
 * Constructs a call to the `list` function.
 *
 * @param listElements The elements of the list.
 */
exports.createListCallExpression = (listElements) => {
    return baseConstructors_1.createCallExpression('list', listElements);
};
/**
 * Constructs the AST equivalent of:
 * const importedName = __access_export__(functionName, lookupName);
 *
 * @param functionName The name of the transformed function declaration to import from.
 * @param importedName The name of the import.
 * @param lookupName   The name to lookup in the transformed function declaration.
 */
exports.createImportedNameDeclaration = (functionName, importedName, lookupName) => {
    const callExpression = baseConstructors_1.createCallExpression(localImport_prelude_1.accessExportFunctionName, [
        baseConstructors_1.createIdentifier(functionName),
        baseConstructors_1.createLiteral(lookupName)
    ]);
    const variableDeclarator = baseConstructors_1.createVariableDeclarator(importedName, callExpression);
    return baseConstructors_1.createVariableDeclaration([variableDeclarator], 'const');
};
/**
 * Constructs the AST equivalent of:
 * const variableName = functionName(...functionArgs);
 *
 * @param functionName The name of the transformed function declaration to invoke.
 * @param variableName The name of the variable holding the result of the function invocation.
 * @param functionArgs The arguments to be passed when invoking the function.
 */
exports.createInvokedFunctionResultVariableDeclaration = (functionName, variableName, functionArgs) => {
    const callExpression = baseConstructors_1.createCallExpression(functionName, functionArgs);
    const variableDeclarator = baseConstructors_1.createVariableDeclarator(baseConstructors_1.createIdentifier(variableName), callExpression);
    return baseConstructors_1.createVariableDeclaration([variableDeclarator], 'const');
};
/**
 * Clones the import specifier, but only the properties
 * that are part of its ESTree AST type. This is useful for
 * stripping out extraneous information on the import
 * specifier AST nodes (such as the location information
 * that the Acorn parser adds).
 *
 * @param importSpecifier The import specifier to be cloned.
 */
exports.cloneAndStripImportSpecifier = (importSpecifier) => {
    switch (importSpecifier.type) {
        case 'ImportSpecifier':
            return {
                type: 'ImportSpecifier',
                local: baseConstructors_1.createIdentifier(importSpecifier.local.name),
                imported: baseConstructors_1.createIdentifier(importSpecifier.imported.name)
            };
        case 'ImportDefaultSpecifier':
            return {
                type: 'ImportDefaultSpecifier',
                local: baseConstructors_1.createIdentifier(importSpecifier.local.name)
            };
        case 'ImportNamespaceSpecifier':
            return {
                type: 'ImportNamespaceSpecifier',
                local: baseConstructors_1.createIdentifier(importSpecifier.local.name)
            };
    }
};
//# sourceMappingURL=contextSpecificConstructors.js.map