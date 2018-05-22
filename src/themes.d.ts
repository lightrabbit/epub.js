import Rendition from "./rendition";

/**
 * Themes to apply to displayed content
 * @class
 * @param {Rendition} rendition
 */
declare class Themes {
    constructor(rendition: Rendition);

    /**
     * Add themes to be used by a rendition
     * @param {object | string}
     * @example themes.register("light", "http://example.com/light.css")
     * @example themes.register("light", { "body": { "color": "purple"}})
     * @example themes.register({ "light" : {...}, "dark" : {...}})
     */
    register(): void;
    register(theme: any | string): void;

    /**
     * Add a default theme to be used by a rendition
     * @param {object | string} theme
     * @example themes.register("http://example.com/default.css")
     * @example themes.register({ "body": { "color": "purple"}})
     */
    default(theme: any | string): void;

    /**
     * Adjust the font size of a rendition
     * @param {number} size
     */
    fontSize(size: number): void;

    /**
     * Adjust the font-family of a rendition
     * @param {string} f
     */
    font(f: string): void;

}

export default Themes;
