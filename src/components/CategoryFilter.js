import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { categories } from '../containers/BooksForm';
import './CategoryFilter.css';

const CategoryFilter = ({ changeCategoryHandler }) => (
  <div className="filter">
    <select onChange={changeCategoryHandler}>
      {
    [...categories, 'ALL'].map(category => <option value={category} key={category}>{category}</option>)
  }
    </select>
  </div>
);
CategoryFilter.propTypes = {
  changeCategoryHandler: propTypes.func.isRequired,
};

export default connect(null, null)(CategoryFilter);
