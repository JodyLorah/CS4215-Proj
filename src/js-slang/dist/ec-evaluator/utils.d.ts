import * as es from 'estree';
import { Context } from '..';
import { RuntimeSourceError } from '../errors/runtimeSourceError';
import Closure from '../interpreter/closure';
import { Environment, Frame, Value } from '../types';
import { Agenda } from './interpreter';
import { AgendaItem, AssmtInstr, Instr } from './types';
/**
 * Stack is implemented for agenda and stash registers.
 */
interface IStack<T> {
    push(...items: T[]): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}
export declare class Stack<T> implements IStack<T> {
    private storage;
    constructor();
    push(...items: T[]): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}
/**
 * Typeguard for Instr to distinguish between program statements and instructions.
 *
 * @param command An AgendaItem
 * @returns true if the AgendaItem is an instruction and false otherwise.
 */
export declare const isInstr: (command: AgendaItem) => command is Instr;
/**
 * Typeguard for esNode to distinguish between program statements and instructions.
 *
 * @param command An AgendaItem
 * @returns true if the AgendaItem is an esNode and false if it is an instruction.
 */
export declare const isNode: (command: AgendaItem) => command is es.AssignmentProperty | es.Property | es.CatchClause | es.ClassDeclaration | es.ClassExpression | es.ClassBody | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.FunctionDeclaration | es.MethodDefinition | es.ImportDeclaration | es.ExportNamedDeclaration | es.ExportDefaultDeclaration | es.ExportAllDeclaration | es.ImportSpecifier | es.ImportDefaultSpecifier | es.ImportNamespaceSpecifier | es.ExportSpecifier | es.ObjectPattern | es.ArrayPattern | es.RestElement | es.AssignmentPattern | es.PrivateIdentifier | es.Program | es.PropertyDefinition | es.SpreadElement | es.ExpressionStatement | es.BlockStatement | es.StaticBlock | es.EmptyStatement | es.DebuggerStatement | es.WithStatement | es.ReturnStatement | es.LabeledStatement | es.BreakStatement | es.ContinueStatement | es.IfStatement | es.SwitchStatement | es.ThrowStatement | es.TryStatement | es.WhileStatement | es.DoWhileStatement | es.ForStatement | es.ForInStatement | es.ForOfStatement | es.VariableDeclaration | es.Super | es.SwitchCase | es.TemplateElement | es.VariableDeclarator;
/**
 * Typeguard for esIdentifier. To verify if an esNode is an esIdentifier.
 *
 * @param node an esNode
 * @returns true if node is an esIdentifier, false otherwise.
 */
export declare const isIdentifier: (node: es.AssignmentProperty | es.Property | es.CatchClause | es.ClassDeclaration | es.ClassExpression | es.ClassBody | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.FunctionDeclaration | es.MethodDefinition | es.ImportDeclaration | es.ExportNamedDeclaration | es.ExportDefaultDeclaration | es.ExportAllDeclaration | es.ImportSpecifier | es.ImportDefaultSpecifier | es.ImportNamespaceSpecifier | es.ExportSpecifier | es.ObjectPattern | es.ArrayPattern | es.RestElement | es.AssignmentPattern | es.PrivateIdentifier | es.Program | es.PropertyDefinition | es.SpreadElement | es.ExpressionStatement | es.BlockStatement | es.StaticBlock | es.EmptyStatement | es.DebuggerStatement | es.WithStatement | es.ReturnStatement | es.LabeledStatement | es.BreakStatement | es.ContinueStatement | es.IfStatement | es.SwitchStatement | es.ThrowStatement | es.TryStatement | es.WhileStatement | es.DoWhileStatement | es.ForStatement | es.ForInStatement | es.ForOfStatement | es.VariableDeclaration | es.Super | es.SwitchCase | es.TemplateElement | es.VariableDeclarator) => node is es.Identifier;
/**
 * Typeguard for esBlockStatement. To verify if a function body is a block statement.
 *
 * @param body the function body
 * @returns true if node is an esIdentifier, false otherwise.
 */
