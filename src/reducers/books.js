const bookReducer = (state = {}, action) => {
  let index = -1;
  if (action.payload.id) {
    index = state.books.findIndex(book => book.id === action.payload.id);
  }

  switch (action.type) {
    case 'CREATE_BOOK':
      return {
        ...state,
        books: [...state.books, action.payload.book],
      };
    case 'REMOVE_BOOK':
      if (index === -1) {
        return { ...state };
      }
      return {
        ...state,
        books: [
          ...state.books.slice(0, index),
          ...state.books.slice(index + 1),
        ],
      };

    default:
      return { ...state };
  }
};

export default bookReducer;
