const ADD = 'Bookstore/books/ADD';
const REMOVE = 'Bookstore/books/REMOVE';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
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

export default reducer;
