import Contents from "./contents";
/**
 * Figures out the CSS values to apply for a layout
 * @class
 * @param {object} settings
 * @param {string} [settings.layout='reflowable']
 * @param {string} [settings.spread]
 * @param {int} [settings.minSpreadWidth=800]
 * @param {boolean} [settings.evenSpreads=false]
 */
declare class Layout {
    constructor(settings: {
        layout: string;
        spread: string;
        minSpreadWidth: any;
        evenSpreads: boolean;
    });

    /**
     * Switch the flow between paginated and scrolled
     * @param  {string} flow paginated | scrolled
     */
    flow(flow: string): void;

    /**
     * Switch between using spreads or not, and set the
     * width at which they switch to single.
     * @param  {string} spread true | false
     * @param  {boolean} min integer in pixels
     */
    spread(spread: string, min: boolean): void;

    /**
     * Calculate the dimensions of the pagination
     * @param  {number} _width  [description]
     * @param  {number} _height [description]
     * @param  {number} _gap    [description]
     */
    calculate(_width: number, _height: number, _gap: number): void;

    /**
     * Apply Css to a Document
     * @param  {Contents} contents
     * @return {Promise}
     */
    format(contents: Contents): Promise<any>;

    /**
     * Count number of pages
     * @param  {number} totalLength
     * @param  {number} pageLength
     * @return {{spreads: Number, pages: Number}}
     */
    count(totalLength: number, pageLength: number): any;

}

export default Layout;