export declare const isExpressionBody: (body: es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.BlockStatement) => body is es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression;
/**
 * Typeguard for AssmtInstr. To verify if an instruction is an assignment instruction.
 *
 * @param instr an instruction
 * @returns true if instr is an AssmtInstr, false otherwise.
 */
export declare const isAssmtInstr: (instr: Instr) => instr is AssmtInstr;
/**
 * A helper function for handling sequences of statements.
 * Statements must be pushed in reverse order, and each statement is separated by a pop
 * instruction so that only the result of the last statement remains on stash.
 * Value producing statements have an extra pop instruction.
 *
 * @param seq Array of statements.
 * @returns Array of commands to be pushed into agenda.
 */
export declare const handleSequence: (seq: es.Statement[]) => AgendaItem[];
/**
 * This function is used for ConditionalExpressions and IfStatements, to create the sequence
 * of agenda items to be added.
 */
export declare const reduceConditional: (node: es.ConditionalExpression | es.IfStatement) => AgendaItem[];
/**
 * To determine if an agenda item is value producing. JavaScript distinguishes valu producing
 * statements and non-value producing statements.
 * Refer to https://sourceacademy.nus.edu.sg/sicpjs/4.1.2 exercise 4.8.
 *
 * @param command Agenda item to determine if it is value producing.
 * @returns true if it is value producing, false otherwise.
 */
export declare const valueProducing: (command: es.AssignmentProperty | es.Property | es.CatchClause | es.ClassDeclaration | es.ClassExpression | es.ClassBody | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.FunctionDeclaration | es.MethodDefinition | es.ImportDeclaration | es.ExportNamedDeclaration | es.ExportDefaultDeclaration | es.ExportAllDeclaration | es.ImportSpecifier | es.ImportDefaultSpecifier | es.ImportNamespaceSpecifier | es.ExportSpecifier | es.ObjectPattern | es.ArrayPattern | es.RestElement | es.AssignmentPattern | es.PrivateIdentifier | es.Program | es.PropertyDefinition | es.SpreadElement | es.ExpressionStatement | es.BlockStatement | es.StaticBlock | es.EmptyStatement | es.DebuggerStatement | es.WithStatement | es.ReturnStatement | es.LabeledStatement | es.BreakStatement | es.ContinueStatement | es.IfStatement | es.SwitchStatement | es.ThrowStatement | es.TryStatement | es.WhileStatement | es.DoWhileStatement | es.ForStatement | es.ForInStatement | es.ForOfStatement | es.VariableDeclaration | es.Super | es.SwitchCase | es.TemplateElement | es.VariableDeclarator) => boolean;
/**
 * Environments
 */
export declare const currentEnvironment: (context: Context<any>) => Environment;
export declare const createEnvironment: (closure: Closure, args: any[], callExpression: es.CallExpression) => Environment;
export declare const popEnvironment: (context: Context<any>) => Environment | undefined;
export declare const pushEnvironment: (context: Context<any>, environment: Environment) => void;
export declare const createBlockEnvironment: (context: Context<any>, name?: string, head?: Frame) => Environment;
export declare function declareFunctionsAndVariables(context: Context, node: es.BlockStatement, environment: Environment): boolean;
export declare function defineVariable(context: Context, name: string, value: Value, constant: boolean | undefined, node: es.VariableDeclaration): Environment;
export declare const getVariable: (context: Context<any>, name: string, node: es.Identifier) => any;
export declare const setVariable: (context: Context<any>, name: string, value: any, node: es.AssignmentExpression) => undefined;
export declare const handleRuntimeError: (context: Context<any>, error: RuntimeSourceError) => never;
export declare const checkNumberOfArguments: (context: Context<any>, callee: any, args: any[], exp: es.CallExpression) => undefined;
/**
 * This function can be used to check for a stack overflow.
 * The current limit is set to be an agenda size of 1.0 x 10^5, if the agenda
 * flows beyond this limit an error is thrown.
 * This corresponds to about 10mb of space according to tests ran.
 */
export declare const checkStackOverFlow: (context: Context<any>, agenda: Agenda) => void;
export {};
