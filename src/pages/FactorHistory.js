import { createSlice } from "@reduxjs/toolkit";

const factorHistory = createSlice({
  name: "factorHistory",
  initialState: [],
  reducers: {
    addFactorTOHistory: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    clearFactorHistory: (state) => {
      return [];
    },
  },
});

export const { addFactorTOHistory } = factorHistory.actions;
export default factorHistory.reducer;
