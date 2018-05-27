import EpubCFI from "./epubcfi";
import Book from "./book";
import Contents from "./contents";
import Annotations from "./annotations";
import Themes from "./themes";

export declare interface IRenditionOptions {
    width?: number;
    height?: number;
    /** class for the cfi parser to ignore */
    ignoreClass?: string;
    manager?: "default" | "continuous";
    view?: "iframe" | "inline";
    /** layout to force */
    layout?: string;
    /** force spread value */
    spread?: string;
    /** overridden by spread: none (never) / both (always) */
    minSpreadWidth?: number;
    /** url of stylesheet to be injected */
    stylesheet?: string;
    /** url of script to be injected */
    script?: string;
    flow?: string;
}

/**
 * Displays an Epub as a series of Views for each Section.
 * Requires Manager and View class to handle specifics of rendering
 * the section contetn.
 * @class
 * @param {Book} book
 * @param {object} [options]
 * @param {number} [options.width]
 * @param {number} [options.height]
 * @param {string} [options.ignoreClass] class for the cfi parser to ignore
 * @param {string | function | object} [options.manager='default']
 * @param {string | function} [options.view='iframe']
 */
declare class Rendition {
    constructor(book: Book, options?: IRenditionOptions);

    /**
     * Adds Hook methods to the Rendition prototype
     * @member {object} hooks
     * @property {Hook} hooks.content
     * @memberof Rendition
     */
    static hooks: any;

    /**
     * @member {Themes} themes
     * @memberof Rendition
     */
    static themes: Themes;

    /**
     * @member {Annotations} annotations
     * @memberof Rendition
     */
    static annotations: Annotations;

    /**
     * @member {promise} started returns after the rendition has started
     * @memberof Rendition
     */
    static started: Promise<any>;

    /**
     * Set the manager function
     * @param {function} manager
     */
    setManager(manager: any): void;

    /**
     * Require the manager from passed string, or as a class function
     * @param  {string|object} manager [description]
     * @return {method}
     */
    requireManager(manager: string | any): any;

    /**
     * Require the view from passed string, or as a class function
     * @param  {string|object} view
     * @return {view}
     */
    requireView(view: string | any): any;

    /**
     * Start the rendering
     * @return {Promise} rendering has started
     */
    start(): Promise<any>;

    /**
     * Call to attach the container to an element in the dom
     * Container must be attached before rendering can begin
     * @param  {element} element to attach to
     * @return {Promise}
     */
    attachTo(element: any): Promise<any>;

    /**
     * Display a point in the book
     * The request will be added to the rendering Queue,
     * so it will wait until book is opened, rendering started
     * and all other rendering tasks have finished to be called.
     * @param  {string} target Url or EpubCFI
     * @return {Promise}
     */
    display(target?: string): Promise<any>;

    /**
     * Move the Rendition to a specific offset
     * Usually you would be better off calling display()
     * @param {object} offset
     */
    moveTo(offset: any): void;

    /**
     * Trigger a resize of the views
     * @param {number} [width]
     * @param {number} [height]
     */
    resize(width?: number, height?: number): void;

    /**
     * Clear all rendered views
     */
    clear(): void;

    /**
     * Go to the next "page" in the rendition
     * @return {Promise}
     */
    next(): Promise<any>;

    /**
     * Go to the previous "page" in the rendition
     * @return {Promise}
     */
    prev(): Promise<any>;

    /**
     * Adjust the flow of the rendition to paginated or scrolled
     * (scrolled-continuous vs scrolled-doc are handled by different view managers)
     * @param  {string} flow
     */
    flow(flow: string): void;

    /**
     * Adjust the layout of the rendition to reflowable or pre-paginated
     * @param  {object} settings
     */
    layout(settings: any): void;

    /**
     * Adjust if the rendition uses spreads
     * @param  {string} spread none | auto (TODO: implement landscape, portrait, both)
     * @param  {int} min min width to use spreads at
     */
    spread(spread: string, min: any): void;

    /**
     * Adjust the direction of the rendition
     * @param  {string} dir
     */
    direction(dir: string): void;

    /**
     * Report the current location
     * @fires relocated
     * @fires locationChanged
     */
    reportLocation(): void;

    /**
     * Get the Current Location object
     * @return {displayedLocation | promise} location (may be a promise)
     */
    currentLocation(): any | Promise<any>;

    /**
     * Remove and Clean Up the Rendition
     */
    destroy(): void;

    /**
     * Get a Range from a Visible CFI
     * @param  {string} cfi EpubCfi String
     * @param  {string} ignoreClass
     * @return {range}
     */
    getRange(cfi: string, ignoreClass: string): any;

    /**
     * Get the Contents object of each rendered view
     * @returns {Contents[]}
     */
    getContents(): (Contents)[];

    /**
     * Get the views member from the manager
     * @returns {Views}
     */
    views(): any;
/**
     * A Rendered Location Range
     * @typedef location
     * @type {Object}
     * @property {object} start
     * @property {string} start.index
     * @property {string} start.href
     * @property {object} start.displayed
     * @property {EpubCFI} start.cfi
     * @property {number} start.location
     * @property {number} start.percentage
     * @property {number} start.displayed.page
     * @property {number} start.displayed.total
     * @property {object} end
     * @property {string} end.index
     * @property {string} end.href
     * @property {object} end.displayed
     * @property {EpubCFI} end.cfi
     * @property {number} end.location
     * @property {number} end.percentage
     * @property {number} end.displayed.page
     * @property {number} end.displayed.total
     * @property {boolean} atStart
     * @property {boolean} atEnd
     * @memberof Rendition
     */
     location:any;
}

export default Rendition;
