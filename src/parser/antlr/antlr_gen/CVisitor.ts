// Generated from ./C.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


import { PrimaryExpressionContext } from "./CParser";
import { PostfixExpressionContext } from "./CParser";
import { ArgumentExpressionListContext } from "./CParser";
import { UnaryExpressionContext } from "./CParser";
import { UnaryOperatorContext } from "./CParser";
import { CastExpressionContext } from "./CParser";
import { MultiplicativeExpressionContext } from "./CParser";
import { AdditiveExpressionContext } from "./CParser";
import { RelationalExpressionContext } from "./CParser";
import { LogicalAndExpressionContext } from "./CParser";
import { LogicalOrExpressionContext } from "./CParser";
import { ConditionalExpressionContext } from "./CParser";
import { AssignmentExpressionContext } from "./CParser";
import { AssignmentOperatorContext } from "./CParser";
import { ConstantExpressionContext } from "./CParser";
import { DeclarationContext } from "./CParser";
import { InitDeclaratorContext } from "./CParser";
import { TypeSpecifierContext } from "./CParser";
import { DirectDeclaratorContext } from "./CParser";
import { ParameterListContext } from "./CParser";
import { ParameterDeclarationContext } from "./CParser";
import { IdentifierListContext } from "./CParser";
import { TypeNameContext } from "./CParser";
import { DirectAbstractDeclaratorContext } from "./CParser";
import { TypedefNameContext } from "./CParser";
import { InitializerContext } from "./CParser";
import { InitializerListContext } from "./CParser";
import { DesignationContext } from "./CParser";
import { DesignatorListContext } from "./CParser";
import { DesignatorContext } from "./CParser";
import { StatementContext } from "./CParser";
import { CompoundStatementContext } from "./CParser";
import { BlockItemListContext } from "./CParser";
import { BlockItemContext } from "./CParser";
import { ExpressionStatementContext } from "./CParser";
import { SelectionStatementContext } from "./CParser";
import { IterationStatementContext } from "./CParser";
import { JumpStatementContext } from "./CParser";
import { CompilationUnitContext } from "./CParser";
import { TranslationUnitContext } from "./CParser";
import { ExternalDeclarationContext } from "./CParser";
import { FunctionDefinitionContext } from "./CParser";
import { DeclarationListContext } from "./CParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class CVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.argumentExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.unaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.castExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.assignmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.constantExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.initDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitDeclarator?: (ctx: InitDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.typeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecifier?: (ctx: TypeSpecifierContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.directDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectDeclarator?: (ctx: DirectDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDeclaration?: (ctx: ParameterDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.directAbstractDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectAbstractDeclarator?: (ctx: DirectAbstractDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.typedefName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedefName?: (ctx: TypedefNameContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.initializerList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerList?: (ctx: InitializerListContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.designation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignation?: (ctx: DesignationContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.designatorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignatorList?: (ctx: DesignatorListContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.designator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignator?: (ctx: DesignatorContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.compoundStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.blockItemList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockItemList?: (ctx: BlockItemListContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.blockItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockItem?: (ctx: BlockItemContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.selectionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionStatement?: (ctx: SelectionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterationStatement?: (ctx: IterationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.jumpStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJumpStatement?: (ctx: JumpStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.translationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTranslationUnit?: (ctx: TranslationUnitContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.externalDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalDeclaration?: (ctx: ExternalDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `CParser.declarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationList?: (ctx: DeclarationListContext) => Result;
}

