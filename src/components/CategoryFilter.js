import React from 'react';
import { connect } from 'redux';
import propTypes from 'prop-types';
import { categories } from './BooksForm';
import { changeFilter, clearFilter } from '../actions';

const CategoryFilter = ({ dispatch }) => {
  const changeHandler = e => {
    const filter = e.target.value;
    if (filter !== 'ALL') {
      dispatch(changeFilter(filter));
    } else {
      dispatch(clearFilter());
    }
  };

  return (
    <select onChange={changeHandler}>
      {
      categories.map(category => <option value={category} key={category}>{[...category, 'ALL']}</option>)
    }
    </select>
  );
};

CategoryFilter.propTypes = {
  dispatch: propTypes.func.isRequired,
};

export default connect(null, null)(CategoryFilter);
