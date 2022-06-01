import React from 'react';
import './Navbar.css';
import profile from './profile.png';

const Navbar = () => (
  <nav>
    <div className="menu">
      <ul>
        <li id="logo">Bookstores CMS</li>
        <li id="books">BOOKS</li>
        <li id="categories">CATEGORIES</li>
      </ul>
    </div>
    <div><img className="login" src={profile} alt="profile logo" /></div>
  </nav>
);

export default Navbar;
