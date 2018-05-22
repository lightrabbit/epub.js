import Section from "./section";
/**
 * A collection of Spine Items
 */
declare class Spine {
    constructor();

    /**
     * Unpack items from a opf into spine items
     * @param  {Package} _package
     * @param  {method} resolver URL resolver
     */
    unpack(_package: any, resolver: any): void;

    /**
     * Get an item from the spine
     * @param  {string|int} [target]
     * @return {Section} section
     * @example spine.get();
     * @example spine.get(1);
     * @example spine.get("chap1.html");
     * @example spine.get("#id1234");
     */
    get(target?: string | any): Section;

    /**
     * Loop over the Sections in the Spine
     * @return {method} forEach
     */
    each(): any;

}

export default Spine;
