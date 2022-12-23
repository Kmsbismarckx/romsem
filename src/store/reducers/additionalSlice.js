import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import additionalData from '../../additional.json';

const additionalValue = additionalData.additional;

const additionalAdapter = createEntityAdapter();
const initialState = additionalAdapter.getInitialState();

additionalValue.forEach((good) => {
  const id = `additional${good.id}`;
  initialState.ids.push(id);
  initialState.entities[id] = { ...good, id };
});

const additionalSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default additionalSlice.reducer;

export const {
  selectAll: selectAllAdditional,
  selectById: selectAdditionalById,
  selectIds: selectAdditionalIds,
} = additionalAdapter.getSelectors((state) => state.additional);

export const selectAdditionalPrice = (state, id) => {
  if (state.additional.entities[id]) return state.additional.entities[id].price;
  return 0;
};
