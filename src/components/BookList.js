import { React, useEffect, useState } from 'react';
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
  const [filter, setFilter] = useState({ value: '' });
  const Filtering = (e) => {
    const newfilter = { ...filter, value: e.target.value };
    setFilter(newfilter);
  };

  return (
    <div className="booklist">
      <select className="filter" onChange={Filtering}>
        <option value="">-- Search by category --</option>
        <option value="Adventure">Adventure</option>
        <option value="Action">Action</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Comedy">Comedy</option>
      </select>
      {bookslist.filter((item) => {
        if (filter.value === '') {
          return item;
        } if (item.category === filter.value) {
          return item;
        }
        return false;
      }).map((element) => (
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
