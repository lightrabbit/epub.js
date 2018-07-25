import { IDictionary } from './common';

interface INavItem {
    id?: string;
    href: string;
    label: string;
    subitems: INavItem[]; //TODO: 需要进一步确认
    parent: INavItem;//TODO: 需要进一步确认
}

interface ILandmark {
    href: string;
    label: string;
    type?: string;
}

/**
 * Navigation Parser
 * @param {document} xml navigation html / xhtml / ncx
 */
declare class Navigation {
    toc: INavItem[];
    tocByHref: IDictionary<INavItem>;
    tocById: IDictionary<INavItem>;

    landmarks: ILandmark[];
    landmarksByType: IDictionary<ILandmark>;

    length: number;

    constructor(xml: any);
    /**
     * Parse out the navigation items
     * @param {document} xml navigation html / xhtml / ncx
     */
    parse(xml: any): void;

    /**
     * Get an item from the navigation
     * @param  {string} target
     * @return {object} navItems
     */
    get(target: string): any;

    /**
     * Get a landmark by type
     * List of types: https://idpf.github.io/epub-vocabs/structure/
     * @param  {string} type
     * @return {object} landmarkItems
     */
    landmark(type: string): any;

    /**
     * Load Spine Items
     * @param  {object} json the items to be loaded
     */
    load(json: any): void;

    /**
     * forEach pass through
     * @param  {Function} fn function to run on each item
     * @return {method} forEach loop
     */
    forEach(fn: any): any;

}

export default Navigation;