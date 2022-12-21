import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import goodsData from '../../goods.json';

const goodsValue = goodsData.goods;

const goodsAdapter = createEntityAdapter();
const initialState = goodsAdapter.getInitialState();

goodsValue.forEach((good) => {
  initialState.ids.push(good.id);
  initialState.entities[good.id] = good;
});

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
});

export default goodsSlice.reducer;

export const {
  selectAll: selectAllGoods,
  selectById: selectGoodById,
  selectIds: selectGoodIds,
} = goodsAdapter.getSelectors((state) => state.goods);

export const selectNewGoods = createSelector([selectAllGoods], (goods) =>
  goods.filter((good) => good.isNew)
);

export const selectPopularGoods = createSelector([selectAllGoods], (goods) =>
  goods.filter((good) => good.isPopular)
);

export const selectGoodPrice = createSelector([selectGoodById], (good) => good.price * good.pieces);
