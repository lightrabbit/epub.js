
/**
 * Open Packaging Format Parser
 * @class
 * @param {document} packageDocument OPF XML
 */
declare class Packaging implements IPackage {
    metadata: IMetadata;
    spine: ISpine[];
    manifest: IManifest;
    navPath: string | false;
    ncxPath: string | false
    coverPath: string | false
    spineNodeIndex: number;

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
export interface IMetadata {
    title : string;
    creator : string;
    description : string;
    pubdate : string;
    publisher : string;
    identifier : string;
    language : string;
    rights : string;
    modified_date : string;
    layout : string;
    orientation : string;
    flow : string;
    viewport : string;
}

export interface ISpine {
    canonical: string;
    cfiBase: string;
    href: string;
    idref: string;
    index: number;
    linear: string;
    properties: string[];
    url: string;
    next(): ISpine;
    prev(): ISpine;
}

export interface IManifest {
    [id: string]: IManifestItem;
}
export interface IManifestItem {
    href: string;
    type: string;
    properties: string[]
}

export interface IPackage {
    metadata: IMetadata;
    spine: ISpine[];
    manifest: IManifest;
    navPath: string | false;
    ncxPath: string | false
    coverPath: string | false
    spineNodeIndex: number;
}

export default Packaging;