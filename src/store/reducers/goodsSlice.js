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
  reducers: {
    addPieces(state, action) {
      const { id } = action.payload;
      const existingGood = state.entities[id];
      if (existingGood) {
        goodsAdapter.upsertOne(state, { id, pieces: existingGood.pieces + 1 });
      }
    },
    removePieces(state, action) {
      const { id } = action.payload;
      const existingGood = state.entities[id];
      if (existingGood && existingGood.pieces > 1) {
        goodsAdapter.upsertOne(state, { id, pieces: existingGood.pieces - 1 });
      }
    },
  },
});

export default goodsSlice.reducer;

export const { addPieces, removePieces } = goodsSlice.actions;

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

export const selectGoodPrice = (state, id) => {
  if (state.goods.entities[id])
    return state.goods.entities[id].price * state.goods.entities[id].pieces;
  return 0;
};

export const selectGoodWeight = (state, id) => {
  if (state.goods.entities[id])
    return state.goods.entities[id].weight * state.goods.entities[id].pieces;
  return 0;
};
