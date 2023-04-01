/**
 * Antlr Parser
 *
 * Created for CS4215 term project
 *
 * By Ciaran Gruber and Jody Tang
 */
import { CharStream, CommonTokenStream } from 'antlr4';
import CVisitor from './antlr_gen/CVisitor.js';
import CLexer from "./antlr_gen/CLexer.js"; // Had to add .js - This is a hack
import CParser, { AdditiveExpressionContext, MultiplicativeExpressionContext } from "./antlr_gen/CParser.js";
// import CompilationUnitVisitor from "../compiler/CompilationUnitVisitor";
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
    // visitCompilationUnit(ctx: CompilationUnitContext) {
    //     return vector_to_list([
    //         "compilation_unit",
    //         ctx.translationUnit().accept(this)
    // ]);
    // }
    // visitTranslationUnit(ctx: TranslationUnitContext) {
    //     list = []
    //     ctx.externalDeclaration_list().forEach((x) => list.append(x));
    //     return vector_to_list([
    //         "translation_unit",
    //         list.expand();
    //     ]);
    // }
    // @ts-ignore
    visitCompilationUnit(ctx) {
        let rtn = ctx.translationUnit().accept(this);
        printNestedArray(rtn);
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
        let funcBody = ["sequence", [null, null]];
        if (isType(ctx.directDeclarator().parameterList())) {
            funcParams = ctx.directDeclarator().parameterList().accept(this);
        }
        if (isType(ctx.compoundStatement().blockItemList())) {
            funcBody = ["block", [this.visitBlockItemList(ctx.compoundStatement().blockItemList()), null]];
        }
        return ["function_declaration", [name, [funcParams, [funcBody, null]]]];
    }
    // @ts-ignore
    visitBlockItemList(ctx) {
        let lst = ctx.blockItem_list();
        if (lst.length == 1) {
            return lst[0].accept(this);
        }
        let rtn = null;
        lst = lst.reverse();
        for (var i in lst) {
            rtn = [lst[i].accept(this), rtn];
        }
        return ["sequence", [rtn, null]];
    }
    // @ts-ignore
    visitBlockItem(ctx) {
        if (isType(ctx.declaration())) {
            return ctx.declaration().accept(this);
        }
        else {
            // TODO: Statement type
        }
    }
    // @ts-ignore
    visitDeclaration(ctx) {
        const type = ctx.typeSpecifier();
        const initDec = ctx.initDeclarator();
        let name = this.visitDirectDeclarator(initDec.directDeclarator());
        let dd = ["name", [name, [stringifyType(type), null]]];
        if (isType(initDec.Assign())) {
            let rhs = initDec.initializer().accept(this);
            let rtn = ["variable_declaration", [dd, [rhs, null]]];
            return rtn;
        }
        return dd;
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
        return ctx.conditionalExpression().accept(this);
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
            const type = ctx.typeSpecifier();
            const name = ctx.Identifier().getText();
            return ["name", [name, [stringifyType(type), null]]];
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
export function parseInput(input) {
    const chars = new CharStream(input); // replace this with a FileStream as required
    let lexer = new CLexer(chars);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new CParser(tokenStream);
    // Parse the input, where `compilationUnit` is whatever entry point you defined
    return parser.compilationUnit();
}
const tree = parseInput(`

int f(int b, int c){int d = 2;}

int func(int x, int y) {
    int e = 1;
    int h = 2;
}
`);
const instructions = tree.accept(new Visitor());
// int a = -3 * 4 - 5 + 6 / 7 - 8;
// int b = !34;
// int a = 1;
// int f(int b, int c){int d = 2;}
// int func(int x, int y) {
//     int e = 1;
//     int h = 2;
// }
// int g = 2;
//# sourceMappingURL=antlr_parser.js.map