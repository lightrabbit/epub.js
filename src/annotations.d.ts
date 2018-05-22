import EventEmitter from "event-emitter";
import EpubCFI from "./epubcfi";
import Rendition from "./rendition";

/**
 * Handles managing adding & removing Annotations
 * @param {Rendition} rendition
 * @class
 */
declare class Annotations {
    constructor(rendition: Rendition);

    /**
     * Add an annotation to store
     * @param {string} type Type of annotation to add: "highlight", "underline", "mark"
     * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
     * @param {object} data Data to assign to annotation
     * @param {function} [cb] Callback after annotation is added
     * @returns {Annotation} annotation
     */
    add(type: string, cfiRange: EpubCFI, data: any, cb?: any): Annotation;

    /**
     * Remove an annotation from store
     * @param {EpubCFI} cfiRange EpubCFI range the annotation is attached to
     * @param {string} type Type of annotation to add: "highlight", "underline", "mark"
     */
    remove(cfiRange: EpubCFI, type: string): void;

    /**
     * Add a highlight to the store
     * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
     * @param {object} data Data to assign to annotation
     * @param {function} cb Callback after annotation is added
     */
    highlight(cfiRange: EpubCFI, data: any, cb: any): void;

    /**
     * Add a underline to the store
     * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
     * @param {object} data Data to assign to annotation
     * @param {function} cb Callback after annotation is added
     */
    underline(cfiRange: EpubCFI, data: any, cb: any): void;

    /**
     * Add a mark to the store
     * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
     * @param {object} data Data to assign to annotation
     * @param {function} cb Callback after annotation is added
     */
    mark(cfiRange: EpubCFI, data: any, cb: any): void;

    /**
     * iterate over annotations in the store
     */
    each(): void;

    /**
     * [Not Implemented] Show annotations
     * @TODO: needs implementation in View
     */
    show(): void;

    /**
     * [Not Implemented] Hide annotations
     * @TODO: needs implementation in View
     */
    hide(): void;

}


/**
 * Annotation object
 * @class
 * @param {object} options
 * @param {string} options.type Type of annotation to add: "highlight", "underline", "mark"
 * @param {EpubCFI} options.cfiRange EpubCFI range to attach annotation to
 * @param {object} options.data Data to assign to annotation
 * @param {int} options.sectionIndex Index in the Spine of the Section annotation belongs to
 * @param {function} [options.cb] Callback after annotation is added
 * @returns {Annotation} annotation
 */
declare class Annotation {
    constructor(options: {
        type: string;
        cfiRange: EpubCFI;
        data: any;
        sectionIndex: any;
        cb: any;
    });

    /**
     * Update stored data
     * @param {object} data
     */
    update(data: any): void;

    /**
     * Add to a view
     * @param {View} view
     */
    attach(view: any): void;

    /**
     * Remove from a view
     * @param {View} view
     */
    detach(view: any): void;

    /**
     * [Not Implemented] Get text of an annotation
     * @TODO: needs implementation in contents
     */
    text(): void;

}

/**
 * Handles Unzipping a requesting files from an Epub Archive
 * @class
 */
declare class Archive {
    constructor();

    /**
     * Open an archive
     * @param  {binary} input
     * @param  {boolean} isBase64 tells JSZip if the input data is base64 encoded
     * @return {Promise} zipfile
     */
    open(input: any, isBase64: boolean): Promise<any>;

    /**
     * Load and Open an archive
     * @param  {string} zipUrl
     * @param  {boolean} isBase64 tells JSZip if the input data is base64 encoded
     * @return {Promise} zipfile
     */
    openUrl(zipUrl: string, isBase64: boolean): Promise<any>;

    /**
     * Request a url from the archive
     * @param  {string} url  a url to request from the archive
     * @param  {string} [type] specify the type of the returned result
     * @return {Promise}
     */
    request(url: string, type?: string): Promise<any>;

    /**
     * Get a Blob from Archive by Url
     * @param  {string} url
     * @param  {string} [mimeType]
     * @return {Blob}
     */
    getBlob(url: string, mimeType?: string): any;

    /**
     * Get Text from Archive by Url
     * @param  {string} url
     * @param  {string} [encoding]
     * @return {string}
     */
    getText(url: string, encoding?: string): string;

    /**
     * Get a base64 encoded result from Archive by Url
     * @param  {string} url
     * @param  {string} [mimeType]
     * @return {string} base64 encoded
     */
    getBase64(url: string, mimeType?: string): string;

    /**
     * Create a Url from an unarchived item
     * @param  {string} url
     * @param  {object} [options.base64] use base64 encoding or blob url
     * @return {Promise} url promise with Url string
     */
    createUrl(url: string): Promise<any>;

    /**
     * Revoke Temp Url for a achive item
     * @param  {string} url url of the item in the archive
     */
    revokeUrl(url: string): void;

}

export default Annotations;
