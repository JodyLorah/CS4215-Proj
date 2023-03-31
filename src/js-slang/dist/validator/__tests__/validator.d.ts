import * as es from 'estree';
import { NodeWithInferredType } from '../../types';
export declare function toValidatedAst(code: string): NodeWithInferredType<es.Program>;
