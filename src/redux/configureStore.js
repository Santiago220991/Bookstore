import { createStore, combineReducers } from 'redux';
import Bookreducer from './books/books';
import Check from './categories/categories';

const root = combineReducers({ Bookreducer, Check });

const configureStore = createStore(root);

export default configureStore;
