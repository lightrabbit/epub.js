
/**
 * Map text locations to CFI ranges
 * @class
 */
declare class Mapping {
    constructor();

    /**
     * Find CFI pairs for entire section at once
     */
    section(): void;

    /**
     * Find CFI pairs for a page
     */
    page(): void;

}