const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';
const initState = [];
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JaCeEb2PP7Tzrh2kEScl/books';

const Bookreducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOK:
      return action.payload;
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

export const getlist = (list) => ({
  type: GET_BOOK,
  payload: list,
});

export const list = () => async (dispatch) => {
  const listbook = [];
  const response = await fetch(URL);
  const responsearr = await response.json();
  const [ids, values] = [Object.keys(responsearr), Object.values(responsearr)];
  values.forEach((element, index) => {
    listbook.push(
      {
        id: ids[index],
        title: element[0].title,
        author: element[0].author,
        category: element[0].category,
      },
    );
  });
  dispatch(getlist(listbook));
};

export const ApiAddBook = (info) => async (dispatch) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        item_id: info.id,
        title: info.title,
        author: info.author,
        category: info.category,
      },
    ),
  });
  if (response.status === 201) {
    dispatch(BookAdd(info));
  }
};

export const ApiRemoveBook = (id) => async (dispatch) => {
  const response = await fetch(URL.concat('/').concat(id), {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  if (response.status === 201) {
    dispatch(RemoveBook(id));
  }
};

export default Bookreducer;
