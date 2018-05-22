
/**
 * Handles Parsing and Accessing an Epub Container
 * @class
 * @param {document} [containerDocument] xml document
 */
declare class Container {
    constructor(containerDocument?: any);

    /**
     * Parse the Container XML
     * @param  {document} containerDocument
     */
    parse(containerDocument: any): void;

}

export default Container;