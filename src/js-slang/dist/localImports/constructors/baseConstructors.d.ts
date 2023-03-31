import es from 'estree';
export declare const createLiteral: (value: string | number | boolean | null, raw?: string | undefined) => es.Literal;
export declare const createIdentifier: (name: string) => es.Identifier;
export declare const createCallExpression: (functionName: string, functionArguments: (es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | es.SpreadElement)[]) => es.SimpleCallExpression;
export declare const createVariableDeclarator: (id: es.Identifier, initialValue?: es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | null | undefined) => es.VariableDeclarator;
export declare const createVariableDeclaration: (declarations: es.VariableDeclarator[], kind: "var" | "let" | "const") => es.VariableDeclaration;
export declare const createReturnStatement: (argument: es.ClassExpression | es.ArrayExpression | es.ArrowFunctionExpression | es.AssignmentExpression | es.AwaitExpression | es.BinaryExpression | es.SimpleCallExpression | es.NewExpression | es.ChainExpression | es.ConditionalExpression | es.FunctionExpression | es.Identifier | es.ImportExpression | es.SimpleLiteral | es.RegExpLiteral | es.BigIntLiteral | es.LogicalExpression | es.MemberExpression | es.MetaProperty | es.ObjectExpression | es.SequenceExpression | es.TaggedTemplateExpression | es.TemplateLiteral | es.ThisExpression | es.UnaryExpression | es.UpdateExpression | es.YieldExpression | null | undefined) => es.ReturnStatement;
export declare const createFunctionDeclaration: (name: string, params: es.Pattern[], body: es.Statement[]) => es.FunctionDeclaration;
export declare const createImportDeclaration: (specifiers: (es.ImportSpecifier | es.ImportDefaultSpecifier | es.ImportNamespaceSpecifier)[], source: es.Literal) => es.ImportDeclaration;
export declare const createImportSpecifier: (local: es.Identifier, imported: es.Identifier) => es.ImportSpecifier;
export declare const createImportDefaultSpecifier: (local: es.Identifier) => es.ImportDefaultSpecifier;
export declare const createImportNamespaceSpecifier: (local: es.Identifier) => es.ImportNamespaceSpecifier;