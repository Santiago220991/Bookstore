import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import profile from './profile.png';

const Navbar = () => (
  <nav>
    <div className="menu">
      <ul>
        <li className="logo">Bookstores CMS</li>
        <li className="books"><Link to="/" style={{ textDecoration: 'none' }}>BOOKS</Link></li>
        <li className="categories"><Link to="categories" style={{ textDecoration: 'none' }}>CATEGORIES</Link></li>
      </ul>
    </div>
    <div><img className="login" src={profile} alt="profile logo" /></div>
  </nav>
);

export default Navbar;
