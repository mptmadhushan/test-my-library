// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { myApi } from 'gc-test-npm';

const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});

export default store;
