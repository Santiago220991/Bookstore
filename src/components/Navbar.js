import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import profile from './profile.png';

const Navbar = () => (
  <nav>
    <div className="menu">
      <ul>
        <li id="logo">Bookstores CMS</li>
        <li id="books"><Link to="/" style={{ textDecoration: 'none' }}>BOOKS</Link></li>
        <li id="categories"><Link to="categories" style={{ textDecoration: 'none' }}>CATEGORIES</Link></li>
      </ul>
    </div>
    <div><img className="login" src={profile} alt="profile logo" /></div>
  </nav>
);

export default Navbar;
