import * as es from 'estree';
export declare enum Validity {
    Valid = 0,
    NoSmt = 1,
    NoCycle = 2
}
export declare type HybridValue = {
    type: 'value';
    concrete: any;
    symbolic: es.Expression;
    negation?: es.Expression;
    validity: Validity;
};
export declare type HybridArray = {
    type: 'array';
    concrete: any;
    symbolic: es.Expression;
    validity: Validity;
};
export declare type Hybrid = HybridValue | HybridArray;
export declare function hybridizeNamed(name: string, value: any): Hybrid;
export declare function isHybrid(value: any): value is Hybrid;
export declare const hybridValueConstructor: (concrete: any, symbolic: es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression, validity?: Validity) => HybridValue;
export declare function makeDummyHybrid(concrete: any): HybridValue;
export declare function getBooleanResult(value: HybridValue): es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression;
export declare const hybridArrayConstructor: (concrete: any, symbolic: es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression, listHeads?: HybridArray[]) => HybridArray;
export declare function deepConcretizeInplace(value: any): any;
export declare function shallowConcretize(value: any): any;
export declare function evaluateHybridBinary(op: es.BinaryOperator, lhs: any, rhs: any): any;
export declare function evaluateHybridUnary(op: es.UnaryOperator, val: any): number | boolean | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | HybridValue;
