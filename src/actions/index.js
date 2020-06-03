const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: {
    book,
  },
});

const removeBook = book => ({
  type: 'REMOVE_BOOK',
  payload: {
    id: book.id,
  },
});

export { createBook, removeBook };
