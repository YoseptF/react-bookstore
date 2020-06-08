const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        currentFilter: action.payload.category,
      };
    case 'CLEAR_FILTER':
      return {
        ...state,
        currentFilter: 'ALL',
      };

    default:
      return state;
  }
};

export default filterReducer;
