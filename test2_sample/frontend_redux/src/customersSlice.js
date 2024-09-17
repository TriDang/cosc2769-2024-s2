import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favCustomers: [],
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const { customer_id } = action.payload;
      const idx = state.favCustomers.findIndex(e => e === customer_id);
      if (idx == -1) {
        state.favCustomers.push(customer_id);
      } else {
        state.favCustomers.splice(idx, 1);
      }
    },
  },
});

export const { toggleFavorite } = customersSlice.actions;

export const getFavoriteCustomers = (state) => state.customers.favCustomers;

export const isFavorite = (state, cust_id) => state.customers.favCustomers.find(e => e === cust_id) != undefined;

export default customersSlice.reducer;
