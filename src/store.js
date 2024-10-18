// store.js
import { configureStore } from '@reduxjs/toolkit';
import { myApi } from 'gc-test-npm'; // Import your API slice

const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer, // Add the API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware), // Add the API middleware
});

export default store;
