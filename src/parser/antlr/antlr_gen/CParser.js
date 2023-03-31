// Generated from ./C.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import { ATN, ATNDeserializer, DFA, FailedPredicateException, RecognitionException, NoViableAltException, Parser, ParserATNSimulator, ParserRuleContext, PredictionContextCache, Token } from 'antlr4';
export default class CParser extends Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator(this, CParser._ATN, CParser.DecisionsToDFA, new PredictionContextCache());
    }
    get grammarFileName() { return "C.g4"; }
    get literalNames() { return CParser.literalNames; }
    get symbolicNames() { return CParser.symbolicNames; }
    get ruleNames() { return CParser.ruleNames; }
    get serializedATN() { return CParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    primaryExpression() {
        let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, CParser.RULE_primaryExpression);
        try {
            let _alt;
            this.state = 103;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 86:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 92;
                        this.match(CParser.Identifier);
                    }
                    break;
                case 87:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 93;
                        this.match(CParser.Constant);
                    }
                    break;
                case 89:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 95;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 94;
                                            this.match(CParser.StringLiteral);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 97;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 44:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 99;
                        this.match(CParser.LeftParen);
                        this.state = 100;
                        this.expression();
                        this.state = 101;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    postfixExpression() {
        let localctx = new PostfixExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, CParser.RULE_postfixExpression);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 105;
                this.primaryExpression();
                this.state = 118;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 116;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 46:
                                    {
                                        this.state = 106;
                                        this.match(CParser.LeftBracket);
                                        this.state = 107;
                                        this.expression();
                                        this.state = 108;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 44:
                                    {
                                        this.state = 110;
                                        this.match(CParser.LeftParen);
                                        this.state = 112;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === 25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 12745729) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 15) !== 0)) {
                                            {
                                                this.state = 111;
                                                this.argumentExpressionList();
                                            }
                                        }
                                        this.state = 114;
                                        this.match(CParser.RightParen);
                                    }
                                    break;
                                case 55:
                                case 57:
                                    {
                                        this.state = 115;
                                        _la = this._input.LA(1);
                                        if (!(_la === 55 || _la === 57)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 120;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    argumentExpressionList() {
        let localctx = new ArgumentExpressionListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, CParser.RULE_argumentExpressionList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 121;
                this.assignmentExpression();
                this.state = 126;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 71) {
                    {
                        {
                            this.state = 122;
                            this.match(CParser.Comma);
                            this.state = 123;
                            this.assignmentExpression();
                        }
                    }
                    this.state = 128;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    unaryExpression() {
        let localctx = new UnaryExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, CParser.RULE_unaryExpression);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 132;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 25 || _la === 55 || _la === 57) {
                    {
                        {
                            this.state = 129;
                            _la = this._input.LA(1);
                            if (!(_la === 25 || _la === 55 || _la === 57)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 134;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 139;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 44:
                    case 86:
                    case 87:
                    case 89:
                        {
                            this.state = 135;
                            this.postfixExpression();
                        }
                        break;
                    case 54:
                    case 56:
                    case 58:
                    case 61:
                    case 66:
                    case 67:
                        {
                            this.state = 136;
                            this.unaryOperator();
                            this.state = 137;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    unaryOperator() {
        let localctx = new UnaryOperatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, CParser.RULE_unaryOperator);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 141;
                _la = this._input.LA(1);
                if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 12437) !== 0))) {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    castExpression() {
        let localctx = new CastExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, CParser.RULE_castExpression);
        try {
            this.state = 145;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 25:
                case 44:
                case 54:
                case 55:
                case 56:
                case 57:
                case 58:
                case 61:
                case 66:
                case 67:
                case 86:
                case 87:
                case 89:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 143;
                        this.unaryExpression();
                    }
                    break;
                case 88:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 144;
                        this.match(CParser.DigitSequence);
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    multiplicativeExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new MultiplicativeExpressionContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 12;
        this.enterRecursionRule(localctx, 12, CParser.RULE_multiplicativeExpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 148;
                    this.castExpression();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 161;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 159;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_multiplicativeExpression);
                                        this.state = 150;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 151;
                                        this.match(CParser.Star);
                                        this.state = 152;
                                        this.castExpression();
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_multiplicativeExpression);
                                        this.state = 153;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 154;
                                        this.match(CParser.Div);
                                        this.state = 155;
                                        this.castExpression();
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_multiplicativeExpression);
                                        this.state = 156;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 157;
                                        this.match(CParser.Mod);
                                        this.state = 158;
                                        this.castExpression();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 163;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    additiveExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new AdditiveExpressionContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 14;
        this.enterRecursionRule(localctx, 14, CParser.RULE_additiveExpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 165;
                    this.multiplicativeExpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 175;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 173;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 11, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_additiveExpression);
                                        this.state = 167;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 168;
                                        this.match(CParser.Plus);
                                        this.state = 169;
                                        this.multiplicativeExpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_additiveExpression);
                                        this.state = 170;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 171;
                                        this.match(CParser.Minus);
                                        this.state = 172;
                                        this.multiplicativeExpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 177;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    relationalExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new RelationalExpressionContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 16;
        this.enterRecursionRule(localctx, 16, CParser.RULE_relationalExpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 179;
                    this.additiveExpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 195;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 193;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 13, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
                                        this.state = 181;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 182;
                                        this.match(CParser.Less);
                                        this.state = 183;
                                        this.additiveExpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
                                        this.state = 184;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 185;
                                        this.match(CParser.Greater);
                                        this.state = 186;
                                        this.additiveExpression(0);
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
                                        this.state = 187;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 188;
                                        this.match(CParser.LessEqual);
                                        this.state = 189;
                                        this.additiveExpression(0);
                                    }
                                    break;
                                case 4:
                                    {
                                        localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
                                        this.state = 190;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 191;
                                        this.match(CParser.GreaterEqual);
                                        this.state = 192;
                                        this.additiveExpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 197;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    equalityExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new EqualityExpressionContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 18;
        this.enterRecursionRule(localctx, 18, CParser.RULE_equalityExpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 199;
                    this.relationalExpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 209;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 207;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 15, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_equalityExpression);
                                        this.state = 201;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 202;
                                        this.match(CParser.Equal);
                                        this.state = 203;
                                        this.relationalExpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_equalityExpression);
                                        this.state = 204;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 205;
                                        this.match(CParser.NotEqual);
                                        this.state = 206;
                                        this.relationalExpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 211;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    logicalAndExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new LogicalAndExpressionContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 20;
        this.enterRecursionRule(localctx, 20, CParser.RULE_logicalAndExpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 213;
                    this.equalityExpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 220;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
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
                                this.state = 215;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 216;
                                this.match(CParser.AndAnd);
                                this.state = 217;
                                this.equalityExpression(0);
                            }
                        }
                    }
                    this.state = 222;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    logicalOrExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new LogicalOrExpressionContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 22;
        this.enterRecursionRule(localctx, 22, CParser.RULE_logicalOrExpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 224;
                    this.logicalAndExpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 231;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
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
                                this.state = 226;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 227;
                                this.match(CParser.OrOr);
                                this.state = 228;
                                this.logicalAndExpression(0);
                            }
                        }
                    }
                    this.state = 233;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    conditionalExpression() {
        let localctx = new ConditionalExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, CParser.RULE_conditionalExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 234;
                this.logicalOrExpression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    assignmentExpression() {
        let localctx = new AssignmentExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, CParser.RULE_assignmentExpression);
        try {
            this.state = 241;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 236;
                        this.conditionalExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 237;
                        this.unaryExpression();
                        this.state = 238;
                        this.assignmentOperator();
                        this.state = 239;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    assignmentOperator() {
        let localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, CParser.RULE_assignmentOperator);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 243;
                _la = this._input.LA(1);
                if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 63) !== 0))) {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    expression() {
        let localctx = new ExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 30, CParser.RULE_expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 245;
                this.assignmentExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    constantExpression() {
        let localctx = new ConstantExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 32, CParser.RULE_constantExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 247;
                this.conditionalExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    declaration() {
        let localctx = new DeclarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 34, CParser.RULE_declaration);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 249;
                this.typeSpecifier();
                this.state = 251;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 44 || _la === 86) {
                    {
                        this.state = 250;
                        this.initDeclarator();
                    }
                }
                this.state = 253;
                this.match(CParser.Semi);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    initDeclarator() {
        let localctx = new InitDeclaratorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 36, CParser.RULE_initDeclarator);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 255;
                this.directDeclarator(0);
                this.state = 258;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 72) {
                    {
                        this.state = 256;
                        this.match(CParser.Assign);
                        this.state = 257;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    typeSpecifier() {
        let localctx = new TypeSpecifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 38, CParser.RULE_typeSpecifier);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 260;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0))) {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    directDeclarator(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new DirectDeclaratorContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 40;
        this.enterRecursionRule(localctx, 40, CParser.RULE_directDeclarator, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 268;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 86:
                        {
                            this.state = 263;
                            this.match(CParser.Identifier);
                        }
                        break;
                    case 44:
                        {
                            this.state = 264;
                            this.match(CParser.LeftParen);
                            this.state = 265;
                            this.directDeclarator(0);
                            this.state = 266;
                            this.match(CParser.RightParen);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 289;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 287;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 25, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 270;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 271;
                                        this.match(CParser.LeftBracket);
                                        this.state = 273;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === 25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 12745729) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 15) !== 0)) {
                                            {
                                                this.state = 272;
                                                this.assignmentExpression();
                                            }
                                        }
                                        this.state = 275;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 276;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 277;
                                        this.match(CParser.LeftParen);
                                        this.state = 278;
                                        this.parameterTypeList();
                                        this.state = 279;
                                        this.match(CParser.RightParen);
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 281;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 282;
                                        this.match(CParser.LeftParen);
                                        this.state = 284;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === 86) {
                                            {
                                                this.state = 283;
                                                this.identifierList();
                                            }
                                        }
                                        this.state = 286;
                                        this.match(CParser.RightParen);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 291;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    parameterTypeList() {
        let localctx = new ParameterTypeListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 42, CParser.RULE_parameterTypeList);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 292;
                this.parameterList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    parameterList() {
        let localctx = new ParameterListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 44, CParser.RULE_parameterList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 294;
                this.parameterDeclaration();
                this.state = 299;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 71) {
                    {
                        {
                            this.state = 295;
                            this.match(CParser.Comma);
                            this.state = 296;
                            this.parameterDeclaration();
                        }
                    }
                    this.state = 301;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    parameterDeclaration() {
        let localctx = new ParameterDeclarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 46, CParser.RULE_parameterDeclaration);
        let _la;
        try {
            this.state = 309;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 302;
                        this.typeSpecifier();
                        this.state = 303;
                        this.directDeclarator(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 305;
                        this.typeSpecifier();
                        this.state = 307;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 44) {
                            {
                                this.state = 306;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    identifierList() {
        let localctx = new IdentifierListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 48, CParser.RULE_identifierList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 311;
                this.match(CParser.Identifier);
                this.state = 316;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 71) {
                    {
                        {
                            this.state = 312;
                            this.match(CParser.Comma);
                            this.state = 313;
                            this.match(CParser.Identifier);
                        }
                    }
                    this.state = 318;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    typeName() {
        let localctx = new TypeNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 50, CParser.RULE_typeName);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 320;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 44) {
                    {
                        this.state = 319;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    directAbstractDeclarator(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new DirectAbstractDeclaratorContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 52;
        this.enterRecursionRule(localctx, 52, CParser.RULE_directAbstractDeclarator, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 323;
                    this.match(CParser.LeftParen);
                    this.state = 324;
                    this.directAbstractDeclarator(0);
                    this.state = 325;
                    this.match(CParser.RightParen);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 341;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 339;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 34, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new DirectAbstractDeclaratorContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directAbstractDeclarator);
                                        this.state = 327;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 328;
                                        this.match(CParser.LeftBracket);
                                        this.state = 330;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === 25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 12745729) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 15) !== 0)) {
                                            {
                                                this.state = 329;
                                                this.assignmentExpression();
                                            }
                                        }
                                        this.state = 332;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new DirectAbstractDeclaratorContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directAbstractDeclarator);
                                        this.state = 333;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 334;
                                        this.match(CParser.LeftParen);
                                        this.state = 336;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0)) {
                                            {
                                                this.state = 335;
                                                this.parameterTypeList();
                                            }
                                        }
                                        this.state = 338;
                                        this.match(CParser.RightParen);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 343;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    typedefName() {
        let localctx = new TypedefNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 54, CParser.RULE_typedefName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 344;
                this.match(CParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    initializer() {
        let localctx = new InitializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 56, CParser.RULE_initializer);
        let _la;
        try {
            this.state = 354;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 25:
                case 44:
                case 54:
                case 55:
                case 56:
                case 57:
                case 58:
                case 61:
                case 66:
                case 67:
                case 86:
                case 87:
                case 88:
                case 89:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 346;
                        this.assignmentExpression();
                    }
                    break;
                case 48:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 347;
                        this.match(CParser.LeftBrace);
                        this.state = 348;
                        this.initializerList();
                        this.state = 350;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 71) {
                            {
                                this.state = 349;
                                this.match(CParser.Comma);
                            }
                        }
                        this.state = 352;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    initializerList() {
        let localctx = new InitializerListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 58, CParser.RULE_initializerList);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 357;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 46 || _la === 84) {
                    {
                        this.state = 356;
                        this.designation();
                    }
                }
                this.state = 359;
                this.initializer();
                this.state = 367;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 360;
                                this.match(CParser.Comma);
                                this.state = 362;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 46 || _la === 84) {
                                    {
                                        this.state = 361;
                                        this.designation();
                                    }
                                }
                                this.state = 364;
                                this.initializer();
                            }
                        }
                    }
                    this.state = 369;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    designation() {
        let localctx = new DesignationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 60, CParser.RULE_designation);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 370;
                this.designatorList();
                this.state = 371;
                this.match(CParser.Assign);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    designatorList() {
        let localctx = new DesignatorListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 62, CParser.RULE_designatorList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 374;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 373;
                            this.designator();
                        }
                    }
                    this.state = 376;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === 46 || _la === 84);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    designator() {
        let localctx = new DesignatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 64, CParser.RULE_designator);
        try {
            this.state = 384;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 46:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 378;
                        this.match(CParser.LeftBracket);
                        this.state = 379;
                        this.constantExpression();
                        this.state = 380;
                        this.match(CParser.RightBracket);
                    }
                    break;
                case 84:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 382;
                        this.match(CParser.Dot);
                        this.state = 383;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    statement() {
        let localctx = new StatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 66, CParser.RULE_statement);
        try {
            this.state = 391;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 48:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 386;
                        this.compoundStatement();
                    }
                    break;
                case 25:
                case 44:
                case 54:
                case 55:
                case 56:
                case 57:
                case 58:
                case 61:
                case 66:
                case 67:
                case 70:
                case 86:
                case 87:
                case 88:
                case 89:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 387;
                        this.expressionStatement();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 388;
                        this.selectionStatement();
                    }
                    break;
                case 33:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 389;
                        this.iterationStatement();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 390;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    compoundStatement() {
        let localctx = new CompoundStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 68, CParser.RULE_compoundStatement);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 393;
                this.match(CParser.LeftBrace);
                this.state = 395;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 38076944) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 333481985) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 15728659) !== 0)) {
                    {
                        this.state = 394;
                        this.blockItemList();
                    }
                }
                this.state = 397;
                this.match(CParser.RightBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    blockItemList() {
        let localctx = new BlockItemListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 70, CParser.RULE_blockItemList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 399;
                            this.blockItem();
                        }
                    }
                    this.state = 402;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 38076944) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 333481985) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 15728659) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    blockItem() {
        let localctx = new BlockItemContext(this, this._ctx, this.state);
        this.enterRule(localctx, 72, CParser.RULE_blockItem);
        try {
            this.state = 406;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 16:
                case 22:
                case 25:
                case 33:
                case 44:
                case 48:
                case 54:
                case 55:
                case 56:
                case 57:
                case 58:
                case 61:
                case 66:
                case 67:
                case 70:
                case 86:
                case 87:
                case 88:
                case 89:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 404;
                        this.statement();
                    }
                    break;
                case 4:
                case 9:
                case 18:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 405;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    expressionStatement() {
        let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 74, CParser.RULE_expressionStatement);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 409;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 12745729) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 15) !== 0)) {
                    {
                        this.state = 408;
                        this.expression();
                    }
                }
                this.state = 411;
                this.match(CParser.Semi);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    selectionStatement() {
        let localctx = new SelectionStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 76, CParser.RULE_selectionStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 413;
                this.match(CParser.If);
                this.state = 414;
                this.match(CParser.LeftParen);
                this.state = 415;
                this.expression();
                this.state = 416;
                this.match(CParser.RightParen);
                this.state = 417;
                this.statement();
                this.state = 420;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 48, this._ctx)) {
                    case 1:
                        {
                            this.state = 418;
                            this.match(CParser.Else);
                            this.state = 419;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    iterationStatement() {
        let localctx = new IterationStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 78, CParser.RULE_iterationStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 422;
                this.match(CParser.While);
                this.state = 423;
                this.match(CParser.LeftParen);
                this.state = 424;
                this.expression();
                this.state = 425;
                this.match(CParser.RightParen);
                this.state = 426;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    jumpStatement() {
        let localctx = new JumpStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 80, CParser.RULE_jumpStatement);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 428;
                this.match(CParser.Return);
                this.state = 430;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 12745729) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 15) !== 0)) {
                    {
                        this.state = 429;
                        this.expression();
                    }
                }
                this.state = 432;
                this.match(CParser.Semi);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    compilationUnit() {
        let localctx = new CompilationUnitContext(this, this._ctx, this.state);
        this.enterRule(localctx, 82, CParser.RULE_compilationUnit);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 435;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0) || _la === 44 || _la === 70 || _la === 86) {
                    {
                        this.state = 434;
                        this.translationUnit();
                    }
                }
                this.state = 437;
                this.match(CParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    translationUnit() {
        let localctx = new TranslationUnitContext(this, this._ctx, this.state);
        this.enterRule(localctx, 84, CParser.RULE_translationUnit);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 440;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 439;
                            this.externalDeclaration();
                        }
                    }
                    this.state = 442;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0) || _la === 44 || _la === 70 || _la === 86);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    externalDeclaration() {
        let localctx = new ExternalDeclarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 86, CParser.RULE_externalDeclaration);
        try {
            this.state = 447;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 52, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 444;
                        this.functionDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 445;
                        this.declaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 446;
                        this.match(CParser.Semi);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    functionDefinition() {
        let localctx = new FunctionDefinitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 88, CParser.RULE_functionDefinition);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 450;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0)) {
                    {
                        this.state = 449;
                        this.typeSpecifier();
                    }
                }
                this.state = 452;
                this.directDeclarator(0);
                this.state = 454;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0)) {
                    {
                        this.state = 453;
                        this.declarationList();
                    }
                }
                this.state = 456;
                this.compoundStatement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    declarationList() {
        let localctx = new DeclarationListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 90, CParser.RULE_declarationList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 458;
                            this.declaration();
                        }
                    }
                    this.state = 461;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    sempred(localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 6:
                return this.multiplicativeExpression_sempred(localctx, predIndex);
            case 7:
                return this.additiveExpression_sempred(localctx, predIndex);
            case 8:
                return this.relationalExpression_sempred(localctx, predIndex);
            case 9:
                return this.equalityExpression_sempred(localctx, predIndex);
            case 10:
                return this.logicalAndExpression_sempred(localctx, predIndex);
            case 11:
                return this.logicalOrExpression_sempred(localctx, predIndex);
            case 20:
                return this.directDeclarator_sempred(localctx, predIndex);
            case 26:
                return this.directAbstractDeclarator_sempred(localctx, predIndex);
        }
        return true;
    }
    multiplicativeExpression_sempred(localctx, predIndex) {
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
    additiveExpression_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this._ctx, 2);
            case 4:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    relationalExpression_sempred(localctx, predIndex) {
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
    equalityExpression_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 9:
                return this.precpred(this._ctx, 2);
            case 10:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    logicalAndExpression_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 11:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    logicalOrExpression_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 12:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    directDeclarator_sempred(localctx, predIndex) {
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
    directAbstractDeclarator_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 16:
                return this.precpred(this._ctx, 2);
            case 17:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    static get _ATN() {
        if (!CParser.__ATN) {
            CParser.__ATN = new ATNDeserializer().deserialize(CParser._serializedATN);
        }
        return CParser.__ATN;
    }
}
CParser.Auto = 1;
CParser.Break = 2;
CParser.Case = 3;
CParser.Char = 4;
CParser.Const = 5;
CParser.Continue = 6;
CParser.Default = 7;
CParser.Do = 8;
CParser.Double = 9;
CParser.Else = 10;
CParser.Enum = 11;
CParser.Extern = 12;
CParser.Float = 13;
CParser.For = 14;
CParser.Goto = 15;
CParser.If = 16;
CParser.Inline = 17;
CParser.Int = 18;
CParser.Long = 19;
CParser.Register = 20;
CParser.Restrict = 21;
CParser.Return = 22;
CParser.Short = 23;
CParser.Signed = 24;
CParser.Sizeof = 25;
CParser.Static = 26;
CParser.Switch = 27;
CParser.Typedef = 28;
CParser.Union = 29;
CParser.Unsigned = 30;
CParser.Void = 31;
CParser.Volatile = 32;
CParser.While = 33;
CParser.Alignas = 34;
CParser.Alignof = 35;
CParser.Atomic = 36;
CParser.Bool = 37;
CParser.Complex = 38;
CParser.Generic = 39;
CParser.Imaginary = 40;
CParser.Noreturn = 41;
CParser.StaticAssert = 42;
CParser.ThreadLocal = 43;
CParser.LeftParen = 44;
CParser.RightParen = 45;
CParser.LeftBracket = 46;
CParser.RightBracket = 47;
CParser.LeftBrace = 48;
CParser.RightBrace = 49;
CParser.Less = 50;
CParser.LessEqual = 51;
CParser.Greater = 52;
CParser.GreaterEqual = 53;
CParser.Plus = 54;
CParser.PlusPlus = 55;
CParser.Minus = 56;
CParser.MinusMinus = 57;
CParser.Star = 58;
CParser.Div = 59;
CParser.Mod = 60;
CParser.And = 61;
CParser.Or = 62;
CParser.AndAnd = 63;
CParser.OrOr = 64;
CParser.Caret = 65;
CParser.Not = 66;
CParser.Tilde = 67;
CParser.Question = 68;
CParser.Colon = 69;
CParser.Semi = 70;
CParser.Comma = 71;
CParser.Assign = 72;
CParser.StarAssign = 73;
CParser.DivAssign = 74;
CParser.ModAssign = 75;
CParser.PlusAssign = 76;
CParser.MinusAssign = 77;
CParser.AndAssign = 78;
CParser.XorAssign = 79;
CParser.OrAssign = 80;
CParser.Equal = 81;
CParser.NotEqual = 82;
CParser.Arrow = 83;
CParser.Dot = 84;
CParser.Ellipsis = 85;
CParser.Identifier = 86;
CParser.Constant = 87;
CParser.DigitSequence = 88;
CParser.StringLiteral = 89;
CParser.ComplexDefine = 90;
CParser.IncludeDirective = 91;
CParser.AsmBlock = 92;
CParser.LineAfterPreprocessing = 93;
CParser.LineDirective = 94;
CParser.PragmaDirective = 95;
CParser.Whitespace = 96;
CParser.Newline = 97;
CParser.BlockComment = 98;
CParser.LineComment = 99;
CParser.EOF = Token.EOF;
CParser.RULE_primaryExpression = 0;
CParser.RULE_postfixExpression = 1;
CParser.RULE_argumentExpressionList = 2;
CParser.RULE_unaryExpression = 3;
CParser.RULE_unaryOperator = 4;
CParser.RULE_castExpression = 5;
CParser.RULE_multiplicativeExpression = 6;
CParser.RULE_additiveExpression = 7;
CParser.RULE_relationalExpression = 8;
CParser.RULE_equalityExpression = 9;
CParser.RULE_logicalAndExpression = 10;
CParser.RULE_logicalOrExpression = 11;
CParser.RULE_conditionalExpression = 12;
CParser.RULE_assignmentExpression = 13;
CParser.RULE_assignmentOperator = 14;
CParser.RULE_expression = 15;
CParser.RULE_constantExpression = 16;
CParser.RULE_declaration = 17;
CParser.RULE_initDeclarator = 18;
CParser.RULE_typeSpecifier = 19;
CParser.RULE_directDeclarator = 20;
CParser.RULE_parameterTypeList = 21;
CParser.RULE_parameterList = 22;
CParser.RULE_parameterDeclaration = 23;
CParser.RULE_identifierList = 24;
CParser.RULE_typeName = 25;
CParser.RULE_directAbstractDeclarator = 26;
CParser.RULE_typedefName = 27;
CParser.RULE_initializer = 28;
CParser.RULE_initializerList = 29;
CParser.RULE_designation = 30;
CParser.RULE_designatorList = 31;
CParser.RULE_designator = 32;
CParser.RULE_statement = 33;
CParser.RULE_compoundStatement = 34;
CParser.RULE_blockItemList = 35;
CParser.RULE_blockItem = 36;
CParser.RULE_expressionStatement = 37;
CParser.RULE_selectionStatement = 38;
CParser.RULE_iterationStatement = 39;
CParser.RULE_jumpStatement = 40;
CParser.RULE_compilationUnit = 41;
CParser.RULE_translationUnit = 42;
CParser.RULE_externalDeclaration = 43;
CParser.RULE_functionDefinition = 44;
CParser.RULE_declarationList = 45;
CParser.literalNames = [null, "'auto'",
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
    "'.'", "'...'"];
CParser.symbolicNames = [null, "Auto",
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
    "LineComment"];
// tslint:disable:no-trailing-whitespace
CParser.ruleNames = [
    "primaryExpression", "postfixExpression", "argumentExpressionList", "unaryExpression",
    "unaryOperator", "castExpression", "multiplicativeExpression", "additiveExpression",
    "relationalExpression", "equalityExpression", "logicalAndExpression",
    "logicalOrExpression", "conditionalExpression", "assignmentExpression",
    "assignmentOperator", "expression", "constantExpression", "declaration",
    "initDeclarator", "typeSpecifier", "directDeclarator", "parameterTypeList",
    "parameterList", "parameterDeclaration", "identifierList", "typeName",
    "directAbstractDeclarator", "typedefName", "initializer", "initializerList",
    "designation", "designatorList", "designator", "statement", "compoundStatement",
    "blockItemList", "blockItem", "expressionStatement", "selectionStatement",
    "iterationStatement", "jumpStatement", "compilationUnit", "translationUnit",
    "externalDeclaration", "functionDefinition", "declarationList",
];
CParser._serializedATN = [4, 1, 99, 464, 2, 0, 7, 0, 2,
    1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
    10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17,
    7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7,
    24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31,
    2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2,
    39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 1, 0,
    1, 0, 1, 0, 4, 0, 96, 8, 0, 11, 0, 12, 0, 97, 1, 0, 1, 0, 1, 0, 1, 0, 3, 0, 104, 8, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 113, 8, 1, 1, 1, 1, 1, 5, 1, 117, 8, 1, 10, 1, 12, 1, 120, 9, 1, 1, 2, 1,
    2, 1, 2, 5, 2, 125, 8, 2, 10, 2, 12, 2, 128, 9, 2, 1, 3, 5, 3, 131, 8, 3, 10, 3, 12, 3, 134, 9, 3, 1,
    3, 1, 3, 1, 3, 1, 3, 3, 3, 140, 8, 3, 1, 4, 1, 4, 1, 5, 1, 5, 3, 5, 146, 8, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 5, 6, 160, 8, 6, 10, 6, 12, 6, 163, 9, 6, 1, 7, 1, 7, 1, 7,
    1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 5, 7, 174, 8, 7, 10, 7, 12, 7, 177, 9, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1,
    8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 5, 8, 194, 8, 8, 10, 8, 12, 8, 197, 9, 8,
    1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 5, 9, 208, 8, 9, 10, 9, 12, 9, 211, 9, 9, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 5, 10, 219, 8, 10, 10, 10, 12, 10, 222, 9, 10, 1, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 5, 11, 230, 8, 11, 10, 11, 12, 11, 233, 9, 11, 1, 12, 1, 12, 1, 13, 1, 13,
    1, 13, 1, 13, 1, 13, 3, 13, 242, 8, 13, 1, 14, 1, 14, 1, 15, 1, 15, 1, 16, 1, 16, 1, 17, 1, 17, 3,
    17, 252, 8, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 3, 18, 259, 8, 18, 1, 19, 1, 19, 1, 20, 1, 20,
    1, 20, 1, 20, 1, 20, 1, 20, 3, 20, 269, 8, 20, 1, 20, 1, 20, 1, 20, 3, 20, 274, 8, 20, 1, 20, 1, 20,
    1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 3, 20, 285, 8, 20, 1, 20, 5, 20, 288, 8, 20, 10,
    20, 12, 20, 291, 9, 20, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22, 5, 22, 298, 8, 22, 10, 22, 12, 22, 301,
    9, 22, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 3, 23, 308, 8, 23, 3, 23, 310, 8, 23, 1, 24, 1, 24, 1, 24,
    5, 24, 315, 8, 24, 10, 24, 12, 24, 318, 9, 24, 1, 25, 3, 25, 321, 8, 25, 1, 26, 1, 26, 1, 26, 1,
    26, 1, 26, 1, 26, 1, 26, 1, 26, 3, 26, 331, 8, 26, 1, 26, 1, 26, 1, 26, 1, 26, 3, 26, 337, 8, 26,
    1, 26, 5, 26, 340, 8, 26, 10, 26, 12, 26, 343, 9, 26, 1, 27, 1, 27, 1, 28, 1, 28, 1, 28, 1, 28, 3,
    28, 351, 8, 28, 1, 28, 1, 28, 3, 28, 355, 8, 28, 1, 29, 3, 29, 358, 8, 29, 1, 29, 1, 29, 1, 29, 3,
    29, 363, 8, 29, 1, 29, 5, 29, 366, 8, 29, 10, 29, 12, 29, 369, 9, 29, 1, 30, 1, 30, 1, 30, 1, 31,
    4, 31, 375, 8, 31, 11, 31, 12, 31, 376, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 3, 32, 385, 8,
    32, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 3, 33, 392, 8, 33, 1, 34, 1, 34, 3, 34, 396, 8, 34, 1, 34,
    1, 34, 1, 35, 4, 35, 401, 8, 35, 11, 35, 12, 35, 402, 1, 36, 1, 36, 3, 36, 407, 8, 36, 1, 37, 3,
    37, 410, 8, 37, 1, 37, 1, 37, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 3, 38, 421, 8, 38,
    1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 40, 1, 40, 3, 40, 431, 8, 40, 1, 40, 1, 40, 1, 41, 3,
    41, 436, 8, 41, 1, 41, 1, 41, 1, 42, 4, 42, 441, 8, 42, 11, 42, 12, 42, 442, 1, 43, 1, 43, 1, 43,
    3, 43, 448, 8, 43, 1, 44, 3, 44, 451, 8, 44, 1, 44, 1, 44, 3, 44, 455, 8, 44, 1, 44, 1, 44, 1, 45,
    4, 45, 460, 8, 45, 11, 45, 12, 45, 461, 1, 45, 0, 8, 12, 14, 16, 18, 20, 22, 40, 52, 46, 0, 2, 4,
    6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54,
    56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 0, 5, 2, 0, 55, 55, 57,
    57, 3, 0, 25, 25, 55, 55, 57, 57, 5, 0, 54, 54, 56, 56, 58, 58, 61, 61, 66, 67, 1, 0, 72, 77, 3,
    0, 4, 4, 9, 9, 18, 18, 484, 0, 103, 1, 0, 0, 0, 2, 105, 1, 0, 0, 0, 4, 121, 1, 0, 0, 0, 6, 132, 1, 0,
    0, 0, 8, 141, 1, 0, 0, 0, 10, 145, 1, 0, 0, 0, 12, 147, 1, 0, 0, 0, 14, 164, 1, 0, 0, 0, 16, 178, 1,
    0, 0, 0, 18, 198, 1, 0, 0, 0, 20, 212, 1, 0, 0, 0, 22, 223, 1, 0, 0, 0, 24, 234, 1, 0, 0, 0, 26, 241,
    1, 0, 0, 0, 28, 243, 1, 0, 0, 0, 30, 245, 1, 0, 0, 0, 32, 247, 1, 0, 0, 0, 34, 249, 1, 0, 0, 0, 36,
    255, 1, 0, 0, 0, 38, 260, 1, 0, 0, 0, 40, 268, 1, 0, 0, 0, 42, 292, 1, 0, 0, 0, 44, 294, 1, 0, 0, 0,
    46, 309, 1, 0, 0, 0, 48, 311, 1, 0, 0, 0, 50, 320, 1, 0, 0, 0, 52, 322, 1, 0, 0, 0, 54, 344, 1, 0,
    0, 0, 56, 354, 1, 0, 0, 0, 58, 357, 1, 0, 0, 0, 60, 370, 1, 0, 0, 0, 62, 374, 1, 0, 0, 0, 64, 384,
    1, 0, 0, 0, 66, 391, 1, 0, 0, 0, 68, 393, 1, 0, 0, 0, 70, 400, 1, 0, 0, 0, 72, 406, 1, 0, 0, 0, 74,
    409, 1, 0, 0, 0, 76, 413, 1, 0, 0, 0, 78, 422, 1, 0, 0, 0, 80, 428, 1, 0, 0, 0, 82, 435, 1, 0, 0, 0,
    84, 440, 1, 0, 0, 0, 86, 447, 1, 0, 0, 0, 88, 450, 1, 0, 0, 0, 90, 459, 1, 0, 0, 0, 92, 104, 5, 86,
    0, 0, 93, 104, 5, 87, 0, 0, 94, 96, 5, 89, 0, 0, 95, 94, 1, 0, 0, 0, 96, 97, 1, 0, 0, 0, 97, 95, 1,
    0, 0, 0, 97, 98, 1, 0, 0, 0, 98, 104, 1, 0, 0, 0, 99, 100, 5, 44, 0, 0, 100, 101, 3, 30, 15, 0, 101,
    102, 5, 45, 0, 0, 102, 104, 1, 0, 0, 0, 103, 92, 1, 0, 0, 0, 103, 93, 1, 0, 0, 0, 103, 95, 1, 0, 0,
    0, 103, 99, 1, 0, 0, 0, 104, 1, 1, 0, 0, 0, 105, 118, 3, 0, 0, 0, 106, 107, 5, 46, 0, 0, 107, 108,
    3, 30, 15, 0, 108, 109, 5, 47, 0, 0, 109, 117, 1, 0, 0, 0, 110, 112, 5, 44, 0, 0, 111, 113, 3, 4,
    2, 0, 112, 111, 1, 0, 0, 0, 112, 113, 1, 0, 0, 0, 113, 114, 1, 0, 0, 0, 114, 117, 5, 45, 0, 0, 115,
    117, 7, 0, 0, 0, 116, 106, 1, 0, 0, 0, 116, 110, 1, 0, 0, 0, 116, 115, 1, 0, 0, 0, 117, 120, 1, 0,
    0, 0, 118, 116, 1, 0, 0, 0, 118, 119, 1, 0, 0, 0, 119, 3, 1, 0, 0, 0, 120, 118, 1, 0, 0, 0, 121, 126,
    3, 26, 13, 0, 122, 123, 5, 71, 0, 0, 123, 125, 3, 26, 13, 0, 124, 122, 1, 0, 0, 0, 125, 128, 1,
    0, 0, 0, 126, 124, 1, 0, 0, 0, 126, 127, 1, 0, 0, 0, 127, 5, 1, 0, 0, 0, 128, 126, 1, 0, 0, 0, 129,
    131, 7, 1, 0, 0, 130, 129, 1, 0, 0, 0, 131, 134, 1, 0, 0, 0, 132, 130, 1, 0, 0, 0, 132, 133, 1, 0,
    0, 0, 133, 139, 1, 0, 0, 0, 134, 132, 1, 0, 0, 0, 135, 140, 3, 2, 1, 0, 136, 137, 3, 8, 4, 0, 137,
    138, 3, 10, 5, 0, 138, 140, 1, 0, 0, 0, 139, 135, 1, 0, 0, 0, 139, 136, 1, 0, 0, 0, 140, 7, 1, 0,
    0, 0, 141, 142, 7, 2, 0, 0, 142, 9, 1, 0, 0, 0, 143, 146, 3, 6, 3, 0, 144, 146, 5, 88, 0, 0, 145,
    143, 1, 0, 0, 0, 145, 144, 1, 0, 0, 0, 146, 11, 1, 0, 0, 0, 147, 148, 6, 6, -1, 0, 148, 149, 3, 10,
    5, 0, 149, 161, 1, 0, 0, 0, 150, 151, 10, 3, 0, 0, 151, 152, 5, 58, 0, 0, 152, 160, 3, 10, 5, 0,
    153, 154, 10, 2, 0, 0, 154, 155, 5, 59, 0, 0, 155, 160, 3, 10, 5, 0, 156, 157, 10, 1, 0, 0, 157,
    158, 5, 60, 0, 0, 158, 160, 3, 10, 5, 0, 159, 150, 1, 0, 0, 0, 159, 153, 1, 0, 0, 0, 159, 156, 1,
    0, 0, 0, 160, 163, 1, 0, 0, 0, 161, 159, 1, 0, 0, 0, 161, 162, 1, 0, 0, 0, 162, 13, 1, 0, 0, 0, 163,
    161, 1, 0, 0, 0, 164, 165, 6, 7, -1, 0, 165, 166, 3, 12, 6, 0, 166, 175, 1, 0, 0, 0, 167, 168, 10,
    2, 0, 0, 168, 169, 5, 54, 0, 0, 169, 174, 3, 12, 6, 0, 170, 171, 10, 1, 0, 0, 171, 172, 5, 56, 0,
    0, 172, 174, 3, 12, 6, 0, 173, 167, 1, 0, 0, 0, 173, 170, 1, 0, 0, 0, 174, 177, 1, 0, 0, 0, 175,
    173, 1, 0, 0, 0, 175, 176, 1, 0, 0, 0, 176, 15, 1, 0, 0, 0, 177, 175, 1, 0, 0, 0, 178, 179, 6, 8,
    -1, 0, 179, 180, 3, 14, 7, 0, 180, 195, 1, 0, 0, 0, 181, 182, 10, 4, 0, 0, 182, 183, 5, 50, 0, 0,
    183, 194, 3, 14, 7, 0, 184, 185, 10, 3, 0, 0, 185, 186, 5, 52, 0, 0, 186, 194, 3, 14, 7, 0, 187,
    188, 10, 2, 0, 0, 188, 189, 5, 51, 0, 0, 189, 194, 3, 14, 7, 0, 190, 191, 10, 1, 0, 0, 191, 192,
    5, 53, 0, 0, 192, 194, 3, 14, 7, 0, 193, 181, 1, 0, 0, 0, 193, 184, 1, 0, 0, 0, 193, 187, 1, 0, 0,
    0, 193, 190, 1, 0, 0, 0, 194, 197, 1, 0, 0, 0, 195, 193, 1, 0, 0, 0, 195, 196, 1, 0, 0, 0, 196, 17,
    1, 0, 0, 0, 197, 195, 1, 0, 0, 0, 198, 199, 6, 9, -1, 0, 199, 200, 3, 16, 8, 0, 200, 209, 1, 0, 0,
    0, 201, 202, 10, 2, 0, 0, 202, 203, 5, 81, 0, 0, 203, 208, 3, 16, 8, 0, 204, 205, 10, 1, 0, 0, 205,
    206, 5, 82, 0, 0, 206, 208, 3, 16, 8, 0, 207, 201, 1, 0, 0, 0, 207, 204, 1, 0, 0, 0, 208, 211, 1,
    0, 0, 0, 209, 207, 1, 0, 0, 0, 209, 210, 1, 0, 0, 0, 210, 19, 1, 0, 0, 0, 211, 209, 1, 0, 0, 0, 212,
    213, 6, 10, -1, 0, 213, 214, 3, 18, 9, 0, 214, 220, 1, 0, 0, 0, 215, 216, 10, 1, 0, 0, 216, 217,
    5, 63, 0, 0, 217, 219, 3, 18, 9, 0, 218, 215, 1, 0, 0, 0, 219, 222, 1, 0, 0, 0, 220, 218, 1, 0, 0,
    0, 220, 221, 1, 0, 0, 0, 221, 21, 1, 0, 0, 0, 222, 220, 1, 0, 0, 0, 223, 224, 6, 11, -1, 0, 224,
    225, 3, 20, 10, 0, 225, 231, 1, 0, 0, 0, 226, 227, 10, 1, 0, 0, 227, 228, 5, 64, 0, 0, 228, 230,
    3, 20, 10, 0, 229, 226, 1, 0, 0, 0, 230, 233, 1, 0, 0, 0, 231, 229, 1, 0, 0, 0, 231, 232, 1, 0, 0,
    0, 232, 23, 1, 0, 0, 0, 233, 231, 1, 0, 0, 0, 234, 235, 3, 22, 11, 0, 235, 25, 1, 0, 0, 0, 236, 242,
    3, 24, 12, 0, 237, 238, 3, 6, 3, 0, 238, 239, 3, 28, 14, 0, 239, 240, 3, 26, 13, 0, 240, 242, 1,
    0, 0, 0, 241, 236, 1, 0, 0, 0, 241, 237, 1, 0, 0, 0, 242, 27, 1, 0, 0, 0, 243, 244, 7, 3, 0, 0, 244,
    29, 1, 0, 0, 0, 245, 246, 3, 26, 13, 0, 246, 31, 1, 0, 0, 0, 247, 248, 3, 24, 12, 0, 248, 33, 1,
    0, 0, 0, 249, 251, 3, 38, 19, 0, 250, 252, 3, 36, 18, 0, 251, 250, 1, 0, 0, 0, 251, 252, 1, 0, 0,
    0, 252, 253, 1, 0, 0, 0, 253, 254, 5, 70, 0, 0, 254, 35, 1, 0, 0, 0, 255, 258, 3, 40, 20, 0, 256,
    257, 5, 72, 0, 0, 257, 259, 3, 56, 28, 0, 258, 256, 1, 0, 0, 0, 258, 259, 1, 0, 0, 0, 259, 37, 1,
    0, 0, 0, 260, 261, 7, 4, 0, 0, 261, 39, 1, 0, 0, 0, 262, 263, 6, 20, -1, 0, 263, 269, 5, 86, 0, 0,
    264, 265, 5, 44, 0, 0, 265, 266, 3, 40, 20, 0, 266, 267, 5, 45, 0, 0, 267, 269, 1, 0, 0, 0, 268,
    262, 1, 0, 0, 0, 268, 264, 1, 0, 0, 0, 269, 289, 1, 0, 0, 0, 270, 271, 10, 3, 0, 0, 271, 273, 5,
    46, 0, 0, 272, 274, 3, 26, 13, 0, 273, 272, 1, 0, 0, 0, 273, 274, 1, 0, 0, 0, 274, 275, 1, 0, 0,
    0, 275, 288, 5, 47, 0, 0, 276, 277, 10, 2, 0, 0, 277, 278, 5, 44, 0, 0, 278, 279, 3, 42, 21, 0,
    279, 280, 5, 45, 0, 0, 280, 288, 1, 0, 0, 0, 281, 282, 10, 1, 0, 0, 282, 284, 5, 44, 0, 0, 283,
    285, 3, 48, 24, 0, 284, 283, 1, 0, 0, 0, 284, 285, 1, 0, 0, 0, 285, 286, 1, 0, 0, 0, 286, 288, 5,
    45, 0, 0, 287, 270, 1, 0, 0, 0, 287, 276, 1, 0, 0, 0, 287, 281, 1, 0, 0, 0, 288, 291, 1, 0, 0, 0,
    289, 287, 1, 0, 0, 0, 289, 290, 1, 0, 0, 0, 290, 41, 1, 0, 0, 0, 291, 289, 1, 0, 0, 0, 292, 293,
    3, 44, 22, 0, 293, 43, 1, 0, 0, 0, 294, 299, 3, 46, 23, 0, 295, 296, 5, 71, 0, 0, 296, 298, 3, 46,
    23, 0, 297, 295, 1, 0, 0, 0, 298, 301, 1, 0, 0, 0, 299, 297, 1, 0, 0, 0, 299, 300, 1, 0, 0, 0, 300,
    45, 1, 0, 0, 0, 301, 299, 1, 0, 0, 0, 302, 303, 3, 38, 19, 0, 303, 304, 3, 40, 20, 0, 304, 310,
    1, 0, 0, 0, 305, 307, 3, 38, 19, 0, 306, 308, 3, 52, 26, 0, 307, 306, 1, 0, 0, 0, 307, 308, 1, 0,
    0, 0, 308, 310, 1, 0, 0, 0, 309, 302, 1, 0, 0, 0, 309, 305, 1, 0, 0, 0, 310, 47, 1, 0, 0, 0, 311,
    316, 5, 86, 0, 0, 312, 313, 5, 71, 0, 0, 313, 315, 5, 86, 0, 0, 314, 312, 1, 0, 0, 0, 315, 318,
    1, 0, 0, 0, 316, 314, 1, 0, 0, 0, 316, 317, 1, 0, 0, 0, 317, 49, 1, 0, 0, 0, 318, 316, 1, 0, 0, 0,
    319, 321, 3, 52, 26, 0, 320, 319, 1, 0, 0, 0, 320, 321, 1, 0, 0, 0, 321, 51, 1, 0, 0, 0, 322, 323,
    6, 26, -1, 0, 323, 324, 5, 44, 0, 0, 324, 325, 3, 52, 26, 0, 325, 326, 5, 45, 0, 0, 326, 341, 1,
    0, 0, 0, 327, 328, 10, 2, 0, 0, 328, 330, 5, 46, 0, 0, 329, 331, 3, 26, 13, 0, 330, 329, 1, 0, 0,
    0, 330, 331, 1, 0, 0, 0, 331, 332, 1, 0, 0, 0, 332, 340, 5, 47, 0, 0, 333, 334, 10, 1, 0, 0, 334,
    336, 5, 44, 0, 0, 335, 337, 3, 42, 21, 0, 336, 335, 1, 0, 0, 0, 336, 337, 1, 0, 0, 0, 337, 338,
    1, 0, 0, 0, 338, 340, 5, 45, 0, 0, 339, 327, 1, 0, 0, 0, 339, 333, 1, 0, 0, 0, 340, 343, 1, 0, 0,
    0, 341, 339, 1, 0, 0, 0, 341, 342, 1, 0, 0, 0, 342, 53, 1, 0, 0, 0, 343, 341, 1, 0, 0, 0, 344, 345,
    5, 86, 0, 0, 345, 55, 1, 0, 0, 0, 346, 355, 3, 26, 13, 0, 347, 348, 5, 48, 0, 0, 348, 350, 3, 58,
    29, 0, 349, 351, 5, 71, 0, 0, 350, 349, 1, 0, 0, 0, 350, 351, 1, 0, 0, 0, 351, 352, 1, 0, 0, 0, 352,
    353, 5, 49, 0, 0, 353, 355, 1, 0, 0, 0, 354, 346, 1, 0, 0, 0, 354, 347, 1, 0, 0, 0, 355, 57, 1, 0,
    0, 0, 356, 358, 3, 60, 30, 0, 357, 356, 1, 0, 0, 0, 357, 358, 1, 0, 0, 0, 358, 359, 1, 0, 0, 0, 359,
    367, 3, 56, 28, 0, 360, 362, 5, 71, 0, 0, 361, 363, 3, 60, 30, 0, 362, 361, 1, 0, 0, 0, 362, 363,
    1, 0, 0, 0, 363, 364, 1, 0, 0, 0, 364, 366, 3, 56, 28, 0, 365, 360, 1, 0, 0, 0, 366, 369, 1, 0, 0,
    0, 367, 365, 1, 0, 0, 0, 367, 368, 1, 0, 0, 0, 368, 59, 1, 0, 0, 0, 369, 367, 1, 0, 0, 0, 370, 371,
    3, 62, 31, 0, 371, 372, 5, 72, 0, 0, 372, 61, 1, 0, 0, 0, 373, 375, 3, 64, 32, 0, 374, 373, 1, 0,
    0, 0, 375, 376, 1, 0, 0, 0, 376, 374, 1, 0, 0, 0, 376, 377, 1, 0, 0, 0, 377, 63, 1, 0, 0, 0, 378,
    379, 5, 46, 0, 0, 379, 380, 3, 32, 16, 0, 380, 381, 5, 47, 0, 0, 381, 385, 1, 0, 0, 0, 382, 383,
    5, 84, 0, 0, 383, 385, 5, 86, 0, 0, 384, 378, 1, 0, 0, 0, 384, 382, 1, 0, 0, 0, 385, 65, 1, 0, 0,
    0, 386, 392, 3, 68, 34, 0, 387, 392, 3, 74, 37, 0, 388, 392, 3, 76, 38, 0, 389, 392, 3, 78, 39,
    0, 390, 392, 3, 80, 40, 0, 391, 386, 1, 0, 0, 0, 391, 387, 1, 0, 0, 0, 391, 388, 1, 0, 0, 0, 391,
    389, 1, 0, 0, 0, 391, 390, 1, 0, 0, 0, 392, 67, 1, 0, 0, 0, 393, 395, 5, 48, 0, 0, 394, 396, 3, 70,
    35, 0, 395, 394, 1, 0, 0, 0, 395, 396, 1, 0, 0, 0, 396, 397, 1, 0, 0, 0, 397, 398, 5, 49, 0, 0, 398,
    69, 1, 0, 0, 0, 399, 401, 3, 72, 36, 0, 400, 399, 1, 0, 0, 0, 401, 402, 1, 0, 0, 0, 402, 400, 1,
    0, 0, 0, 402, 403, 1, 0, 0, 0, 403, 71, 1, 0, 0, 0, 404, 407, 3, 66, 33, 0, 405, 407, 3, 34, 17,
    0, 406, 404, 1, 0, 0, 0, 406, 405, 1, 0, 0, 0, 407, 73, 1, 0, 0, 0, 408, 410, 3, 30, 15, 0, 409,
    408, 1, 0, 0, 0, 409, 410, 1, 0, 0, 0, 410, 411, 1, 0, 0, 0, 411, 412, 5, 70, 0, 0, 412, 75, 1, 0,
    0, 0, 413, 414, 5, 16, 0, 0, 414, 415, 5, 44, 0, 0, 415, 416, 3, 30, 15, 0, 416, 417, 5, 45, 0,
    0, 417, 420, 3, 66, 33, 0, 418, 419, 5, 10, 0, 0, 419, 421, 3, 66, 33, 0, 420, 418, 1, 0, 0, 0,
    420, 421, 1, 0, 0, 0, 421, 77, 1, 0, 0, 0, 422, 423, 5, 33, 0, 0, 423, 424, 5, 44, 0, 0, 424, 425,
    3, 30, 15, 0, 425, 426, 5, 45, 0, 0, 426, 427, 3, 66, 33, 0, 427, 79, 1, 0, 0, 0, 428, 430, 5, 22,
    0, 0, 429, 431, 3, 30, 15, 0, 430, 429, 1, 0, 0, 0, 430, 431, 1, 0, 0, 0, 431, 432, 1, 0, 0, 0, 432,
    433, 5, 70, 0, 0, 433, 81, 1, 0, 0, 0, 434, 436, 3, 84, 42, 0, 435, 434, 1, 0, 0, 0, 435, 436, 1,
    0, 0, 0, 436, 437, 1, 0, 0, 0, 437, 438, 5, 0, 0, 1, 438, 83, 1, 0, 0, 0, 439, 441, 3, 86, 43, 0,
    440, 439, 1, 0, 0, 0, 441, 442, 1, 0, 0, 0, 442, 440, 1, 0, 0, 0, 442, 443, 1, 0, 0, 0, 443, 85,
    1, 0, 0, 0, 444, 448, 3, 88, 44, 0, 445, 448, 3, 34, 17, 0, 446, 448, 5, 70, 0, 0, 447, 444, 1,
    0, 0, 0, 447, 445, 1, 0, 0, 0, 447, 446, 1, 0, 0, 0, 448, 87, 1, 0, 0, 0, 449, 451, 3, 38, 19, 0,
    450, 449, 1, 0, 0, 0, 450, 451, 1, 0, 0, 0, 451, 452, 1, 0, 0, 0, 452, 454, 3, 40, 20, 0, 453, 455,
    3, 90, 45, 0, 454, 453, 1, 0, 0, 0, 454, 455, 1, 0, 0, 0, 455, 456, 1, 0, 0, 0, 456, 457, 3, 68,
    34, 0, 457, 89, 1, 0, 0, 0, 458, 460, 3, 34, 17, 0, 459, 458, 1, 0, 0, 0, 460, 461, 1, 0, 0, 0, 461,
    459, 1, 0, 0, 0, 461, 462, 1, 0, 0, 0, 462, 91, 1, 0, 0, 0, 56, 97, 103, 112, 116, 118, 126, 132,
    139, 145, 159, 161, 173, 175, 193, 195, 207, 209, 220, 231, 241, 251, 258, 268, 273, 284,
    287, 289, 299, 307, 309, 316, 320, 330, 336, 339, 341, 350, 354, 357, 362, 367, 376, 384,
    391, 395, 402, 406, 409, 420, 430, 435, 442, 447, 450, 454, 461];
CParser.DecisionsToDFA = CParser._ATN.decisionToState.map((ds, index) => new DFA(ds, index));
export class PrimaryExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Identifier() {
        return this.getToken(CParser.Identifier, 0);
    }
    Constant() {
        return this.getToken(CParser.Constant, 0);
    }
    StringLiteral_list() {
        return this.getTokens(CParser.StringLiteral);
    }
    StringLiteral(i) {
        return this.getToken(CParser.StringLiteral, i);
    }
    LeftParen() {
        return this.getToken(CParser.LeftParen, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    RightParen() {
        return this.getToken(CParser.RightParen, 0);
    }
    get ruleIndex() {
        return CParser.RULE_primaryExpression;
    }
    enterRule(listener) {
        if (listener.enterPrimaryExpression) {
            listener.enterPrimaryExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrimaryExpression) {
            listener.exitPrimaryExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrimaryExpression) {
            return visitor.visitPrimaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PostfixExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    LeftBracket_list() {
        return this.getTokens(CParser.LeftBracket);
    }
    LeftBracket(i) {
        return this.getToken(CParser.LeftBracket, i);
    }
    expression_list() {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    expression(i) {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    RightBracket_list() {
        return this.getTokens(CParser.RightBracket);
    }
    RightBracket(i) {
        return this.getToken(CParser.RightBracket, i);
    }
    LeftParen_list() {
        return this.getTokens(CParser.LeftParen);
    }
    LeftParen(i) {
        return this.getToken(CParser.LeftParen, i);
    }
    RightParen_list() {
        return this.getTokens(CParser.RightParen);
    }
    RightParen(i) {
        return this.getToken(CParser.RightParen, i);
    }
    PlusPlus_list() {
        return this.getTokens(CParser.PlusPlus);
    }
    PlusPlus(i) {
        return this.getToken(CParser.PlusPlus, i);
    }
    MinusMinus_list() {
        return this.getTokens(CParser.MinusMinus);
    }
    MinusMinus(i) {
        return this.getToken(CParser.MinusMinus, i);
    }
    argumentExpressionList_list() {
        return this.getTypedRuleContexts(ArgumentExpressionListContext);
    }
    argumentExpressionList(i) {
        return this.getTypedRuleContext(ArgumentExpressionListContext, i);
    }
    get ruleIndex() {
        return CParser.RULE_postfixExpression;
    }
    enterRule(listener) {
        if (listener.enterPostfixExpression) {
            listener.enterPostfixExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPostfixExpression) {
            listener.exitPostfixExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPostfixExpression) {
            return visitor.visitPostfixExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArgumentExpressionListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    assignmentExpression_list() {
        return this.getTypedRuleContexts(AssignmentExpressionContext);
    }
    assignmentExpression(i) {
        return this.getTypedRuleContext(AssignmentExpressionContext, i);
    }
    Comma_list() {
        return this.getTokens(CParser.Comma);
    }
    Comma(i) {
        return this.getToken(CParser.Comma, i);
    }
    get ruleIndex() {
        return CParser.RULE_argumentExpressionList;
    }
    enterRule(listener) {
        if (listener.enterArgumentExpressionList) {
            listener.enterArgumentExpressionList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArgumentExpressionList) {
            listener.exitArgumentExpressionList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArgumentExpressionList) {
            return visitor.visitArgumentExpressionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    postfixExpression() {
        return this.getTypedRuleContext(PostfixExpressionContext, 0);
    }
    unaryOperator() {
        return this.getTypedRuleContext(UnaryOperatorContext, 0);
    }
    castExpression() {
        return this.getTypedRuleContext(CastExpressionContext, 0);
    }
    PlusPlus_list() {
        return this.getTokens(CParser.PlusPlus);
    }
    PlusPlus(i) {
        return this.getToken(CParser.PlusPlus, i);
    }
    MinusMinus_list() {
        return this.getTokens(CParser.MinusMinus);
    }
    MinusMinus(i) {
        return this.getToken(CParser.MinusMinus, i);
    }
    Sizeof_list() {
        return this.getTokens(CParser.Sizeof);
    }
    Sizeof(i) {
        return this.getToken(CParser.Sizeof, i);
    }
    get ruleIndex() {
        return CParser.RULE_unaryExpression;
    }
    enterRule(listener) {
        if (listener.enterUnaryExpression) {
            listener.enterUnaryExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnaryExpression) {
            listener.exitUnaryExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryExpression) {
            return visitor.visitUnaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryOperatorContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    And() {
        return this.getToken(CParser.And, 0);
    }
    Star() {
        return this.getToken(CParser.Star, 0);
    }
    Plus() {
        return this.getToken(CParser.Plus, 0);
    }
    Minus() {
        return this.getToken(CParser.Minus, 0);
    }
    Tilde() {
        return this.getToken(CParser.Tilde, 0);
    }
    Not() {
        return this.getToken(CParser.Not, 0);
    }
    get ruleIndex() {
        return CParser.RULE_unaryOperator;
    }
    enterRule(listener) {
        if (listener.enterUnaryOperator) {
            listener.enterUnaryOperator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnaryOperator) {
            listener.exitUnaryOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryOperator) {
            return visitor.visitUnaryOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CastExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    unaryExpression() {
        return this.getTypedRuleContext(UnaryExpressionContext, 0);
    }
    DigitSequence() {
        return this.getToken(CParser.DigitSequence, 0);
    }
    get ruleIndex() {
        return CParser.RULE_castExpression;
    }
    enterRule(listener) {
        if (listener.enterCastExpression) {
            listener.enterCastExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCastExpression) {
            listener.exitCastExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCastExpression) {
            return visitor.visitCastExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultiplicativeExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    castExpression() {
        return this.getTypedRuleContext(CastExpressionContext, 0);
    }
    multiplicativeExpression() {
        return this.getTypedRuleContext(MultiplicativeExpressionContext, 0);
    }
    Star() {
        return this.getToken(CParser.Star, 0);
    }
    Div() {
        return this.getToken(CParser.Div, 0);
    }
    Mod() {
        return this.getToken(CParser.Mod, 0);
    }
    get ruleIndex() {
        return CParser.RULE_multiplicativeExpression;
    }
    enterRule(listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AdditiveExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    multiplicativeExpression() {
        return this.getTypedRuleContext(MultiplicativeExpressionContext, 0);
    }
    additiveExpression() {
        return this.getTypedRuleContext(AdditiveExpressionContext, 0);
    }
    Plus() {
        return this.getToken(CParser.Plus, 0);
    }
    Minus() {
        return this.getToken(CParser.Minus, 0);
    }
    get ruleIndex() {
        return CParser.RULE_additiveExpression;
    }
    enterRule(listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RelationalExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    additiveExpression() {
        return this.getTypedRuleContext(AdditiveExpressionContext, 0);
    }
    relationalExpression() {
        return this.getTypedRuleContext(RelationalExpressionContext, 0);
    }
    Less() {
        return this.getToken(CParser.Less, 0);
    }
    Greater() {
        return this.getToken(CParser.Greater, 0);
    }
    LessEqual() {
        return this.getToken(CParser.LessEqual, 0);
    }
    GreaterEqual() {
        return this.getToken(CParser.GreaterEqual, 0);
    }
    get ruleIndex() {
        return CParser.RULE_relationalExpression;
    }
    enterRule(listener) {
        if (listener.enterRelationalExpression) {
            listener.enterRelationalExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelationalExpression) {
            listener.exitRelationalExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRelationalExpression) {
            return visitor.visitRelationalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class EqualityExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    relationalExpression() {
        return this.getTypedRuleContext(RelationalExpressionContext, 0);
    }
    equalityExpression() {
        return this.getTypedRuleContext(EqualityExpressionContext, 0);
    }
    Equal() {
        return this.getToken(CParser.Equal, 0);
    }
    NotEqual() {
        return this.getToken(CParser.NotEqual, 0);
    }
    get ruleIndex() {
        return CParser.RULE_equalityExpression;
    }
    enterRule(listener) {
        if (listener.enterEqualityExpression) {
            listener.enterEqualityExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEqualityExpression) {
            listener.exitEqualityExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEqualityExpression) {
            return visitor.visitEqualityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalAndExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    equalityExpression() {
        return this.getTypedRuleContext(EqualityExpressionContext, 0);
    }
    logicalAndExpression() {
        return this.getTypedRuleContext(LogicalAndExpressionContext, 0);
    }
    AndAnd() {
        return this.getToken(CParser.AndAnd, 0);
    }
    get ruleIndex() {
        return CParser.RULE_logicalAndExpression;
    }
    enterRule(listener) {
        if (listener.enterLogicalAndExpression) {
            listener.enterLogicalAndExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLogicalAndExpression) {
            listener.exitLogicalAndExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLogicalAndExpression) {
            return visitor.visitLogicalAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalOrExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    logicalAndExpression() {
        return this.getTypedRuleContext(LogicalAndExpressionContext, 0);
    }
    logicalOrExpression() {
        return this.getTypedRuleContext(LogicalOrExpressionContext, 0);
    }
    OrOr() {
        return this.getToken(CParser.OrOr, 0);
    }
    get ruleIndex() {
        return CParser.RULE_logicalOrExpression;
    }
    enterRule(listener) {
        if (listener.enterLogicalOrExpression) {
            listener.enterLogicalOrExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLogicalOrExpression) {
            listener.exitLogicalOrExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLogicalOrExpression) {
            return visitor.visitLogicalOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConditionalExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    logicalOrExpression() {
        return this.getTypedRuleContext(LogicalOrExpressionContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_conditionalExpression;
    }
    enterRule(listener) {
        if (listener.enterConditionalExpression) {
            listener.enterConditionalExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConditionalExpression) {
            listener.exitConditionalExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConditionalExpression) {
            return visitor.visitConditionalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignmentExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    conditionalExpression() {
        return this.getTypedRuleContext(ConditionalExpressionContext, 0);
    }
    unaryExpression() {
        return this.getTypedRuleContext(UnaryExpressionContext, 0);
    }
    assignmentOperator() {
        return this.getTypedRuleContext(AssignmentOperatorContext, 0);
    }
    assignmentExpression() {
        return this.getTypedRuleContext(AssignmentExpressionContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_assignmentExpression;
    }
    enterRule(listener) {
        if (listener.enterAssignmentExpression) {
            listener.enterAssignmentExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAssignmentExpression) {
            listener.exitAssignmentExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignmentExpression) {
            return visitor.visitAssignmentExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignmentOperatorContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Assign() {
        return this.getToken(CParser.Assign, 0);
    }
    StarAssign() {
        return this.getToken(CParser.StarAssign, 0);
    }
    DivAssign() {
        return this.getToken(CParser.DivAssign, 0);
    }
    ModAssign() {
        return this.getToken(CParser.ModAssign, 0);
    }
    PlusAssign() {
        return this.getToken(CParser.PlusAssign, 0);
    }
    MinusAssign() {
        return this.getToken(CParser.MinusAssign, 0);
    }
    get ruleIndex() {
        return CParser.RULE_assignmentOperator;
    }
    enterRule(listener) {
        if (listener.enterAssignmentOperator) {
            listener.enterAssignmentOperator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAssignmentOperator) {
            listener.exitAssignmentOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignmentOperator) {
            return visitor.visitAssignmentOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    assignmentExpression() {
        return this.getTypedRuleContext(AssignmentExpressionContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_expression;
    }
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConstantExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    conditionalExpression() {
        return this.getTypedRuleContext(ConditionalExpressionContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_constantExpression;
    }
    enterRule(listener) {
        if (listener.enterConstantExpression) {
            listener.enterConstantExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConstantExpression) {
            listener.exitConstantExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstantExpression) {
            return visitor.visitConstantExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DeclarationContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    typeSpecifier() {
        return this.getTypedRuleContext(TypeSpecifierContext, 0);
    }
    Semi() {
        return this.getToken(CParser.Semi, 0);
    }
    initDeclarator() {
        return this.getTypedRuleContext(InitDeclaratorContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_declaration;
    }
    enterRule(listener) {
        if (listener.enterDeclaration) {
            listener.enterDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDeclaration) {
            listener.exitDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InitDeclaratorContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    directDeclarator() {
        return this.getTypedRuleContext(DirectDeclaratorContext, 0);
    }
    Assign() {
        return this.getToken(CParser.Assign, 0);
    }
    initializer() {
        return this.getTypedRuleContext(InitializerContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_initDeclarator;
    }
    enterRule(listener) {
        if (listener.enterInitDeclarator) {
            listener.enterInitDeclarator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInitDeclarator) {
            listener.exitInitDeclarator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInitDeclarator) {
            return visitor.visitInitDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeSpecifierContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Char() {
        return this.getToken(CParser.Char, 0);
    }
    Int() {
        return this.getToken(CParser.Int, 0);
    }
    Double() {
        return this.getToken(CParser.Double, 0);
    }
    get ruleIndex() {
        return CParser.RULE_typeSpecifier;
    }
    enterRule(listener) {
        if (listener.enterTypeSpecifier) {
            listener.enterTypeSpecifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeSpecifier) {
            listener.exitTypeSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeSpecifier) {
            return visitor.visitTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DirectDeclaratorContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Identifier() {
        return this.getToken(CParser.Identifier, 0);
    }
    LeftParen() {
        return this.getToken(CParser.LeftParen, 0);
    }
    directDeclarator() {
        return this.getTypedRuleContext(DirectDeclaratorContext, 0);
    }
    RightParen() {
        return this.getToken(CParser.RightParen, 0);
    }
    LeftBracket() {
        return this.getToken(CParser.LeftBracket, 0);
    }
    RightBracket() {
        return this.getToken(CParser.RightBracket, 0);
    }
    assignmentExpression() {
        return this.getTypedRuleContext(AssignmentExpressionContext, 0);
    }
    parameterTypeList() {
        return this.getTypedRuleContext(ParameterTypeListContext, 0);
    }
    identifierList() {
        return this.getTypedRuleContext(IdentifierListContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_directDeclarator;
    }
    enterRule(listener) {
        if (listener.enterDirectDeclarator) {
            listener.enterDirectDeclarator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDirectDeclarator) {
            listener.exitDirectDeclarator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDirectDeclarator) {
            return visitor.visitDirectDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParameterTypeListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    parameterList() {
        return this.getTypedRuleContext(ParameterListContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_parameterTypeList;
    }
    enterRule(listener) {
        if (listener.enterParameterTypeList) {
            listener.enterParameterTypeList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParameterTypeList) {
            listener.exitParameterTypeList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterTypeList) {
            return visitor.visitParameterTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParameterListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    parameterDeclaration_list() {
        return this.getTypedRuleContexts(ParameterDeclarationContext);
    }
    parameterDeclaration(i) {
        return this.getTypedRuleContext(ParameterDeclarationContext, i);
    }
    Comma_list() {
        return this.getTokens(CParser.Comma);
    }
    Comma(i) {
        return this.getToken(CParser.Comma, i);
    }
    get ruleIndex() {
        return CParser.RULE_parameterList;
    }
    enterRule(listener) {
        if (listener.enterParameterList) {
            listener.enterParameterList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParameterList) {
            listener.exitParameterList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterList) {
            return visitor.visitParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParameterDeclarationContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    typeSpecifier() {
        return this.getTypedRuleContext(TypeSpecifierContext, 0);
    }
    directDeclarator() {
        return this.getTypedRuleContext(DirectDeclaratorContext, 0);
    }
    directAbstractDeclarator() {
        return this.getTypedRuleContext(DirectAbstractDeclaratorContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_parameterDeclaration;
    }
    enterRule(listener) {
        if (listener.enterParameterDeclaration) {
            listener.enterParameterDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParameterDeclaration) {
            listener.exitParameterDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterDeclaration) {
            return visitor.visitParameterDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentifierListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Identifier_list() {
        return this.getTokens(CParser.Identifier);
    }
    Identifier(i) {
        return this.getToken(CParser.Identifier, i);
    }
    Comma_list() {
        return this.getTokens(CParser.Comma);
    }
    Comma(i) {
        return this.getToken(CParser.Comma, i);
    }
    get ruleIndex() {
        return CParser.RULE_identifierList;
    }
    enterRule(listener) {
        if (listener.enterIdentifierList) {
            listener.enterIdentifierList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIdentifierList) {
            listener.exitIdentifierList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierList) {
            return visitor.visitIdentifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeNameContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    directAbstractDeclarator() {
        return this.getTypedRuleContext(DirectAbstractDeclaratorContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_typeName;
    }
    enterRule(listener) {
        if (listener.enterTypeName) {
            listener.enterTypeName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeName) {
            listener.exitTypeName(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeName) {
            return visitor.visitTypeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DirectAbstractDeclaratorContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    LeftParen() {
        return this.getToken(CParser.LeftParen, 0);
    }
    directAbstractDeclarator() {
        return this.getTypedRuleContext(DirectAbstractDeclaratorContext, 0);
    }
    RightParen() {
        return this.getToken(CParser.RightParen, 0);
    }
    LeftBracket() {
        return this.getToken(CParser.LeftBracket, 0);
    }
    RightBracket() {
        return this.getToken(CParser.RightBracket, 0);
    }
    assignmentExpression() {
        return this.getTypedRuleContext(AssignmentExpressionContext, 0);
    }
    parameterTypeList() {
        return this.getTypedRuleContext(ParameterTypeListContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_directAbstractDeclarator;
    }
    enterRule(listener) {
        if (listener.enterDirectAbstractDeclarator) {
            listener.enterDirectAbstractDeclarator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDirectAbstractDeclarator) {
            listener.exitDirectAbstractDeclarator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDirectAbstractDeclarator) {
            return visitor.visitDirectAbstractDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypedefNameContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Identifier() {
        return this.getToken(CParser.Identifier, 0);
    }
    get ruleIndex() {
        return CParser.RULE_typedefName;
    }
    enterRule(listener) {
        if (listener.enterTypedefName) {
            listener.enterTypedefName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypedefName) {
            listener.exitTypedefName(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypedefName) {
            return visitor.visitTypedefName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InitializerContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    assignmentExpression() {
        return this.getTypedRuleContext(AssignmentExpressionContext, 0);
    }
    LeftBrace() {
        return this.getToken(CParser.LeftBrace, 0);
    }
    initializerList() {
        return this.getTypedRuleContext(InitializerListContext, 0);
    }
    RightBrace() {
        return this.getToken(CParser.RightBrace, 0);
    }
    Comma() {
        return this.getToken(CParser.Comma, 0);
    }
    get ruleIndex() {
        return CParser.RULE_initializer;
    }
    enterRule(listener) {
        if (listener.enterInitializer) {
            listener.enterInitializer(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInitializer) {
            listener.exitInitializer(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInitializer) {
            return visitor.visitInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InitializerListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    initializer_list() {
        return this.getTypedRuleContexts(InitializerContext);
    }
    initializer(i) {
        return this.getTypedRuleContext(InitializerContext, i);
    }
    designation_list() {
        return this.getTypedRuleContexts(DesignationContext);
    }
    designation(i) {
        return this.getTypedRuleContext(DesignationContext, i);
    }
    Comma_list() {
        return this.getTokens(CParser.Comma);
    }
    Comma(i) {
        return this.getToken(CParser.Comma, i);
    }
    get ruleIndex() {
        return CParser.RULE_initializerList;
    }
    enterRule(listener) {
        if (listener.enterInitializerList) {
            listener.enterInitializerList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInitializerList) {
            listener.exitInitializerList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInitializerList) {
            return visitor.visitInitializerList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DesignationContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    designatorList() {
        return this.getTypedRuleContext(DesignatorListContext, 0);
    }
    Assign() {
        return this.getToken(CParser.Assign, 0);
    }
    get ruleIndex() {
        return CParser.RULE_designation;
    }
    enterRule(listener) {
        if (listener.enterDesignation) {
            listener.enterDesignation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDesignation) {
            listener.exitDesignation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDesignation) {
            return visitor.visitDesignation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DesignatorListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    designator_list() {
        return this.getTypedRuleContexts(DesignatorContext);
    }
    designator(i) {
        return this.getTypedRuleContext(DesignatorContext, i);
    }
    get ruleIndex() {
        return CParser.RULE_designatorList;
    }
    enterRule(listener) {
        if (listener.enterDesignatorList) {
            listener.enterDesignatorList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDesignatorList) {
            listener.exitDesignatorList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDesignatorList) {
            return visitor.visitDesignatorList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DesignatorContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    LeftBracket() {
        return this.getToken(CParser.LeftBracket, 0);
    }
    constantExpression() {
        return this.getTypedRuleContext(ConstantExpressionContext, 0);
    }
    RightBracket() {
        return this.getToken(CParser.RightBracket, 0);
    }
    Dot() {
        return this.getToken(CParser.Dot, 0);
    }
    Identifier() {
        return this.getToken(CParser.Identifier, 0);
    }
    get ruleIndex() {
        return CParser.RULE_designator;
    }
    enterRule(listener) {
        if (listener.enterDesignator) {
            listener.enterDesignator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDesignator) {
            listener.exitDesignator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDesignator) {
            return visitor.visitDesignator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    compoundStatement() {
        return this.getTypedRuleContext(CompoundStatementContext, 0);
    }
    expressionStatement() {
        return this.getTypedRuleContext(ExpressionStatementContext, 0);
    }
    selectionStatement() {
        return this.getTypedRuleContext(SelectionStatementContext, 0);
    }
    iterationStatement() {
        return this.getTypedRuleContext(IterationStatementContext, 0);
    }
    jumpStatement() {
        return this.getTypedRuleContext(JumpStatementContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_statement;
    }
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CompoundStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    LeftBrace() {
        return this.getToken(CParser.LeftBrace, 0);
    }
    RightBrace() {
        return this.getToken(CParser.RightBrace, 0);
    }
    blockItemList() {
        return this.getTypedRuleContext(BlockItemListContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_compoundStatement;
    }
    enterRule(listener) {
        if (listener.enterCompoundStatement) {
            listener.enterCompoundStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCompoundStatement) {
            listener.exitCompoundStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCompoundStatement) {
            return visitor.visitCompoundStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BlockItemListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    blockItem_list() {
        return this.getTypedRuleContexts(BlockItemContext);
    }
    blockItem(i) {
        return this.getTypedRuleContext(BlockItemContext, i);
    }
    get ruleIndex() {
        return CParser.RULE_blockItemList;
    }
    enterRule(listener) {
        if (listener.enterBlockItemList) {
            listener.enterBlockItemList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBlockItemList) {
            listener.exitBlockItemList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlockItemList) {
            return visitor.visitBlockItemList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BlockItemContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    declaration() {
        return this.getTypedRuleContext(DeclarationContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_blockItem;
    }
    enterRule(listener) {
        if (listener.enterBlockItem) {
            listener.enterBlockItem(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBlockItem) {
            listener.exitBlockItem(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlockItem) {
            return visitor.visitBlockItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpressionStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Semi() {
        return this.getToken(CParser.Semi, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_expressionStatement;
    }
    enterRule(listener) {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SelectionStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    If() {
        return this.getToken(CParser.If, 0);
    }
    LeftParen() {
        return this.getToken(CParser.LeftParen, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    RightParen() {
        return this.getToken(CParser.RightParen, 0);
    }
    statement_list() {
        return this.getTypedRuleContexts(StatementContext);
    }
    statement(i) {
        return this.getTypedRuleContext(StatementContext, i);
    }
    Else() {
        return this.getToken(CParser.Else, 0);
    }
    get ruleIndex() {
        return CParser.RULE_selectionStatement;
    }
    enterRule(listener) {
        if (listener.enterSelectionStatement) {
            listener.enterSelectionStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelectionStatement) {
            listener.exitSelectionStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSelectionStatement) {
            return visitor.visitSelectionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IterationStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    While() {
        return this.getToken(CParser.While, 0);
    }
    LeftParen() {
        return this.getToken(CParser.LeftParen, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    RightParen() {
        return this.getToken(CParser.RightParen, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_iterationStatement;
    }
    enterRule(listener) {
        if (listener.enterIterationStatement) {
            listener.enterIterationStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIterationStatement) {
            listener.exitIterationStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIterationStatement) {
            return visitor.visitIterationStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class JumpStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Return() {
        return this.getToken(CParser.Return, 0);
    }
    Semi() {
        return this.getToken(CParser.Semi, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_jumpStatement;
    }
    enterRule(listener) {
        if (listener.enterJumpStatement) {
            listener.enterJumpStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitJumpStatement) {
            listener.exitJumpStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitJumpStatement) {
            return visitor.visitJumpStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CompilationUnitContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    EOF() {
        return this.getToken(CParser.EOF, 0);
    }
    translationUnit() {
        return this.getTypedRuleContext(TranslationUnitContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_compilationUnit;
    }
    enterRule(listener) {
        if (listener.enterCompilationUnit) {
            listener.enterCompilationUnit(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCompilationUnit) {
            listener.exitCompilationUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCompilationUnit) {
            return visitor.visitCompilationUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TranslationUnitContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    externalDeclaration_list() {
        return this.getTypedRuleContexts(ExternalDeclarationContext);
    }
    externalDeclaration(i) {
        return this.getTypedRuleContext(ExternalDeclarationContext, i);
    }
    get ruleIndex() {
        return CParser.RULE_translationUnit;
    }
    enterRule(listener) {
        if (listener.enterTranslationUnit) {
            listener.enterTranslationUnit(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTranslationUnit) {
            listener.exitTranslationUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTranslationUnit) {
            return visitor.visitTranslationUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExternalDeclarationContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    functionDefinition() {
        return this.getTypedRuleContext(FunctionDefinitionContext, 0);
    }
    declaration() {
        return this.getTypedRuleContext(DeclarationContext, 0);
    }
    Semi() {
        return this.getToken(CParser.Semi, 0);
    }
    get ruleIndex() {
        return CParser.RULE_externalDeclaration;
    }
    enterRule(listener) {
        if (listener.enterExternalDeclaration) {
            listener.enterExternalDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExternalDeclaration) {
            listener.exitExternalDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExternalDeclaration) {
            return visitor.visitExternalDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionDefinitionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    directDeclarator() {
        return this.getTypedRuleContext(DirectDeclaratorContext, 0);
    }
    compoundStatement() {
        return this.getTypedRuleContext(CompoundStatementContext, 0);
    }
    typeSpecifier() {
        return this.getTypedRuleContext(TypeSpecifierContext, 0);
    }
    declarationList() {
        return this.getTypedRuleContext(DeclarationListContext, 0);
    }
    get ruleIndex() {
        return CParser.RULE_functionDefinition;
    }
    enterRule(listener) {
        if (listener.enterFunctionDefinition) {
            listener.enterFunctionDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunctionDefinition) {
            listener.exitFunctionDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionDefinition) {
            return visitor.visitFunctionDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DeclarationListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    declaration_list() {
        return this.getTypedRuleContexts(DeclarationContext);
    }
    declaration(i) {
        return this.getTypedRuleContext(DeclarationContext, i);
    }
    get ruleIndex() {
        return CParser.RULE_declarationList;
    }
    enterRule(listener) {
        if (listener.enterDeclarationList) {
            listener.enterDeclarationList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDeclarationList) {
            listener.exitDeclarationList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeclarationList) {
            return visitor.visitDeclarationList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
//# sourceMappingURL=CParser.js.map