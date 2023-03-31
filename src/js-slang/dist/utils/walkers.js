"use strict";
/*
acorn.Node differs from estree.Node, so we have this file to handle the `as any` type coercions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const walkers = require("acorn-walk");
exports.simple = walkers.simple;
exports.ancestor = walkers.ancestor;
exports.recursive = walkers.recursive;
exports.full = walkers.full;
exports.fullAncestor = walkers.fullAncestor;
exports.make = walkers.make;
exports.findNodeAt = walkers.findNodeAt;
exports.findNodeAround = walkers.findNodeAround;
exports.findNodeAfter = walkers.findNodeAfter;
exports.base = walkers.base;
//# sourceMappingURL=walkers.js.map