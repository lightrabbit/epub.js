/**
 * Handles Unzipping a requesting files from an Epub Archive
 * @class
 */
declare class Archive {
    constructor();

    /**
     * Open an archive
     * @param  {binary} input
     * @param  {boolean} isBase64 tells JSZip if the input data is base64 encoded
     * @return {Promise} zipfile
     */
    open(input: any, isBase64: boolean): Promise<any>;

    /**
     * Load and Open an archive
     * @param  {string} zipUrl
     * @param  {boolean} isBase64 tells JSZip if the input data is base64 encoded
     * @return {Promise} zipfile
     */
    openUrl(zipUrl: string, isBase64: boolean): Promise<any>;

    /**
     * Request a url from the archive
     * @param  {string} url  a url to request from the archive
     * @param  {string} [type] specify the type of the returned result
     * @return {Promise}
     */
    request(url: string, type?: string): Promise<any>;

    /**
     * Get a Blob from Archive by Url
     * @param  {string} url
     * @param  {string} [mimeType]
     * @return {Blob}
     */
    getBlob(url: string, mimeType?: string): Blob;

    /**
     * Get Text from Archive by Url
     * @param  {string} url
     * @param  {string} [encoding]
     * @return {string}
     */
    getText(url: string, encoding?: string): string;

    /**
     * Get a base64 encoded result from Archive by Url
     * @param  {string} url
     * @param  {string} [mimeType]
     * @return {string} base64 encoded
     */
    getBase64(url: string, mimeType?: string): string;

    /**
     * Create a Url from an unarchived item
     * @param  {string} url
     * @param  {object} [options.base64] use base64 encoding or blob url
     * @return {Promise} url promise with Url string
     */
    createUrl(url: string): Promise<string>;

    /**
     * Revoke Temp Url for a achive item
     * @param  {string} url url of the item in the archive
     */
    revokeUrl(url: string): void;

    destroy():void;
}

export default Archive;