import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isNavigationActive: false,
  },
  reducers: {
    navigationSetter: (state, action) => {
      state.isNavigationActive = action.payload;
    },
  },
});

export const { navigationSetter } = uiSlice.actions;
export default uiSlice.reducer;
