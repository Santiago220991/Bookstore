import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { list } from '../redux/books/books';

const BookList = () => {
  const bookslist = useSelector((state) => state.Bookreducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(list());
  }, []);
  return (
    <div className="booklist">
      {bookslist.map((element) => (
        <Book
          key={element.id}
          id={element.id}
          title={element.title}
          author={element.author}
          category={element.category}
          progress={element.progress}
        />
      ))}
      <AddBook />
    </div>
  );
};
export default BookList;
