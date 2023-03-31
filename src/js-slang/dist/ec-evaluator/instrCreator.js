"use strict";
/**
 * Utility functions for creating the various agenda instructions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.resetInstr = () => ({
    instrType: types_1.InstrType.RESET
});
exports.whileInstr = (test, body, srcNode) => ({
    instrType: types_1.InstrType.WHILE,
    test,
    body,
    srcNode
});
exports.forInstr = (init, test, update, body, srcNode) => ({
    instrType: types_1.InstrType.FOR,
    init,
    test,
    update,
    body,
    srcNode
});
exports.assmtInstr = (symbol, constant, declaration, srcNode) => ({
    instrType: types_1.InstrType.ASSIGNMENT,
    symbol,
    constant,
    declaration,
    srcNode
});
exports.unOpInstr = (symbol, srcNode) => ({
    instrType: types_1.InstrType.UNARY_OP,
    symbol,
    srcNode
});
exports.binOpInstr = (symbol, srcNode) => ({
    instrType: types_1.InstrType.BINARY_OP,
    symbol,
    srcNode
});
exports.popInstr = () => ({ instrType: types_1.InstrType.POP });
exports.appInstr = (numOfArgs, srcNode) => ({
    instrType: types_1.InstrType.APPLICATION,
    numOfArgs,
    srcNode
});
exports.branchInstr = (consequent, alternate, srcNode) => ({
    instrType: types_1.InstrType.BRANCH,
    consequent,
    alternate,
    srcNode
});
exports.envInstr = (env) => ({
    instrType: types_1.InstrType.ENVIRONMENT,
    env
});
exports.pushUndefIfNeededInstr = () => ({
    instrType: types_1.InstrType.PUSH_UNDEFINED_IF_NEEDED
});
exports.arrLitInstr = (arity) => ({
    instrType: types_1.InstrType.ARRAY_LITERAL,
    arity
});
exports.arrAccInstr = () => ({
    instrType: types_1.InstrType.ARRAY_ACCESS
});
exports.arrAssmtInstr = () => ({
    instrType: types_1.InstrType.ARRAY_ASSIGNMENT
});
exports.markerInstr = () => ({
    instrType: types_1.InstrType.MARKER
});
exports.contInstr = () => ({
    instrType: types_1.InstrType.CONTINUE
});
exports.contMarkerInstr = () => ({
    instrType: types_1.InstrType.CONTINUE_MARKER
});
exports.breakInstr = () => ({
    instrType: types_1.InstrType.BREAK
});
exports.breakMarkerInstr = () => ({
    instrType: types_1.InstrType.BREAK_MARKER
});
// export const breakMarkerInstr = (): IInstr => ({ instrType: InstrTypes.BREAK_MARKER })
//# sourceMappingURL=instrCreator.js.map