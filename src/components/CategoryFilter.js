import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { categories } from '../containers/BooksForm';

const CategoryFilter = ({ changeCategoryHandler }) => (
  <select onChange={changeCategoryHandler}>
    {
    [...categories, 'ALL'].map(category => <option value={category} key={category}>{category}</option>)
  }
  </select>
);
CategoryFilter.propTypes = {
  changeCategoryHandler: propTypes.func.isRequired,
};

export default connect(null, null)(CategoryFilter);
