import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </React.StrictMode>
  </Router>,
);
