
/**
 * Open Packaging Format Parser
 * @class
 * @param {document} packageDocument OPF XML
 */
declare class Packaging {
    constructor(packageDocument: any);

    /**
     * Parse OPF XML
     * @param  {document} packageDocument OPF XML
     * @return {object} parsed package parts
     */
    parse(packageDocument: any): any;

    /**
     * Parse Spine
     * @param  {document} spineXml
     * @param  {Packaging.manifest} manifest
     * @return {object} spine
     */
    parseSpine(spineXml: any, manifest: any): any;

    /**
     * Find the Cover Path
     * <item properties="cover-image" id="ci" href="cover.svg" media-type="image/svg+xml" />
     * Fallback for Epub 2.0
     * @param  {document} packageXml
     * @return {string} href
     */
    findCoverPath(packageXml: any): string;

    /**
     * Load JSON Manifest
     * @param  {document} packageDocument OPF XML
     * @return {object} parsed package parts
     */
    load(packageDocument: any): any;

}

export default Packaging;