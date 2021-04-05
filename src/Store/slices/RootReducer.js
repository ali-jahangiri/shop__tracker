import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

// slices
import factorHistorySlice from "./factorHistorySlice";
import ProductSlice from "./ProductSlice";
import uiSlice from "./uiSlice";
import newFactorSlice from "./newFactorSlice";
import SettingSlice from "./SettingSlice";

const rootReducer = combineReducers({
  factorHistory: factorHistorySlice,
  product: ProductSlice,
  ui: uiSlice,
  newFactor: newFactorSlice,
  setting: SettingSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["factorHistory", "product", "newFactor", "setting"],
  blacklist: ["ui"],
};

export default persistReducer(persistConfig, rootReducer);
