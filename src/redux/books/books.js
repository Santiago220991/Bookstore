const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const Book = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: state.length,
        title: action.payload.title,
        author: action.payload.author,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export const AddBook = (title, author) => ({
  type: ADD_BOOK,
  payload: { title, author },
});

export const RemoveBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default Book;
