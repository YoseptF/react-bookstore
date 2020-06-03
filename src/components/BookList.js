import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './Book';

const BookList = ({ books }) => {
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
        books.map(book => <Book book={book} key={book.id} />)
      }
    </table>
  );
};

BookList.prototype = {
  books: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
