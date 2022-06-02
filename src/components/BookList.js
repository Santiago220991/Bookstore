import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => (
  <div className="booklist">
    <Book title="The Hunger Games" author="Suzanne Collins" />
    <Book title="Dune" author="Frank Herbert" />
    <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
    <AddBook />
  </div>
);

export default BookList;
