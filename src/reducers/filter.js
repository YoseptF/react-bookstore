const filterReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        currentFilter: action.payload.category,
      };
    case 'CLEAR_FILTER':
      console.log('state', state);
      return {
        ...state,
        currentFilter: 'ALL',
      };

    default:
      return state;
  }
};

export default filterReducer;
