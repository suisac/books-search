export const BOOK_API= 'https://openlibrary.org/people/mekBot/books/currently-reading.json';
export const COVER_API=(id)=>`https://covers.openlibrary.org/b/olid/${id}-M.jpg`;
export const SEARCH_API=(text,page)=>`https://openlibrary.org/search.json?q=${text}&page=${page}&limit=20`;
export const AUTHOR_IMG_API=(authorId)=>`https://covers.openlibrary.org/a/olid/${authorId}-M.jpg`;
export const AUTHOR_API=(authorId)=>`https://openlibrary.org/authors/${authorId}.json`