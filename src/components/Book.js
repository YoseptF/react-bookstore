import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = ({ book, handleRemoveBook }) => (
  <li>
    <div className="left">
      <span>{book.category}</span>
      <span className="title">{book.title}</span>
      <span>Author</span>
    </div>
    <div>
      <button type="button" data-id={book.id} onClick={handleRemoveBook}>
        Remove Book
      </button>
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.objectOf(Object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
