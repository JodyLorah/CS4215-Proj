import * as es from 'estree';
import { IOptions, Result } from '..';
import { Context } from '../types';
export declare function sourceRunner(program: es.Program, context: Context, isVerboseErrorsEnabled: boolean, options?: Partial<IOptions>): Promise<Result>;
export declare function sourceFilesRunner(files: Partial<Record<string, string>>, entrypointFilePath: string, context: Context, options?: Partial<IOptions>): Promise<Result>;
