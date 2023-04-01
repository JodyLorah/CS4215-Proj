/**
 * Antlr Parser
 *
 * Created for CS4215 term project
 *
 * By Ciaran Gruber and Jody Tang
 */

import {CharStream, CommonTokenStream} from 'antlr4';
import CVisitor from './antlr_gen/CVisitor.js';
import CLexer from "./antlr_gen/CLexer.js"; // Had to add .js - This is a hack
import CParser, {AdditiveExpressionContext, AssignmentExpressionContext, CompilationUnitContext, DeclarationContext, DirectDeclaratorContext, FunctionDefinitionContext, InitializerContext, MultiplicativeExpressionContext, ParameterDeclarationContext, ParameterListContext, TranslationUnitContext, TypeSpecifierContext} from "./antlr_gen/CParser.js";
// import CompilationUnitVisitor from "../compiler/CompilationUnitVisitor";

function isType(x: any): boolean {
    return x !== null;
}

function stringifyType(x: TypeSpecifierContext): string {
    if (isType(x.Char())) {
        return "char";
    } else if (isType(x.Int())) {
        return "int";
    } else if (isType(x.Double())) {
        return "double";
    } else {
        Error("type not allowed")
    }
}

function getSymbol(x: AdditiveExpressionContext): string;
function getSymbol(x: MultiplicativeExpressionContext): string;
function getSymbol(x: AdditiveExpressionContext | MultiplicativeExpressionContext): string {
    if (x instanceof AdditiveExpressionContext) {
        if (isType(x.Plus())) {
            return "+";
        } else if (isType(x.Minus())) {
            return "-";
        } else {
            throw new Error("type not allowed");
        }
    } else if (x instanceof MultiplicativeExpressionContext) {
        if (isType(x.Star())) {
            return "*";
        } else if (isType(x.Div())) {
            return "/";
        } else if (isType(x.Mod())) {
            return "%";
        } else {
            throw new Error("type not allowed");
        }
    } else {
        throw new Error("type not allowed");
    }
}


function printNestedArray(arr: any[]) {
    process.stdout.write("[");
    arr.forEach((el, index) => {
      if (Array.isArray(el)) {
        printNestedArray(el);
      } else {
        process.stdout.write(JSON.stringify(el));
      }
      if (index !== arr.length - 1) {
        process.stdout.write(", ");
      }
    });
    process.stdout.write("]");
  }
  

class Visitor extends CVisitor<Array<object>> {
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
    visitCompilationUnit(ctx: CompilationUnitContext) {
        let rtn = ctx.translationUnit().accept(this)
        printNestedArray(rtn)
        return rtn
    }

    // @ts-ignore
    visitTranslationUnit(ctx: TranslationUnitContext) {
        let externalDecLst = ctx.externalDeclaration_list()
        if (externalDecLst.length == 1) {
            return externalDecLst[0].accept(this)
        }

        let rtn = null;
        externalDecLst = externalDecLst.reverse()
        for (var i in externalDecLst) {
            rtn = [externalDecLst[i].accept(this), rtn]
        }
        return ["sequence", [rtn, null]]
    }

    // @ts-ignore
    visitExternalDeclaration(ctx: ExternalDeclarationContext) {
        if (isType(ctx.functionDefinition())) {
            return ctx.functionDefinition().accept(this);
        } else if (isType(ctx.declaration())) {
            return ctx.declaration().accept(this);
        }
    }

    // @ts-ignore
    visitFunctionDefinition(ctx: FunctionDefinitionContext) {
        const type = ctx.typeSpecifier()
        const name = ["name", [ctx.directDeclarator().directDeclarator().getText(), [stringifyType(type), null]]]
        let funcParams = null

        if (isType(ctx.directDeclarator().parameterList())) {
            funcParams = ctx.directDeclarator().parameterList().accept(this)
        }
        return ["function_declaration", [name, [funcParams,[["sequence", [null, null]], null]]]                ]

    }

    // @ts-ignore
    visitDeclaration(ctx: DeclarationContext) {
        const type = ctx.typeSpecifier()
        const initDec = ctx.initDeclarator()
        let name = this.visitDirectDeclarator(initDec.directDeclarator());
        let dd = ["name", [name, [stringifyType(type), null]]]

        if (isType(initDec.Assign())) {
            let rhs = initDec.initializer().accept(this);
            let rtn = ["variable_declaration", [dd, [rhs, null]]]
            return rtn
        }
        return dd
    }

    // @ts-ignore
    visitDirectDeclarator(ctx: DirectDeclaratorContext) {
        if (isType(ctx.Identifier())) {
            return ctx.Identifier().getText()
        } else {
            if (isType(ctx.parameterList())) {
                return ctx.parameterList().accept(this)
            } else if (isType(ctx.identifierList())) {
                // TODO
            } else {
                return this.visitDirectDeclarator(ctx.directDeclarator())
            }
        }
    }

