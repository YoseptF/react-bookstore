import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { createBook } from '../actions/index';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const { state } = this;

    this.setState({
      ...state,
      [name]: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { dispatch } = this.props;
    dispatch(createBook({
      id: Math.floor(Math.random() * 100),
      title,
      category,
    }));
    this.setState({
      title: '',
      category: 'ALL',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form>
        <input id="title" value={title} onChange={this.handleChange} />
        <select value={category} onChange={this.handleChange}>
          {
            categories.map(cat => (
              <option key={cat}>
                {cat}
              </option>
            ))
          }
        </select>
        <button type="submit" onClick={this.handleSubmit}>New Book</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  dispatch: propTypes.func.isRequired,
};

export default connect(null, null)(BooksForm);
