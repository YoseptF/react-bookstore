import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './Book';
import CategoryFilter from './CategoryFilter';

const BookList = ({ books, filter }) => (
  <>
    <CategoryFilter />
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
          <td>
            Remove
          </td>
        </tr>
      </th>
      {
        books.filter(book => book.category === filter || filter === 'ALL').map(book => <Book book={book} key={book.id} />)
      }
    </table>
  </>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(Object).isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

export default connect(mapStateToProps)(BookList);
