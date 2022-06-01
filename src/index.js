import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Book from './components/Book';
//  import AddBook from './components/AddBook';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={(<Book title="The Hunger Games" author="Suzanne Collins" />)} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </React.StrictMode>
  </Router>,
);
