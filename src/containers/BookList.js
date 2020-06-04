import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter, clearFilter } from '../actions';

const BookList = ({ books, dispatch, filter }) => {
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
      <table>
        <th>
          <tr>
            <td>
              ID
            </td>
            <td>
              Title
            </td>
            <td>
              Category
            </td>
          </tr>
        </th>
        {
          Object.values(books)
            .filter(book => book.category === filter || filter === 'ALL')
            .map(book => <Book book={book} handleRemoveBook={handleRemoveBook} key={book.id} />)
        }
      </table>
    </>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

export default connect(mapStateToProps)(BookList);
