import React from 'react';
import './Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { building } from '../redux/categories/categories';

const Categories = () => {
  const message = useSelector((state) => state.Check);
  const dispatch = useDispatch();

  const showmessage = () => {
    dispatch(building());
  };
  return (
    <div>
      <button className="categoriesbtn" type="button" onClick={showmessage}>Check Status</button>
      <div id="message">{message}</div>
    </div>
  );
};
export default Categories;
