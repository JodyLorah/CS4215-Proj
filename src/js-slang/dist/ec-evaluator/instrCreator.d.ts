/**
 * Utility functions for creating the various agenda instructions.
 */
import * as es from 'estree';
import { Environment } from '../types';
import { AppInstr, ArrLitInstr, AssmtInstr, BinOpInstr, BranchInstr, EnvInstr, ForInstr, Instr, UnOpInstr, WhileInstr } from './types';
export declare const resetInstr: () => Instr;
export declare const whileInstr: (test: es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression, body: es.Statement, srcNode: es.AssignmentProperty | es.Property | es.CatchClause | es.ClassDeclaration | es.ClassExpression | es.ClassBody | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.FunctionDeclaration | es.MethodDefinition | es.ImportDeclaration | es.ExportNamedDeclaration | es.ExportDefaultDeclaration | es.ExportAllDeclaration | es.ImportSpecifier | es.ImportDefaultSpecifier | es.ImportNamespaceSpecifier | es.ExportSpecifier | es.ObjectPattern | es.ArrayPattern | es.RestElement | es.AssignmentPattern | es.PrivateIdentifier | es.Program | es.PropertyDefinition | es.SpreadElement | es.ExpressionStatement | es.BlockStatement | es.StaticBlock | es.EmptyStatement | es.DebuggerStatement | es.WithStatement | es.ReturnStatement | es.LabeledStatement | es.BreakStatement | es.ContinueStatement | es.IfStatement | es.SwitchStatement | es.ThrowStatement | es.TryStatement | es.WhileStatement | es.DoWhileStatement | es.ForStatement | es.ForInStatement | es.ForOfStatement | es.VariableDeclaration | es.Super | es.SwitchCase | es.TemplateElement | es.VariableDeclarator) => WhileInstr;
export declare const forInstr: (init: es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.VariableDeclaration, test: es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression, update: es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression, body: es.Statement, srcNode: es.AssignmentProperty | es.Property | es.CatchClause | es.ClassDeclaration | es.ClassExpression | es.ClassBody | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.FunctionDeclaration | es.MethodDefinition | es.ImportDeclaration | es.ExportNamedDeclaration | es.ExportDefaultDeclaration | es.ExportAllDeclaration | es.ImportSpecifier | es.ImportDefaultSpecifier | es.ImportNamespaceSpecifier | es.ExportSpecifier | es.ObjectPattern | es.ArrayPattern | es.RestElement | es.AssignmentPattern | es.PrivateIdentifier | es.Program | es.PropertyDefinition | es.SpreadElement | es.ExpressionStatement | es.BlockStatement | es.StaticBlock | es.EmptyStatement | es.DebuggerStatement | es.WithStatement | es.ReturnStatement | es.LabeledStatement | es.BreakStatement | es.ContinueStatement | es.IfStatement | es.SwitchStatement | es.ThrowStatement | es.TryStatement | es.WhileStatement | es.DoWhileStatement | es.ForStatement | es.ForInStatement | es.ForOfStatement | es.VariableDeclaration | es.Super | es.SwitchCase | es.TemplateElement | es.VariableDeclarator) => ForInstr;
export declare const assmtInstr: (symbol: string, constant: boolean, declaration: boolean, srcNode: es.AssignmentProperty | es.Property | es.CatchClause | es.ClassDeclaration | es.ClassExpression | es.ClassBody | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.FunctionDeclaration | es.MethodDefinition | es.ImportDeclaration | es.ExportNamedDeclaration | es.ExportDefaultDeclaration | es.ExportAllDeclaration | es.ImportSpecifier | es.ImportDefaultSpecifier | es.ImportNamespaceSpecifier | es.ExportSpecifier | es.ObjectPattern | es.ArrayPattern | es.RestElement | es.AssignmentPattern | es.PrivateIdentifier | es.Program | es.PropertyDefinition | es.SpreadElement | es.ExpressionStatement | es.BlockStatement | es.StaticBlock | es.EmptyStatement | es.DebuggerStatement | es.WithStatement | es.ReturnStatement | es.LabeledStatement | es.BreakStatement | es.ContinueStatement | es.IfStatement | es.SwitchStatement | es.ThrowStatement | es.TryStatement | es.WhileStatement | es.DoWhileStatement | es.ForStatement | es.ForInStatement | es.ForOfStatement | es.VariableDeclaration | es.Super | es.SwitchCase | es.TemplateElement | es.VariableDeclarator) => AssmtInstr;
export declare const unOpInstr: (symbol: es.UnaryOperator, srcNode: es.AssignmentProperty | es.Property | es.CatchClause | es.ClassDeclaration | es.ClassExpression | es.ClassBody | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.FunctionDeclaration | es.MethodDefinition | es.ImportDeclaration | es.ExportNamedDeclaration | es.ExportDefaultDeclaration | es.ExportAllDeclaration | es.ImportSpecifier | es.ImportDefaultSpecifier | es.ImportNamespaceSpecifier | es.ExportSpecifier | es.ObjectPattern | es.ArrayPattern | es.RestElement | es.AssignmentPattern | es.PrivateIdentifier | es.Program | es.PropertyDefinition | es.SpreadElement | es.ExpressionStatement | es.BlockStatement | es.StaticBlock | es.EmptyStatement | es.DebuggerStatement | es.WithStatement | es.ReturnStatement | es.LabeledStatement | es.BreakStatement | es.ContinueStatement | es.IfStatement | es.SwitchStatement | es.ThrowStatement | es.TryStatement | es.WhileStatement | es.DoWhileStatement | es.ForStatement | es.ForInStatement | es.ForOfStatement | es.VariableDeclaration | es.Super | es.SwitchCase | es.TemplateElement | es.VariableDeclarator) => UnOpInstr;
export declare const binOpInstr: (symbol: es.BinaryOperator, srcNode: es.AssignmentProperty | es.Property | es.CatchClause | es.ClassDeclaration | es.ClassExpression | es.ClassBody | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.FunctionDeclaration | es.MethodDefinition | es.ImportDeclaration | es.ExportNamedDeclaration | es.ExportDefaultDeclaration | es.ExportAllDeclaration | es.ImportSpecifier | es.ImportDefaultSpecifier | es.ImportNamespaceSpecifier | es.ExportSpecifier | es.ObjectPattern | es.ArrayPattern | es.RestElement | es.AssignmentPattern | es.PrivateIdentifier | es.Program | es.PropertyDefinition | es.SpreadElement | es.ExpressionStatement | es.BlockStatement | es.StaticBlock | es.EmptyStatement | es.DebuggerStatement | es.WithStatement | es.ReturnStatement | es.LabeledStatement | es.BreakStatement | es.ContinueStatement | es.IfStatement | es.SwitchStatement | es.ThrowStatement | es.TryStatement | es.WhileStatement | es.DoWhileStatement | es.ForStatement | es.ForInStatement | es.ForOfStatement | es.VariableDeclaration | es.Super | es.SwitchCase | es.TemplateElement | es.VariableDeclarator) => BinOpInstr;
export declare const popInstr: () => Instr;
export declare const appInstr: (numOfArgs: number, srcNode: es.CallExpression) => AppInstr;
export declare const branchInstr: (consequent: es.ClassDeclaration | es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.FunctionDeclaration | es.ExpressionStatement | es.BlockStatement | es.StaticBlock | es.EmptyStatement | es.DebuggerStatement | es.WithStatement | es.ReturnStatement | es.LabeledStatement | es.BreakStatement | es.ContinueStatement | es.IfStatement | es.SwitchStatement | es.ThrowStatement | es.TryStatement | es.WhileStatement | es.DoWhileStatement | es.ForStatement | es.ForInStatement | es.ForOfStatement | es.VariableDeclaration, alternate: es.ClassDeclaration | es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.FunctionDeclaration | es.ExpressionStatement | es.BlockStatement | es.StaticBlock | es.EmptyStatement | es.DebuggerStatement | es.WithStatement | es.ReturnStatement | es.LabeledStatement | es.BreakStatement | es.ContinueStatement | es.IfStatement | es.SwitchStatement | es.ThrowStatement | es.TryStatement | es.WhileStatement | es.DoWhileStatement | es.ForStatement | es.ForInStatement | es.ForOfStatement | es.VariableDeclaration | null | undefined, srcNode: es.AssignmentProperty | es.Property | es.CatchClause | es.ClassDeclaration | es.ClassExpression | es.ClassBody | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.FunctionDeclaration | es.MethodDefinition | es.ImportDeclaration | es.ExportNamedDeclaration | es.ExportDefaultDeclaration | es.ExportAllDeclaration | es.ImportSpecifier | es.ImportDefaultSpecifier | es.ImportNamespaceSpecifier | es.ExportSpecifier | es.ObjectPattern | es.ArrayPattern | es.RestElement | es.AssignmentPattern | es.PrivateIdentifier | es.Program | es.PropertyDefinition | es.SpreadElement | es.ExpressionStatement | es.BlockStatement | es.StaticBlock | es.EmptyStatement | es.DebuggerStatement | es.WithStatement | es.ReturnStatement | es.LabeledStatement | es.BreakStatement | es.ContinueStatement | es.IfStatement | es.SwitchStatement | es.ThrowStatement | es.TryStatement | es.WhileStatement | es.DoWhileStatement | es.ForStatement | es.ForInStatement | es.ForOfStatement | es.VariableDeclaration | es.Super | es.SwitchCase | es.TemplateElement | es.VariableDeclarator) => BranchInstr;
export declare const envInstr: (env: Environment) => EnvInstr;
export declare const pushUndefIfNeededInstr: () => Instr;
export declare const arrLitInstr: (arity: number) => ArrLitInstr;
export declare const arrAccInstr: () => Instr;
export declare const arrAssmtInstr: () => Instr;
export declare const markerInstr: () => Instr;
export declare const contInstr: () => Instr;
export declare const contMarkerInstr: () => Instr;
export declare const breakInstr: () => Instr;
export declare const breakMarkerInstr: () => Instr;