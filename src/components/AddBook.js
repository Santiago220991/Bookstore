import React, { useState } from 'react';
import './AddBook.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { BookAdd } from '../redux/books/books';

const AddBook = () => {
  const [value, setValue] = useState({ title: '', author: '' });
  const dispatch = useDispatch();

  const info = {
    id: uuidv4(),
    title: value.title,
    author: value.author,
  };

  const addnewbook = (e) => {
    e.preventDefault();
    dispatch(BookAdd(info));
    const titleinput = document.querySelector('#title');
    const authorinput = document.querySelector('#author');
    titleinput.value = '';
    authorinput.value = '';
  };

  const onChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  return (
    <div className="addBookdiv">
      <div>
        <p id="addtitle">ADD NEW BOOK</p>
      </div>
      <div>
        <form onSubmit={addnewbook} action="">
          <input id="title" placeholder="   Book Title" onChange={onChange} required />
          <input id="author" placeholder="   Author" onChange={onChange} required />
          <button id="add" type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
