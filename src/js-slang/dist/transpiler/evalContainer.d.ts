import type { Context } from '../types';
declare type Evaler = (code: string, context: Context) => any;
export declare const sandboxedEval: Evaler;
export {};
