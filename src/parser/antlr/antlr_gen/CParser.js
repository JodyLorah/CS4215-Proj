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
            this.state = 97;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 86:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 86;
                        this.match(CParser.Identifier);
                    }
                    break;
                case 87:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 87;
                        this.match(CParser.Constant);
                    }
                    break;
                case 89:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 89;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 88;
                                            this.match(CParser.StringLiteral);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 91;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 44:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 93;
                        this.match(CParser.LeftParen);
                        this.state = 94;
                        this.assignmentExpression();
                        this.state = 95;
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
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 99;
                this.primaryExpression();
                this.state = 109;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 3, this._ctx)) {
                    case 1:
                        {
                            this.state = 100;
                            this.match(CParser.LeftParen);
                            this.state = 102;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4198401) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 11) !== 0)) {
                                {
                                    this.state = 101;
                                    this.argumentExpressionList();
                                }
                            }
                            this.state = 104;
                            this.match(CParser.RightParen);
                        }
                        break;
                    case 2:
                        {
                            this.state = 105;
                            this.match(CParser.LeftBracket);
                            this.state = 106;
                            this.assignmentExpression();
                            this.state = 107;
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
                this.state = 111;
                this.assignmentExpression();
                this.state = 116;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 71) {
                    {
                        {
                            this.state = 112;
                            this.match(CParser.Comma);
                            this.state = 113;
                            this.assignmentExpression();
                        }
                    }
                    this.state = 118;
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
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 123;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 44:
                    case 86:
                    case 87:
                    case 89:
                        {
                            this.state = 119;
                            this.postfixExpression();
                        }
                        break;
                    case 56:
                    case 66:
                        {
                            this.state = 120;
                            this.unaryOperator();
                            this.state = 121;
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
                this.state = 125;
                _la = this._input.LA(1);
                if (!(_la === 56 || _la === 66)) {
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
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 127;
                this.unaryExpression();
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
                    this.state = 130;
                    this.castExpression();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 143;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 141;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 6, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_multiplicativeExpression);
                                        this.state = 132;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 133;
                                        this.match(CParser.Star);
                                        this.state = 134;
                                        this.castExpression();
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_multiplicativeExpression);
                                        this.state = 135;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 136;
                                        this.match(CParser.Div);
                                        this.state = 137;
                                        this.castExpression();
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_multiplicativeExpression);
                                        this.state = 138;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 139;
                                        this.match(CParser.Mod);
                                        this.state = 140;
                                        this.castExpression();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 145;
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
                    this.state = 147;
                    this.multiplicativeExpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 157;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 155;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_additiveExpression);
                                        this.state = 149;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 150;
                                        this.match(CParser.Plus);
                                        this.state = 151;
                                        this.multiplicativeExpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_additiveExpression);
                                        this.state = 152;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 153;
                                        this.match(CParser.Minus);
                                        this.state = 154;
                                        this.multiplicativeExpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 159;
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
                    this.state = 161;
                    this.additiveExpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 177;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 175;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 10, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
                                        this.state = 163;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 164;
                                        this.match(CParser.Less);
                                        this.state = 165;
                                        this.additiveExpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
                                        this.state = 166;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 167;
                                        this.match(CParser.Greater);
                                        this.state = 168;
                                        this.additiveExpression(0);
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
                                        this.state = 169;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 170;
                                        this.match(CParser.LessEqual);
                                        this.state = 171;
                                        this.additiveExpression(0);
                                    }
                                    break;
                                case 4:
                                    {
                                        localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_relationalExpression);
                                        this.state = 172;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 173;
                                        this.match(CParser.GreaterEqual);
                                        this.state = 174;
                                        this.additiveExpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 179;
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
        let _startState = 18;
        this.enterRecursionRule(localctx, 18, CParser.RULE_logicalAndExpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 181;
                    this.relationalExpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 188;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
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
                                this.state = 183;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 184;
                                this.match(CParser.AndAnd);
                                this.state = 185;
                                this.relationalExpression(0);
                            }
                        }
                    }
                    this.state = 190;
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
    logicalOrExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new LogicalOrExpressionContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 20;
        this.enterRecursionRule(localctx, 20, CParser.RULE_logicalOrExpression, _p);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 192;
                    this.logicalAndExpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 199;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
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
                                this.state = 194;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 195;
                                this.match(CParser.OrOr);
                                this.state = 196;
                                this.logicalAndExpression(0);
                            }
                        }
                    }
                    this.state = 201;
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
        this.enterRule(localctx, 22, CParser.RULE_conditionalExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 202;
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
        this.enterRule(localctx, 24, CParser.RULE_assignmentExpression);
        try {
            this.state = 209;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 204;
                        this.conditionalExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 205;
                        this.unaryExpression();
                        this.state = 206;
                        this.assignmentOperator();
                        this.state = 207;
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
        this.enterRule(localctx, 26, CParser.RULE_assignmentOperator);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 211;
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
    constantExpression() {
        let localctx = new ConstantExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, CParser.RULE_constantExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 213;
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
        this.enterRule(localctx, 30, CParser.RULE_declaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 215;
                this.typeSpecifier();
                this.state = 216;
                this.initDeclarator();
                this.state = 217;
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
        this.enterRule(localctx, 32, CParser.RULE_initDeclarator);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 219;
                this.directDeclarator(0);
                this.state = 222;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 72) {
                    {
                        this.state = 220;
                        this.match(CParser.Assign);
                        this.state = 221;
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
        this.enterRule(localctx, 34, CParser.RULE_typeSpecifier);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 224;
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
        let _startState = 36;
        this.enterRecursionRule(localctx, 36, CParser.RULE_directDeclarator, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 232;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 86:
                        {
                            this.state = 227;
                            this.match(CParser.Identifier);
                        }
                        break;
                    case 44:
                        {
                            this.state = 228;
                            this.match(CParser.LeftParen);
                            this.state = 229;
                            this.directDeclarator(0);
                            this.state = 230;
                            this.match(CParser.RightParen);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 253;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 251;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 19, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 234;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 235;
                                        this.match(CParser.LeftBracket);
                                        this.state = 237;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4198401) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 11) !== 0)) {
                                            {
                                                this.state = 236;
                                                this.assignmentExpression();
                                            }
                                        }
                                        this.state = 239;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 240;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 241;
                                        this.match(CParser.LeftParen);
                                        this.state = 242;
                                        this.parameterList();
                                        this.state = 243;
                                        this.match(CParser.RightParen);
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 245;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 246;
                                        this.match(CParser.LeftParen);
                                        this.state = 248;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === 86) {
                                            {
                                                this.state = 247;
                                                this.identifierList();
                                            }
                                        }
                                        this.state = 250;
                                        this.match(CParser.RightParen);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 255;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
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
    parameterList() {
        let localctx = new ParameterListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 38, CParser.RULE_parameterList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 256;
                this.parameterDeclaration();
                this.state = 261;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 71) {
                    {
                        {
                            this.state = 257;
                            this.match(CParser.Comma);
                            this.state = 258;
                            this.parameterDeclaration();
                        }
                    }
                    this.state = 263;
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
        this.enterRule(localctx, 40, CParser.RULE_parameterDeclaration);
        let _la;
        try {
            this.state = 271;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 264;
                        this.typeSpecifier();
                        this.state = 265;
                        this.directDeclarator(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 267;
                        this.typeSpecifier();
                        this.state = 269;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 44) {
                            {
                                this.state = 268;
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
        this.enterRule(localctx, 42, CParser.RULE_identifierList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 273;
                this.match(CParser.Identifier);
                this.state = 278;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 71) {
                    {
                        {
                            this.state = 274;
                            this.match(CParser.Comma);
                            this.state = 275;
                            this.match(CParser.Identifier);
                        }
                    }
                    this.state = 280;
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
        this.enterRule(localctx, 44, CParser.RULE_typeName);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 44) {
                    {
                        this.state = 281;
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
        let _startState = 46;
        this.enterRecursionRule(localctx, 46, CParser.RULE_directAbstractDeclarator, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 285;
                    this.match(CParser.LeftParen);
                    this.state = 286;
                    this.directAbstractDeclarator(0);
                    this.state = 287;
                    this.match(CParser.RightParen);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 303;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 301;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 28, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new DirectAbstractDeclaratorContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directAbstractDeclarator);
                                        this.state = 289;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 290;
                                        this.match(CParser.LeftBracket);
                                        this.state = 292;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4198401) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 11) !== 0)) {
                                            {
                                                this.state = 291;
                                                this.assignmentExpression();
                                            }
                                        }
                                        this.state = 294;
                                        this.match(CParser.RightBracket);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new DirectAbstractDeclaratorContext(this, _parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directAbstractDeclarator);
                                        this.state = 295;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 296;
                                        this.match(CParser.LeftParen);
                                        this.state = 298;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0)) {
                                            {
                                                this.state = 297;
                                                this.parameterList();
                                            }
                                        }
                                        this.state = 300;
                                        this.match(CParser.RightParen);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 305;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
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
        this.enterRule(localctx, 48, CParser.RULE_typedefName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 306;
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
        this.enterRule(localctx, 50, CParser.RULE_initializer);
        let _la;
        try {
            this.state = 316;
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
                        this.state = 308;
                        this.assignmentExpression();
                    }
                    break;
                case 48:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 309;
                        this.match(CParser.LeftBrace);
                        this.state = 310;
                        this.initializerList();
                        this.state = 312;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 71) {
                            {
                                this.state = 311;
                                this.match(CParser.Comma);
                            }
                        }
                        this.state = 314;
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
        this.enterRule(localctx, 52, CParser.RULE_initializerList);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 319;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 46 || _la === 84) {
                    {
                        this.state = 318;
                        this.designation();
                    }
                }
                this.state = 321;
                this.initializer();
                this.state = 329;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 322;
                                this.match(CParser.Comma);
                                this.state = 324;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 46 || _la === 84) {
                                    {
                                        this.state = 323;
                                        this.designation();
                                    }
                                }
                                this.state = 326;
                                this.initializer();
                            }
                        }
                    }
                    this.state = 331;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
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
        this.enterRule(localctx, 54, CParser.RULE_designation);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 332;
                this.designatorList();
                this.state = 333;
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
        this.enterRule(localctx, 56, CParser.RULE_designatorList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 336;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 335;
                            this.designator();
                        }
                    }
                    this.state = 338;
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
        this.enterRule(localctx, 58, CParser.RULE_designator);
        try {
            this.state = 346;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 46:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 340;
                        this.match(CParser.LeftBracket);
                        this.state = 341;
                        this.constantExpression();
                        this.state = 342;
                        this.match(CParser.RightBracket);
                    }
                    break;
                case 84:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 344;
                        this.match(CParser.Dot);
                        this.state = 345;
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
        this.enterRule(localctx, 60, CParser.RULE_statement);
        try {
            this.state = 353;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 48:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 348;
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
                        this.state = 349;
                        this.expressionStatement();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 350;
                        this.selectionStatement();
                    }
                    break;
                case 33:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 351;
                        this.iterationStatement();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 352;
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
        this.enterRule(localctx, 62, CParser.RULE_compoundStatement);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 355;
                this.match(CParser.LeftBrace);
                this.state = 357;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4522512) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 8423425) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 11534337) !== 0)) {
                    {
                        this.state = 356;
                        this.blockItemList();
                    }
                }
                this.state = 359;
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
        this.enterRule(localctx, 64, CParser.RULE_blockItemList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 361;
                            this.blockItem();
                        }
                    }
                    this.state = 364;
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
        this.enterRule(localctx, 66, CParser.RULE_blockItem);
        try {
            this.state = 368;
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
                        this.state = 366;
                        this.statement();
                    }
                    break;
                case 4:
                case 9:
                case 18:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 367;
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
        this.enterRule(localctx, 68, CParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 370;
                this.assignmentExpression();
                this.state = 371;
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
        this.enterRule(localctx, 70, CParser.RULE_selectionStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 373;
                this.match(CParser.If);
                this.state = 374;
                this.match(CParser.LeftParen);
                this.state = 375;
                this.assignmentExpression();
                this.state = 376;
                this.match(CParser.RightParen);
                this.state = 377;
                this.statement();
                this.state = 380;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 41, this._ctx)) {
                    case 1:
                        {
                            this.state = 378;
                            this.match(CParser.Else);
                            this.state = 379;
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
        this.enterRule(localctx, 72, CParser.RULE_iterationStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 382;
                this.match(CParser.While);
                this.state = 383;
                this.match(CParser.LeftParen);
                this.state = 384;
                this.assignmentExpression();
                this.state = 385;
                this.match(CParser.RightParen);
                this.state = 386;
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
        this.enterRule(localctx, 74, CParser.RULE_jumpStatement);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 388;
                this.match(CParser.Return);
                this.state = 390;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4198401) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 11) !== 0)) {
                    {
                        this.state = 389;
                        this.assignmentExpression();
                    }
                }
                this.state = 392;
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
        this.enterRule(localctx, 76, CParser.RULE_compilationUnit);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 395;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262672) !== 0)) {
                    {
                        this.state = 394;
                        this.translationUnit();
                    }
                }
                this.state = 397;
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
        this.enterRule(localctx, 78, CParser.RULE_translationUnit);
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
                            this.externalDeclaration();
                        }
                    }
                    this.state = 402;
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
    // @RuleVersion(0)
    externalDeclaration() {
        let localctx = new ExternalDeclarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 80, CParser.RULE_externalDeclaration);
        try {
            this.state = 406;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 45, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 404;
                        this.functionDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 405;
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
        this.enterRule(localctx, 82, CParser.RULE_functionDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 408;
                this.typeSpecifier();
                this.state = 409;
                this.directDeclarator(0);
                this.state = 410;
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
        this.enterRule(localctx, 84, CParser.RULE_declarationList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 412;
                            this.declaration();
                        }
                    }
                    this.state = 415;
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
                return this.logicalAndExpression_sempred(localctx, predIndex);
            case 10:
                return this.logicalOrExpression_sempred(localctx, predIndex);
            case 18:
                return this.directDeclarator_sempred(localctx, predIndex);
            case 23:
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
    logicalAndExpression_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 9:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    logicalOrExpression_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 10:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    directDeclarator_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 11:
                return this.precpred(this._ctx, 3);
            case 12:
                return this.precpred(this._ctx, 2);
            case 13:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    directAbstractDeclarator_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 14:
                return this.precpred(this._ctx, 2);
            case 15:
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
CParser.RULE_logicalAndExpression = 9;
CParser.RULE_logicalOrExpression = 10;
CParser.RULE_conditionalExpression = 11;
CParser.RULE_assignmentExpression = 12;
CParser.RULE_assignmentOperator = 13;
CParser.RULE_constantExpression = 14;
CParser.RULE_declaration = 15;
CParser.RULE_initDeclarator = 16;
CParser.RULE_typeSpecifier = 17;
CParser.RULE_directDeclarator = 18;
CParser.RULE_parameterList = 19;
CParser.RULE_parameterDeclaration = 20;
CParser.RULE_identifierList = 21;
CParser.RULE_typeName = 22;
CParser.RULE_directAbstractDeclarator = 23;
CParser.RULE_typedefName = 24;
CParser.RULE_initializer = 25;
CParser.RULE_initializerList = 26;
CParser.RULE_designation = 27;
CParser.RULE_designatorList = 28;
CParser.RULE_designator = 29;
CParser.RULE_statement = 30;
CParser.RULE_compoundStatement = 31;
CParser.RULE_blockItemList = 32;
CParser.RULE_blockItem = 33;
CParser.RULE_expressionStatement = 34;
CParser.RULE_selectionStatement = 35;
CParser.RULE_iterationStatement = 36;
CParser.RULE_jumpStatement = 37;
CParser.RULE_compilationUnit = 38;
CParser.RULE_translationUnit = 39;
CParser.RULE_externalDeclaration = 40;
CParser.RULE_functionDefinition = 41;
CParser.RULE_declarationList = 42;
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
    "relationalExpression", "logicalAndExpression", "logicalOrExpression",
    "conditionalExpression", "assignmentExpression", "assignmentOperator",
    "constantExpression", "declaration", "initDeclarator", "typeSpecifier",
    "directDeclarator", "parameterList", "parameterDeclaration", "identifierList",
    "typeName", "directAbstractDeclarator", "typedefName", "initializer",
    "initializerList", "designation", "designatorList", "designator", "statement",
    "compoundStatement", "blockItemList", "blockItem", "expressionStatement",
    "selectionStatement", "iterationStatement", "jumpStatement", "compilationUnit",
    "translationUnit", "externalDeclaration", "functionDefinition", "declarationList",
];
CParser._serializedATN = [4, 1, 99, 418, 2, 0, 7, 0, 2,
    1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
    10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17,
    7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7,
    24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31,
    2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2,
    39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 1, 0, 1, 0, 1, 0, 4, 0, 90, 8, 0, 11, 0, 12, 0,
    91, 1, 0, 1, 0, 1, 0, 1, 0, 3, 0, 98, 8, 0, 1, 1, 1, 1, 1, 1, 3, 1, 103, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 3, 1, 110, 8, 1, 1, 2, 1, 2, 1, 2, 5, 2, 115, 8, 2, 10, 2, 12, 2, 118, 9, 2, 1, 3, 1, 3, 1, 3, 1, 3,
    3, 3, 124, 8, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6,
    1, 6, 5, 6, 142, 8, 6, 10, 6, 12, 6, 145, 9, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 5,
    7, 156, 8, 7, 10, 7, 12, 7, 159, 9, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8,
    1, 8, 1, 8, 1, 8, 1, 8, 5, 8, 176, 8, 8, 10, 8, 12, 8, 179, 9, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 5,
    9, 187, 8, 9, 10, 9, 12, 9, 190, 9, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 5, 10, 198, 8, 10,
    10, 10, 12, 10, 201, 9, 10, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 210, 8, 12, 1,
    13, 1, 13, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 3, 16, 223, 8, 16, 1, 17,
    1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 3, 18, 233, 8, 18, 1, 18, 1, 18, 1, 18, 3, 18, 238,
    8, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 3, 18, 249, 8, 18, 1, 18, 5,
    18, 252, 8, 18, 10, 18, 12, 18, 255, 9, 18, 1, 19, 1, 19, 1, 19, 5, 19, 260, 8, 19, 10, 19, 12,
    19, 263, 9, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 3, 20, 270, 8, 20, 3, 20, 272, 8, 20, 1, 21, 1,
    21, 1, 21, 5, 21, 277, 8, 21, 10, 21, 12, 21, 280, 9, 21, 1, 22, 3, 22, 283, 8, 22, 1, 23, 1, 23,
    1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 3, 23, 293, 8, 23, 1, 23, 1, 23, 1, 23, 1, 23, 3, 23, 299,
    8, 23, 1, 23, 5, 23, 302, 8, 23, 10, 23, 12, 23, 305, 9, 23, 1, 24, 1, 24, 1, 25, 1, 25, 1, 25, 1,
    25, 3, 25, 313, 8, 25, 1, 25, 1, 25, 3, 25, 317, 8, 25, 1, 26, 3, 26, 320, 8, 26, 1, 26, 1, 26, 1,
    26, 3, 26, 325, 8, 26, 1, 26, 5, 26, 328, 8, 26, 10, 26, 12, 26, 331, 9, 26, 1, 27, 1, 27, 1, 27,
    1, 28, 4, 28, 337, 8, 28, 11, 28, 12, 28, 338, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 3, 29, 347,
    8, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 3, 30, 354, 8, 30, 1, 31, 1, 31, 3, 31, 358, 8, 31, 1, 31,
    1, 31, 1, 32, 4, 32, 363, 8, 32, 11, 32, 12, 32, 364, 1, 33, 1, 33, 3, 33, 369, 8, 33, 1, 34, 1,
    34, 1, 34, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 381, 8, 35, 1, 36, 1, 36, 1, 36,
    1, 36, 1, 36, 1, 36, 1, 37, 1, 37, 3, 37, 391, 8, 37, 1, 37, 1, 37, 1, 38, 3, 38, 396, 8, 38, 1, 38,
    1, 38, 1, 39, 4, 39, 401, 8, 39, 11, 39, 12, 39, 402, 1, 40, 1, 40, 3, 40, 407, 8, 40, 1, 41, 1,
    41, 1, 41, 1, 41, 1, 42, 4, 42, 414, 8, 42, 11, 42, 12, 42, 415, 1, 42, 0, 7, 12, 14, 16, 18, 20,
    36, 46, 43, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44,
    46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 0, 2, 2, 0, 56,
    56, 66, 66, 3, 0, 4, 4, 9, 9, 18, 18, 431, 0, 97, 1, 0, 0, 0, 2, 99, 1, 0, 0, 0, 4, 111, 1, 0, 0, 0,
    6, 123, 1, 0, 0, 0, 8, 125, 1, 0, 0, 0, 10, 127, 1, 0, 0, 0, 12, 129, 1, 0, 0, 0, 14, 146, 1, 0, 0,
    0, 16, 160, 1, 0, 0, 0, 18, 180, 1, 0, 0, 0, 20, 191, 1, 0, 0, 0, 22, 202, 1, 0, 0, 0, 24, 209, 1,
    0, 0, 0, 26, 211, 1, 0, 0, 0, 28, 213, 1, 0, 0, 0, 30, 215, 1, 0, 0, 0, 32, 219, 1, 0, 0, 0, 34, 224,
    1, 0, 0, 0, 36, 232, 1, 0, 0, 0, 38, 256, 1, 0, 0, 0, 40, 271, 1, 0, 0, 0, 42, 273, 1, 0, 0, 0, 44,
    282, 1, 0, 0, 0, 46, 284, 1, 0, 0, 0, 48, 306, 1, 0, 0, 0, 50, 316, 1, 0, 0, 0, 52, 319, 1, 0, 0, 0,
    54, 332, 1, 0, 0, 0, 56, 336, 1, 0, 0, 0, 58, 346, 1, 0, 0, 0, 60, 353, 1, 0, 0, 0, 62, 355, 1, 0,
    0, 0, 64, 362, 1, 0, 0, 0, 66, 368, 1, 0, 0, 0, 68, 370, 1, 0, 0, 0, 70, 373, 1, 0, 0, 0, 72, 382,
    1, 0, 0, 0, 74, 388, 1, 0, 0, 0, 76, 395, 1, 0, 0, 0, 78, 400, 1, 0, 0, 0, 80, 406, 1, 0, 0, 0, 82,
    408, 1, 0, 0, 0, 84, 413, 1, 0, 0, 0, 86, 98, 5, 86, 0, 0, 87, 98, 5, 87, 0, 0, 88, 90, 5, 89, 0, 0,
    89, 88, 1, 0, 0, 0, 90, 91, 1, 0, 0, 0, 91, 89, 1, 0, 0, 0, 91, 92, 1, 0, 0, 0, 92, 98, 1, 0, 0, 0, 93,
    94, 5, 44, 0, 0, 94, 95, 3, 24, 12, 0, 95, 96, 5, 45, 0, 0, 96, 98, 1, 0, 0, 0, 97, 86, 1, 0, 0, 0,
    97, 87, 1, 0, 0, 0, 97, 89, 1, 0, 0, 0, 97, 93, 1, 0, 0, 0, 98, 1, 1, 0, 0, 0, 99, 109, 3, 0, 0, 0, 100,
    102, 5, 44, 0, 0, 101, 103, 3, 4, 2, 0, 102, 101, 1, 0, 0, 0, 102, 103, 1, 0, 0, 0, 103, 104, 1,
    0, 0, 0, 104, 110, 5, 45, 0, 0, 105, 106, 5, 46, 0, 0, 106, 107, 3, 24, 12, 0, 107, 108, 5, 47,
    0, 0, 108, 110, 1, 0, 0, 0, 109, 100, 1, 0, 0, 0, 109, 105, 1, 0, 0, 0, 109, 110, 1, 0, 0, 0, 110,
    3, 1, 0, 0, 0, 111, 116, 3, 24, 12, 0, 112, 113, 5, 71, 0, 0, 113, 115, 3, 24, 12, 0, 114, 112,
    1, 0, 0, 0, 115, 118, 1, 0, 0, 0, 116, 114, 1, 0, 0, 0, 116, 117, 1, 0, 0, 0, 117, 5, 1, 0, 0, 0, 118,
    116, 1, 0, 0, 0, 119, 124, 3, 2, 1, 0, 120, 121, 3, 8, 4, 0, 121, 122, 3, 10, 5, 0, 122, 124, 1,
    0, 0, 0, 123, 119, 1, 0, 0, 0, 123, 120, 1, 0, 0, 0, 124, 7, 1, 0, 0, 0, 125, 126, 7, 0, 0, 0, 126,
    9, 1, 0, 0, 0, 127, 128, 3, 6, 3, 0, 128, 11, 1, 0, 0, 0, 129, 130, 6, 6, -1, 0, 130, 131, 3, 10,
    5, 0, 131, 143, 1, 0, 0, 0, 132, 133, 10, 3, 0, 0, 133, 134, 5, 58, 0, 0, 134, 142, 3, 10, 5, 0,
    135, 136, 10, 2, 0, 0, 136, 137, 5, 59, 0, 0, 137, 142, 3, 10, 5, 0, 138, 139, 10, 1, 0, 0, 139,
    140, 5, 60, 0, 0, 140, 142, 3, 10, 5, 0, 141, 132, 1, 0, 0, 0, 141, 135, 1, 0, 0, 0, 141, 138, 1,
    0, 0, 0, 142, 145, 1, 0, 0, 0, 143, 141, 1, 0, 0, 0, 143, 144, 1, 0, 0, 0, 144, 13, 1, 0, 0, 0, 145,
    143, 1, 0, 0, 0, 146, 147, 6, 7, -1, 0, 147, 148, 3, 12, 6, 0, 148, 157, 1, 0, 0, 0, 149, 150, 10,
    2, 0, 0, 150, 151, 5, 54, 0, 0, 151, 156, 3, 12, 6, 0, 152, 153, 10, 1, 0, 0, 153, 154, 5, 56, 0,
    0, 154, 156, 3, 12, 6, 0, 155, 149, 1, 0, 0, 0, 155, 152, 1, 0, 0, 0, 156, 159, 1, 0, 0, 0, 157,
    155, 1, 0, 0, 0, 157, 158, 1, 0, 0, 0, 158, 15, 1, 0, 0, 0, 159, 157, 1, 0, 0, 0, 160, 161, 6, 8,
    -1, 0, 161, 162, 3, 14, 7, 0, 162, 177, 1, 0, 0, 0, 163, 164, 10, 4, 0, 0, 164, 165, 5, 50, 0, 0,
    165, 176, 3, 14, 7, 0, 166, 167, 10, 3, 0, 0, 167, 168, 5, 52, 0, 0, 168, 176, 3, 14, 7, 0, 169,
    170, 10, 2, 0, 0, 170, 171, 5, 51, 0, 0, 171, 176, 3, 14, 7, 0, 172, 173, 10, 1, 0, 0, 173, 174,
    5, 53, 0, 0, 174, 176, 3, 14, 7, 0, 175, 163, 1, 0, 0, 0, 175, 166, 1, 0, 0, 0, 175, 169, 1, 0, 0,
    0, 175, 172, 1, 0, 0, 0, 176, 179, 1, 0, 0, 0, 177, 175, 1, 0, 0, 0, 177, 178, 1, 0, 0, 0, 178, 17,
    1, 0, 0, 0, 179, 177, 1, 0, 0, 0, 180, 181, 6, 9, -1, 0, 181, 182, 3, 16, 8, 0, 182, 188, 1, 0, 0,
    0, 183, 184, 10, 1, 0, 0, 184, 185, 5, 63, 0, 0, 185, 187, 3, 16, 8, 0, 186, 183, 1, 0, 0, 0, 187,
    190, 1, 0, 0, 0, 188, 186, 1, 0, 0, 0, 188, 189, 1, 0, 0, 0, 189, 19, 1, 0, 0, 0, 190, 188, 1, 0,
    0, 0, 191, 192, 6, 10, -1, 0, 192, 193, 3, 18, 9, 0, 193, 199, 1, 0, 0, 0, 194, 195, 10, 1, 0, 0,
    195, 196, 5, 64, 0, 0, 196, 198, 3, 18, 9, 0, 197, 194, 1, 0, 0, 0, 198, 201, 1, 0, 0, 0, 199, 197,
    1, 0, 0, 0, 199, 200, 1, 0, 0, 0, 200, 21, 1, 0, 0, 0, 201, 199, 1, 0, 0, 0, 202, 203, 3, 20, 10,
    0, 203, 23, 1, 0, 0, 0, 204, 210, 3, 22, 11, 0, 205, 206, 3, 6, 3, 0, 206, 207, 3, 26, 13, 0, 207,
    208, 3, 22, 11, 0, 208, 210, 1, 0, 0, 0, 209, 204, 1, 0, 0, 0, 209, 205, 1, 0, 0, 0, 210, 25, 1,
    0, 0, 0, 211, 212, 5, 72, 0, 0, 212, 27, 1, 0, 0, 0, 213, 214, 3, 22, 11, 0, 214, 29, 1, 0, 0, 0,
    215, 216, 3, 34, 17, 0, 216, 217, 3, 32, 16, 0, 217, 218, 5, 70, 0, 0, 218, 31, 1, 0, 0, 0, 219,
    222, 3, 36, 18, 0, 220, 221, 5, 72, 0, 0, 221, 223, 3, 50, 25, 0, 222, 220, 1, 0, 0, 0, 222, 223,
    1, 0, 0, 0, 223, 33, 1, 0, 0, 0, 224, 225, 7, 1, 0, 0, 225, 35, 1, 0, 0, 0, 226, 227, 6, 18, -1, 0,
    227, 233, 5, 86, 0, 0, 228, 229, 5, 44, 0, 0, 229, 230, 3, 36, 18, 0, 230, 231, 5, 45, 0, 0, 231,
    233, 1, 0, 0, 0, 232, 226, 1, 0, 0, 0, 232, 228, 1, 0, 0, 0, 233, 253, 1, 0, 0, 0, 234, 235, 10,
    3, 0, 0, 235, 237, 5, 46, 0, 0, 236, 238, 3, 24, 12, 0, 237, 236, 1, 0, 0, 0, 237, 238, 1, 0, 0,
    0, 238, 239, 1, 0, 0, 0, 239, 252, 5, 47, 0, 0, 240, 241, 10, 2, 0, 0, 241, 242, 5, 44, 0, 0, 242,
    243, 3, 38, 19, 0, 243, 244, 5, 45, 0, 0, 244, 252, 1, 0, 0, 0, 245, 246, 10, 1, 0, 0, 246, 248,
    5, 44, 0, 0, 247, 249, 3, 42, 21, 0, 248, 247, 1, 0, 0, 0, 248, 249, 1, 0, 0, 0, 249, 250, 1, 0,
    0, 0, 250, 252, 5, 45, 0, 0, 251, 234, 1, 0, 0, 0, 251, 240, 1, 0, 0, 0, 251, 245, 1, 0, 0, 0, 252,
    255, 1, 0, 0, 0, 253, 251, 1, 0, 0, 0, 253, 254, 1, 0, 0, 0, 254, 37, 1, 0, 0, 0, 255, 253, 1, 0,
    0, 0, 256, 261, 3, 40, 20, 0, 257, 258, 5, 71, 0, 0, 258, 260, 3, 40, 20, 0, 259, 257, 1, 0, 0,
    0, 260, 263, 1, 0, 0, 0, 261, 259, 1, 0, 0, 0, 261, 262, 1, 0, 0, 0, 262, 39, 1, 0, 0, 0, 263, 261,
    1, 0, 0, 0, 264, 265, 3, 34, 17, 0, 265, 266, 3, 36, 18, 0, 266, 272, 1, 0, 0, 0, 267, 269, 3, 34,
    17, 0, 268, 270, 3, 46, 23, 0, 269, 268, 1, 0, 0, 0, 269, 270, 1, 0, 0, 0, 270, 272, 1, 0, 0, 0,
    271, 264, 1, 0, 0, 0, 271, 267, 1, 0, 0, 0, 272, 41, 1, 0, 0, 0, 273, 278, 5, 86, 0, 0, 274, 275,
    5, 71, 0, 0, 275, 277, 5, 86, 0, 0, 276, 274, 1, 0, 0, 0, 277, 280, 1, 0, 0, 0, 278, 276, 1, 0, 0,
    0, 278, 279, 1, 0, 0, 0, 279, 43, 1, 0, 0, 0, 280, 278, 1, 0, 0, 0, 281, 283, 3, 46, 23, 0, 282,
    281, 1, 0, 0, 0, 282, 283, 1, 0, 0, 0, 283, 45, 1, 0, 0, 0, 284, 285, 6, 23, -1, 0, 285, 286, 5,
    44, 0, 0, 286, 287, 3, 46, 23, 0, 287, 288, 5, 45, 0, 0, 288, 303, 1, 0, 0, 0, 289, 290, 10, 2,
    0, 0, 290, 292, 5, 46, 0, 0, 291, 293, 3, 24, 12, 0, 292, 291, 1, 0, 0, 0, 292, 293, 1, 0, 0, 0,
    293, 294, 1, 0, 0, 0, 294, 302, 5, 47, 0, 0, 295, 296, 10, 1, 0, 0, 296, 298, 5, 44, 0, 0, 297,
    299, 3, 38, 19, 0, 298, 297, 1, 0, 0, 0, 298, 299, 1, 0, 0, 0, 299, 300, 1, 0, 0, 0, 300, 302, 5,
    45, 0, 0, 301, 289, 1, 0, 0, 0, 301, 295, 1, 0, 0, 0, 302, 305, 1, 0, 0, 0, 303, 301, 1, 0, 0, 0,
    303, 304, 1, 0, 0, 0, 304, 47, 1, 0, 0, 0, 305, 303, 1, 0, 0, 0, 306, 307, 5, 86, 0, 0, 307, 49,
    1, 0, 0, 0, 308, 317, 3, 24, 12, 0, 309, 310, 5, 48, 0, 0, 310, 312, 3, 52, 26, 0, 311, 313, 5,
    71, 0, 0, 312, 311, 1, 0, 0, 0, 312, 313, 1, 0, 0, 0, 313, 314, 1, 0, 0, 0, 314, 315, 5, 49, 0, 0,
    315, 317, 1, 0, 0, 0, 316, 308, 1, 0, 0, 0, 316, 309, 1, 0, 0, 0, 317, 51, 1, 0, 0, 0, 318, 320,
    3, 54, 27, 0, 319, 318, 1, 0, 0, 0, 319, 320, 1, 0, 0, 0, 320, 321, 1, 0, 0, 0, 321, 329, 3, 50,
    25, 0, 322, 324, 5, 71, 0, 0, 323, 325, 3, 54, 27, 0, 324, 323, 1, 0, 0, 0, 324, 325, 1, 0, 0, 0,
    325, 326, 1, 0, 0, 0, 326, 328, 3, 50, 25, 0, 327, 322, 1, 0, 0, 0, 328, 331, 1, 0, 0, 0, 329, 327,
    1, 0, 0, 0, 329, 330, 1, 0, 0, 0, 330, 53, 1, 0, 0, 0, 331, 329, 1, 0, 0, 0, 332, 333, 3, 56, 28,
    0, 333, 334, 5, 72, 0, 0, 334, 55, 1, 0, 0, 0, 335, 337, 3, 58, 29, 0, 336, 335, 1, 0, 0, 0, 337,
    338, 1, 0, 0, 0, 338, 336, 1, 0, 0, 0, 338, 339, 1, 0, 0, 0, 339, 57, 1, 0, 0, 0, 340, 341, 5, 46,
    0, 0, 341, 342, 3, 28, 14, 0, 342, 343, 5, 47, 0, 0, 343, 347, 1, 0, 0, 0, 344, 345, 5, 84, 0, 0,
    345, 347, 5, 86, 0, 0, 346, 340, 1, 0, 0, 0, 346, 344, 1, 0, 0, 0, 347, 59, 1, 0, 0, 0, 348, 354,
    3, 62, 31, 0, 349, 354, 3, 68, 34, 0, 350, 354, 3, 70, 35, 0, 351, 354, 3, 72, 36, 0, 352, 354,
    3, 74, 37, 0, 353, 348, 1, 0, 0, 0, 353, 349, 1, 0, 0, 0, 353, 350, 1, 0, 0, 0, 353, 351, 1, 0, 0,
    0, 353, 352, 1, 0, 0, 0, 354, 61, 1, 0, 0, 0, 355, 357, 5, 48, 0, 0, 356, 358, 3, 64, 32, 0, 357,
    356, 1, 0, 0, 0, 357, 358, 1, 0, 0, 0, 358, 359, 1, 0, 0, 0, 359, 360, 5, 49, 0, 0, 360, 63, 1, 0,
    0, 0, 361, 363, 3, 66, 33, 0, 362, 361, 1, 0, 0, 0, 363, 364, 1, 0, 0, 0, 364, 362, 1, 0, 0, 0, 364,
    365, 1, 0, 0, 0, 365, 65, 1, 0, 0, 0, 366, 369, 3, 60, 30, 0, 367, 369, 3, 30, 15, 0, 368, 366,
    1, 0, 0, 0, 368, 367, 1, 0, 0, 0, 369, 67, 1, 0, 0, 0, 370, 371, 3, 24, 12, 0, 371, 372, 5, 70, 0,
    0, 372, 69, 1, 0, 0, 0, 373, 374, 5, 16, 0, 0, 374, 375, 5, 44, 0, 0, 375, 376, 3, 24, 12, 0, 376,
    377, 5, 45, 0, 0, 377, 380, 3, 60, 30, 0, 378, 379, 5, 10, 0, 0, 379, 381, 3, 60, 30, 0, 380, 378,
    1, 0, 0, 0, 380, 381, 1, 0, 0, 0, 381, 71, 1, 0, 0, 0, 382, 383, 5, 33, 0, 0, 383, 384, 5, 44, 0,
    0, 384, 385, 3, 24, 12, 0, 385, 386, 5, 45, 0, 0, 386, 387, 3, 60, 30, 0, 387, 73, 1, 0, 0, 0, 388,
    390, 5, 22, 0, 0, 389, 391, 3, 24, 12, 0, 390, 389, 1, 0, 0, 0, 390, 391, 1, 0, 0, 0, 391, 392,
    1, 0, 0, 0, 392, 393, 5, 70, 0, 0, 393, 75, 1, 0, 0, 0, 394, 396, 3, 78, 39, 0, 395, 394, 1, 0, 0,
    0, 395, 396, 1, 0, 0, 0, 396, 397, 1, 0, 0, 0, 397, 398, 5, 0, 0, 1, 398, 77, 1, 0, 0, 0, 399, 401,
    3, 80, 40, 0, 400, 399, 1, 0, 0, 0, 401, 402, 1, 0, 0, 0, 402, 400, 1, 0, 0, 0, 402, 403, 1, 0, 0,
    0, 403, 79, 1, 0, 0, 0, 404, 407, 3, 82, 41, 0, 405, 407, 3, 30, 15, 0, 406, 404, 1, 0, 0, 0, 406,
    405, 1, 0, 0, 0, 407, 81, 1, 0, 0, 0, 408, 409, 3, 34, 17, 0, 409, 410, 3, 36, 18, 0, 410, 411,
    3, 62, 31, 0, 411, 83, 1, 0, 0, 0, 412, 414, 3, 30, 15, 0, 413, 412, 1, 0, 0, 0, 414, 415, 1, 0,
    0, 0, 415, 413, 1, 0, 0, 0, 415, 416, 1, 0, 0, 0, 416, 85, 1, 0, 0, 0, 47, 91, 97, 102, 109, 116,
    123, 141, 143, 155, 157, 175, 177, 188, 199, 209, 222, 232, 237, 248, 251, 253, 261, 269,
    271, 278, 282, 292, 298, 301, 303, 312, 316, 319, 324, 329, 338, 346, 353, 357, 364, 368,
    380, 390, 395, 402, 406, 415];
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
    assignmentExpression() {
        return this.getTypedRuleContext(AssignmentExpressionContext, 0);
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
    LeftParen() {
        return this.getToken(CParser.LeftParen, 0);
    }
    RightParen() {
        return this.getToken(CParser.RightParen, 0);
    }
    LeftBracket() {
        return this.getToken(CParser.LeftBracket, 0);
    }
    assignmentExpression() {
        return this.getTypedRuleContext(AssignmentExpressionContext, 0);
    }
    RightBracket() {
        return this.getToken(CParser.RightBracket, 0);
    }
    argumentExpressionList() {
        return this.getTypedRuleContext(ArgumentExpressionListContext, 0);
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
    Minus() {
        return this.getToken(CParser.Minus, 0);
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
export class LogicalAndExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    relationalExpression() {
        return this.getTypedRuleContext(RelationalExpressionContext, 0);
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
    initDeclarator() {
        return this.getTypedRuleContext(InitDeclaratorContext, 0);
    }
    Semi() {
        return this.getToken(CParser.Semi, 0);
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
    parameterList() {
        return this.getTypedRuleContext(ParameterListContext, 0);
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
    parameterList() {
        return this.getTypedRuleContext(ParameterListContext, 0);
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
    assignmentExpression() {
        return this.getTypedRuleContext(AssignmentExpressionContext, 0);
    }
    Semi() {
        return this.getToken(CParser.Semi, 0);
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
    assignmentExpression() {
        return this.getTypedRuleContext(AssignmentExpressionContext, 0);
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
    assignmentExpression() {
        return this.getTypedRuleContext(AssignmentExpressionContext, 0);
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
    assignmentExpression() {
        return this.getTypedRuleContext(AssignmentExpressionContext, 0);
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
    typeSpecifier() {
        return this.getTypedRuleContext(TypeSpecifierContext, 0);
    }
    directDeclarator() {
        return this.getTypedRuleContext(DirectDeclaratorContext, 0);
    }
    compoundStatement() {
        return this.getTypedRuleContext(CompoundStatementContext, 0);
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