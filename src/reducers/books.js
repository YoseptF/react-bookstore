const bookReducer = (state = [], action) => {
  let index = -1;
  if (action.payload && action.payload.id) {
    index = state.findIndex(book => book.id === parseFloat(action.payload.id));
  }

  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state.books, action.payload.book,
      ];
    case 'REMOVE_BOOK':
      if (index === -1) {
        return [...state];
      }
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];

    default:
      return [...state];
  }
};

export default bookReducer;
