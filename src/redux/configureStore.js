import { combineReducers } from 'redux';
import book from './books/books';
import Check from './categories/categories';

const root = combineReducers(book, Check);

export default root;
