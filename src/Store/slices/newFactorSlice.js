import { createSlice } from "@reduxjs/toolkit";

const INIT = {
  productList: [],
  date: { from: null, to: null },
  additionalInfo: {
    text: "",
    priority: 1,
  },
};

const newFactorSlice = createSlice({
  name: "newFactor",
  initialState: { ...INIT },
  reducers: {
    addItemToFactor: (state, action) => {
      state.productList.push(action.payload);
    },
    removeItemFromFactor: (state, action) => {
      state.productList = state.productList.filter(
        (el) => el.id !== action.payload
      );
    },
    increaseItemCount: (state, { payload }) => {
      const indexOfTarget = state.productList.findIndex(
        (el) => el.id === payload.id
      );
      state.productList[indexOfTarget].count = payload.count;
    },
    setItemTypeValue: (state, { payload: { id, typeValue } }) => {
      const targetItemIndex = state.productList.findIndex((el) => el.id === id);
      state.productList[targetItemIndex].typeValue = typeValue;
    },
    changeFactorItemPrice: (state, { payload: { id, newPrice } }) => {
      const targetIndex = state.productList.findIndex((el) => el.id === id);
      state.productList[targetIndex].price = newPrice;
    },
    setFactorDate: (state, action) => {
      state.date = action.payload;
    },
    setFactorPriority: (state, action) => {
      state.additionalInfo.priority = action.payload;
    },
    setFactorAdditionalText: (state, action) => {
      state.additionalInfo.text = action.payload;
    },
    clearFactor: () => {
      return INIT;
    },
  },
});

export const {
  addItemToFactor,
  removeItemFromFactor,
  increaseItemCount,
  setItemTypeValue,
  changeFactorItemPrice,
  setFactorDate,
  setFactorPriority,
  setFactorAdditionalText,
  clearFactor,
} = newFactorSlice.actions;
export default newFactorSlice.reducer;
