import React from 'react';
import './Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { building } from '../redux/categories/categories';

const Categories = () => {
  const message = useSelector((state) => state.Check);
  const dispatch = useDispatch();

  const showmessage = () => {
    dispatch(building());
    document.querySelector('#msg').classList.add('message');
  };
  return (
    <div className="categoriespage">
      <button className="categoriesbtn" type="button" onClick={showmessage}>Check Status</button>
      <div id="msg">{message}</div>
    </div>
  );
};
export default Categories;
