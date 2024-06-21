// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from 'state';
import authReducer from './authSlice';
import { api } from 'state/api';

const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;