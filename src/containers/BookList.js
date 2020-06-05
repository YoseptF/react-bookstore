import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BookList = ({ books, dispatch }) => {
  const handleRemoveBook = e => {
    const { id } = e.currentTarget.dataset;
    dispatch(removeBook(id));
  };

  return (
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
          .map(book => <Book book={book} handleRemoveBook={handleRemoveBook} key={book.id} />)
      }
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
