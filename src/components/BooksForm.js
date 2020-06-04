import React from 'react';

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'];

  return (
    <form>
      <input id="title" />
      <select>
        {
          categories.map(cat => (
            <option key={cat}>
              {cat}
            </option>
          ))
        }
      </select>
    </form>
  );
};

export default BooksForm;
