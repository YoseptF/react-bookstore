const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.payload.category,
      };
    case 'CLEAR_FILTER':
      return {
        ...state,
        filter: 'ALL',
      };

    default:
      return state;
  }
};

export default filterReducer;
