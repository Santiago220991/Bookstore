import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <div className="logo">Math Magicians</div>
    <div className="menu">
      <ul>
        <li key={1} className="home"><Link to="/">Home</Link></li>
        <li key={2} className="navcalc"><Link to="calculator">Calculator</Link></li>
        <li key={3} className="quote"><Link to="quote">Quote</Link></li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
