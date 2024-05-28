import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {universalApi} from "../rtk/universalApi";

export const store = configureStore({
  reducer: {
    universal: universalApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    universalApi.middleware,
  ),
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch)