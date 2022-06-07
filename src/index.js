import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import configureStore from './redux/configureStore';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import './index.css';
//  import { list } from './redux/books/books';

/*  const dispatch = useDispatch();
dispatch(list()); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configureStore}>
    <Router>
      <React.StrictMode>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="Categories" element={<Categories />} />
        </Routes>
      </React.StrictMode>
    </Router>
  </Provider>,
);
