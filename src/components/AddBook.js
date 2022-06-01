import React from 'react';
import './AddBook.css';

const AddBook = () => (
  <div className="addBookdiv">
    <div>
      <p id="addtitle">ADD NEW BOOK</p>
    </div>
    <div>
      <form>
        <input id="bookname" placeholder="   Book Title" />
        <input id="bookauthor" placeholder="   Author" />
        <button id="add" type="button">ADD BOOK</button>
      </form>
    </div>
  </div>
);

export default AddBook;
