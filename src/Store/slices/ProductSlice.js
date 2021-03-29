import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    category: [],
    allProducts: {},
  },
  reducers: {
    addCategory: (state, action) => {
      state.category.push(action.payload);
    },
    addProduct: ({ allProducts }, { payload }) => {
      allProducts[payload.parentCategory] = !allProducts[payload.parentCategory]
        ? (() => {
            return (allProducts[payload.parentCategory] = [payload.values]);
          })()
        : (allProducts[payload.parentCategory] = [
            ...allProducts[payload.parentCategory],
            payload.values,
          ]);
    },
    removeProduct: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
    editProduct: (state, action) => {
      return state.map((el) =>
        el.id === action.payload ? { ...action.payload } : el
      );
    },
    editCategoryTitle: ({ category }, { payload: { oldTitle, newTitle } }) => {
      category[category.indexOf(oldTitle)] = newTitle;
    },
    removeCategory: (state, action) => {
      state.category = state.category.filter((el) => el !== action.payload);
      state.allProducts[action.payload] = undefined;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  editProduct,
  addCategory,
  editCategoryTitle,
  removeCategory,
} = productSlice.actions;
export default productSlice.reducer;
