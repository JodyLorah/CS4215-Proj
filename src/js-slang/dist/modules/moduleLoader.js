"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const xmlhttprequest_ts_1 = require("xmlhttprequest-ts");
const moduleErrors_1 = require("../errors/moduleErrors");
// Supports both JSDom (Web Browser) environment and Node environment
exports.newHttpRequest = () => typeof window === 'undefined' ? new xmlhttprequest_ts_1.XMLHttpRequest() : new XMLHttpRequest();
// Default modules static url. Exported for testing.
exports.MODULES_STATIC_URL = 'https://source-academy.github.io/modules';
function setModulesStaticURL(url) {
    exports.MODULES_STATIC_URL = url;
}
exports.setModulesStaticURL = setModulesStaticURL;
/**
 * Send a HTTP Get request to the specified endpoint.
 * @return NodeXMLHttpRequest | XMLHttpRequest
 */
function httpGet(url) {
    const request = exports.newHttpRequest();
    try {
        // If running function in node environment, set request timeout
        if (typeof window === 'undefined')
            request.timeout = 10000;
        request.open('GET', url, false);
        request.send(null);
    }
    catch (error) {
        if (!(error instanceof DOMException))
            throw error;
    }
    if (request.status !== 200 && request.status !== 304)
        throw new moduleErrors_1.ModuleConnectionError();
    return request.responseText;
}
exports.httpGet = httpGet;
/**
 * Send a HTTP GET request to the modules endpoint to retrieve the manifest
 * @return Modules
 */
exports.memoizedGetModuleManifest = lodash_1.memoize(getModuleManifest);
function getModuleManifest() {
    const rawManifest = httpGet(`${exports.MODULES_STATIC_URL}/modules.json`);
    return JSON.parse(rawManifest);
}
/**
 * Send a HTTP GET request to the modules endpoint to retrieve the specified file
 * @return String of module file contents
 */
const memoizedGetModuleFileInternal = lodash_1.memoize(getModuleFile);
exports.memoizedGetModuleFile = (name, type) => memoizedGetModuleFileInternal({ name, type });
function getModuleFile({ name, type }) {
    return httpGet(`${exports.MODULES_STATIC_URL}/${type}s/${name}.js${type === 'json' ? 'on' : ''}`);
}
/**
 * Loads the respective module package (functions from the module)
 * @param path imported module name
 * @param context
 * @param node import declaration node
 * @returns the module's functions object
 */
function loadModuleBundle(path, context, node) {
    const modules = exports.memoizedGetModuleManifest();
    // Check if the module exists
    const moduleList = Object.keys(modules);
    if (moduleList.includes(path) === false)
        throw new moduleErrors_1.ModuleNotFoundError(path, node);
    // Get module file
    const moduleText = exports.memoizedGetModuleFile(path, 'bundle');
    try {
        const moduleBundle = eval(moduleText);
        return moduleBundle({ context });
    }
    catch (error) {
        // console.error("bundle error: ", error)
        throw new moduleErrors_1.ModuleInternalError(path, node);
    }
}
exports.loadModuleBundle = loadModuleBundle;
/**
 * Loads the module contents of a package
 *
 * @param path imported module name
 * @param node import declaration node
 * @returns an array of functions
 */
function loadModuleTabs(path, node) {
    const modules = exports.memoizedGetModuleManifest();
    // Check if the module exists
    const moduleList = Object.keys(modules);
    if (moduleList.includes(path) === false)
        throw new moduleErrors_1.ModuleNotFoundError(path, node);
    // Retrieves the tabs the module has from modules.json
    const sideContentTabPaths = modules[path].tabs;
    // Load the tabs for the current module
    return sideContentTabPaths.map(path => {
        const rawTabFile = exports.memoizedGetModuleFile(path, 'tab');
        try {
            return eval(rawTabFile);
        }
        catch (error) {
            // console.error('tab error:', error);
            throw new moduleErrors_1.ModuleInternalError(path, node);
        }
    });
}
exports.loadModuleTabs = loadModuleTabs;
exports.memoizedloadModuleDocs = lodash_1.memoize(loadModuleDocs);
function loadModuleDocs(path, node) {
    try {
        const modules = exports.memoizedGetModuleManifest();
        // Check if the module exists
        const moduleList = Object.keys(modules);
        if (!moduleList.includes(path))
            throw new moduleErrors_1.ModuleNotFoundError(path, node);
        const result = getModuleFile({ name: path, type: 'json' });
        return JSON.parse(result);
    }
    catch (error) {
        console.warn('Failed to load module documentation');
        return null;
    }
}
exports.loadModuleDocs = loadModuleDocs;
//# sourceMappingURL=moduleLoader.js.map