import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';

const Book = ({ book, dispatch }) => {
  const handleRemoveBook = () => {
    dispatch(removeBook(book));
  };

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={handleRemoveBook}>Remove Book</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(Book).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(null, null)(Book);
