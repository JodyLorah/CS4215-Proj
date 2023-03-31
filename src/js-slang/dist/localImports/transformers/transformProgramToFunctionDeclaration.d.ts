import es from 'estree';
export declare const getInvokedFunctionResultVariableNameToImportSpecifiersMap: (nodes: es.ModuleDeclaration[], currentDirPath: string) => Record<string, (es.ImportSpecifier | es.ImportDefaultSpecifier | es.ImportNamespaceSpecifier)[]>;
export declare const createAccessImportStatements: (invokedFunctionResultVariableNameToImportSpecifiersMap: Record<string, (es.ImportSpecifier | es.ImportDefaultSpecifier | es.ImportNamespaceSpecifier)[]>) => es.VariableDeclaration[];
/**
 * Transforms the given program into a function declaration. This is done
 * so that every imported module has its own scope (since functions have
 * their own scope).
 *
 * @param program         The program to be transformed.
 * @param currentFilePath The file path of the current program.
 */
export declare const transformProgramToFunctionDeclaration: (program: es.Program, currentFilePath: string) => es.FunctionDeclaration;
