const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initState = [
  {
    id: 0,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 1,
    title: 'Frank Herbert',
    author: 'Dune',
  },
];
const Bookreducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export const BookAdd = (info) => ({
  type: ADD_BOOK,
  payload: info,
});

export const RemoveBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default Bookreducer;
