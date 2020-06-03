import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import bookReducer from './reducers/books';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const initialState = {
  books: [
    {
      id: Math.random(),
      title: 'Game Of Thrones',
      categories: 'History',
    },
    {
      id: Math.random(),
      title: 'The witcher',
      categories: 'History',
    },
  ],
};

const store = createStore(bookReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
