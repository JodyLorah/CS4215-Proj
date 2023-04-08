import * as fs from 'fs';
import {CharStream, CommonTokenStream} from 'antlr4';
import CVisitor from './antlr_gen/CVisitor.js';
import CLexer from "./antlr_gen/CLexer.js"; // Had to add .js - This is a hack
import CParser, {AdditiveExpressionContext, ArgumentExpressionListContext, AssignmentExpressionContext, BlockItemContext, BlockItemListContext, CompilationUnitContext, CompoundStatementContext, DeclarationContext, DirectDeclaratorContext, EqualityExpressionContext, ExpressionStatementContext, FunctionDefinitionContext, InitializerContext, IterationStatementContext, MultiplicativeExpressionContext, ParameterDeclarationContext, ParameterListContext, PostfixExpressionContext, RelationalExpressionContext, TranslationUnitContext, TypeSpecifierContext} from "./antlr_gen/CParser.js";

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
function getSymbol(x: RelationalExpressionContext): string;
function getSymbol(x: EqualityExpressionContext): string;
function getSymbol(x: AdditiveExpressionContext | MultiplicativeExpressionContext | RelationalExpressionContext | EqualityExpressionContext): string {
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
    } else if (x instanceof RelationalExpressionContext) {
        if (isType(x.Less())) {
            return "<";
        } else if (isType(x.Greater())) {
            return ">";
        } else if (isType(x.LessEqual())) {
            return "<=";
        } else if (isType(x.GreaterEqual())) {
            return ">="
        } else {
            throw new Error("type not allowed");
        }
    } else if (x instanceof EqualityExpressionContext) {
        if (isType(x.Equal())) {
            return "==="
        } else if (isType(x.NotEqual())) {
            return "!=="
        } else {
            throw new Error("type not allowed");
        }
    } else {
        throw new Error("type not allowed");
    }
}

