import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';

const initialState = {
  filter: {
    currentFilter: 'ALL',
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

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
