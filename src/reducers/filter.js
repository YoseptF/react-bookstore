/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';

const filterReducer = createReducer({},
  {
    CHANGE_FILTER: (state, action) => { state.currentFilter = action.payload; },
    CLEAR_FILTER: state => { state.currentFilter = 'All'; },
  });

export default filterReducer;
