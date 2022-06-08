/* eslint react/prop-types: 0 */
import React from 'react';
import './Book.css';
import { useDispatch } from 'react-redux';
import { ApiRemoveBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const bookremove = (e) => {
    dispatch(ApiRemoveBook(e.target.closest('.book').id));
  };

  const {
    id, title, author,
  } = props;
  return (
    <div className="book" id={id} key={id}>
      <div className="info">
        <p className="action">Action</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <ul>
          <li className="comments">Comments</li>
          <li><button type="button" onClick={bookremove}>Remove</button></li>
          <li className="edit">Edit</li>
        </ul>
      </div>
      <div className="completed">
        <div>Image</div>
        <div className="percentdiv">
          <p className="percent">80%</p>
          <p className="completed-text">Completed</p>
        </div>
      </div>
      <div className="chapter">
        <p className="current">CURRENT CHAPTER</p>
        <p className="numchapter">Chapter 17</p>
        <button className="update" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};
export default Book;
