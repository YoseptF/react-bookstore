import React from 'react';
import { connect } from 'redux';
import propTypes from 'prop-types';
import { categories } from '../containers/BooksForm';

const CategoryFilter = ({ changeCategoryHandler }) => (
  <select onChange={changeCategoryHandler}>
    {
    categories.map(category => <option value={category} key={category}>{[...category, 'ALL']}</option>)
  }
  </select>
);
CategoryFilter.propTypes = {
  changeCategoryHandler: propTypes.func.isRequired,
};

export default connect(null, null)(CategoryFilter);
