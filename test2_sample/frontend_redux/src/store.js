import { configureStore } from '@reduxjs/toolkit';
import customersReducer from './customersSlice';

export const store = configureStore({
  reducer: {
    customers: customersReducer,
  },
});
