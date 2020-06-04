import React from 'react';
import Booklist from '../containers/BookList';
import Bookform from '../containers/BooksForm';
import './App.css';

function App() {
  return (
    <div className="selector">
      <nav>
        <div>
          <h1>Bookstore CMS</h1>
          <span>BOOKS</span>
          <span>CATEGORIES</span>
        </div>
        <i className="fas fa-user-check" />
      </nav>
      <Booklist />
      <Bookform />
    </div>
  );
}

export default App;
