import React from 'react';
import Booklist from '../containers/BookList';
import Bookform from '../containers/BooksForm';
import './App.css';

function App() {
  return (
    <div className="selector">
      <Booklist />
      <Bookform />
    </div>
  );
}

export default App;
