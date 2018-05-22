/**
 * Parsing and creation of EpubCFIs: http://www.idpf.org/epub/linking/cfi/epub-cfi.html
 * Implements:
 * - Character Offset: epubcfi(/6/4[chap01ref]!/4[body01]/10[para05]/2/1:3)
 * - Simple Ranges : epubcfi(/6/4[chap01ref]!/4[body01]/10[para05],/2/1:1,/3:4)
 * Does Not Implement:
 * - Temporal Offset (~)
 * - Spatial Offset (@)
 * - Temporal-Spatial Offset (~ + @)
 * - Text Location Assertion ([)
 * @class
 * @param {string | Range | Node } [cfiFrom]
 * @param {string | object} [base]
 * @param {string} [ignoreClass] class to ignore when parsing DOM
 */
declare class EpubCFI {
    constructor(cfiFrom?: string | any | any, base?: string | any, ignoreClass?: string);

    /**
     * Parse a cfi string to a CFI object representation
     * @param {string} cfiStr
     * @returns {object} cfi
     */
    parse(cfiStr: string): any;

    /**
     * Convert CFI to a epubcfi(...) string
     * @returns {string} epubcfi
     */
    toString(): string;

    /**
     * Compare which of two CFIs is earlier in the text
     * @returns {number} First is earlier = 1, Second is earlier = -1, They are equal = 0
     */
    compare(): number;

    /**
     * Create a CFI object from a Range
     * @param {Range} range
     * @param {string | object} base
     * @param {string} [ignoreClass]
     * @returns {object} cfi
     */
    fromRange(range: any, base: string | any, ignoreClass?: string): any;

    /**
     * Create a CFI object from a Node
     * @param {Node} anchor
     * @param {string | object} base
     * @param {string} [ignoreClass]
     * @returns {object} cfi
     */
    fromNode(anchor: any, base: string | any, ignoreClass?: string): any;

    /**
     * Creates a DOM range representing a CFI
     * @param {document} _doc document referenced in the base
     * @param {string} [ignoreClass]
     * @return {Range}
     */
    toRange(_doc: any, ignoreClass?: string): any;

    /**
     * Check if a string is wrapped with "epubcfi()"
     * @param {string} str
     * @returns {boolean}
     */
    isCfiString(str: string): boolean;

    /**
     * Collapse a CFI Range to a single CFI Position
     * @param {boolean} [toStart=false]
     */
    collapse(toStart?: boolean): void;

}

export default EpubCFI;