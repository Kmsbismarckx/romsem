import goodsData from "../../goods.json";
const goods = goodsData["goods"];

const defaultValue = {
  goods: goods,
};

export const goodsReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, goods: action.payload };
    default:
      return state;
  }
};
