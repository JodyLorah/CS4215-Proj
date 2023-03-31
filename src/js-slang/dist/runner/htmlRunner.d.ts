import { IOptions, Result } from '..';
import { Context } from '../types';
export declare const htmlErrorHandlingScript: string;
export declare function htmlRunner(code: string, context: Context, options?: Partial<IOptions>): Promise<Result>;
