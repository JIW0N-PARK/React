export function selectBook(book) {
  return {
    type: 'BOOK_SELECT',
    payload: book
  };
}


export function likeBook(book) {
  return {
    type: 'BOOK_LIKE',
    title: book.title
  };
}

export function addNewBook(book) {
  return {
    type: 'BOOK_ADD'
  };
}