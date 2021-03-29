import { createSlice } from "@reduxjs/toolkit";

const factorHistorySlice = createSlice({
  name: "factorHistory",
  initialState: [],
  reducers: {
    addFactor: (state, action) => {
      state.push(action.payload);
    },
    removeFactor: (state, action) => {
      state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addFactor, removeFactor } = factorHistorySlice.actions;
export default factorHistorySlice.reducer;
