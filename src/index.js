import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// global styles
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "./styles/base.scss";

import enhancedStore from "./Store/store";

import AppRouter from "./Router/AppRouter";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={enhancedStore.store}>
      <PersistGate persistor={enhancedStore.persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
