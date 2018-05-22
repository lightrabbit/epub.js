import Book from './book';
/**
 * Creates a new Book
 * @param {string|ArrayBuffer} url URL, Path or ArrayBuffer
 * @param {object} options to pass to the book
 * @returns {Book} a new Book object
 * @example ePub("/path/to/book.epub", {})
 */
declare function ePub(url: string | ArrayBuffer, options: any): Book;

export default ePub;