import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    lastImportedBackupFile: "",
  },
  reducers: {
    setLastImportedBackupFile: (state, action) => {
      state.lastImportedBackupFile = action.payload;
    },
  },
});

export const { setLastImportedBackupFile } = settingSlice.actions;
export default settingSlice.reducer;
