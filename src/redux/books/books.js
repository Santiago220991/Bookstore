const ADD = 'Bookstore/books/ADD';
const REMOVE = 'Bookstore/books/REMOVE';

const Book = (state, action) => {
  switch (action.type) {
    case ADD:
      return [...state, {
        id: state.lenght,
        title: action.payload.title,
        author: action.payload.author,
      }];
    case REMOVE:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export const AddBook = (title, author) => ({
  type: ADD,
  payload: { title, author },
});

export const RemoveBook = (id) => ({
  type: REMOVE,
  payload: id,
});

export default Book;
