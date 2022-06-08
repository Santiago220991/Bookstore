/* eslint react/prop-types: 0 */
import React from 'react';
import './Book.css';
import { useDispatch } from 'react-redux';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { ApiRemoveBook } from '../redux/books/books';

const config = {
  percent: 75,
  size: 80,
};

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
          <li><button className="remove" type="button" onClick={bookremove}>Remove</button></li>
          <li className="edit">Edit</li>
        </ul>
      </div>
      <div className="completed">
        <CircularProgressBar percent={config.percent} size={config.size} />
        <div className="percentdiv">
          <p className="percent">{`${config.percent}%`}</p>
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
