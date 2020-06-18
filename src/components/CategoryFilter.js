import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { categories } from '../containers/BooksForm';
import './CategoryFilter.css';

const CategoryFilter = ({ changeCategoryHandler }) => {
  const currentFilter = useSelector(state => state.filter.currentFilter);

  return (
    <div className="filter">
      <select value={currentFilter} onChange={changeCategoryHandler}>
        {
    [...categories, 'All'].map(category => <option value={category} key={category}>{category}</option>)
  }
      </select>
    </div>
  );
};
CategoryFilter.propTypes = {
  changeCategoryHandler: propTypes.func.isRequired,
};

export default CategoryFilter;
