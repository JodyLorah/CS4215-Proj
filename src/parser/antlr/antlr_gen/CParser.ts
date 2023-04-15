// Generated from ./C.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import CListener from "./CListener.js";
import CVisitor from "./CVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CParser extends Parser {
	public static readonly Auto = 1;
	public static readonly Break = 2;
	public static readonly Case = 3;
	public static readonly Char = 4;
	public static readonly Const = 5;
	public static readonly Continue = 6;
	public static readonly Default = 7;
	public static readonly Do = 8;
	public static readonly Double = 9;
	public static readonly Else = 10;
	public static readonly Enum = 11;
	public static readonly Extern = 12;
	public static readonly Float = 13;
	public static readonly For = 14;
	public static readonly Goto = 15;
	public static readonly If = 16;
	public static readonly Inline = 17;
	public static readonly Int = 18;
	public static readonly Long = 19;
	public static readonly Register = 20;
	public static readonly Restrict = 21;
	public static readonly Return = 22;
	public static readonly Short = 23;
	public static readonly Signed = 24;
	public static readonly Sizeof = 25;
	public static readonly Static = 26;
	public static readonly Switch = 27;
	public static readonly Typedef = 28;
	public static readonly Union = 29;
	public static readonly Unsigned = 30;
	public static readonly Void = 31;
	public static readonly Volatile = 32;
	public static readonly While = 33;
	public static readonly Alignas = 34;
	public static readonly Alignof = 35;
	public static readonly Atomic = 36;
	public static readonly Bool = 37;
	public static readonly Complex = 38;
	public static readonly Generic = 39;
	public static readonly Imaginary = 40;
	public static readonly Noreturn = 41;
	public static readonly StaticAssert = 42;
	public static readonly ThreadLocal = 43;
	public static readonly LeftParen = 44;
	public static readonly RightParen = 45;
	public static readonly LeftBracket = 46;
	public static readonly RightBracket = 47;
	public static readonly LeftBrace = 48;
	public static readonly RightBrace = 49;
	public static readonly Less = 50;
	public static readonly LessEqual = 51;
	public static readonly Greater = 52;
	public static readonly GreaterEqual = 53;
	public static readonly Plus = 54;
	public static readonly PlusPlus = 55;
	public static readonly Minus = 56;
	public static readonly MinusMinus = 57;
	public static readonly Star = 58;
	public static readonly Div = 59;
	public static readonly Mod = 60;
	public static readonly And = 61;
	public static readonly Or = 62;
	public static readonly AndAnd = 63;
	public static readonly OrOr = 64;
	public static readonly Caret = 65;
	public static readonly Not = 66;
	public static readonly Tilde = 67;
	public static readonly Question = 68;
	public static readonly Colon = 69;
	public static readonly Semi = 70;
	public static readonly Comma = 71;
	public static readonly Assign = 72;
	public static readonly StarAssign = 73;
	public static readonly DivAssign = 74;
	public static readonly ModAssign = 75;
	public static readonly PlusAssign = 76;
	public static readonly MinusAssign = 77;
	public static readonly AndAssign = 78;
	public static readonly XorAssign = 79;
	public static readonly OrAssign = 80;
	public static readonly Equal = 81;
	public static readonly NotEqual = 82;
	public static readonly Arrow = 83;
	public static readonly Dot = 84;
	public static readonly Ellipsis = 85;
	public static readonly Identifier = 86;
	public static readonly Constant = 87;
	public static readonly DigitSequence = 88;
	public static readonly StringLiteral = 89;
	public static readonly ComplexDefine = 90;
	public static readonly IncludeDirective = 91;
	public static readonly AsmBlock = 92;
	public static readonly LineAfterPreprocessing = 93;
	public static readonly LineDirective = 94;
	public static readonly PragmaDirective = 95;
	public static readonly Whitespace = 96;
	public static readonly Newline = 97;
	public static readonly BlockComment = 98;
	public static readonly LineComment = 99;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_primaryExpression = 0;
	public static readonly RULE_postfixExpression = 1;
	public static readonly RULE_argumentExpressionList = 2;
	public static readonly RULE_unaryExpression = 3;
	public static readonly RULE_unaryOperator = 4;
	public static readonly RULE_castExpression = 5;
	public static readonly RULE_multiplicativeExpression = 6;
	public static readonly RULE_additiveExpression = 7;
	public static readonly RULE_relationalExpression = 8;
	public static readonly RULE_equalityExpression = 9;
	public static readonly RULE_logicalAndExpression = 10;
	public static readonly RULE_logicalOrExpression = 11;
	public static readonly RULE_conditionalExpression = 12;
	public static readonly RULE_assignmentExpression = 13;
	public static readonly RULE_assignmentOperator = 14;
	public static readonly RULE_constantExpression = 15;
	public static readonly RULE_declaration = 16;
	public static readonly RULE_initDeclarator = 17;
	public static readonly RULE_typeSpecifier = 18;
	public static readonly RULE_directDeclarator = 19;
	public static readonly RULE_parameterList = 20;
	public static readonly RULE_parameterDeclaration = 21;
	public static readonly RULE_identifierList = 22;
	public static readonly RULE_typeName = 23;
	public static readonly RULE_directAbstractDeclarator = 24;
	public static readonly RULE_typedefName = 25;
	public static readonly RULE_initializer = 26;
	public static readonly RULE_initializerList = 27;
	public static readonly RULE_designation = 28;
	public static readonly RULE_designatorList = 29;
	public static readonly RULE_designator = 30;
	public static readonly RULE_statement = 31;
	public static readonly RULE_compoundStatement = 32;
	public static readonly RULE_blockItemList = 33;
	public static readonly RULE_blockItem = 34;
	public static readonly RULE_expressionStatement = 35;
	public static readonly RULE_selectionStatement = 36;
	public static readonly RULE_iterationStatement = 37;
	public static readonly RULE_jumpStatement = 38;
	public static readonly RULE_compilationUnit = 39;
	public static readonly RULE_translationUnit = 40;
	public static readonly RULE_externalDeclaration = 41;
	public static readonly RULE_functionDefinition = 42;
	public static readonly RULE_declarationList = 43;
	public static readonly literalNames: (string | null)[] = [ null, "'auto'", 
                                                            "'break'", "'case'", 
                                                            "'char'", "'const'", 
                                                            "'continue'", 
                                                            "'default'", 
                                                            "'do'", "'double'", 
                                                            "'else'", "'enum'", 
                                                            "'extern'", 
                                                            "'float'", "'for'", 
                                                            "'goto'", "'if'", 
                                                            "'inline'", 
                                                            "'int'", "'long'", 
                                                            "'register'", 
                                                            "'restrict'", 
                                                            "'return'", 
                                                            "'short'", "'signed'", 
                                                            "'sizeof'", 
                                                            "'static'", 
                                                            "'switch'", 
                                                            "'typedef'", 
                                                            "'union'", "'unsigned'", 
                                                            "'void'", "'volatile'", 
                                                            "'while'", "'_Alignas'", 
                                                            "'_Alignof'", 
                                                            "'_Atomic'", 
                                                            "'_Bool'", "'_Complex'", 
                                                            "'_Generic'", 
                                                            "'_Imaginary'", 
                                                            "'_Noreturn'", 
                                                            "'_Static_assert'", 
                                                            "'_Thread_local'", 
                                                            "'('", "')'", 
                                                            "'['", "']'", 
                                                            "'{'", "'}'", 
                                                            "'<'", "'<='", 
                                                            "'>'", "'>='", 
                                                            "'+'", "'++'", 
                                                            "'-'", "'--'", 
                                                            "'*'", "'/'", 
                                                            "'%'", "'&'", 
                                                            "'|'", "'&&'", 
                                                            "'||'", "'^'", 
                                                            "'!'", "'~'", 
                                                            "'?'", "':'", 
                                                            "';'", "','", 
                                                            "'='", "'*='", 
                                                            "'/='", "'%='", 
                                                            "'+='", "'-='", 
                                                            "'&='", "'^='", 
                                                            "'|='", "'=='", 
                                                            "'!='", "'->'", 
                                                            "'.'", "'...'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Auto", 
                                                             "Break", "Case", 
                                                             "Char", "Const", 
                                                             "Continue", 
                                                             "Default", 
                                                             "Do", "Double", 
                                                             "Else", "Enum", 
                                                             "Extern", "Float", 
                                                             "For", "Goto", 
                                                             "If", "Inline", 
                                                             "Int", "Long", 
                                                             "Register", 
                                                             "Restrict", 
                                                             "Return", "Short", 
                                                             "Signed", "Sizeof", 
                                                             "Static", "Switch", 
                                                             "Typedef", 
                                                             "Union", "Unsigned", 
                                                             "Void", "Volatile", 
                                                             "While", "Alignas", 
                                                             "Alignof", 
                                                             "Atomic", "Bool", 
                                                             "Complex", 
                                                             "Generic", 
                                                             "Imaginary", 
                                                             "Noreturn", 
                                                             "StaticAssert", 
                                                             "ThreadLocal", 
                                                             "LeftParen", 
                                                             "RightParen", 
                                                             "LeftBracket", 
                                                             "RightBracket", 
                                                             "LeftBrace", 
                                                             "RightBrace", 
                                                             "Less", "LessEqual", 
                                                             "Greater", 
                                                             "GreaterEqual", 
                                                             "Plus", "PlusPlus", 
                                                             "Minus", "MinusMinus", 
                                                             "Star", "Div", 
                                                             "Mod", "And", 
                                                             "Or", "AndAnd", 
                                                             "OrOr", "Caret", 
                                                             "Not", "Tilde", 
                                                             "Question", 
                                                             "Colon", "Semi", 
                                                             "Comma", "Assign", 
                                                             "StarAssign", 
                                                             "DivAssign", 
                                                             "ModAssign", 
                                                             "PlusAssign", 
                                                             "MinusAssign", 
                                                             "AndAssign", 
                                                             "XorAssign", 
                                                             "OrAssign", 
                                                             "Equal", "NotEqual", 
                                                             "Arrow", "Dot", 
                                                             "Ellipsis", 
                                                             "Identifier", 
                                                             "Constant", 
                                                             "DigitSequence", 
                                                             "StringLiteral", 
                                                             "ComplexDefine", 
                                                             "IncludeDirective", 
                                                             "AsmBlock", 
                                                             "LineAfterPreprocessing", 
                                                             "LineDirective", 
                                                             "PragmaDirective", 
                                                             "Whitespace", 
                                                             "Newline", 
                                                             "BlockComment", 
                                                             "LineComment" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"primaryExpression", "postfixExpression", "argumentExpressionList", "unaryExpression", 
		"unaryOperator", "castExpression", "multiplicativeExpression", "additiveExpression", 
		"relationalExpression", "equalityExpression", "logicalAndExpression", 
		"logicalOrExpression", "conditionalExpression", "assignmentExpression", 
		"assignmentOperator", "constantExpression", "declaration", "initDeclarator", 
		"typeSpecifier", "directDeclarator", "parameterList", "parameterDeclaration", 
		"identifierList", "typeName", "directAbstractDeclarator", "typedefName", 
		"initializer", "initializerList", "designation", "designatorList", "designator", 
		"statement", "compoundStatement", "blockItemList", "blockItem", "expressionStatement", 
		"selectionStatement", "iterationStatement", "jumpStatement", "compilationUnit", 
		"translationUnit", "externalDeclaration", "functionDefinition", "declarationList",
	];
	public get grammarFileName(): string { return "C.g4"; }
	public get literalNames(): (string | null)[] { return CParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return CParser.symbolicNames; }
	public get ruleNames(): string[] { return CParser.ruleNames; }
	public get serializedATN(): number[] { return CParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, CParser._ATN, CParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, CParser.RULE_primaryExpression);
		try {
			let _alt: number;
			this.state = 99;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 88;
				this.match(CParser.Identifier);
				}
				break;
			case 87:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 89;
				this.match(CParser.Constant);
				}
				break;
			case 89:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 91;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 90;
						this.match(CParser.StringLiteral);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 93;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 95;
				this.match(CParser.LeftParen);
				this.state = 96;
				this.assignmentExpression();
				this.state = 97;
				this.match(CParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let localctx: PostfixExpressionContext = new PostfixExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, CParser.RULE_postfixExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 101;
			this.primaryExpression();
			this.state = 111;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 102;
				this.match(CParser.LeftParen);
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4198401) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 11) !== 0)) {
					{
					this.state = 103;
					this.argumentExpressionList();
					}
				}

				this.state = 106;
				this.match(CParser.RightParen);
				}
				break;
			case 2:
				{
				this.state = 107;
				this.match(CParser.LeftBracket);
				this.state = 108;
				this.assignmentExpression();
				this.state = 109;
				this.match(CParser.RightBracket);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argumentExpressionList(): ArgumentExpressionListContext {
		let localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, CParser.RULE_argumentExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 113;
			this.assignmentExpression();
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===71) {
				{
				{
				this.state = 114;
				this.match(CParser.Comma);
				this.state = 115;
				this.assignmentExpression();
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, CParser.RULE_unaryExpression);
		try {
			this.state = 125;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 44:
			case 86:
			case 87:
			case 89:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 121;
				this.postfixExpression();
				}
				break;
			case 56:
			case 66:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 122;
				this.unaryOperator();
				this.state = 123;
				this.castExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let localctx: UnaryOperatorContext = new UnaryOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, CParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 127;
			_la = this._input.LA(1);
			if(!(_la===56 || _la===66)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let localctx: CastExpressionContext = new CastExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, CParser.RULE_castExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 129;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this, this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = localctx;
		let _startState: number = 12;
		this.enterRecursionRule(localctx, 12, CParser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 132;
			this.castExpression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 145;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 143;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_multiplicativeExpression);
						this.state = 134;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 135;
						this.match(CParser.Star);
						this.state = 136;
						this.castExpression();
						}
						break;
					case 2:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_multiplicativeExpression);
						this.state = 137;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 138;
						this.match(CParser.Div);
						this.state = 139;
						this.castExpression();
						}
						break;
					case 3:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_multiplicativeExpression);
						this.state = 140;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 141;
						this.match(CParser.Mod);
						this.state = 142;
						this.castExpression();
						}
						break;
					}
					}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this, this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = localctx;
		let _startState: number = 14;
		this.enterRecursionRule(localctx, 14, CParser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 149;
			this.multiplicativeExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 159;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 157;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_additiveExpression);
						this.state = 151;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 152;
						this.match(CParser.Plus);
						this.state = 153;
						this.multiplicativeExpression(0);
						}
						break;
					case 2:
						{
						localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_additiveExpression);
						this.state = 154;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 155;
						this.match(CParser.Minus);
						this.state = 156;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 161;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	// @RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: RelationalExpressionContext = new RelationalExpressionContext(this, this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = localctx;
		let _startState: number = 16;
		this.enterRecursionRule(localctx, 16, CParser.RULE_relationalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 163;
			this.additiveExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 179;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 177;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 165;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 166;
						this.match(CParser.Less);
						this.state = 167;
						this.additiveExpression(0);
						}
						break;
					case 2:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 168;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 169;
						this.match(CParser.Greater);
						this.state = 170;
						this.additiveExpression(0);
						}
						break;
					case 3:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 171;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 172;
						this.match(CParser.LessEqual);
						this.state = 173;
						this.additiveExpression(0);
						}
						break;
					case 4:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 174;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 175;
						this.match(CParser.GreaterEqual);
						this.state = 176;
						this.additiveExpression(0);
						}
						break;
					}
					}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	// @RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: EqualityExpressionContext = new EqualityExpressionContext(this, this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = localctx;
		let _startState: number = 18;
		this.enterRecursionRule(localctx, 18, CParser.RULE_equalityExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 183;
			this.relationalExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 193;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 191;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_equalityExpression);
						this.state = 185;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 186;
						this.match(CParser.Equal);
						this.state = 187;
						this.relationalExpression(0);
						}
						break;
					case 2:
						{
						localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_equalityExpression);
						this.state = 188;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 189;
						this.match(CParser.NotEqual);
						this.state = 190;
						this.relationalExpression(0);
						}
						break;
					}
					}
				}
				this.state = 195;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public logicalAndExpression(): LogicalAndExpressionContext;
	public logicalAndExpression(_p: number): LogicalAndExpressionContext;
	// @RuleVersion(0)
	public logicalAndExpression(_p?: number): LogicalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this, this._ctx, _parentState);
		let _prevctx: LogicalAndExpressionContext = localctx;
		let _startState: number = 20;
		this.enterRecursionRule(localctx, 20, CParser.RULE_logicalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 197;
			this.equalityExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 204;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new LogicalAndExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, CParser.RULE_logicalAndExpression);
					this.state = 199;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 200;
					this.match(CParser.AndAnd);
					this.state = 201;
					this.equalityExpression(0);
					}
					}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public logicalOrExpression(): LogicalOrExpressionContext;
	public logicalOrExpression(_p: number): LogicalOrExpressionContext;
	// @RuleVersion(0)
	public logicalOrExpression(_p?: number): LogicalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this, this._ctx, _parentState);
		let _prevctx: LogicalOrExpressionContext = localctx;
		let _startState: number = 22;
		this.enterRecursionRule(localctx, 22, CParser.RULE_logicalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 208;
			this.logicalAndExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 215;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new LogicalOrExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, CParser.RULE_logicalOrExpression);
					this.state = 210;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 211;
					this.match(CParser.OrOr);
					this.state = 212;
					this.logicalAndExpression(0);
					}
					}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, CParser.RULE_conditionalExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 218;
			this.logicalOrExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, CParser.RULE_assignmentExpression);
		try {
			this.state = 225;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 220;
				this.conditionalExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 221;
				this.unaryExpression();
				this.state = 222;
				this.assignmentOperator();
				this.state = 223;
				this.conditionalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, CParser.RULE_assignmentOperator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 227;
			this.match(CParser.Assign);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let localctx: ConstantExpressionContext = new ConstantExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, CParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 229;
			this.conditionalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, CParser.RULE_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 231;
			this.typeSpecifier();
			this.state = 232;
			this.initDeclarator();
			this.state = 233;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initDeclarator(): InitDeclaratorContext {
		let localctx: InitDeclaratorContext = new InitDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, CParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 235;
			this.directDeclarator(0);
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===72) {
				{
				this.state = 236;
				this.match(CParser.Assign);
				this.state = 237;
				this.initializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let localctx: TypeSpecifierContext = new TypeSpecifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, CParser.RULE_typeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 240;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public directDeclarator(): DirectDeclaratorContext;
	public directDeclarator(_p: number): DirectDeclaratorContext;
	// @RuleVersion(0)
	public directDeclarator(_p?: number): DirectDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: DirectDeclaratorContext = new DirectDeclaratorContext(this, this._ctx, _parentState);
		let _prevctx: DirectDeclaratorContext = localctx;
		let _startState: number = 38;
		this.enterRecursionRule(localctx, 38, CParser.RULE_directDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 248;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				{
				this.state = 243;
				this.match(CParser.Identifier);
				}
				break;
			case 44:
				{
				this.state = 244;
				this.match(CParser.LeftParen);
				this.state = 245;
				this.directDeclarator(0);
				this.state = 246;
				this.match(CParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 269;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 267;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
					case 1:
						{
						localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 250;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 251;
						this.match(CParser.LeftBracket);
						this.state = 253;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4198401) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 11) !== 0)) {
							{
							this.state = 252;
							this.assignmentExpression();
							}
						}

						this.state = 255;
						this.match(CParser.RightBracket);
						}
						break;
					case 2:
						{
						localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 256;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 257;
						this.match(CParser.LeftParen);
						this.state = 258;
						this.parameterList();
						this.state = 259;
						this.match(CParser.RightParen);
						}
						break;
					case 3:
						{
						localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 261;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 262;
						this.match(CParser.LeftParen);
						this.state = 264;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===86) {
							{
							this.state = 263;
							this.identifierList();
							}
						}

						this.state = 266;
						this.match(CParser.RightParen);
						}
						break;
					}
					}
				}
				this.state = 271;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, CParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 272;
			this.parameterDeclaration();
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===71) {
				{
				{
				this.state = 273;
				this.match(CParser.Comma);
				this.state = 274;
				this.parameterDeclaration();
				}
				}
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterDeclaration(): ParameterDeclarationContext {
		let localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, CParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.state = 287;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 280;
				this.typeSpecifier();
				this.state = 281;
				this.directDeclarator(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 283;
				this.typeSpecifier();
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===44) {
					{
					this.state = 284;
					this.directAbstractDeclarator(0);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let localctx: IdentifierListContext = new IdentifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, CParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 289;
			this.match(CParser.Identifier);
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===71) {
				{
				{
				this.state = 290;
				this.match(CParser.Comma);
				this.state = 291;
				this.match(CParser.Identifier);
				}
				}
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let localctx: TypeNameContext = new TypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, CParser.RULE_typeName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===44) {
				{
				this.state = 297;
				this.directAbstractDeclarator(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public directAbstractDeclarator(): DirectAbstractDeclaratorContext;
	public directAbstractDeclarator(_p: number): DirectAbstractDeclaratorContext;
	// @RuleVersion(0)
	public directAbstractDeclarator(_p?: number): DirectAbstractDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: DirectAbstractDeclaratorContext = new DirectAbstractDeclaratorContext(this, this._ctx, _parentState);
		let _prevctx: DirectAbstractDeclaratorContext = localctx;
		let _startState: number = 48;
		this.enterRecursionRule(localctx, 48, CParser.RULE_directAbstractDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 301;
			this.match(CParser.LeftParen);
			this.state = 302;
			this.directAbstractDeclarator(0);
			this.state = 303;
			this.match(CParser.RightParen);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 319;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 317;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
					case 1:
						{
						localctx = new DirectAbstractDeclaratorContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 305;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 306;
						this.match(CParser.LeftBracket);
						this.state = 308;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4198401) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 11) !== 0)) {
							{
							this.state = 307;
							this.assignmentExpression();
							}
						}

						this.state = 310;
						this.match(CParser.RightBracket);
						}
						break;
					case 2:
						{
						localctx = new DirectAbstractDeclaratorContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 311;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 312;
						this.match(CParser.LeftParen);
						this.state = 314;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0)) {
							{
							this.state = 313;
							this.parameterList();
							}
						}

						this.state = 316;
						this.match(CParser.RightParen);
						}
						break;
					}
					}
				}
				this.state = 321;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typedefName(): TypedefNameContext {
		let localctx: TypedefNameContext = new TypedefNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, CParser.RULE_typedefName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 322;
			this.match(CParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let localctx: InitializerContext = new InitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, CParser.RULE_initializer);
		let _la: number;
		try {
			this.state = 332;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 44:
			case 56:
			case 66:
			case 86:
			case 87:
			case 89:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 324;
				this.assignmentExpression();
				}
				break;
			case 48:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 325;
				this.match(CParser.LeftBrace);
				this.state = 326;
				this.initializerList();
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===71) {
					{
					this.state = 327;
					this.match(CParser.Comma);
					}
				}

				this.state = 330;
				this.match(CParser.RightBrace);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initializerList(): InitializerListContext {
		let localctx: InitializerListContext = new InitializerListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, CParser.RULE_initializerList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46 || _la===84) {
				{
				this.state = 334;
				this.designation();
				}
			}

			this.state = 337;
			this.initializer();
			this.state = 345;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 338;
					this.match(CParser.Comma);
					this.state = 340;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===46 || _la===84) {
						{
						this.state = 339;
						this.designation();
						}
					}

					this.state = 342;
					this.initializer();
					}
					}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public designation(): DesignationContext {
		let localctx: DesignationContext = new DesignationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, CParser.RULE_designation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 348;
			this.designatorList();
			this.state = 349;
			this.match(CParser.Assign);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public designatorList(): DesignatorListContext {
		let localctx: DesignatorListContext = new DesignatorListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, CParser.RULE_designatorList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 351;
				this.designator();
				}
				}
				this.state = 354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===46 || _la===84);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public designator(): DesignatorContext {
		let localctx: DesignatorContext = new DesignatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, CParser.RULE_designator);
		try {
			this.state = 362;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 46:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 356;
				this.match(CParser.LeftBracket);
				this.state = 357;
				this.constantExpression();
				this.state = 358;
				this.match(CParser.RightBracket);
				}
				break;
			case 84:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 360;
				this.match(CParser.Dot);
				this.state = 361;
				this.match(CParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, CParser.RULE_statement);
		try {
			this.state = 369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 364;
				this.compoundStatement();
				}
				break;
			case 44:
			case 56:
			case 66:
			case 86:
			case 87:
			case 89:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 365;
				this.expressionStatement();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 366;
				this.selectionStatement();
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 367;
				this.iterationStatement();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 368;
				this.jumpStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compoundStatement(): CompoundStatementContext {
		let localctx: CompoundStatementContext = new CompoundStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, CParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 371;
			this.match(CParser.LeftBrace);
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4522512) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 8423425) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 11534337) !== 0)) {
				{
				this.state = 372;
				this.blockItemList();
				}
			}

			this.state = 375;
			this.match(CParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockItemList(): BlockItemListContext {
		let localctx: BlockItemListContext = new BlockItemListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, CParser.RULE_blockItemList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 377;
				this.blockItem();
				}
				}
				this.state = 380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4522512) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 8423425) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 11534337) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockItem(): BlockItemContext {
		let localctx: BlockItemContext = new BlockItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, CParser.RULE_blockItem);
		try {
			this.state = 384;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
			case 22:
			case 33:
			case 44:
			case 48:
			case 56:
			case 66:
			case 86:
			case 87:
			case 89:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 382;
				this.statement();
				}
				break;
			case 4:
			case 9:
			case 18:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 383;
				this.declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, CParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 386;
			this.assignmentExpression();
			this.state = 387;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectionStatement(): SelectionStatementContext {
		let localctx: SelectionStatementContext = new SelectionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, CParser.RULE_selectionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 389;
			this.match(CParser.If);
			this.state = 390;
			this.match(CParser.LeftParen);
			this.state = 391;
			this.assignmentExpression();
			this.state = 392;
			this.match(CParser.RightParen);
			this.state = 393;
			this.statement();
			this.state = 396;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 394;
				this.match(CParser.Else);
				this.state = 395;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let localctx: IterationStatementContext = new IterationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, CParser.RULE_iterationStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 398;
			this.match(CParser.While);
			this.state = 399;
			this.match(CParser.LeftParen);
			this.state = 400;
			this.assignmentExpression();
			this.state = 401;
			this.match(CParser.RightParen);
			this.state = 402;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jumpStatement(): JumpStatementContext {
		let localctx: JumpStatementContext = new JumpStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, CParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 404;
			this.match(CParser.Return);
			this.state = 406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4198401) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 11) !== 0)) {
				{
				this.state = 405;
				this.assignmentExpression();
				}
			}

			this.state = 408;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let localctx: CompilationUnitContext = new CompilationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, CParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0)) {
				{
				this.state = 410;
				this.translationUnit();
				}
			}

			this.state = 413;
			this.match(CParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public translationUnit(): TranslationUnitContext {
		let localctx: TranslationUnitContext = new TranslationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, CParser.RULE_translationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 415;
				this.externalDeclaration();
				}
				}
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public externalDeclaration(): ExternalDeclarationContext {
		let localctx: ExternalDeclarationContext = new ExternalDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, CParser.RULE_externalDeclaration);
		try {
			this.state = 422;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 420;
				this.functionDefinition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 421;
				this.declaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, CParser.RULE_functionDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 424;
			this.typeSpecifier();
			this.state = 425;
			this.directDeclarator(0);
			this.state = 426;
			this.compoundStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declarationList(): DeclarationListContext {
		let localctx: DeclarationListContext = new DeclarationListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, CParser.RULE_declarationList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 428;
				this.declaration();
				}
				}
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.multiplicativeExpression_sempred(localctx as MultiplicativeExpressionContext, predIndex);
		case 7:
			return this.additiveExpression_sempred(localctx as AdditiveExpressionContext, predIndex);
		case 8:
			return this.relationalExpression_sempred(localctx as RelationalExpressionContext, predIndex);
		case 9:
			return this.equalityExpression_sempred(localctx as EqualityExpressionContext, predIndex);
		case 10:
			return this.logicalAndExpression_sempred(localctx as LogicalAndExpressionContext, predIndex);
		case 11:
			return this.logicalOrExpression_sempred(localctx as LogicalOrExpressionContext, predIndex);
		case 19:
			return this.directDeclarator_sempred(localctx as DirectDeclaratorContext, predIndex);
		case 24:
			return this.directAbstractDeclarator_sempred(localctx as DirectAbstractDeclaratorContext, predIndex);
		}
		return true;
	}
	private multiplicativeExpression_sempred(localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 4);
		case 6:
			return this.precpred(this._ctx, 3);
		case 7:
			return this.precpred(this._ctx, 2);
		case 8:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 2);
		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalAndExpression_sempred(localctx: LogicalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalOrExpression_sempred(localctx: LogicalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private directDeclarator_sempred(localctx: DirectDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 3);
		case 14:
			return this.precpred(this._ctx, 2);
		case 15:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private directAbstractDeclarator_sempred(localctx: DirectAbstractDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 2);
		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,99,434,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,1,0,1,0,1,0,4,0,92,8,0,
	11,0,12,0,93,1,0,1,0,1,0,1,0,3,0,100,8,0,1,1,1,1,1,1,3,1,105,8,1,1,1,1,
	1,1,1,1,1,1,1,3,1,112,8,1,1,2,1,2,1,2,5,2,117,8,2,10,2,12,2,120,9,2,1,3,
	1,3,1,3,1,3,3,3,126,8,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
	1,6,1,6,1,6,1,6,5,6,144,8,6,10,6,12,6,147,9,6,1,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,5,7,158,8,7,10,7,12,7,161,9,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
	1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,178,8,8,10,8,12,8,181,9,8,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,5,9,192,8,9,10,9,12,9,195,9,9,1,10,1,10,1,10,1,10,
	1,10,1,10,5,10,203,8,10,10,10,12,10,206,9,10,1,11,1,11,1,11,1,11,1,11,1,
	11,5,11,214,8,11,10,11,12,11,217,9,11,1,12,1,12,1,13,1,13,1,13,1,13,1,13,
	3,13,226,8,13,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,3,
	17,239,8,17,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,3,19,249,8,19,1,19,
	1,19,1,19,3,19,254,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,
	19,265,8,19,1,19,5,19,268,8,19,10,19,12,19,271,9,19,1,20,1,20,1,20,5,20,
	276,8,20,10,20,12,20,279,9,20,1,21,1,21,1,21,1,21,1,21,3,21,286,8,21,3,
	21,288,8,21,1,22,1,22,1,22,5,22,293,8,22,10,22,12,22,296,9,22,1,23,3,23,
	299,8,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,309,8,24,1,24,1,24,
	1,24,1,24,3,24,315,8,24,1,24,5,24,318,8,24,10,24,12,24,321,9,24,1,25,1,
	25,1,26,1,26,1,26,1,26,3,26,329,8,26,1,26,1,26,3,26,333,8,26,1,27,3,27,
	336,8,27,1,27,1,27,1,27,3,27,341,8,27,1,27,5,27,344,8,27,10,27,12,27,347,
	9,27,1,28,1,28,1,28,1,29,4,29,353,8,29,11,29,12,29,354,1,30,1,30,1,30,1,
	30,1,30,1,30,3,30,363,8,30,1,31,1,31,1,31,1,31,1,31,3,31,370,8,31,1,32,
	1,32,3,32,374,8,32,1,32,1,32,1,33,4,33,379,8,33,11,33,12,33,380,1,34,1,
	34,3,34,385,8,34,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,
	397,8,36,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,3,38,407,8,38,1,38,1,38,
	1,39,3,39,412,8,39,1,39,1,39,1,40,4,40,417,8,40,11,40,12,40,418,1,41,1,
	41,3,41,423,8,41,1,42,1,42,1,42,1,42,1,43,4,43,430,8,43,11,43,12,43,431,
	1,43,0,8,12,14,16,18,20,22,38,48,44,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
	28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
	76,78,80,82,84,86,0,2,2,0,56,56,66,66,3,0,4,4,9,9,18,18,448,0,99,1,0,0,
	0,2,101,1,0,0,0,4,113,1,0,0,0,6,125,1,0,0,0,8,127,1,0,0,0,10,129,1,0,0,
	0,12,131,1,0,0,0,14,148,1,0,0,0,16,162,1,0,0,0,18,182,1,0,0,0,20,196,1,
	0,0,0,22,207,1,0,0,0,24,218,1,0,0,0,26,225,1,0,0,0,28,227,1,0,0,0,30,229,
	1,0,0,0,32,231,1,0,0,0,34,235,1,0,0,0,36,240,1,0,0,0,38,248,1,0,0,0,40,
	272,1,0,0,0,42,287,1,0,0,0,44,289,1,0,0,0,46,298,1,0,0,0,48,300,1,0,0,0,
	50,322,1,0,0,0,52,332,1,0,0,0,54,335,1,0,0,0,56,348,1,0,0,0,58,352,1,0,
	0,0,60,362,1,0,0,0,62,369,1,0,0,0,64,371,1,0,0,0,66,378,1,0,0,0,68,384,
	1,0,0,0,70,386,1,0,0,0,72,389,1,0,0,0,74,398,1,0,0,0,76,404,1,0,0,0,78,
	411,1,0,0,0,80,416,1,0,0,0,82,422,1,0,0,0,84,424,1,0,0,0,86,429,1,0,0,0,
	88,100,5,86,0,0,89,100,5,87,0,0,90,92,5,89,0,0,91,90,1,0,0,0,92,93,1,0,
	0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,100,1,0,0,0,95,96,5,44,0,0,96,97,3,26,
	13,0,97,98,5,45,0,0,98,100,1,0,0,0,99,88,1,0,0,0,99,89,1,0,0,0,99,91,1,
	0,0,0,99,95,1,0,0,0,100,1,1,0,0,0,101,111,3,0,0,0,102,104,5,44,0,0,103,
	105,3,4,2,0,104,103,1,0,0,0,104,105,1,0,0,0,105,106,1,0,0,0,106,112,5,45,
	0,0,107,108,5,46,0,0,108,109,3,26,13,0,109,110,5,47,0,0,110,112,1,0,0,0,
	111,102,1,0,0,0,111,107,1,0,0,0,111,112,1,0,0,0,112,3,1,0,0,0,113,118,3,
	26,13,0,114,115,5,71,0,0,115,117,3,26,13,0,116,114,1,0,0,0,117,120,1,0,
	0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,5,1,0,0,0,120,118,1,0,0,0,121,126,
	3,2,1,0,122,123,3,8,4,0,123,124,3,10,5,0,124,126,1,0,0,0,125,121,1,0,0,
	0,125,122,1,0,0,0,126,7,1,0,0,0,127,128,7,0,0,0,128,9,1,0,0,0,129,130,3,
	6,3,0,130,11,1,0,0,0,131,132,6,6,-1,0,132,133,3,10,5,0,133,145,1,0,0,0,
	134,135,10,3,0,0,135,136,5,58,0,0,136,144,3,10,5,0,137,138,10,2,0,0,138,
	139,5,59,0,0,139,144,3,10,5,0,140,141,10,1,0,0,141,142,5,60,0,0,142,144,
	3,10,5,0,143,134,1,0,0,0,143,137,1,0,0,0,143,140,1,0,0,0,144,147,1,0,0,
	0,145,143,1,0,0,0,145,146,1,0,0,0,146,13,1,0,0,0,147,145,1,0,0,0,148,149,
	6,7,-1,0,149,150,3,12,6,0,150,159,1,0,0,0,151,152,10,2,0,0,152,153,5,54,
	0,0,153,158,3,12,6,0,154,155,10,1,0,0,155,156,5,56,0,0,156,158,3,12,6,0,
	157,151,1,0,0,0,157,154,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,159,160,
	1,0,0,0,160,15,1,0,0,0,161,159,1,0,0,0,162,163,6,8,-1,0,163,164,3,14,7,
	0,164,179,1,0,0,0,165,166,10,4,0,0,166,167,5,50,0,0,167,178,3,14,7,0,168,
	169,10,3,0,0,169,170,5,52,0,0,170,178,3,14,7,0,171,172,10,2,0,0,172,173,
	5,51,0,0,173,178,3,14,7,0,174,175,10,1,0,0,175,176,5,53,0,0,176,178,3,14,
	7,0,177,165,1,0,0,0,177,168,1,0,0,0,177,171,1,0,0,0,177,174,1,0,0,0,178,
	181,1,0,0,0,179,177,1,0,0,0,179,180,1,0,0,0,180,17,1,0,0,0,181,179,1,0,
	0,0,182,183,6,9,-1,0,183,184,3,16,8,0,184,193,1,0,0,0,185,186,10,2,0,0,
	186,187,5,81,0,0,187,192,3,16,8,0,188,189,10,1,0,0,189,190,5,82,0,0,190,
	192,3,16,8,0,191,185,1,0,0,0,191,188,1,0,0,0,192,195,1,0,0,0,193,191,1,
	0,0,0,193,194,1,0,0,0,194,19,1,0,0,0,195,193,1,0,0,0,196,197,6,10,-1,0,
	197,198,3,18,9,0,198,204,1,0,0,0,199,200,10,1,0,0,200,201,5,63,0,0,201,
	203,3,18,9,0,202,199,1,0,0,0,203,206,1,0,0,0,204,202,1,0,0,0,204,205,1,
	0,0,0,205,21,1,0,0,0,206,204,1,0,0,0,207,208,6,11,-1,0,208,209,3,20,10,
	0,209,215,1,0,0,0,210,211,10,1,0,0,211,212,5,64,0,0,212,214,3,20,10,0,213,
	210,1,0,0,0,214,217,1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,23,1,0,
	0,0,217,215,1,0,0,0,218,219,3,22,11,0,219,25,1,0,0,0,220,226,3,24,12,0,
	221,222,3,6,3,0,222,223,3,28,14,0,223,224,3,24,12,0,224,226,1,0,0,0,225,
	220,1,0,0,0,225,221,1,0,0,0,226,27,1,0,0,0,227,228,5,72,0,0,228,29,1,0,
	0,0,229,230,3,24,12,0,230,31,1,0,0,0,231,232,3,36,18,0,232,233,3,34,17,
	0,233,234,5,70,0,0,234,33,1,0,0,0,235,238,3,38,19,0,236,237,5,72,0,0,237,
	239,3,52,26,0,238,236,1,0,0,0,238,239,1,0,0,0,239,35,1,0,0,0,240,241,7,
	1,0,0,241,37,1,0,0,0,242,243,6,19,-1,0,243,249,5,86,0,0,244,245,5,44,0,
	0,245,246,3,38,19,0,246,247,5,45,0,0,247,249,1,0,0,0,248,242,1,0,0,0,248,
	244,1,0,0,0,249,269,1,0,0,0,250,251,10,3,0,0,251,253,5,46,0,0,252,254,3,
	26,13,0,253,252,1,0,0,0,253,254,1,0,0,0,254,255,1,0,0,0,255,268,5,47,0,
	0,256,257,10,2,0,0,257,258,5,44,0,0,258,259,3,40,20,0,259,260,5,45,0,0,
	260,268,1,0,0,0,261,262,10,1,0,0,262,264,5,44,0,0,263,265,3,44,22,0,264,
	263,1,0,0,0,264,265,1,0,0,0,265,266,1,0,0,0,266,268,5,45,0,0,267,250,1,
	0,0,0,267,256,1,0,0,0,267,261,1,0,0,0,268,271,1,0,0,0,269,267,1,0,0,0,269,
	270,1,0,0,0,270,39,1,0,0,0,271,269,1,0,0,0,272,277,3,42,21,0,273,274,5,
	71,0,0,274,276,3,42,21,0,275,273,1,0,0,0,276,279,1,0,0,0,277,275,1,0,0,
	0,277,278,1,0,0,0,278,41,1,0,0,0,279,277,1,0,0,0,280,281,3,36,18,0,281,
	282,3,38,19,0,282,288,1,0,0,0,283,285,3,36,18,0,284,286,3,48,24,0,285,284,
	1,0,0,0,285,286,1,0,0,0,286,288,1,0,0,0,287,280,1,0,0,0,287,283,1,0,0,0,
	288,43,1,0,0,0,289,294,5,86,0,0,290,291,5,71,0,0,291,293,5,86,0,0,292,290,
	1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,294,295,1,0,0,0,295,45,1,0,0,0,
	296,294,1,0,0,0,297,299,3,48,24,0,298,297,1,0,0,0,298,299,1,0,0,0,299,47,
	1,0,0,0,300,301,6,24,-1,0,301,302,5,44,0,0,302,303,3,48,24,0,303,304,5,
	45,0,0,304,319,1,0,0,0,305,306,10,2,0,0,306,308,5,46,0,0,307,309,3,26,13,
	0,308,307,1,0,0,0,308,309,1,0,0,0,309,310,1,0,0,0,310,318,5,47,0,0,311,
	312,10,1,0,0,312,314,5,44,0,0,313,315,3,40,20,0,314,313,1,0,0,0,314,315,
	1,0,0,0,315,316,1,0,0,0,316,318,5,45,0,0,317,305,1,0,0,0,317,311,1,0,0,
	0,318,321,1,0,0,0,319,317,1,0,0,0,319,320,1,0,0,0,320,49,1,0,0,0,321,319,
	1,0,0,0,322,323,5,86,0,0,323,51,1,0,0,0,324,333,3,26,13,0,325,326,5,48,
	0,0,326,328,3,54,27,0,327,329,5,71,0,0,328,327,1,0,0,0,328,329,1,0,0,0,
	329,330,1,0,0,0,330,331,5,49,0,0,331,333,1,0,0,0,332,324,1,0,0,0,332,325,
	1,0,0,0,333,53,1,0,0,0,334,336,3,56,28,0,335,334,1,0,0,0,335,336,1,0,0,
	0,336,337,1,0,0,0,337,345,3,52,26,0,338,340,5,71,0,0,339,341,3,56,28,0,
	340,339,1,0,0,0,340,341,1,0,0,0,341,342,1,0,0,0,342,344,3,52,26,0,343,338,
	1,0,0,0,344,347,1,0,0,0,345,343,1,0,0,0,345,346,1,0,0,0,346,55,1,0,0,0,
	347,345,1,0,0,0,348,349,3,58,29,0,349,350,5,72,0,0,350,57,1,0,0,0,351,353,
	3,60,30,0,352,351,1,0,0,0,353,354,1,0,0,0,354,352,1,0,0,0,354,355,1,0,0,
	0,355,59,1,0,0,0,356,357,5,46,0,0,357,358,3,30,15,0,358,359,5,47,0,0,359,
	363,1,0,0,0,360,361,5,84,0,0,361,363,5,86,0,0,362,356,1,0,0,0,362,360,1,
	0,0,0,363,61,1,0,0,0,364,370,3,64,32,0,365,370,3,70,35,0,366,370,3,72,36,
	0,367,370,3,74,37,0,368,370,3,76,38,0,369,364,1,0,0,0,369,365,1,0,0,0,369,
	366,1,0,0,0,369,367,1,0,0,0,369,368,1,0,0,0,370,63,1,0,0,0,371,373,5,48,
	0,0,372,374,3,66,33,0,373,372,1,0,0,0,373,374,1,0,0,0,374,375,1,0,0,0,375,
	376,5,49,0,0,376,65,1,0,0,0,377,379,3,68,34,0,378,377,1,0,0,0,379,380,1,
	0,0,0,380,378,1,0,0,0,380,381,1,0,0,0,381,67,1,0,0,0,382,385,3,62,31,0,
	383,385,3,32,16,0,384,382,1,0,0,0,384,383,1,0,0,0,385,69,1,0,0,0,386,387,
	3,26,13,0,387,388,5,70,0,0,388,71,1,0,0,0,389,390,5,16,0,0,390,391,5,44,
	0,0,391,392,3,26,13,0,392,393,5,45,0,0,393,396,3,62,31,0,394,395,5,10,0,
	0,395,397,3,62,31,0,396,394,1,0,0,0,396,397,1,0,0,0,397,73,1,0,0,0,398,
	399,5,33,0,0,399,400,5,44,0,0,400,401,3,26,13,0,401,402,5,45,0,0,402,403,
	3,62,31,0,403,75,1,0,0,0,404,406,5,22,0,0,405,407,3,26,13,0,406,405,1,0,
	0,0,406,407,1,0,0,0,407,408,1,0,0,0,408,409,5,70,0,0,409,77,1,0,0,0,410,
	412,3,80,40,0,411,410,1,0,0,0,411,412,1,0,0,0,412,413,1,0,0,0,413,414,5,
	0,0,1,414,79,1,0,0,0,415,417,3,82,41,0,416,415,1,0,0,0,417,418,1,0,0,0,
	418,416,1,0,0,0,418,419,1,0,0,0,419,81,1,0,0,0,420,423,3,84,42,0,421,423,
	3,32,16,0,422,420,1,0,0,0,422,421,1,0,0,0,423,83,1,0,0,0,424,425,3,36,18,
	0,425,426,3,38,19,0,426,427,3,64,32,0,427,85,1,0,0,0,428,430,3,32,16,0,
	429,428,1,0,0,0,430,431,1,0,0,0,431,429,1,0,0,0,431,432,1,0,0,0,432,87,
	1,0,0,0,49,93,99,104,111,118,125,143,145,157,159,177,179,191,193,204,215,
	225,238,248,253,264,267,269,277,285,287,294,298,308,314,317,319,328,332,
	335,340,345,354,362,369,373,380,384,396,406,411,418,422,431];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CParser.__ATN) {
			CParser.__ATN = new ATNDeserializer().deserialize(CParser._serializedATN);
		}

		return CParser.__ATN;
	}


	static DecisionsToDFA = CParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(CParser.Identifier, 0);
	}
	public Constant(): TerminalNode {
		return this.getToken(CParser.Constant, 0);
	}
	public StringLiteral_list(): TerminalNode[] {
	    	return this.getTokens(CParser.StringLiteral);
	}
	public StringLiteral(i: number): TerminalNode {
		return this.getToken(CParser.StringLiteral, i);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(CParser.LeftParen, 0);
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(CParser.RightParen, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_primaryExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterPrimaryExpression) {
	 		listener.enterPrimaryExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitPrimaryExpression) {
	 		listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public LeftParen(): TerminalNode {
		return this.getToken(CParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(CParser.RightParen, 0);
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(CParser.LeftBracket, 0);
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
	public RightBracket(): TerminalNode {
		return this.getToken(CParser.RightBracket, 0);
	}
	public argumentExpressionList(): ArgumentExpressionListContext {
		return this.getTypedRuleContext(ArgumentExpressionListContext, 0) as ArgumentExpressionListContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_postfixExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterPostfixExpression) {
	 		listener.enterPostfixExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitPostfixExpression) {
	 		listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentExpressionListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentExpression_list(): AssignmentExpressionContext[] {
		return this.getTypedRuleContexts(AssignmentExpressionContext) as AssignmentExpressionContext[];
	}
	public assignmentExpression(i: number): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, i) as AssignmentExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(CParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_argumentExpressionList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterArgumentExpressionList) {
	 		listener.enterArgumentExpressionList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitArgumentExpressionList) {
	 		listener.exitArgumentExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitArgumentExpressionList) {
			return visitor.visitArgumentExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}
	public unaryOperator(): UnaryOperatorContext {
		return this.getTypedRuleContext(UnaryOperatorContext, 0) as UnaryOperatorContext;
	}
	public castExpression(): CastExpressionContext {
		return this.getTypedRuleContext(CastExpressionContext, 0) as CastExpressionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_unaryExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterUnaryExpression) {
	 		listener.enterUnaryExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitUnaryExpression) {
	 		listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Minus(): TerminalNode {
		return this.getToken(CParser.Minus, 0);
	}
	public Not(): TerminalNode {
		return this.getToken(CParser.Not, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_unaryOperator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterUnaryOperator) {
	 		listener.enterUnaryOperator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitUnaryOperator) {
	 		listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_castExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterCastExpression) {
	 		listener.enterCastExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitCastExpression) {
	 		listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public castExpression(): CastExpressionContext {
		return this.getTypedRuleContext(CastExpressionContext, 0) as CastExpressionContext;
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
	public Star(): TerminalNode {
		return this.getToken(CParser.Star, 0);
	}
	public Div(): TerminalNode {
		return this.getToken(CParser.Div, 0);
	}
	public Mod(): TerminalNode {
		return this.getToken(CParser.Mod, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_multiplicativeExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterMultiplicativeExpression) {
	 		listener.enterMultiplicativeExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitMultiplicativeExpression) {
	 		listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public Plus(): TerminalNode {
		return this.getToken(CParser.Plus, 0);
	}
	public Minus(): TerminalNode {
		return this.getToken(CParser.Minus, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_additiveExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterAdditiveExpression) {
	 		listener.enterAdditiveExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitAdditiveExpression) {
	 		listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public relationalExpression(): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, 0) as RelationalExpressionContext;
	}
	public Less(): TerminalNode {
		return this.getToken(CParser.Less, 0);
	}
	public Greater(): TerminalNode {
		return this.getToken(CParser.Greater, 0);
	}
	public LessEqual(): TerminalNode {
		return this.getToken(CParser.LessEqual, 0);
	}
	public GreaterEqual(): TerminalNode {
		return this.getToken(CParser.GreaterEqual, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_relationalExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterRelationalExpression) {
	 		listener.enterRelationalExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitRelationalExpression) {
	 		listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationalExpression(): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, 0) as RelationalExpressionContext;
	}
	public equalityExpression(): EqualityExpressionContext {
		return this.getTypedRuleContext(EqualityExpressionContext, 0) as EqualityExpressionContext;
	}
	public Equal(): TerminalNode {
		return this.getToken(CParser.Equal, 0);
	}
	public NotEqual(): TerminalNode {
		return this.getToken(CParser.NotEqual, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_equalityExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterEqualityExpression) {
	 		listener.enterEqualityExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitEqualityExpression) {
	 		listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public equalityExpression(): EqualityExpressionContext {
		return this.getTypedRuleContext(EqualityExpressionContext, 0) as EqualityExpressionContext;
	}
	public logicalAndExpression(): LogicalAndExpressionContext {
		return this.getTypedRuleContext(LogicalAndExpressionContext, 0) as LogicalAndExpressionContext;
	}
	public AndAnd(): TerminalNode {
		return this.getToken(CParser.AndAnd, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_logicalAndExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterLogicalAndExpression) {
	 		listener.enterLogicalAndExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitLogicalAndExpression) {
	 		listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public logicalAndExpression(): LogicalAndExpressionContext {
		return this.getTypedRuleContext(LogicalAndExpressionContext, 0) as LogicalAndExpressionContext;
	}
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getTypedRuleContext(LogicalOrExpressionContext, 0) as LogicalOrExpressionContext;
	}
	public OrOr(): TerminalNode {
		return this.getToken(CParser.OrOr, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_logicalOrExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterLogicalOrExpression) {
	 		listener.enterLogicalOrExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitLogicalOrExpression) {
	 		listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getTypedRuleContext(LogicalOrExpressionContext, 0) as LogicalOrExpressionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_conditionalExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterConditionalExpression) {
	 		listener.enterConditionalExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitConditionalExpression) {
	 		listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_assignmentExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterAssignmentExpression) {
	 		listener.enterAssignmentExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitAssignmentExpression) {
	 		listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Assign(): TerminalNode {
		return this.getToken(CParser.Assign, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_assignmentOperator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterAssignmentOperator) {
	 		listener.enterAssignmentOperator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitAssignmentOperator) {
	 		listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_constantExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterConstantExpression) {
	 		listener.enterConstantExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitConstantExpression) {
	 		listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getTypedRuleContext(TypeSpecifierContext, 0) as TypeSpecifierContext;
	}
	public initDeclarator(): InitDeclaratorContext {
		return this.getTypedRuleContext(InitDeclaratorContext, 0) as InitDeclaratorContext;
	}
	public Semi(): TerminalNode {
		return this.getToken(CParser.Semi, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_declaration;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDeclaration) {
	 		listener.enterDeclaration(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDeclaration) {
	 		listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public directDeclarator(): DirectDeclaratorContext {
		return this.getTypedRuleContext(DirectDeclaratorContext, 0) as DirectDeclaratorContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(CParser.Assign, 0);
	}
	public initializer(): InitializerContext {
		return this.getTypedRuleContext(InitializerContext, 0) as InitializerContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_initDeclarator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterInitDeclarator) {
	 		listener.enterInitDeclarator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitInitDeclarator) {
	 		listener.exitInitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitDeclarator) {
			return visitor.visitInitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Char(): TerminalNode {
		return this.getToken(CParser.Char, 0);
	}
	public Int(): TerminalNode {
		return this.getToken(CParser.Int, 0);
	}
	public Double(): TerminalNode {
		return this.getToken(CParser.Double, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_typeSpecifier;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterTypeSpecifier) {
	 		listener.enterTypeSpecifier(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitTypeSpecifier) {
	 		listener.exitTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectDeclaratorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(CParser.Identifier, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(CParser.LeftParen, 0);
	}
	public directDeclarator(): DirectDeclaratorContext {
		return this.getTypedRuleContext(DirectDeclaratorContext, 0) as DirectDeclaratorContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(CParser.RightParen, 0);
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(CParser.LeftBracket, 0);
	}
	public RightBracket(): TerminalNode {
		return this.getToken(CParser.RightBracket, 0);
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_directDeclarator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDirectDeclarator) {
	 		listener.enterDirectDeclarator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDirectDeclarator) {
	 		listener.exitDirectDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDirectDeclarator) {
			return visitor.visitDirectDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameterDeclaration_list(): ParameterDeclarationContext[] {
		return this.getTypedRuleContexts(ParameterDeclarationContext) as ParameterDeclarationContext[];
	}
	public parameterDeclaration(i: number): ParameterDeclarationContext {
		return this.getTypedRuleContext(ParameterDeclarationContext, i) as ParameterDeclarationContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(CParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_parameterList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitParameterList) {
	 		listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclarationContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getTypedRuleContext(TypeSpecifierContext, 0) as TypeSpecifierContext;
	}
	public directDeclarator(): DirectDeclaratorContext {
		return this.getTypedRuleContext(DirectDeclaratorContext, 0) as DirectDeclaratorContext;
	}
	public directAbstractDeclarator(): DirectAbstractDeclaratorContext {
		return this.getTypedRuleContext(DirectAbstractDeclaratorContext, 0) as DirectAbstractDeclaratorContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_parameterDeclaration;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterParameterDeclaration) {
	 		listener.enterParameterDeclaration(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitParameterDeclaration) {
	 		listener.exitParameterDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParameterDeclaration) {
			return visitor.visitParameterDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(CParser.Identifier, i);
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(CParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_identifierList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterIdentifierList) {
	 		listener.enterIdentifierList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitIdentifierList) {
	 		listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public directAbstractDeclarator(): DirectAbstractDeclaratorContext {
		return this.getTypedRuleContext(DirectAbstractDeclaratorContext, 0) as DirectAbstractDeclaratorContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_typeName;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterTypeName) {
	 		listener.enterTypeName(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitTypeName) {
	 		listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectAbstractDeclaratorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftParen(): TerminalNode {
		return this.getToken(CParser.LeftParen, 0);
	}
	public directAbstractDeclarator(): DirectAbstractDeclaratorContext {
		return this.getTypedRuleContext(DirectAbstractDeclaratorContext, 0) as DirectAbstractDeclaratorContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(CParser.RightParen, 0);
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(CParser.LeftBracket, 0);
	}
	public RightBracket(): TerminalNode {
		return this.getToken(CParser.RightBracket, 0);
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_directAbstractDeclarator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDirectAbstractDeclarator) {
	 		listener.enterDirectAbstractDeclarator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDirectAbstractDeclarator) {
	 		listener.exitDirectAbstractDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDirectAbstractDeclarator) {
			return visitor.visitDirectAbstractDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedefNameContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(CParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_typedefName;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterTypedefName) {
	 		listener.enterTypedefName(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitTypedefName) {
	 		listener.exitTypedefName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypedefName) {
			return visitor.visitTypedefName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(CParser.LeftBrace, 0);
	}
	public initializerList(): InitializerListContext {
		return this.getTypedRuleContext(InitializerListContext, 0) as InitializerListContext;
	}
	public RightBrace(): TerminalNode {
		return this.getToken(CParser.RightBrace, 0);
	}
	public Comma(): TerminalNode {
		return this.getToken(CParser.Comma, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_initializer;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterInitializer) {
	 		listener.enterInitializer(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitInitializer) {
	 		listener.exitInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitializer) {
			return visitor.visitInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public initializer_list(): InitializerContext[] {
		return this.getTypedRuleContexts(InitializerContext) as InitializerContext[];
	}
	public initializer(i: number): InitializerContext {
		return this.getTypedRuleContext(InitializerContext, i) as InitializerContext;
	}
	public designation_list(): DesignationContext[] {
		return this.getTypedRuleContexts(DesignationContext) as DesignationContext[];
	}
	public designation(i: number): DesignationContext {
		return this.getTypedRuleContext(DesignationContext, i) as DesignationContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(CParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_initializerList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterInitializerList) {
	 		listener.enterInitializerList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitInitializerList) {
	 		listener.exitInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitializerList) {
			return visitor.visitInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignationContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public designatorList(): DesignatorListContext {
		return this.getTypedRuleContext(DesignatorListContext, 0) as DesignatorListContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(CParser.Assign, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_designation;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDesignation) {
	 		listener.enterDesignation(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDesignation) {
	 		listener.exitDesignation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDesignation) {
			return visitor.visitDesignation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignatorListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public designator_list(): DesignatorContext[] {
		return this.getTypedRuleContexts(DesignatorContext) as DesignatorContext[];
	}
	public designator(i: number): DesignatorContext {
		return this.getTypedRuleContext(DesignatorContext, i) as DesignatorContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_designatorList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDesignatorList) {
	 		listener.enterDesignatorList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDesignatorList) {
	 		listener.exitDesignatorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDesignatorList) {
			return visitor.visitDesignatorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignatorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(CParser.LeftBracket, 0);
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
	public RightBracket(): TerminalNode {
		return this.getToken(CParser.RightBracket, 0);
	}
	public Dot(): TerminalNode {
		return this.getToken(CParser.Dot, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(CParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_designator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDesignator) {
	 		listener.enterDesignator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDesignator) {
	 		listener.exitDesignator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDesignator) {
			return visitor.visitDesignator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getTypedRuleContext(CompoundStatementContext, 0) as CompoundStatementContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public selectionStatement(): SelectionStatementContext {
		return this.getTypedRuleContext(SelectionStatementContext, 0) as SelectionStatementContext;
	}
	public iterationStatement(): IterationStatementContext {
		return this.getTypedRuleContext(IterationStatementContext, 0) as IterationStatementContext;
	}
	public jumpStatement(): JumpStatementContext {
		return this.getTypedRuleContext(JumpStatementContext, 0) as JumpStatementContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_statement;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(CParser.LeftBrace, 0);
	}
	public RightBrace(): TerminalNode {
		return this.getToken(CParser.RightBrace, 0);
	}
	public blockItemList(): BlockItemListContext {
		return this.getTypedRuleContext(BlockItemListContext, 0) as BlockItemListContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_compoundStatement;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterCompoundStatement) {
	 		listener.enterCompoundStatement(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitCompoundStatement) {
	 		listener.exitCompoundStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCompoundStatement) {
			return visitor.visitCompoundStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public blockItem_list(): BlockItemContext[] {
		return this.getTypedRuleContexts(BlockItemContext) as BlockItemContext[];
	}
	public blockItem(i: number): BlockItemContext {
		return this.getTypedRuleContext(BlockItemContext, i) as BlockItemContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_blockItemList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterBlockItemList) {
	 		listener.enterBlockItemList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitBlockItemList) {
	 		listener.exitBlockItemList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitBlockItemList) {
			return visitor.visitBlockItemList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_blockItem;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterBlockItem) {
	 		listener.enterBlockItem(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitBlockItem) {
	 		listener.exitBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitBlockItem) {
			return visitor.visitBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
	public Semi(): TerminalNode {
		return this.getToken(CParser.Semi, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_expressionStatement;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterExpressionStatement) {
	 		listener.enterExpressionStatement(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitExpressionStatement) {
	 		listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionStatementContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public If(): TerminalNode {
		return this.getToken(CParser.If, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(CParser.LeftParen, 0);
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(CParser.RightParen, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public Else(): TerminalNode {
		return this.getToken(CParser.Else, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_selectionStatement;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterSelectionStatement) {
	 		listener.enterSelectionStatement(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitSelectionStatement) {
	 		listener.exitSelectionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSelectionStatement) {
			return visitor.visitSelectionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public While(): TerminalNode {
		return this.getToken(CParser.While, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(CParser.LeftParen, 0);
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(CParser.RightParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_iterationStatement;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterIterationStatement) {
	 		listener.enterIterationStatement(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitIterationStatement) {
	 		listener.exitIterationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitIterationStatement) {
			return visitor.visitIterationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JumpStatementContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Return(): TerminalNode {
		return this.getToken(CParser.Return, 0);
	}
	public Semi(): TerminalNode {
		return this.getToken(CParser.Semi, 0);
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_jumpStatement;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterJumpStatement) {
	 		listener.enterJumpStatement(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitJumpStatement) {
	 		listener.exitJumpStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitJumpStatement) {
			return visitor.visitJumpStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(CParser.EOF, 0);
	}
	public translationUnit(): TranslationUnitContext {
		return this.getTypedRuleContext(TranslationUnitContext, 0) as TranslationUnitContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_compilationUnit;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterCompilationUnit) {
	 		listener.enterCompilationUnit(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitCompilationUnit) {
	 		listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TranslationUnitContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public externalDeclaration_list(): ExternalDeclarationContext[] {
		return this.getTypedRuleContexts(ExternalDeclarationContext) as ExternalDeclarationContext[];
	}
	public externalDeclaration(i: number): ExternalDeclarationContext {
		return this.getTypedRuleContext(ExternalDeclarationContext, i) as ExternalDeclarationContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_translationUnit;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterTranslationUnit) {
	 		listener.enterTranslationUnit(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitTranslationUnit) {
	 		listener.exitTranslationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTranslationUnit) {
			return visitor.visitTranslationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternalDeclarationContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionDefinition(): FunctionDefinitionContext {
		return this.getTypedRuleContext(FunctionDefinitionContext, 0) as FunctionDefinitionContext;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_externalDeclaration;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterExternalDeclaration) {
	 		listener.enterExternalDeclaration(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitExternalDeclaration) {
	 		listener.exitExternalDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExternalDeclaration) {
			return visitor.visitExternalDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getTypedRuleContext(TypeSpecifierContext, 0) as TypeSpecifierContext;
	}
	public directDeclarator(): DirectDeclaratorContext {
		return this.getTypedRuleContext(DirectDeclaratorContext, 0) as DirectDeclaratorContext;
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getTypedRuleContext(CompoundStatementContext, 0) as CompoundStatementContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_functionDefinition;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterFunctionDefinition) {
	 		listener.enterFunctionDefinition(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitFunctionDefinition) {
	 		listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaration_list(): DeclarationContext[] {
		return this.getTypedRuleContexts(DeclarationContext) as DeclarationContext[];
	}
	public declaration(i: number): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, i) as DeclarationContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_declarationList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDeclarationList) {
	 		listener.enterDeclarationList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDeclarationList) {
	 		listener.exitDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclarationList) {
			return visitor.visitDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
