import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

const initialState = {
  filter: 'ALL',
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

const store = createStore(rootReducer, initialState);

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
