import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({ books }) => (
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

BookList.propTypes = {
  books: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
