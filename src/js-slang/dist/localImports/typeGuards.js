"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// It is necessary to write this type guard like this as the 'type' of both
// 'Directive' & 'ExpressionStatement' is 'ExpressionStatement'.
//
// export interface Directive extends BaseNode {
//   type: "ExpressionStatement";
//   expression: Literal;
//   directive: string;
// }
//
// export interface ExpressionStatement extends BaseStatement {
//   type: "ExpressionStatement";
//   expression: Expression;
// }
//
// As such, we check whether the 'directive' property exists on the object
// instead in order to differentiate between the two.
exports.isDirective = (node) => {
    return 'directive' in node;
};
exports.isModuleDeclaration = (node) => {
    return [
        'ImportDeclaration',
        'ExportNamedDeclaration',
        'ExportDefaultDeclaration',
        'ExportAllDeclaration'
    ].includes(node.type);
};
exports.isStatement = (node) => {
    return !exports.isDirective(node) && !exports.isModuleDeclaration(node);
};
function isDeclaration(node) {
    // export type Declaration =
    //       FunctionDeclaration | VariableDeclaration | ClassDeclaration;
    return (node.type === 'VariableDeclaration' ||
        node.type === 'FunctionDeclaration' ||
        node.type === 'ClassDeclaration');
}
exports.isDeclaration = isDeclaration;
function isImportDeclaration(node) {
    return node.type === 'ImportDeclaration';
}
exports.isImportDeclaration = isImportDeclaration;
//# sourceMappingURL=typeGuards.js.map