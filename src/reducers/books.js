import { createReducer } from '@reduxjs/toolkit';

const bookReducer = createReducer(
  [],
  {
    CREATE_BOOK: (state, action) => { state.push(action.payload); },
    REMOVE_BOOK: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
);

export default bookReducer;
