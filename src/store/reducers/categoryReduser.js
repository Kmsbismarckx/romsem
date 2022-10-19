import categoriesData from '../../categories.json';

const categoriesValue = categoriesData.categories;
const categories = {};

categoriesValue.forEach((category) => {
  categories[category.id] = category;
});

const defaultValue = {
  categories,
};

const categoryReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, categories: action.payload };
    case 'SET_ID':
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;
