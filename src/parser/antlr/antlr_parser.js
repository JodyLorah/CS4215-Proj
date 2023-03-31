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
import CParser from "./antlr_gen/CParser.js";
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
    if (isType(x.Plus())) {
        return "+";
    }
    else if (isType(x.Minus())) {
        return "-";
    }
    else {
        Error("type not allowed");
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
        return ctx.translationUnit().accept(this);
    }
    // @ts-ignore
    visitTranslationUnit(ctx) {
        let externalDecLst = ctx.externalDeclaration_list();
        // if (externalDecLst.length == 1) {
        // }
        for (var i in externalDecLst) {
            if (isType(externalDecLst[i].functionDefinition())) {
                console.log("is func def");
                // return externalDecLst[i].functionDefinition().accept(this);
            }
            else if (isType(externalDecLst[i].declaration())) {
                // console.log("is declaration")
                return externalDecLst[i].declaration().accept(this);
            }
            else if (isType(externalDecLst[i].Semi())) {
                console.log("is ;");
            }
        }
    }
    // @ts-ignore
    visitDeclaration(ctx) {
        const type = ctx.typeSpecifier();
        const initDec = ctx.initDeclarator();
        let name;
        if (isType(initDec.directDeclarator().Identifier())) {
            name = initDec.directDeclarator().Identifier().getText();
        }
        let obj = ["name", [name, [stringifyType(type), null]]];
        // console.log(obj)
        if (isType(initDec.Assign())) {
            // WHEN EXPANDING: change the final declaration of rtn to the proper return calls
            let rhs = initDec.initializer().accept(this);
            let rtn = ["variable_declaration", [obj, ["literal", [rhs, null]]]];
            // console.log(rtn)
            return rtn;
        }
        return obj;
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
        printNestedArray(rtn);
        console.log();
        console.log();
        return rtn;
    }
    // @ts-ignore
    visitAdditiveExpression(ctx) {
        let multExpr = ctx.multiplicativeExpression().accept(this);
        // printNestedArray(multExpr)
        // console.log("current mult expr")
        // printNestedArray(multExpr)
        // console.log()
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
        return ctx.castExpression(0).accept(this);
    }
    // @ts-ignore
    visitCastExpression(ctx) {
        return ctx.unaryExpression().accept(this);
    }
    // @ts-ignore
    visitUnaryExpression(ctx) {
        return ctx.postfixExpression().accept(this);
    }
    // @ts-ignore
    visitPostfixExpression(ctx) {
        return ctx.primaryExpression().accept(this);
    }
    // @ts-ignore
    visitPrimaryExpression(ctx) {
        if (isType(ctx.Identifier())) {
            // TODO
        }
        else if (isType(ctx.Constant())) {
            let rtn = ["literal", [ctx.Constant().getText(), null]];
            // printNestedArray(rtn)
            // console.log()
            // console.log(rtn)
            return rtn;
        }
        else if (isType(ctx.StringLiteral())) {
            // TODO
        }
        else {
            // TODO
        }
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

int a = 2 + 3 - 4 - 5;

`);
const instructions = tree.accept(new Visitor());
//# sourceMappingURL=antlr_parser.js.map