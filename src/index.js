import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Book title="The Hunger Games" author="Suzanne Collins" />
  </React.StrictMode>,
);
