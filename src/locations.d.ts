
import EpubCFI from "./epubcfi";
import Spine from "./spine";

/**
 * Find Locations for a Book
 * @param {Spine} spine
 * @param {request} request
 */
declare class Locations {
    _locations: string[];

    constructor(spine: Spine, request: any);
    /**
     * Load all of sections in the book to generate locations
     * @param  {int} chars how many chars to split on
     * @return {object} locations
     */
    generate(chars?: number): PromiseLike<string[]>;

    /**
     * Get a location from an EpubCFI
     * @param {EpubCFI} cfi
     * @return {number}
     */
    locationFromCfi(cfi: EpubCFI): number;

    /**
     * Get a percentage position in locations from an EpubCFI
     * @param {EpubCFI} cfi
     * @return {number}
     */
    percentageFromCfi(cfi: EpubCFI): number;

    /**
     * Get a percentage position from a location index
     * @param {number} location
     * @return {number}
     */
    percentageFromLocation(location: number): number;

    /**
     * Get an EpubCFI from location index
     * @param {number} loc
     * @return {EpubCFI} cfi
     */
    cfiFromLocation(loc: number): EpubCFI;

    /**
     * Get an EpubCFI from location percentage
     * @param {number} percentage
     * @return {EpubCFI} cfi
     */
    cfiFromPercentage(percentage: number): EpubCFI;

    /**
     * Load locations from JSON
     * @param {json} locations
     */
    load(locations: string|string[]): void;

    /**
     * Save locations to JSON
     * @return {json}
     */
    save(): string;

    /**
     * Get the current location
     * @type {number}
     */
    currentLocation: number;

    /**
     * Locations length
     */
    length(): void;

}

export default Locations;
