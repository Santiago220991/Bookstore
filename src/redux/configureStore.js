import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Bookreducer from './books/books';
import Check from './categories/categories';

const root = combineReducers({ Bookreducer, Check });

const configureStore = createStore(root, applyMiddleware(thunk));

export default configureStore;
