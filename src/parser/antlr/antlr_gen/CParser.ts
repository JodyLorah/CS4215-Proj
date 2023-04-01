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
	public static readonly RULE_expression = 15;
	public static readonly RULE_constantExpression = 16;
	public static readonly RULE_declaration = 17;
	public static readonly RULE_initDeclarator = 18;
	public static readonly RULE_typeSpecifier = 19;
	public static readonly RULE_directDeclarator = 20;
	public static readonly RULE_parameterList = 21;
	public static readonly RULE_parameterDeclaration = 22;
	public static readonly RULE_identifierList = 23;
	public static readonly RULE_typeName = 24;
	public static readonly RULE_directAbstractDeclarator = 25;
	public static readonly RULE_typedefName = 26;
	public static readonly RULE_initializer = 27;
	public static readonly RULE_initializerList = 28;
	public static readonly RULE_designation = 29;
	public static readonly RULE_designatorList = 30;
	public static readonly RULE_designator = 31;
	public static readonly RULE_statement = 32;
	public static readonly RULE_compoundStatement = 33;
	public static readonly RULE_blockItemList = 34;
	public static readonly RULE_blockItem = 35;
	public static readonly RULE_expressionStatement = 36;
	public static readonly RULE_selectionStatement = 37;
	public static readonly RULE_iterationStatement = 38;
	public static readonly RULE_jumpStatement = 39;
	public static readonly RULE_compilationUnit = 40;
	public static readonly RULE_translationUnit = 41;
	public static readonly RULE_externalDeclaration = 42;
	public static readonly RULE_functionDefinition = 43;
	public static readonly RULE_declarationList = 44;
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
		"assignmentOperator", "expression", "constantExpression", "declaration", 
		"initDeclarator", "typeSpecifier", "directDeclarator", "parameterList", 
		"parameterDeclaration", "identifierList", "typeName", "directAbstractDeclarator", 
		"typedefName", "initializer", "initializerList", "designation", "designatorList", 
		"designator", "statement", "compoundStatement", "blockItemList", "blockItem", 
		"expressionStatement", "selectionStatement", "iterationStatement", "jumpStatement", 
		"compilationUnit", "translationUnit", "externalDeclaration", "functionDefinition", 
		"declarationList",
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
			this.state = 101;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 90;
				this.match(CParser.Identifier);
				}
				break;
			case 87:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 91;
				this.match(CParser.Constant);
				}
				break;
			case 89:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 93;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 92;
						this.match(CParser.StringLiteral);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 95;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 97;
				this.match(CParser.LeftParen);
				this.state = 98;
				this.expression();
				this.state = 99;
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
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 103;
			this.primaryExpression();
			this.state = 115;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 113;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 46:
						{
						this.state = 104;
						this.match(CParser.LeftBracket);
						this.state = 105;
						this.expression();
						this.state = 106;
						this.match(CParser.RightBracket);
						}
						break;
					case 44:
						{
						this.state = 108;
						this.match(CParser.LeftParen);
						this.state = 110;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4198401) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 11) !== 0)) {
							{
							this.state = 109;
							this.argumentExpressionList();
							}
						}

						this.state = 112;
						this.match(CParser.RightParen);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
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
			this.state = 118;
			this.assignmentExpression();
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===71) {
				{
				{
				this.state = 119;
				this.match(CParser.Comma);
				this.state = 120;
				this.assignmentExpression();
				}
				}
				this.state = 125;
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
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 44:
			case 86:
			case 87:
			case 89:
				{
				this.state = 126;
				this.postfixExpression();
				}
				break;
			case 56:
			case 66:
				{
				this.state = 127;
				this.unaryOperator();
				this.state = 128;
				this.castExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public unaryOperator(): UnaryOperatorContext {
		let localctx: UnaryOperatorContext = new UnaryOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, CParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
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
			this.state = 134;
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
			this.state = 137;
			this.castExpression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 150;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 148;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_multiplicativeExpression);
						this.state = 139;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 140;
						this.match(CParser.Star);
						this.state = 141;
						this.castExpression();
						}
						break;
					case 2:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_multiplicativeExpression);
						this.state = 142;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 143;
						this.match(CParser.Div);
						this.state = 144;
						this.castExpression();
						}
						break;
					case 3:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_multiplicativeExpression);
						this.state = 145;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 146;
						this.match(CParser.Mod);
						this.state = 147;
						this.castExpression();
						}
						break;
					}
					}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
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
			this.state = 154;
			this.multiplicativeExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 164;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 162;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_additiveExpression);
						this.state = 156;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 157;
						this.match(CParser.Plus);
						this.state = 158;
						this.multiplicativeExpression(0);
						}
						break;
					case 2:
						{
						localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_additiveExpression);
						this.state = 159;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 160;
						this.match(CParser.Minus);
						this.state = 161;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
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
			this.state = 168;
			this.additiveExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 184;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 182;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 170;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 171;
						this.match(CParser.Less);
						this.state = 172;
						this.additiveExpression(0);
						}
						break;
					case 2:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 173;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 174;
						this.match(CParser.Greater);
						this.state = 175;
						this.additiveExpression(0);
						}
						break;
					case 3:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 176;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 177;
						this.match(CParser.LessEqual);
						this.state = 178;
						this.additiveExpression(0);
						}
						break;
					case 4:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
						this.state = 179;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 180;
						this.match(CParser.GreaterEqual);
						this.state = 181;
						this.additiveExpression(0);
						}
						break;
					}
					}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
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
			this.state = 188;
			this.relationalExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 198;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 196;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_equalityExpression);
						this.state = 190;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 191;
						this.match(CParser.Equal);
						this.state = 192;
						this.relationalExpression(0);
						}
						break;
					case 2:
						{
						localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_equalityExpression);
						this.state = 193;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 194;
						this.match(CParser.NotEqual);
						this.state = 195;
						this.relationalExpression(0);
						}
						break;
					}
					}
				}
				this.state = 200;
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
			this.state = 202;
			this.equalityExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 209;
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
					localctx = new LogicalAndExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, CParser.RULE_logicalAndExpression);
					this.state = 204;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 205;
					this.match(CParser.AndAnd);
					this.state = 206;
					this.equalityExpression(0);
					}
					}
				}
				this.state = 211;
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
			this.state = 213;
			this.logicalAndExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 220;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
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
					this.state = 215;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 216;
					this.match(CParser.OrOr);
					this.state = 217;
					this.logicalAndExpression(0);
					}
					}
				}
				this.state = 222;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
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
			this.state = 223;
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
			this.state = 230;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 225;
				this.conditionalExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 226;
				this.unaryExpression();
				this.state = 227;
				this.assignmentOperator();
				this.state = 228;
				this.assignmentExpression();
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 232;
			_la = this._input.LA(1);
			if(!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 63) !== 0))) {
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
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, CParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 234;
			this.assignmentExpression();
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
		this.enterRule(localctx, 32, CParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 236;
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
		this.enterRule(localctx, 34, CParser.RULE_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 238;
			this.typeSpecifier();
			this.state = 239;
			this.initDeclarator();
			this.state = 240;
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
		this.enterRule(localctx, 36, CParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			this.directDeclarator(0);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===72) {
				{
				this.state = 243;
				this.match(CParser.Assign);
				this.state = 244;
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
		this.enterRule(localctx, 38, CParser.RULE_typeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 247;
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
		let _startState: number = 40;
		this.enterRecursionRule(localctx, 40, CParser.RULE_directDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 255;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				{
				this.state = 250;
				this.match(CParser.Identifier);
				}
				break;
			case 44:
				{
				this.state = 251;
				this.match(CParser.LeftParen);
				this.state = 252;
				this.directDeclarator(0);
				this.state = 253;
				this.match(CParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 276;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 274;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 257;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 258;
						this.match(CParser.LeftBracket);
						this.state = 260;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4198401) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 11) !== 0)) {
							{
							this.state = 259;
							this.assignmentExpression();
							}
						}

						this.state = 262;
						this.match(CParser.RightBracket);
						}
						break;
					case 2:
						{
						localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 263;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 264;
						this.match(CParser.LeftParen);
						this.state = 265;
						this.parameterList();
						this.state = 266;
						this.match(CParser.RightParen);
						}
						break;
					case 3:
						{
						localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 268;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 269;
						this.match(CParser.LeftParen);
						this.state = 271;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===86) {
							{
							this.state = 270;
							this.identifierList();
							}
						}

						this.state = 273;
						this.match(CParser.RightParen);
						}
						break;
					}
					}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
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
		this.enterRule(localctx, 42, CParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 279;
			this.parameterDeclaration();
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===71) {
				{
				{
				this.state = 280;
				this.match(CParser.Comma);
				this.state = 281;
				this.parameterDeclaration();
				}
				}
				this.state = 286;
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
		this.enterRule(localctx, 44, CParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.state = 294;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 287;
				this.typeSpecifier();
				this.state = 288;
				this.directDeclarator(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 290;
				this.typeSpecifier();
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===44) {
					{
					this.state = 291;
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
		this.enterRule(localctx, 46, CParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 296;
			this.match(CParser.Identifier);
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===71) {
				{
				{
				this.state = 297;
				this.match(CParser.Comma);
				this.state = 298;
				this.match(CParser.Identifier);
				}
				}
				this.state = 303;
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
		this.enterRule(localctx, 48, CParser.RULE_typeName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===44) {
				{
				this.state = 304;
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
		let _startState: number = 50;
		this.enterRecursionRule(localctx, 50, CParser.RULE_directAbstractDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 308;
			this.match(CParser.LeftParen);
			this.state = 309;
			this.directAbstractDeclarator(0);
			this.state = 310;
			this.match(CParser.RightParen);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 326;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 324;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
					case 1:
						{
						localctx = new DirectAbstractDeclaratorContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 312;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 313;
						this.match(CParser.LeftBracket);
						this.state = 315;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4198401) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 11) !== 0)) {
							{
							this.state = 314;
							this.assignmentExpression();
							}
						}

						this.state = 317;
						this.match(CParser.RightBracket);
						}
						break;
					case 2:
						{
						localctx = new DirectAbstractDeclaratorContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directAbstractDeclarator);
						this.state = 318;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 319;
						this.match(CParser.LeftParen);
						this.state = 321;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0)) {
							{
							this.state = 320;
							this.parameterList();
							}
						}

						this.state = 323;
						this.match(CParser.RightParen);
						}
						break;
					}
					}
				}
				this.state = 328;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
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
		this.enterRule(localctx, 52, CParser.RULE_typedefName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 329;
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
		this.enterRule(localctx, 54, CParser.RULE_initializer);
		let _la: number;
		try {
			this.state = 339;
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
				this.state = 331;
				this.assignmentExpression();
				}
				break;
			case 48:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 332;
				this.match(CParser.LeftBrace);
				this.state = 333;
				this.initializerList();
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===71) {
					{
					this.state = 334;
					this.match(CParser.Comma);
					}
				}

				this.state = 337;
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
		this.enterRule(localctx, 56, CParser.RULE_initializerList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46 || _la===84) {
				{
				this.state = 341;
				this.designation();
				}
			}

			this.state = 344;
			this.initializer();
			this.state = 352;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 345;
					this.match(CParser.Comma);
					this.state = 347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===46 || _la===84) {
						{
						this.state = 346;
						this.designation();
						}
					}

					this.state = 349;
					this.initializer();
					}
					}
				}
				this.state = 354;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
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
		this.enterRule(localctx, 58, CParser.RULE_designation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 355;
			this.designatorList();
			this.state = 356;
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
		this.enterRule(localctx, 60, CParser.RULE_designatorList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 358;
				this.designator();
				}
				}
				this.state = 361;
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
		this.enterRule(localctx, 62, CParser.RULE_designator);
		try {
			this.state = 369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 46:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 363;
				this.match(CParser.LeftBracket);
				this.state = 364;
				this.constantExpression();
				this.state = 365;
				this.match(CParser.RightBracket);
				}
				break;
			case 84:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 367;
				this.match(CParser.Dot);
				this.state = 368;
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
		this.enterRule(localctx, 64, CParser.RULE_statement);
		try {
			this.state = 376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 371;
				this.compoundStatement();
				}
				break;
			case 44:
			case 56:
			case 66:
			case 70:
			case 86:
			case 87:
			case 89:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 372;
				this.expressionStatement();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 373;
				this.selectionStatement();
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 374;
				this.iterationStatement();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 375;
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
		this.enterRule(localctx, 66, CParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 378;
			this.match(CParser.LeftBrace);
			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4522512) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 8423425) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 11534353) !== 0)) {
				{
				this.state = 379;
				this.blockItemList();
				}
			}

			this.state = 382;
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
		this.enterRule(localctx, 68, CParser.RULE_blockItemList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 384;
				this.blockItem();
				}
				}
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4522512) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 8423425) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 11534353) !== 0));
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
		this.enterRule(localctx, 70, CParser.RULE_blockItem);
		try {
			this.state = 391;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
			case 22:
			case 33:
			case 44:
			case 48:
			case 56:
			case 66:
			case 70:
			case 86:
			case 87:
			case 89:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 389;
				this.statement();
				}
				break;
			case 4:
			case 9:
			case 18:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 390;
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
		this.enterRule(localctx, 72, CParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4198401) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 11) !== 0)) {
				{
				this.state = 393;
				this.expression();
				}
			}

			this.state = 396;
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
		this.enterRule(localctx, 74, CParser.RULE_selectionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 398;
			this.match(CParser.If);
			this.state = 399;
			this.match(CParser.LeftParen);
			this.state = 400;
			this.expression();
			this.state = 401;
			this.match(CParser.RightParen);
			this.state = 402;
			this.statement();
			this.state = 405;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 403;
				this.match(CParser.Else);
				this.state = 404;
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
		this.enterRule(localctx, 76, CParser.RULE_iterationStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 407;
			this.match(CParser.While);
			this.state = 408;
			this.match(CParser.LeftParen);
			this.state = 409;
			this.expression();
			this.state = 410;
			this.match(CParser.RightParen);
			this.state = 411;
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
		this.enterRule(localctx, 78, CParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 413;
			this.match(CParser.Return);
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4198401) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 11) !== 0)) {
				{
				this.state = 414;
				this.expression();
				}
			}

			this.state = 417;
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
		this.enterRule(localctx, 80, CParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0)) {
				{
				this.state = 419;
				this.translationUnit();
				}
			}

			this.state = 422;
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
		this.enterRule(localctx, 82, CParser.RULE_translationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 424;
				this.externalDeclaration();
				}
				}
				this.state = 427;
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
		this.enterRule(localctx, 84, CParser.RULE_externalDeclaration);
		try {
			this.state = 431;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 429;
				this.functionDefinition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 430;
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
		this.enterRule(localctx, 86, CParser.RULE_functionDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 433;
			this.typeSpecifier();
			this.state = 434;
			this.directDeclarator(0);
			this.state = 435;
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
		this.enterRule(localctx, 88, CParser.RULE_declarationList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 437;
				this.declaration();
				}
				}
				this.state = 440;
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
		case 20:
			return this.directDeclarator_sempred(localctx as DirectDeclaratorContext, predIndex);
		case 25:
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

	public static readonly _serializedATN: number[] = [4,1,99,443,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,1,0,1,0,1,0,4,
	0,94,8,0,11,0,12,0,95,1,0,1,0,1,0,1,0,3,0,102,8,0,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,3,1,111,8,1,1,1,5,1,114,8,1,10,1,12,1,117,9,1,1,2,1,2,1,2,5,2,122,
	8,2,10,2,12,2,125,9,2,1,3,1,3,1,3,1,3,3,3,131,8,3,1,4,1,4,1,5,1,5,1,6,1,
	6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,149,8,6,10,6,12,6,152,9,6,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,163,8,7,10,7,12,7,166,9,7,1,8,1,
	8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,183,8,8,10,8,
	12,8,186,9,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,197,8,9,10,9,12,9,
	200,9,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,208,8,10,10,10,12,10,211,9,10,
	1,11,1,11,1,11,1,11,1,11,1,11,5,11,219,8,11,10,11,12,11,222,9,11,1,12,1,
	12,1,13,1,13,1,13,1,13,1,13,3,13,231,8,13,1,14,1,14,1,15,1,15,1,16,1,16,
	1,17,1,17,1,17,1,17,1,18,1,18,1,18,3,18,246,8,18,1,19,1,19,1,20,1,20,1,
	20,1,20,1,20,1,20,3,20,256,8,20,1,20,1,20,1,20,3,20,261,8,20,1,20,1,20,
	1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,272,8,20,1,20,5,20,275,8,20,10,
	20,12,20,278,9,20,1,21,1,21,1,21,5,21,283,8,21,10,21,12,21,286,9,21,1,22,
	1,22,1,22,1,22,1,22,3,22,293,8,22,3,22,295,8,22,1,23,1,23,1,23,5,23,300,
	8,23,10,23,12,23,303,9,23,1,24,3,24,306,8,24,1,25,1,25,1,25,1,25,1,25,1,
	25,1,25,1,25,3,25,316,8,25,1,25,1,25,1,25,1,25,3,25,322,8,25,1,25,5,25,
	325,8,25,10,25,12,25,328,9,25,1,26,1,26,1,27,1,27,1,27,1,27,3,27,336,8,
	27,1,27,1,27,3,27,340,8,27,1,28,3,28,343,8,28,1,28,1,28,1,28,3,28,348,8,
	28,1,28,5,28,351,8,28,10,28,12,28,354,9,28,1,29,1,29,1,29,1,30,4,30,360,
	8,30,11,30,12,30,361,1,31,1,31,1,31,1,31,1,31,1,31,3,31,370,8,31,1,32,1,
	32,1,32,1,32,1,32,3,32,377,8,32,1,33,1,33,3,33,381,8,33,1,33,1,33,1,34,
	4,34,386,8,34,11,34,12,34,387,1,35,1,35,3,35,392,8,35,1,36,3,36,395,8,36,
	1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,406,8,37,1,38,1,38,1,
	38,1,38,1,38,1,38,1,39,1,39,3,39,416,8,39,1,39,1,39,1,40,3,40,421,8,40,
	1,40,1,40,1,41,4,41,426,8,41,11,41,12,41,427,1,42,1,42,3,42,432,8,42,1,
	43,1,43,1,43,1,43,1,44,4,44,439,8,44,11,44,12,44,440,1,44,0,8,12,14,16,
	18,20,22,40,50,45,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
	40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,
	88,0,3,2,0,56,56,66,66,1,0,72,77,3,0,4,4,9,9,18,18,457,0,101,1,0,0,0,2,
	103,1,0,0,0,4,118,1,0,0,0,6,130,1,0,0,0,8,132,1,0,0,0,10,134,1,0,0,0,12,
	136,1,0,0,0,14,153,1,0,0,0,16,167,1,0,0,0,18,187,1,0,0,0,20,201,1,0,0,0,
	22,212,1,0,0,0,24,223,1,0,0,0,26,230,1,0,0,0,28,232,1,0,0,0,30,234,1,0,
	0,0,32,236,1,0,0,0,34,238,1,0,0,0,36,242,1,0,0,0,38,247,1,0,0,0,40,255,
	1,0,0,0,42,279,1,0,0,0,44,294,1,0,0,0,46,296,1,0,0,0,48,305,1,0,0,0,50,
	307,1,0,0,0,52,329,1,0,0,0,54,339,1,0,0,0,56,342,1,0,0,0,58,355,1,0,0,0,
	60,359,1,0,0,0,62,369,1,0,0,0,64,376,1,0,0,0,66,378,1,0,0,0,68,385,1,0,
	0,0,70,391,1,0,0,0,72,394,1,0,0,0,74,398,1,0,0,0,76,407,1,0,0,0,78,413,
	1,0,0,0,80,420,1,0,0,0,82,425,1,0,0,0,84,431,1,0,0,0,86,433,1,0,0,0,88,
	438,1,0,0,0,90,102,5,86,0,0,91,102,5,87,0,0,92,94,5,89,0,0,93,92,1,0,0,
	0,94,95,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,102,1,0,0,0,97,98,5,44,0,
	0,98,99,3,30,15,0,99,100,5,45,0,0,100,102,1,0,0,0,101,90,1,0,0,0,101,91,
	1,0,0,0,101,93,1,0,0,0,101,97,1,0,0,0,102,1,1,0,0,0,103,115,3,0,0,0,104,
	105,5,46,0,0,105,106,3,30,15,0,106,107,5,47,0,0,107,114,1,0,0,0,108,110,
	5,44,0,0,109,111,3,4,2,0,110,109,1,0,0,0,110,111,1,0,0,0,111,112,1,0,0,
	0,112,114,5,45,0,0,113,104,1,0,0,0,113,108,1,0,0,0,114,117,1,0,0,0,115,
	113,1,0,0,0,115,116,1,0,0,0,116,3,1,0,0,0,117,115,1,0,0,0,118,123,3,26,
	13,0,119,120,5,71,0,0,120,122,3,26,13,0,121,119,1,0,0,0,122,125,1,0,0,0,
	123,121,1,0,0,0,123,124,1,0,0,0,124,5,1,0,0,0,125,123,1,0,0,0,126,131,3,
	2,1,0,127,128,3,8,4,0,128,129,3,10,5,0,129,131,1,0,0,0,130,126,1,0,0,0,
	130,127,1,0,0,0,131,7,1,0,0,0,132,133,7,0,0,0,133,9,1,0,0,0,134,135,3,6,
	3,0,135,11,1,0,0,0,136,137,6,6,-1,0,137,138,3,10,5,0,138,150,1,0,0,0,139,
	140,10,3,0,0,140,141,5,58,0,0,141,149,3,10,5,0,142,143,10,2,0,0,143,144,
	5,59,0,0,144,149,3,10,5,0,145,146,10,1,0,0,146,147,5,60,0,0,147,149,3,10,
	5,0,148,139,1,0,0,0,148,142,1,0,0,0,148,145,1,0,0,0,149,152,1,0,0,0,150,
	148,1,0,0,0,150,151,1,0,0,0,151,13,1,0,0,0,152,150,1,0,0,0,153,154,6,7,
	-1,0,154,155,3,12,6,0,155,164,1,0,0,0,156,157,10,2,0,0,157,158,5,54,0,0,
	158,163,3,12,6,0,159,160,10,1,0,0,160,161,5,56,0,0,161,163,3,12,6,0,162,
	156,1,0,0,0,162,159,1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,
	0,0,165,15,1,0,0,0,166,164,1,0,0,0,167,168,6,8,-1,0,168,169,3,14,7,0,169,
	184,1,0,0,0,170,171,10,4,0,0,171,172,5,50,0,0,172,183,3,14,7,0,173,174,
	10,3,0,0,174,175,5,52,0,0,175,183,3,14,7,0,176,177,10,2,0,0,177,178,5,51,
	0,0,178,183,3,14,7,0,179,180,10,1,0,0,180,181,5,53,0,0,181,183,3,14,7,0,
	182,170,1,0,0,0,182,173,1,0,0,0,182,176,1,0,0,0,182,179,1,0,0,0,183,186,
	1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,17,1,0,0,0,186,184,1,0,0,0,
	187,188,6,9,-1,0,188,189,3,16,8,0,189,198,1,0,0,0,190,191,10,2,0,0,191,
	192,5,81,0,0,192,197,3,16,8,0,193,194,10,1,0,0,194,195,5,82,0,0,195,197,
	3,16,8,0,196,190,1,0,0,0,196,193,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,
	0,198,199,1,0,0,0,199,19,1,0,0,0,200,198,1,0,0,0,201,202,6,10,-1,0,202,
	203,3,18,9,0,203,209,1,0,0,0,204,205,10,1,0,0,205,206,5,63,0,0,206,208,
	3,18,9,0,207,204,1,0,0,0,208,211,1,0,0,0,209,207,1,0,0,0,209,210,1,0,0,
	0,210,21,1,0,0,0,211,209,1,0,0,0,212,213,6,11,-1,0,213,214,3,20,10,0,214,
	220,1,0,0,0,215,216,10,1,0,0,216,217,5,64,0,0,217,219,3,20,10,0,218,215,
	1,0,0,0,219,222,1,0,0,0,220,218,1,0,0,0,220,221,1,0,0,0,221,23,1,0,0,0,
	222,220,1,0,0,0,223,224,3,22,11,0,224,25,1,0,0,0,225,231,3,24,12,0,226,
	227,3,6,3,0,227,228,3,28,14,0,228,229,3,26,13,0,229,231,1,0,0,0,230,225,
	1,0,0,0,230,226,1,0,0,0,231,27,1,0,0,0,232,233,7,1,0,0,233,29,1,0,0,0,234,
	235,3,26,13,0,235,31,1,0,0,0,236,237,3,24,12,0,237,33,1,0,0,0,238,239,3,
	38,19,0,239,240,3,36,18,0,240,241,5,70,0,0,241,35,1,0,0,0,242,245,3,40,
	20,0,243,244,5,72,0,0,244,246,3,54,27,0,245,243,1,0,0,0,245,246,1,0,0,0,
	246,37,1,0,0,0,247,248,7,2,0,0,248,39,1,0,0,0,249,250,6,20,-1,0,250,256,
	5,86,0,0,251,252,5,44,0,0,252,253,3,40,20,0,253,254,5,45,0,0,254,256,1,
	0,0,0,255,249,1,0,0,0,255,251,1,0,0,0,256,276,1,0,0,0,257,258,10,3,0,0,
	258,260,5,46,0,0,259,261,3,26,13,0,260,259,1,0,0,0,260,261,1,0,0,0,261,
	262,1,0,0,0,262,275,5,47,0,0,263,264,10,2,0,0,264,265,5,44,0,0,265,266,
	3,42,21,0,266,267,5,45,0,0,267,275,1,0,0,0,268,269,10,1,0,0,269,271,5,44,
	0,0,270,272,3,46,23,0,271,270,1,0,0,0,271,272,1,0,0,0,272,273,1,0,0,0,273,
	275,5,45,0,0,274,257,1,0,0,0,274,263,1,0,0,0,274,268,1,0,0,0,275,278,1,
	0,0,0,276,274,1,0,0,0,276,277,1,0,0,0,277,41,1,0,0,0,278,276,1,0,0,0,279,
	284,3,44,22,0,280,281,5,71,0,0,281,283,3,44,22,0,282,280,1,0,0,0,283,286,
	1,0,0,0,284,282,1,0,0,0,284,285,1,0,0,0,285,43,1,0,0,0,286,284,1,0,0,0,
	287,288,3,38,19,0,288,289,3,40,20,0,289,295,1,0,0,0,290,292,3,38,19,0,291,
	293,3,50,25,0,292,291,1,0,0,0,292,293,1,0,0,0,293,295,1,0,0,0,294,287,1,
	0,0,0,294,290,1,0,0,0,295,45,1,0,0,0,296,301,5,86,0,0,297,298,5,71,0,0,
	298,300,5,86,0,0,299,297,1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,301,302,
	1,0,0,0,302,47,1,0,0,0,303,301,1,0,0,0,304,306,3,50,25,0,305,304,1,0,0,
	0,305,306,1,0,0,0,306,49,1,0,0,0,307,308,6,25,-1,0,308,309,5,44,0,0,309,
	310,3,50,25,0,310,311,5,45,0,0,311,326,1,0,0,0,312,313,10,2,0,0,313,315,
	5,46,0,0,314,316,3,26,13,0,315,314,1,0,0,0,315,316,1,0,0,0,316,317,1,0,
	0,0,317,325,5,47,0,0,318,319,10,1,0,0,319,321,5,44,0,0,320,322,3,42,21,
	0,321,320,1,0,0,0,321,322,1,0,0,0,322,323,1,0,0,0,323,325,5,45,0,0,324,
	312,1,0,0,0,324,318,1,0,0,0,325,328,1,0,0,0,326,324,1,0,0,0,326,327,1,0,
	0,0,327,51,1,0,0,0,328,326,1,0,0,0,329,330,5,86,0,0,330,53,1,0,0,0,331,
	340,3,26,13,0,332,333,5,48,0,0,333,335,3,56,28,0,334,336,5,71,0,0,335,334,
	1,0,0,0,335,336,1,0,0,0,336,337,1,0,0,0,337,338,5,49,0,0,338,340,1,0,0,
	0,339,331,1,0,0,0,339,332,1,0,0,0,340,55,1,0,0,0,341,343,3,58,29,0,342,
	341,1,0,0,0,342,343,1,0,0,0,343,344,1,0,0,0,344,352,3,54,27,0,345,347,5,
	71,0,0,346,348,3,58,29,0,347,346,1,0,0,0,347,348,1,0,0,0,348,349,1,0,0,
	0,349,351,3,54,27,0,350,345,1,0,0,0,351,354,1,0,0,0,352,350,1,0,0,0,352,
	353,1,0,0,0,353,57,1,0,0,0,354,352,1,0,0,0,355,356,3,60,30,0,356,357,5,
	72,0,0,357,59,1,0,0,0,358,360,3,62,31,0,359,358,1,0,0,0,360,361,1,0,0,0,
	361,359,1,0,0,0,361,362,1,0,0,0,362,61,1,0,0,0,363,364,5,46,0,0,364,365,
	3,32,16,0,365,366,5,47,0,0,366,370,1,0,0,0,367,368,5,84,0,0,368,370,5,86,
	0,0,369,363,1,0,0,0,369,367,1,0,0,0,370,63,1,0,0,0,371,377,3,66,33,0,372,
	377,3,72,36,0,373,377,3,74,37,0,374,377,3,76,38,0,375,377,3,78,39,0,376,
	371,1,0,0,0,376,372,1,0,0,0,376,373,1,0,0,0,376,374,1,0,0,0,376,375,1,0,
	0,0,377,65,1,0,0,0,378,380,5,48,0,0,379,381,3,68,34,0,380,379,1,0,0,0,380,
	381,1,0,0,0,381,382,1,0,0,0,382,383,5,49,0,0,383,67,1,0,0,0,384,386,3,70,
	35,0,385,384,1,0,0,0,386,387,1,0,0,0,387,385,1,0,0,0,387,388,1,0,0,0,388,
	69,1,0,0,0,389,392,3,64,32,0,390,392,3,34,17,0,391,389,1,0,0,0,391,390,
	1,0,0,0,392,71,1,0,0,0,393,395,3,30,15,0,394,393,1,0,0,0,394,395,1,0,0,
	0,395,396,1,0,0,0,396,397,5,70,0,0,397,73,1,0,0,0,398,399,5,16,0,0,399,
	400,5,44,0,0,400,401,3,30,15,0,401,402,5,45,0,0,402,405,3,64,32,0,403,404,
	5,10,0,0,404,406,3,64,32,0,405,403,1,0,0,0,405,406,1,0,0,0,406,75,1,0,0,
	0,407,408,5,33,0,0,408,409,5,44,0,0,409,410,3,30,15,0,410,411,5,45,0,0,
	411,412,3,64,32,0,412,77,1,0,0,0,413,415,5,22,0,0,414,416,3,30,15,0,415,
	414,1,0,0,0,415,416,1,0,0,0,416,417,1,0,0,0,417,418,5,70,0,0,418,79,1,0,
	0,0,419,421,3,82,41,0,420,419,1,0,0,0,420,421,1,0,0,0,421,422,1,0,0,0,422,
	423,5,0,0,1,423,81,1,0,0,0,424,426,3,84,42,0,425,424,1,0,0,0,426,427,1,
	0,0,0,427,425,1,0,0,0,427,428,1,0,0,0,428,83,1,0,0,0,429,432,3,86,43,0,
	430,432,3,34,17,0,431,429,1,0,0,0,431,430,1,0,0,0,432,85,1,0,0,0,433,434,
	3,38,19,0,434,435,3,40,20,0,435,436,3,66,33,0,436,87,1,0,0,0,437,439,3,
	34,17,0,438,437,1,0,0,0,439,440,1,0,0,0,440,438,1,0,0,0,440,441,1,0,0,0,
	441,89,1,0,0,0,51,95,101,110,113,115,123,130,148,150,162,164,182,184,196,
	198,209,220,230,245,255,260,271,274,276,284,292,294,301,305,315,321,324,
	326,335,339,342,347,352,361,369,376,380,387,391,394,405,415,420,427,431,
	440];

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
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
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
	public LeftBracket_list(): TerminalNode[] {
	    	return this.getTokens(CParser.LeftBracket);
	}
	public LeftBracket(i: number): TerminalNode {
		return this.getToken(CParser.LeftBracket, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RightBracket_list(): TerminalNode[] {
	    	return this.getTokens(CParser.RightBracket);
	}
	public RightBracket(i: number): TerminalNode {
		return this.getToken(CParser.RightBracket, i);
	}
	public LeftParen_list(): TerminalNode[] {
	    	return this.getTokens(CParser.LeftParen);
	}
	public LeftParen(i: number): TerminalNode {
		return this.getToken(CParser.LeftParen, i);
	}
	public RightParen_list(): TerminalNode[] {
	    	return this.getTokens(CParser.RightParen);
	}
	public RightParen(i: number): TerminalNode {
		return this.getToken(CParser.RightParen, i);
	}
	public argumentExpressionList_list(): ArgumentExpressionListContext[] {
		return this.getTypedRuleContexts(ArgumentExpressionListContext) as ArgumentExpressionListContext[];
	}
	public argumentExpressionList(i: number): ArgumentExpressionListContext {
		return this.getTypedRuleContext(ArgumentExpressionListContext, i) as ArgumentExpressionListContext;
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
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
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
	public StarAssign(): TerminalNode {
		return this.getToken(CParser.StarAssign, 0);
	}
	public DivAssign(): TerminalNode {
		return this.getToken(CParser.DivAssign, 0);
	}
	public ModAssign(): TerminalNode {
		return this.getToken(CParser.ModAssign, 0);
	}
	public PlusAssign(): TerminalNode {
		return this.getToken(CParser.PlusAssign, 0);
	}
	public MinusAssign(): TerminalNode {
		return this.getToken(CParser.MinusAssign, 0);
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


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_expression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
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
	public Semi(): TerminalNode {
		return this.getToken(CParser.Semi, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
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
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
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
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
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
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
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
