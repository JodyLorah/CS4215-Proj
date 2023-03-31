import type { Context } from '../types';
export declare type Modules = {
    [module: string]: {
        tabs: string[];
    };
};
export declare type ModuleBundle = (context: {
    context: Context;
}) => ModuleFunctions;
export declare type ModuleFunctions = {
    [functionName: string]: Function;
};
