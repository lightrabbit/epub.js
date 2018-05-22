
/**
 * Represents a Section of the Book
 * In most books this is equivelent to a Chapter
 * @param {object} item  The spine item representing the section
 * @param {object} hooks hooks for serialize and content
 */
declare class Section {
    constructor(item: any, hooks: any);

    /**
     * Load the section from its url
     * @param  {method} _request a request method to use for loading
     * @return {document} a promise with the xml document
     */
    load(_request: any): any;

    /**
     * Render the contents of a section
     * @param  {method} _request a request method to use for loading
     * @return {string} output a serialized XML Document
     */
    render(_request: any): string;

    /**
     * Find a string in a section
     * @param  {string} _query The query string to find
     * @return {object[]} A list of matches, with form {cfi, excerpt}
     */
    find(_query: string): any[];

    /**
     * Reconciles the current chapters layout properies with
     * the global layout properities.
     * @param {object} global  The globa layout settings object, chapter properties string
     * @return {object} layoutProperties Object with layout properties
     */
    reconcileLayoutSettings(global: any): any;

    /**
     * Get a CFI from a Range in the Section
     * @param  {range} _range
     * @return {string} cfi an EpubCFI string
     */
    cfiFromRange(_range: any): string;

    /**
     * Get a CFI from an Element in the Section
     * @param  {element} el
     * @return {string} cfi an EpubCFI string
     */
    cfiFromElement(el: any): string;

    /**
     * Unload the section document
     */
    unload(): void;

}
export default Section;
