/**
 * Antlr Parser
 *
 * Created for CS4215 term project
 *
 * By Ciaran Gruber and Jody Tang
 */
import * as fs from 'fs';
import { CharStream, CommonTokenStream } from 'antlr4';
import CVisitor from './antlr_gen/CVisitor.js';
import CLexer from "./antlr_gen/CLexer.js"; // Had to add .js - This is a hack
import CParser, { AdditiveExpressionContext, MultiplicativeExpressionContext } from "./antlr_gen/CParser.js";
function isType(x) {
    return x !== null;
}
function stringifyType(x) {
    if (isType(x.Char())) {
        return "char";
    }
    else if (isType(x.Int())) {
        return "int";
    }
    else if (isType(x.Double())) {
        return "double";
    }
    else {
        Error("type not allowed");
    }
}
function getSymbol(x) {
    if (x instanceof AdditiveExpressionContext) {
        if (isType(x.Plus())) {
            return "+";
        }
        else if (isType(x.Minus())) {
            return "-";
        }
        else {
            throw new Error("type not allowed");
        }
    }
    else if (x instanceof MultiplicativeExpressionContext) {
        if (isType(x.Star())) {
            return "*";
        }
        else if (isType(x.Div())) {
            return "/";
        }
        else if (isType(x.Mod())) {
            return "%";
        }
        else {
            throw new Error("type not allowed");
        }
    }
    else {
        throw new Error("type not allowed");
    }
}
function printNestedArray(arr) {
    process.stdout.write("[");
    arr.forEach((el, index) => {
        if (Array.isArray(el)) {
            printNestedArray(el);
        }
        else {
            process.stdout.write(JSON.stringify(el));
        }
        if (index !== arr.length - 1) {
            process.stdout.write(", ");
        }
    });
    process.stdout.write("]");
}
class Visitor extends CVisitor {
    constructor() {
        super();
    }
    // @ts-ignore
    visitCompilationUnit(ctx) {
        let rtn = ctx.translationUnit().accept(this);
        return rtn;
    }
    // @ts-ignore
    visitTranslationUnit(ctx) {
        let externalDecLst = ctx.externalDeclaration_list();
        if (externalDecLst.length == 1) {
            return externalDecLst[0].accept(this);
        }
        let rtn = null;
        externalDecLst = externalDecLst.reverse();
        for (var i in externalDecLst) {
            rtn = [externalDecLst[i].accept(this), rtn];
        }
        return ["sequence", [rtn, null]];
    }
    // @ts-ignore
    visitExternalDeclaration(ctx) {
        if (isType(ctx.functionDefinition())) {
            return ctx.functionDefinition().accept(this);
        }
        else if (isType(ctx.declaration())) {
            return ctx.declaration().accept(this);
        }
    }
    // @ts-ignore
    visitFunctionDefinition(ctx) {
        const type = ctx.typeSpecifier();
        const name = ["name", [ctx.directDeclarator().directDeclarator().getText(), [stringifyType(type), null]]];
        let funcParams = null;
        let emptyBody = [["sequence", [null, null]], null];
        if (isType(ctx.directDeclarator().parameterList())) {
            funcParams = ctx.directDeclarator().parameterList().accept(this);
        }
        if (isType(ctx.compoundStatement().blockItemList())) {
            let funcBody = [this.visitBlockItemList(ctx.compoundStatement().blockItemList()), null];
            if (ctx.compoundStatement().blockItemList().blockItem_list().length > 1) {
                funcBody = [["block", funcBody], null];
            }
            return ["function_declaration", [name, [funcParams, funcBody]]];
        }
        return ["function_declaration", [name, [funcParams, emptyBody]]];
    }
    // @ts-ignore
    visitBlockItemList(ctx) {
        let lst = ctx.blockItem_list();
        if (lst.length == 1) {
            if (isType(lst[0].statement())) {
                return this.visitStatement(lst[0].statement());
            }
            return this.visitDeclaration(lst[0].declaration());
        }
        let rtn = null;
        lst = lst.reverse();
        for (var i in lst) {
            rtn = [this.visitBlockItem(lst[i]), rtn];
        }
        return ["sequence", [rtn, null]];
    }
    // @ts-ignore
    visitBlockItem(ctx) {
        if (isType(ctx.declaration())) {
            return ctx.declaration().accept(this);
        }
        return ctx.statement().accept(this);
    }
    // @ts-ignore
    visitStatement(ctx) {
        if (isType(ctx.compoundStatement())) {
            return ctx.compoundStatement().accept(this);
        }
        else if (isType(ctx.jumpStatement())) {
            return ctx.jumpStatement().accept(this);
        }
        else if (isType(ctx.expressionStatement())) {
            return ctx.expressionStatement().accept(this);
        }
        else {
            // TODO: iteration, selection statement
        }
    }
    // @ts-ignore
    visitExpressionStatement(ctx) {
        return this.visitAssignmentExpression(ctx.assignmentExpression());
    }
    // @ts-ignore
    visitJumpStatement(ctx) {
        let rtn = ["return_statement", [ctx.assignmentExpression().accept(this), null]];
        return rtn;
    }
    // @ts-ignore
    visitDeclaration(ctx) {
        const type = ctx.typeSpecifier();
        const initDec = ctx.initDeclarator();
        let name = this.visitDirectDeclarator(initDec.directDeclarator());
        let dd = ["name", [name, [stringifyType(type), null]]];
        let rtn = ["variable_declaration", [dd, [null, null]]];
        if (isType(initDec.Assign())) {
            let rhs = initDec.initializer().accept(this);
            rtn = ["variable_declaration", [dd, [rhs, null]]];
        }
        return rtn;
    }
    // @ts-ignore
    visitDirectDeclarator(ctx) {
        if (isType(ctx.Identifier())) {
            return ctx.Identifier().getText();
        }
        else {
            if (isType(ctx.parameterList())) {
                return ctx.parameterList().accept(this);
            }
            else if (isType(ctx.identifierList())) {
                // TODO
            }
            else {
                return this.visitDirectDeclarator(ctx.directDeclarator());
            }
        }
    }
    // @ts-ignore
    visitParameterList(ctx) {
        let lst = ctx.parameterDeclaration_list();
        lst = lst.reverse();
        let rtn = null;
        for (var i in lst) {
            rtn = [this.visitParameterDeclaration(lst[i]), rtn];
        }
        return rtn;
    }
    // @ts-ignore
    visitParameterDeclaration(ctx) {
        const type = ctx.typeSpecifier();
        const name = this.visitDirectDeclarator(ctx.directDeclarator());
        return ["name", [name, [stringifyType(type), null]]];
    }
    // @ts-ignore
    visitInitializer(ctx) {
        return ctx.assignmentExpression().accept(this);
    }
    // @ts-ignore
    visitAssignmentExpression(ctx) {
        let ce = ctx.conditionalExpression().accept(this);
        if (!isType(ctx.assignmentOperator())) {
            return ce;
        }
        let ue = ctx.unaryExpression().accept(this);
        return ["assignment", [ue, [ce, null]]];
    }
    // @ts-ignore
    visitConditionalExpression(ctx) {
        return ctx.logicalOrExpression(0).accept(this);
    }
    // @ts-ignore
    visitLogicalOrExpression(ctx) {
        return ctx.logicalAndExpression(0).accept(this);
    }
    // @ts-ignore
    visitLogicalAndExpression(ctx) {
        return ctx.equalityExpression(0).accept(this);
    }
    // @ts-ignore
    visitEqualityExpression(ctx) {
        return ctx.relationalExpression(0).accept(this);
    }
    // @ts-ignore
    visitRelationalExpression(ctx) {
        let rtn = ctx.additiveExpression(0).accept(this);
        return rtn;
    }
    // @ts-ignore
    visitAdditiveExpression(ctx) {
        let multExpr = ctx.multiplicativeExpression().accept(this);
        if (isType(ctx.additiveExpression())) {
            let addExpr = ctx.additiveExpression();
            let symbol = getSymbol(ctx);
            let rtn = ["binary_operator_combination",
                [symbol,
                    [this.visitAdditiveExpression(addExpr),
                        [multExpr, null]
                    ]
                ]
            ];
            return rtn;
        }
        return multExpr;
    }
    // @ts-ignore
    visitMultiplicativeExpression(ctx) {
        let castExpr = ctx.castExpression().accept(this);
        if (isType(ctx.multiplicativeExpression())) {
            let multExpr = ctx.multiplicativeExpression();
            let symbol = getSymbol(ctx);
            let rtn = ["binary_operator_combination",
                [symbol,
                    [this.visitMultiplicativeExpression(multExpr),
                        [castExpr, null]
                    ]
                ]
            ];
            return rtn;
        }
        return castExpr;
    }
    // @ts-ignore
    visitCastExpression(ctx) {
        return ctx.unaryExpression().accept(this);
    }
    // @ts-ignore
    visitUnaryExpression(ctx) {
        if (isType(ctx.postfixExpression())) {
            return ctx.postfixExpression().accept(this);
        }
        if (isType(ctx.unaryOperator().Not())) {
            return ["unary_operator_combination",
                ["!",
                    [ctx.castExpression().accept(this), null]
                ]
            ];
        }
        return ["unary_operator_combination",
            ["-unary",
                [ctx.castExpression().accept(this), null]
            ]
        ];
    }
    // @ts-ignore
    visitPostfixExpression(ctx) {
        if (isType(ctx.primaryExpression())) {
            return ctx.primaryExpression().accept(this);
        }
    }
    // @ts-ignore
    visitPrimaryExpression(ctx) {
        if (isType(ctx.Identifier())) {
            const name = ctx.Identifier().getText();
            return ["name", [name, [null, null]]];
        }
        else if (isType(ctx.Constant())) {
            let rtn = ["literal", [ctx.Constant().getText(), null]];
            return rtn;
            // } else if (isType(ctx.StringLiteral())) {
            //     // TODO
        }
        else if (isType(ctx.expression())) {
            return this.visitExpression(ctx.expression());
        }
    }
    // @ts-ignore
    visitExpression(ctx) {
        return this.visitAssignmentExpression(ctx.assignmentExpression());
    }
}
function parseInput(input) {
    const chars = new CharStream(input); // replace this with a FileStream as required
    let lexer = new CLexer(chars);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new CParser(tokenStream);
    // Parse the input, where `compilationUnit` is whatever entry point you defined
    return parser.compilationUnit();
}
function Parse(input) {
    const tree = parseInput(input);
    const instructions = tree.accept(new Visitor());
    return JSON.stringify(instructions, null, 0);
}
const code = fs.readFileSync('./code.c', 'utf8');
const parsed = Parse(code);
// write JSON string to a file
fs.writeFile('antlr_tokens.json', parsed, err => {
    if (err) {
        throw err;
    }
});
//# sourceMappingURL=antlr_parser.js.map