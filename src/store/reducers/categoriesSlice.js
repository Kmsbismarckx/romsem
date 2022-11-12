import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import categoriesData from '../../categories.json';

const categoriesValue = categoriesData.categories;

const categoriesAdapter = createEntityAdapter();
const initialState = categoriesAdapter.getInitialState();

categoriesValue.forEach((category) => {
  initialState.ids.push(category.id);
  initialState.entities[category.id] = category;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;

export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
} = categoriesAdapter.getSelectors((state) => state.categories);

export const selectSideMenuCategories = createSelector([selectAllCategories], (categories) =>
  categories.filter(
    (category) =>
      category.name !== 'acne' && category.name !== 'chicken' && category.name !== 'combo'
  )
);