// used for debugging
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

    // @ts-ignore
    visitCompilationUnit(ctx: CompilationUnitContext) {
        return ctx.translationUnit().accept(this)
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
        let emptyBody = [["sequence", [null, null]], null]

        if (isType(ctx.directDeclarator().parameterList())) {
            funcParams = ctx.directDeclarator().parameterList().accept(this)
        }

        if (isType(ctx.compoundStatement())) {
            let funcBody = ctx.compoundStatement().accept(this)
            return ["function_declaration", [name, [funcParams, funcBody]]]
        }
        return ["function_declaration", [name, [funcParams, emptyBody]]]

    }

    // @ts-ignore
    visitCompoundStatement(ctx: CompoundStatementContext) {
        if (isType(ctx.blockItemList())) {
            return ctx.blockItemList().accept(this)
        }
    }

    // @ts-ignore
    visitBlockItemList(ctx: BlockItemListContext) {        
        let lst = ctx.blockItem_list()
        if (lst.length == 1) {
            if (isType(lst[0].statement())) {
                return this.visitStatement(lst[0].statement())
            }
            
            return ["block", [this.visitDeclaration(lst[0].declaration()), null]]
        }

        let has_declaration = false
        let rtn = null;
        lst.reverse()
        for (var i in lst) {
            if (isType(lst[i].declaration())) {
                has_declaration = true
            }
            rtn = [this.visitBlockItem(lst[i]), rtn]
        }
        rtn = ["sequence", [rtn, null]]
        if (has_declaration) {
            return ["block", [rtn, null]]
        }
        return rtn
    }

    // @ts-ignore
    visitBlockItem(ctx: BlockItemContext) {
        if (isType(ctx.declaration())) {
            return ctx.declaration().accept(this)
        }
        return ctx.statement().accept(this)
    }

    // @ts-ignore
    visitStatement(ctx: StatementContext) {
        if (isType(ctx.compoundStatement())) {
            return ctx.compoundStatement().accept(this)
        } else if (isType(ctx.jumpStatement())) {
            return ctx.jumpStatement().accept(this)
        } else if (isType(ctx.expressionStatement())) {
            return ctx.expressionStatement().accept(this)
        } else if (isType(ctx.iterationStatement())) {
            return ctx.iterationStatement().accept(this)
        } else if (isType(ctx.selectionStatement())){
            return ctx.selectionStatement().accept(this)
        }
    }

    // @ts-ignore
    visitSelectionStatement(ctx: SelectionStatementContext) {
        let assExpr = ctx.assignmentExpression().accept(this)
        let if_stmt = this.visitStatement(ctx.statement(0))
        let else_stmt = [["sequence", [null, null]], null]

        if (isType(ctx.Else())) {
            else_stmt = [ctx.statement(1).accept(this), else_stmt]
        }
        return ["conditional_statement", [assExpr, [if_stmt, else_stmt]]]

    }

    // @ts-ignore
    visitIterationStatement(ctx: IterationStatementContext) {
        let assExpr = ctx.assignmentExpression().accept(this)
        let stmt = ctx.statement().accept(this)
        return ["while_loop", [assExpr, [stmt, null]]]
    }

    // @ts-ignore
    visitExpressionStatement(ctx: ExpressionStatementContext) {
        return this.visitAssignmentExpression(ctx.assignmentExpression())
    }

    // @ts-ignore
    visitJumpStatement(ctx: JumpStatementContext) {
        return ["return_statement", [ctx.assignmentExpression().accept(this), null]];
    }

    // @ts-ignore
    visitDeclaration(ctx: DeclarationContext) {
        const type = ctx.typeSpecifier()
        const initDec = ctx.initDeclarator()
        const dirDec = initDec.directDeclarator()
        let name = this.visitDirectDeclarator(dirDec);
        let dd = ["name", [name, [stringifyType(type), null]]]
        let rtn = ["variable_declaration", [dd, [null, null]]]

        if (isType(dirDec.LeftBracket())) { // array declaration
            let size = null
            let items = null
            if (isType(dirDec.assignmentExpression())) {
                size = this.visitAssignmentExpression(dirDec.assignmentExpression())
            }

            if (isType(initDec.initializer())) {
                if (isType(initDec.initializer().initializerList())) {
                    let lst = initDec.initializer().initializerList().initializer_list()
                    lst.reverse()

                    for (var i in lst) {
                        items = [this.visitInitializer(lst[i]), items]
                    }
                } else if (isType(initDec.initializer().assignmentExpression())) { // assignment expr aka string
                    let assExpr = initDec.initializer().assignmentExpression().accept(this)
                    items = assExpr
                }
                
            }
            rtn = ["variable_declaration", [dd, [["array_expression",[items, [size, null]]], null]]]
        } else if (isType(initDec.Assign())) {
            let rhs = initDec.initializer().accept(this);
            rtn = ["variable_declaration", [dd, [rhs, null]]]
        }
        return rtn
    }

    // @ts-ignore
    visitDirectDeclarator(ctx: DirectDeclaratorContext) {
        if (isType(ctx.Identifier())) {
            return ctx.Identifier().getText()
        } else {
            if (isType(ctx.parameterList())) {
                return ctx.parameterList().accept(this)
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
        let ce = ctx.conditionalExpression().accept(this);

        if (!isType(ctx.assignmentOperator())) {
            return ce
        }
        let ue = ctx.unaryExpression().accept(this)
        if (isType(ctx.unaryExpression().postfixExpression().LeftBracket())) {
            return ["object_assignment", [ue, [ce, null]]]
        } else {
            return ["assignment", [ue, [ce, null]]]
        }
        
    }

    // @ts-ignore
    visitConditionalExpression(ctx: ConditionalExpressionContext) {
        return ctx.logicalOrExpression(0).accept(this);
    }

    // @ts-ignore
    visitLogicalOrExpression(ctx: LogicalOrExpressionContext) {
        let logicalAndExpr = ctx.logicalAndExpression().accept(this)

        if (isType(ctx.logicalOrExpression())) {
            let logicalOrExpr = ctx.logicalOrExpression()
            let symbol = "||"

            let rtn = ["logical_composition",
                        [symbol, 
                            [this.visitLogicalOrExpression(logicalOrExpr), 
                                [logicalAndExpr, null]
                            ]
                        ]
                ]
            return rtn
        }         
        
        return logicalAndExpr;    
    }
    
    // @ts-ignore
    visitLogicalAndExpression(ctx: LogicalAndExpressionContext) {
        let eqlExpr = ctx.equalityExpression().accept(this)

        if (isType(ctx.logicalAndExpression())) {
            let logicalAndExpr = ctx.logicalAndExpression()
            let symbol = "&&"

            let rtn = ["logical_composition",
                        [symbol, 
                            [this.visitLogicalAndExpression(logicalAndExpr), 
                                [eqlExpr, null]
                            ]
                        ]
                ]
            return rtn
        }         
        
        return eqlExpr;
    }

    // @ts-ignore
    visitEqualityExpression(ctx: EqualityExpressionContext) {
        let relExpr = ctx.relationalExpression().accept(this)

        if (isType(ctx.equalityExpression())) {
            let equalityExpressionExpr = ctx.equalityExpression()
            let symbol = getSymbol(ctx)

            let rtn = ["binary_operator_combination",
                        [symbol, 
                            [this.visitEqualityExpression(equalityExpressionExpr), 
                                [relExpr, null]
                            ]
                        ]
                ]
            return rtn
        }         
        
        return relExpr;    
    }
    
    // @ts-ignore
    visitRelationalExpression(ctx: RelationalExpressionContext) {
        let additiveExpr = ctx.additiveExpression().accept(this)

        if (isType(ctx.relationalExpression())) {
            let relExpr = ctx.relationalExpression()
            let symbol = getSymbol(ctx)

            let rtn = ["binary_operator_combination",
                        [symbol, 
                            [this.visitRelationalExpression(relExpr), 
                                [additiveExpr, null]
                            ]
                        ]
                ]
            return rtn
        }         
        
        return additiveExpr;
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
        let priExp = ctx.primaryExpression().accept(this);
        let args = null

        if (isType(ctx.LeftParen())) {
            let lst = ctx.argumentExpressionList()
            if (isType(lst)) { //argument expression list present
                args = this.visitArgumentExpressionList(lst)
            }

            priExp = ["application", [priExp, [args, null]]]

        } else if (isType(ctx.LeftBracket())) {
            // array exp
            args = this.visitAssignmentExpression(ctx.assignmentExpression())
            priExp = ["object_access", [priExp, [args, null]]]
        }
        return priExp
    }

    // @ts-ignore
    visitArgumentExpressionList(ctx: ArgumentExpressionListContext) {
        let lst = ctx.assignmentExpression_list()
        lst.reverse()

        let rtn = null
        for (var i in lst) {
            rtn = [this.visitAssignmentExpression(lst[i]), rtn]
        }
        return rtn
    }
    
    // @ts-ignore
    visitPrimaryExpression(ctx: PrimaryExpressionContext) {
        if (isType(ctx.Identifier())) {
            const name = ctx.Identifier().getText()
            return ["name", [name, [null, null]]]
        } else if  (isType(ctx.Constant())) {
            let rtn = ["literal", [Number(ctx.Constant().getText()), null]]
            return rtn
        } else if (isType(ctx.StringLiteral(0))) {
            let str = String(ctx.StringLiteral(0).getText())
            let str_len = str.length
            let rtn = null
            let str_arr = str.split("")
            str_arr.reverse()
            str = str_arr.join("")

            if (str_len === 3) { // string is a single char
                rtn = ["literal", [str[1], null]]
            } else {
                for (let i = 1; i < str_len - 1; i++) { // to avoid escape characters
                    rtn = [["literal", [str[i], null]], rtn]
                }
            }
            
            return rtn
        } else if (isType(ctx.assignmentExpression())) {
            return this.visitAssignmentExpression(ctx.assignmentExpression())
        } 
    }

    // @ts-ignore
    visitExpression(ctx: ExpressionContext) {
        return this.visitAssignmentExpression(ctx.assignmentExpression())
    }
}

function parseInput(input: string): CompilationUnitContext {
    const chars = new CharStream(input); // replace this with a FileStream as required
    let lexer = new CLexer(chars);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new CParser(tokenStream);

    // Parse the input, where `compilationUnit` is whatever entry point you defined
    return parser.compilationUnit();
}

function Parse(input: string) {
    const tree = parseInput(input);
    const instructions = tree.accept(new Visitor());
    return JSON.stringify(instructions, null, 0)
}

// mass generate test tokens

const test1 = Parse(fs.readFileSync('../../testing/test1.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test1.json', test1, err => {
    if (err) {
        throw err
    }
})

const test2 = Parse(fs.readFileSync('../../testing/test2.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test2.json', test2, err => {
    if (err) {
        throw err
    }
})

const test3 = Parse(fs.readFileSync('../../testing/test3.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test3.json', test3, err => {
    if (err) {
        throw err
    }
})

const test4 = Parse(fs.readFileSync('../../testing/test4.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test4.json', test4, err => {
    if (err) {
        throw err
    }
})

const test5 = Parse(fs.readFileSync('../../testing/test5.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test5.json', test5, err => {
    if (err) {
        throw err
    }
})

const test6 = Parse(fs.readFileSync('../../testing/test6.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test6.json', test6, err => {
    if (err) {
        throw err
    }
})

const test7 = Parse(fs.readFileSync('../../testing/test7.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test7.json', test7, err => {
    if (err) {
        throw err
    }
})

const test8 = Parse(fs.readFileSync('../../testing/test8.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test8.json', test8, err => {
    if (err) {
        throw err
    }
})

const test9 = Parse(fs.readFileSync('../../testing/test9.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test9.json', test9, err => {
    if (err) {
        throw err
    }
})

const test10 = Parse(fs.readFileSync('../../testing/test10.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test10.json', test10, err => {
    if (err) {
        throw err
    }
})

const test11 = Parse(fs.readFileSync('../../testing/test11.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test11.json', test11, err => {
    if (err) {
        throw err
    }
})

const test12 = Parse(fs.readFileSync('../../testing/test12.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test12.json', test12, err => {
    if (err) {
        throw err
    }
})

const test13 = Parse(fs.readFileSync('../../testing/test13.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test13.json', test13, err => {
    if (err) {
        throw err
    }
})

const test14 = Parse(fs.readFileSync('../../testing/test14.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test14.json', test14, err => {
    if (err) {
        throw err
    }
})

const test15 = Parse(fs.readFileSync('../../testing/test15.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test15.json', test15, err => {
    if (err) {
        throw err
    }
})

const test16 = Parse(fs.readFileSync('../../testing/test16.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test16.json', test16, err => {
    if (err) {
        throw err
    }
})

const test17 = Parse(fs.readFileSync('../../testing/test17.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_test17.json', test17, err => {
    if (err) {
        throw err
    }
})

const error1 = Parse(fs.readFileSync('../../testing/error1.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_error1.json', error1, err => {
    if (err) {
        throw err
    }
})

const error2 = Parse(fs.readFileSync('../../testing/error2.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_error2.json', error2, err => {
    if (err) {
        throw err
    }
})

const error3 = Parse(fs.readFileSync('../../testing/error3.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_error3.json', error3, err => {
    if (err) {
        throw err
    }
})

const error4 = Parse(fs.readFileSync('../../testing/error4.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_error4.json', error4, err => {
    if (err) {
        throw err
    }
})

const error5 = Parse(fs.readFileSync('../../testing/error5.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_error5.json', error5, err => {
    if (err) {
        throw err
    }
})

const error6 = Parse(fs.readFileSync('../../testing/error6.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_error6.json', error6, err => {
    if (err) {
        throw err
    }
})

const error7 = Parse(fs.readFileSync('../../testing/error7.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_error7.json', error7, err => {
    if (err) {
        throw err
    }
})

const error8 = Parse(fs.readFileSync('../../testing/error8.c', 'utf8'));
fs.writeFile('../../testing/tokens/tokens_error8.json', error8, err => {
    if (err) {
        throw err
    }
})