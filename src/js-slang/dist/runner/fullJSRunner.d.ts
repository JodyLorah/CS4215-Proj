import * as es from 'estree';
import { IOptions, Result } from '..';
import type { Context } from '../types';
export declare function fullJSRunner(program: es.Program, context: Context, options?: Partial<IOptions>): Promise<Result>;
