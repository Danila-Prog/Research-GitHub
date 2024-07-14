import { configureStore } from "@reduxjs/toolkit";
import { getHubApi } from "../store/api/api";
import { setupListeners } from '@reduxjs/toolkit/query'
import { reducer as favoritiesReducer } from "./favorities.slice/favorities.slice";

export const store = configureStore({
    reducer: {
        favorites: favoritiesReducer,
        [getHubApi.reducerPath]: getHubApi.reducer,
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getHubApi.middleware),
});

setupListeners(store.dispatch)


