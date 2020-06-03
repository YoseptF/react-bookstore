import React from 'react';
import Booklist from './BookList';
import Bookform from './BooksForm';
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
