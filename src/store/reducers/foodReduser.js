import categoriesData from "../../categories.json";
const categories = categoriesData["categories"];

const defaultValue = {
  categories: categories,
};

export const foodReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
