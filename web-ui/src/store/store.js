import { configureStore } from "@reduxjs/toolkit";
import { configurationReducer } from "./configuration";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    configuration: configurationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
