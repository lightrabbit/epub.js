

/**
 * Page List Parser
 * @param {document} [xml]
 */
declare class PageList {
    constructor(xml?: any);

    /**
     * Parse PageList Xml
     * @param  {document} xml
     */
    parse(xml: any): void;

    /**
     * Get a PageList result from a EpubCFI
     * @param  {string} cfi EpubCFI String
     * @return {string} page
     */
    pageFromCfi(cfi: string): string;

    /**
     * Get an EpubCFI from a Page List Item
     * @param  {string} pg
     * @return {string} cfi
     */
    cfiFromPage(pg: string): string;

    /**
     * Get a Page from Book percentage
     * @param  {number} percent
     * @return {string} page
     */
    pageFromPercentage(percent: number): string;

    /**
     * Returns a value between 0 - 1 corresponding to the location of a page
     * @param  {int} pg the page
     * @return {number} percentage
     */
    percentageFromPage(pg: any): number;

    /**
     * Returns a value between 0 - 1 corresponding to the location of a cfi
     * @param  {string} cfi EpubCFI String
     * @return {number} percentage
     */
    percentageFromCfi(cfi: string): number;

}

export default PageList;