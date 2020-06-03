import React from 'react';
import PropTypes, { element } from 'prop-types';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => (
  const booksFromRedux; // connect to redux later

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
      booksFromRedux.forEach((book, index) => {
        <Book book={book} key={index}></Book>
      })
    }
  </table>
);

export default BookList;
