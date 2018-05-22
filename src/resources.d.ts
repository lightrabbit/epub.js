import Archive from "./archive";
/**
 * Handle Package Resources
 * @class
 * @param {Manifest} manifest
 * @param {object?} options
 * @param {string} [options.replacements="base64"]
 * @param {Archive} [options.archive]
 * @param {method} [options.resolver]
 */
declare class Resources {
    constructor(manifest: any, options: {
        replacements: string;
        archive: Archive;
        resolver: any;
    });

    /**
     * Create blob urls for all the assets
     * @return {Promise}         returns replacement urls
     */
    replacements(): Promise<any>;

    /**
     * Resolve all resources URLs relative to an absolute URL
     * @param  {string} absolute to be resolved to
     * @param  {resolver?} resolver
     * @return {string[]} array with relative Urls
     */
    relativeTo(absolute: string, resolver: any): string[];

    /**
     * Get a URL for a resource
     * @param  {string} path
     * @return {string} url
     */
    get(path: string): string;

    /**
     * Substitute urls in content, with replacements,
     * relative to a url if provided
     * @param  {string} content
     * @param  {string} [url]   url to resolve to
     * @return {string}         content with urls substituted
     */
    substitute(content: string, url?: string): string;

}

export default Resources;