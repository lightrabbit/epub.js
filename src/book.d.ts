import * as EventEmitter from "event-emitter";
import Spine from "./spine";
import Locations from "./locations";
import Container from "./container";
import Packaging from "./packaging";
import Navigation from "./navigation";
import Resources from "./resources";
import PageList from "./pagelist";
import Rendition from "./rendition";
import Archive from "./archive";
import EpubCFI from "./epubcfi";
import Section from "./section";
import { IRenditionOptions } from "./rendition";
/**
 * An Epub representation with methods for the loading, parsing and manipulation
 * of its contents.
 * @class
 * @param {string} [url]
 * @param {object} [options]
 * @param {method} [options.requestMethod] a request function to use instead of the default
 * @param {boolean} [options.requestCredentials=undefined] send the xhr request withCredentials
 * @param {object} [options.requestHeaders=undefined] send the xhr request headers
 * @param {string} [options.encoding=binary] optional to pass 'binary' or base64' for archived Epubs
 * @param {string} [options.replacements=none] use base64, blobUrl, or none for replacing assets in archived Epubs
 * @param {method} [options.canonical] optional function to determine canonical urls for a path
 * @returns {Book}
 * @example new Book("/path/to/book.epub", {})
 * @example new Book({ replacements: "blobUrl" })
 */
declare class Book {
    constructor(url?: string, options?: {
        requestMethod: any;
        requestCredentials: boolean;
        requestHeaders: any;
        encoding: string;
        replacements: string;
        canonical: any;
    });

    /**
     * @member {promise} opened returns after the book is loaded
     * @memberof Book
     */
    static opened: Promise<any>;

    /**
     * @member {Spine} spine
     * @memberof Book
     */
    static spine: Spine;

    /**
     * @member {Locations} locations
     * @memberof Book
     */
    static locations: Locations;

    /**
     * @member {Navigation} navigation
     * @memberof Book
     */
    static navigation: Navigation;

    /**
     * @member {PageList} pagelist
     * @memberof Book
     */
    static pagelist: PageList;

    /**
     * Open a epub or url
     * @param {string | ArrayBuffer} input Url, Path or ArrayBuffer
     * @param {string} [what="binary", "base64", "epub", "opf", "json", "directory"] force opening as a certain type
     * @returns {Promise} of when the book has been loaded
     * @example book.open("/path/to/book.epub")
     */
    open(input: string | ArrayBuffer, what?: string): Promise<any>;

    /**
     * Load a resource from the Book
     * @param  {string} path path to the resource to load
     * @return {Promise}     returns a promise with the requested resource
     */
    load(path: string): Promise<any>;

    /**
     * Resolve a path to it's absolute position in the Book
     * @param  {string} path
     * @param  {boolean} [absolute] force resolving the full URL
     * @return {string}          the resolved path string
     */
    resolve(path: string, absolute?: boolean): string;

    /**
     * Get a canonical link to a path
     * @param  {string} path
     * @return {string} the canonical path string
     */
    canonical(path: string): string;

    /**
     * Gets a Section of the Book from the Spine
     * Alias for `book.spine.get`
     * @param {string} target
     * @return {Section}
     */
    section(target: string): Section;

    /**
     * Sugar to render a book to an element
     * @param  {element | string} element element or string to add a rendition to
     * @param  {object} [options]
     * @return {Rendition}
     */
    renderTo(element: any | string, options?: IRenditionOptions): Rendition;

    /**
     * Set if request should use withCredentials
     * @param {boolean} credentials
     */
    setRequestCredentials(credentials: boolean): void;

    /**
     * Set headers request should use
     * @param {object} headers
     */
    setRequestHeaders(headers: any): void;

    /**
     * Get the cover url
     * @return {string} coverUrl
     */
    coverUrl(): string;

    /**
     * Find a DOM Range for a given CFI Range
     * @param  {EpubCFI} cfiRange a epub cfi range
     * @return {Range}
     */
    getRange(cfiRange: EpubCFI): any;

    /**
     * Generates the Book Key using the identifer in the manifest or other string provided
     * @param  {string} [identifier] to use instead of metadata identifier
     * @return {string} key
     */
    key(identifier?: string): string;

    /**
     * Destroy the Book and all associated objects
     */
    destroy(): void;

}

export default Book;
