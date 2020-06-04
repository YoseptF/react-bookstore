import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { createBook } from '../actions/index';
import './BooksForm.css';

export const categories = [
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
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  handleSubmit() {
    const { title, category } = this.state;
    const { dispatch } = this.props;
    dispatch(createBook({
      id: Math.floor(Math.random() * 100),
      title,
      category,
    }));
  }

  render() {
    const { title, category } = this.state;
    return (
      <form>
        <div className="inputCombo">
          <p htmlFor="title">Add New Book</p>
          <input
            type="text"
            placeholder="New Book"
            name="title"
            id="title"
            value={title}
            onChange={this.handleChangeTitle}
          />
        </div>
        <select value={category} onChange={this.handleChangeCategory}>
          {
            categories.map(cat => (
              <option key={cat}>
                {cat}
              </option>
            ))
          }
        </select>
        <button type="button" onClick={this.handleSubmit}>New Book</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  dispatch: propTypes.func.isRequired,
};

export default connect(null, null)(BooksForm);
