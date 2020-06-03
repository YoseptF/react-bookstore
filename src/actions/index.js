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

const changeFilter = name => ({
  type: 'CHANGE_FILTER ',
  payload: {
    category: name,
  },
});

const clearFilter = () => ({
  type: 'CLEAR_FILTER ',
});

export {
  createBook, removeBook, changeFilter, clearFilter,
};
