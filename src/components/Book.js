/* eslint react/prop-types: 0 */
import React from 'react';
import './Book.css';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="book">
      <div className="info">
        <p className="action">Action</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <ul>
          <li className="comments">Comments</li>
          <li>Remove</li>
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
