import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import AddBook from './components/AddBook';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Book title="The Hunger Games" author="Suzanne Collins" />
    <Book title="Dune" author="Frank Herbert" />
    <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
    <AddBook />
    <Categories />
  </React.StrictMode>,
);