    // @ts-ignore
    visitParameterList(ctx: ParameterListContext) {
        let lst = ctx.parameterDeclaration_list()
        lst = lst.reverse()

        let rtn = null
        for (var i in lst) {
            rtn = [this.visitParameterDeclaration(lst[i]), rtn]
        }
        return rtn
    }

    // @ts-ignore
    visitParameterDeclaration(ctx: ParameterDeclarationContext) {
        const type = ctx.typeSpecifier()
        const name = this.visitDirectDeclarator(ctx.directDeclarator())
        return ["name", [name, [stringifyType(type), null]]]
    }

    // @ts-ignore
    visitInitializer(ctx: InitializerContext) {
        return ctx.assignmentExpression().accept(this);
    }

    // @ts-ignore
    visitAssignmentExpression(ctx: AssignmentExpressionContext) {
        return ctx.conditionalExpression().accept(this);
    }

    // @ts-ignore
    visitConditionalExpression(ctx: ConditionalExpressionContext) {
        return ctx.logicalOrExpression(0).accept(this);
    }

    // @ts-ignore
    visitLogicalOrExpression(ctx: LogicalOrExpressionContext) {
        return ctx.logicalAndExpression(0).accept(this);
    }
    
    // @ts-ignore
    visitLogicalAndExpression(ctx: LogicalAndExpressionContext) {
        return ctx.equalityExpression(0).accept(this);
    }
    
    // @ts-ignore
    visitEqualityExpression(ctx: EqualityExpressionContext) {
        return ctx.relationalExpression(0).accept(this);
    }
    
    // @ts-ignore
    visitRelationalExpression(ctx: RelationalExpressionContext) {
        let rtn = ctx.additiveExpression(0).accept(this);
        return rtn
    }

    // @ts-ignore
    visitAdditiveExpression(ctx: AdditiveExpressionContext) {
        let multExpr = ctx.multiplicativeExpression().accept(this)

        if (isType(ctx.additiveExpression())) {
            let addExpr = ctx.additiveExpression()
            let symbol = getSymbol(ctx)

            let rtn = ["binary_operator_combination",
                        [symbol, 
                            [this.visitAdditiveExpression(addExpr), 
                                [multExpr, null]
                            ]
                        ]
                ]
            return rtn
        }         
        
        return multExpr;
    }
    
    // @ts-ignore
    visitMultiplicativeExpression(ctx: MultiplicativeExpressionContext) {
        let castExpr = ctx.castExpression().accept(this);

        if (isType(ctx.multiplicativeExpression())) {
            let multExpr = ctx.multiplicativeExpression()
            let symbol = getSymbol(ctx)

            let rtn = ["binary_operator_combination",
                        [symbol, 
                            [this.visitMultiplicativeExpression(multExpr), 
                                [castExpr, null]
                            ]
                        ]
                ]
            return rtn
        }         
        
        return castExpr;
    }
    
    // @ts-ignore
    visitCastExpression(ctx: CastExpressionContext) {
        return ctx.unaryExpression().accept(this);
    }
    
    // @ts-ignore
    visitUnaryExpression(ctx: UnaryExpressionContext) {
        if (isType(ctx.postfixExpression())) {
            return ctx.postfixExpression().accept(this);
        } 
        if (isType(ctx.unaryOperator().Not())) {
            return ["unary_operator_combination", 
                        ["!", 
                            [ctx.castExpression().accept(this), null]
                        ]
                   ]
        }
        return ["unary_operator_combination", 
                    ["-unary", 
                        [ctx.castExpression().accept(this), null]
                    ]
               ]
    }
    
    // @ts-ignore
    visitPostfixExpression(ctx: PostfixExpressionContext) {
        if (isType(ctx.primaryExpression())) {
            return ctx.primaryExpression().accept(this);
        }
    }
    
    // @ts-ignore
    visitPrimaryExpression(ctx: PrimaryExpressionContext) {
        if (isType(ctx.Identifier())) {
            const type = ctx.typeSpecifier()
            const name = ctx.Identifier().getText()
            return ["name", [name, [stringifyType(type), null]]]
        } else if  (isType(ctx.Constant())) {
            let rtn = ["literal", [ctx.Constant().getText(), null]]
            return rtn
        // } else if (isType(ctx.StringLiteral())) {
        //     // TODO
        } else if (isType(ctx.expression())) {
            return this.visitExpression(ctx.expression())
        }
    }

    // @ts-ignore
    visitExpression(ctx: ExpressionContext) {
        return this.visitAssignmentExpression(ctx.assignmentExpression())
    }
}

export function parseInput(input: string): CompilationUnitContext {
    const chars = new CharStream(input); // replace this with a FileStream as required
    let lexer = new CLexer(chars);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new CParser(tokenStream);

    // Parse the input, where `compilationUnit` is whatever entry point you defined
    return parser.compilationUnit();
}

const tree = parseInput(`
int a = 1;
int func(int x, int y) {}
int b = 2;


`);
const instructions = tree.accept(new Visitor());

// int a = -3 * 4 - 5 + 6 / 7 - 8;
// int b = !34;
