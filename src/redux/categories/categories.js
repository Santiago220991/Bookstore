const CONSTRUCTION = 'Bookstore/categories/CONSTRUCTION';

const Check = (state = [], action) => {
  switch (action.type) {
    case CONSTRUCTION:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};

export const Categories = () => ({ type: CONSTRUCTION });

export default Check;
