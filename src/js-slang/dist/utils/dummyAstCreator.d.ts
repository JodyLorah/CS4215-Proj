import * as es from 'estree';
import { BlockExpression } from '../types';
export declare const dummyLocation: () => es.SourceLocation;
export declare const dummyIdentifier: () => es.Identifier;
export declare const dummyLiteral: () => es.Literal;
export declare const dummyExpression: () => es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression;
export declare const dummyCallExpression: () => es.CallExpression;
export declare const dummyExpressionStatement: () => es.ExpressionStatement;
export declare const dummyStatement: () => es.Statement;
export declare const dummyBlockStatement: () => es.BlockStatement;
export declare const dummyArrowFunctionExpression: () => es.ArrowFunctionExpression;
export declare const dummyProgram: () => es.Program;
export declare const dummyReturnStatement: () => es.ReturnStatement;
export declare const dummyLogicalExpression: () => es.LogicalExpression;
export declare const dummyConditionalExpression: () => es.ConditionalExpression;
export declare const dummyArrayExpression: () => es.ArrayExpression;
export declare const dummyBinaryExpression: () => es.BinaryExpression;
export declare const dummyUnaryExpression: () => es.UnaryExpression;
export declare const dummyPrimitive: () => es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression;
export declare const dummyFunctionExpression: () => es.FunctionExpression;
export declare const dummyFunctionDeclaration: () => es.FunctionDeclaration;
export declare const dummyBlockExpression: () => BlockExpression;
export declare const dummyVariableDeclarator: () => es.VariableDeclarator;