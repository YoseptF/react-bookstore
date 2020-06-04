const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: {
    book,
  },
});

const removeBook = id => ({
  type: 'REMOVE_BOOK',
  payload: {
    id,
  },
});

export { createBook, removeBook };
