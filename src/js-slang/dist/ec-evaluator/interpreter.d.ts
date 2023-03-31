/**
 * This interpreter implements an explicit-control evaluator.
 *
 * Heavily adapted from https://github.com/source-academy/JSpike/
 * and the legacy interpreter at '../interpreter/interpreter'
 */
import * as es from 'estree';
import { Context, Result, Value } from '../types';
import { AgendaItem } from './types';
import { Stack } from './utils';
/**
 * The agenda is a list of commands that still needs to be executed by the machine.
 * It contains syntax tree nodes or instructions.
 */
export declare class Agenda extends Stack<AgendaItem> {
    constructor(program: es.Program);
}
/**
 * The stash is a list of values that stores intermediate results.
 */
export declare class Stash extends Stack<Value> {
    constructor();
}
/**
 * Function to be called when a program is to be interpreted using
 * the explicit control evaluator.
 *
 * @param program The program to evaluate.
 * @param context The context to evaluate the program in.
 * @returns The result of running the ECE machine.
 */
export declare function evaluate(program: es.Program, context: Context): Value;
/**
 * Function that is called when a user wishes to resume evaluation after
 * hitting a breakpoint.
 * This should only be called after the first 'evaluate' function has been called so that
 * context.runtime.agenda and context.runtime.stash are defined.
 * @param context The context to continue evaluating the program in.
 * @returns The result of running the ECE machine.
 */
export declare function resumeEvaluate(context: Context): any;
/**
 * Function that returns the appropriate Promise<Result> given the output of ec evaluating, depending
 * on whether the program is finished evaluating, ran into a breakpoint or ran into an error.
 * @param context The context of the program.
 * @param value The value of ec evaluating the program.
 * @returns The corresponding promise.
 */
export declare function ECEResultPromise(context: Context, value: Value): Promise<Result>;
