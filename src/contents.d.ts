import EpubCFI from "./epubcfi";
/**
 * Handles DOM manipulation, queries and events for View contents
 * @class
 * @param {document} doc Document
 * @param {element} content Parent Element (typically Body)
 * @param {string} cfiBase Section component of CFIs
 * @param {number} sectionIndex Index in Spine of Conntent's Section
 */
declare class Contents {
    constructor(doc: any, content: any, cfiBase: string, sectionIndex: number);

    /**
     * Get DOM events that are listened for and passed along
     * @type {string[]}
     */
    static listenedEvents: string[];

    /**
     * Get or Set width
     * @param {number} [w]
     * @returns {number} width
     */
    width(w?: number): number;

    /**
     * Get or Set height
     * @param {number} [h]
     * @returns {number} height
     */
    height(h?: number): number;

    /**
     * Get or Set width of the contents
     * @param {number} [w]
     * @returns {number} width
     */
    contentWidth(w?: number): number;

    /**
     * Get or Set height of the contents
     * @param {number} [h]
     * @returns {number} height
     */
    contentHeight(h?: number): number;

    /**
     * Get the width of the text using Range
     * @returns {number} width
     */
    textWidth(): number;

    /**
     * Get the height of the text using Range
     * @returns {number} height
     */
    textHeight(): number;

    /**
     * Get documentElement scrollWidth
     * @returns {number} width
     */
    scrollWidth(): number;

    /**
     * Get documentElement scrollHeight
     * @returns {number} height
     */
    scrollHeight(): number;

    /**
     * Set overflow css style of the contents
     * @param {string} [overflow]
     */
    overflow(overflow?: string): void;

    /**
     * Set overflowX css style of the documentElement
     * @param {string} [overflow]
     */
    overflowX(overflow?: string): void;

    /**
     * Set overflowY css style of the documentElement
     * @param {string} [overflow]
     */
    overflowY(overflow?: string): void;

    /**
     * Set Css styles on the contents element (typically Body)
     * @param {string} property
     * @param {string} value
     * @param {boolean} [priority] set as "important"
     */
    css(property: string, value: string, priority?: boolean): void;

    /**
     * Get or Set the viewport element
     * @param {object} [options]
     * @param {string} [options.width]
     * @param {string} [options.height]
     * @param {string} [options.scale]
     * @param {string} [options.minimum]
     * @param {string} [options.maximum]
     * @param {string} [options.scalable]
     */
    viewport(options?: {
        width: string;
        height: string;
        scale: string;
        minimum: string;
        maximum: string;
        scalable: string;
    }): void;

    /**
     * Get the documentElement
     * @returns {element} documentElement
     */
    root(): any;

    /**
     * Get the location offset of a EpubCFI or an #id
     * @param {string | EpubCFI} target
     * @param {string} [ignoreClass] for the cfi
     * @returns { {left: Number, top: Number }
     */
    locationOf(target: string | EpubCFI, ignoreClass?: string): any;

    /**
     * Append a stylesheet link to the document head
     * @param {string} src url
     */
    addStylesheet(src: string): void;

    /**
     * Append stylesheet rules to a generate stylesheet
     * Array: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
     * Object: https://github.com/desirable-objects/json-to-css
     * @param {array | object} rules
     */
    addStylesheetRules(rules: any | any): void;

    /**
     * Append a script tag to the document head
     * @param {string} src url
     * @returns {Promise} loaded
     */
    addScript(src: string): Promise<any>;

    /**
     * Add a class to the contents container
     * @param {string} className
     */
    addClass(className: string): void;

    /**
     * Remove a class from the contents container
     * @param {string} removeClass
     */
    removeClass(removeClass: string): void;

    /**
     * Get a Dom Range from EpubCFI
     * @param {EpubCFI} _cfi
     * @param {string} [ignoreClass]
     * @returns {Range} range
     */
    range(_cfi: EpubCFI, ignoreClass?: string): any;

    /**
     * Get an EpubCFI from a Dom Range
     * @param {Range} range
     * @param {string} [ignoreClass]
     * @returns {EpubCFI} cfi
     */
    cfiFromRange(range: any, ignoreClass?: string): EpubCFI;

    /**
     * Get an EpubCFI from a Dom node
     * @param {node} node
     * @param {string} [ignoreClass]
     * @returns {EpubCFI} cfi
     */
    cfiFromNode(node: any, ignoreClass?: string): EpubCFI;

    /**
     * Size the contents to a given width and height
     * @param {number} [width]
     * @param {number} [height]
     */
    size(width?: number, height?: number): void;

    /**
     * Apply columns to the contents for pagination
     * @param {number} width
     * @param {number} height
     * @param {number} columnWidth
     * @param {number} gap
     */
    columns(width: number, height: number, columnWidth: number, gap: number): void;

    /**
     * Scale contents from center
     * @param {number} scale
     * @param {number} offsetX
     * @param {number} offsetY
     */
    scaler(scale: number, offsetX: number, offsetY: number): void;

    /**
     * Fit contents into a fixed width and height
     * @param {number} width
     * @param {number} height
     */
    fit(width: number, height: number): void;

    /**
     * Set the direction of the text
     * @param {string} [dir="ltr"] "rtl" | "ltr"
     */
    direction(dir?: string): void;

    /**
     * Set the writingMode of the text
     * @param {string} [mode="horizontal-tb"] "horizontal-tb" | "vertical-rl" | "vertical-lr"
     */
    writingMode(mode?: string): void;

}

export default Contents;
