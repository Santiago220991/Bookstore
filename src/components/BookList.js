import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  const bookslist = useSelector((state) => state.Bookreducer);
  return (
    <div className="booklist">
      {bookslist.map((element) => (
        <Book
          key={element.id}
          id={element.id}
          title={element.title}
          author={element.author}
        />
      ))}
      <AddBook />
    </div>
  );
};
export default BookList;
