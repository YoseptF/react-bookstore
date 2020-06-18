import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter, clearFilter } from '../actions';

const BookList = () => {
  const books = useSelector(state => state.books);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleRemoveBook = e => {
    const { id } = e.currentTarget.dataset;
    dispatch(removeBook(id));
  };

  const changeCategoryHandler = e => {
    const filter = e.target.value;
    if (filter !== 'ALL') {
      dispatch(changeFilter(filter));
    } else {
      dispatch(clearFilter());
    }
  };

  return (
    <>
      <CategoryFilter changeCategoryHandler={changeCategoryHandler} />
      <ul>
        {
          books
            .filter(book => book.category === filter.currentFilter || filter.currentFilter === 'All')
            .map(book => <Book book={book} handleRemoveBook={handleRemoveBook} key={book.id} />)
        }
      </ul>
    </>
  );
};

export default BookList;
