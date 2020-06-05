import React from 'react';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
  }

  render() {
    const { title, category } = this.state;
    return (
      <form>
        <input id="title" value={title} />
        <select value={category}>
          {
            categories.map(cat => (
              <option key={cat}>
                {cat}
              </option>
            ))
          }
        </select>
        <button type="submit">New Book</button>
      </form>
    );
  }
}

export default BooksForm;
