import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';

const initialState = {
  filter: {
    currentFilter: 'All',
  },
  books: [
    {
      id: Math.random(),
      title: 'Game Of Thrones',
      category: 'History',
    },
    {
      id: Math.random(),
      title: 'The witcher',
      category: 'History',
    },
  ],
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
