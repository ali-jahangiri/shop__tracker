import { combineReducers } from "redux";
import factorHistorySlice from "./factorHistorySlice";

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import ProductSlice from "./ProductSlice";
import uiSlice from "./uiSlice";

const rootReducer = combineReducers({
  factorHistory: factorHistorySlice,
  product: ProductSlice,
  ui: uiSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["factorHistory", "product"],
};

export default persistReducer(persistConfig, rootReducer);
