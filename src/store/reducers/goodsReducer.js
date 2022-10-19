import goodsData from '../../goods.json';

const goodsValue = goodsData.goods;
const goodsId = goodsValue.map((item) => item.id);
const goods = {};

goodsValue.forEach((good) => {
  goods[good.id] = good;
});

const defaultValue = {
  goods,
  goodsId,
};

const goodsReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case 'SET_GOOD':
      return { ...state, goods: action.payload };
    default:
      return state;
  }
};

export default goodsReducer;
