import React, { useState } from 'react';
import './AddBook.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { ApiAddBook } from '../redux/books/books';

const AddBook = () => {
  const [value, setValue] = useState({ title: '', author: '', category: '' });
  const dispatch = useDispatch();

  const info = {
    id: uuidv4(),
    title: value.title,
    author: value.author,
    category: value.category,
  };

  const addnewbook = (e) => {
    e.preventDefault();
    dispatch(ApiAddBook(info));
    const titleinput = document.querySelector('#title');
    const authorinput = document.querySelector('#author');
    titleinput.value = '';
    authorinput.value = '';
  };

  const onChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
    console.log(value);
  };

  return (
    <div className="addBookdiv">
      <div>
        <p className="addtitle">ADD NEW BOOK</p>
      </div>
      <div>
        <form onSubmit={addnewbook} action="">
          <input id="title" placeholder="   Book Title" onChange={onChange} required />
          <input id="author" placeholder="   Author" onChange={onChange} required />
          <select id="category" onChange={onChange}>
            <option value="">-- Category --</option>
            <option value="Adventure">Adventure</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Comedy">Comedy</option>
          </select>
          <button className="add" type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
