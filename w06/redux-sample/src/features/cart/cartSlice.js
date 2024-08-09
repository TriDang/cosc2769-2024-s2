import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { product_id: 1, quantity: 1 },
  { product_id: 3, quantity: 3 },
];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      const product = state.find((p) => p.product_id === id);
      if (product) {
        product.quantity++;
      } else {
        state.push({product_id: id, quantity: 1});
      }
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      const productId = state.findIndex((p) => p.product_id === id);
      if (productId != -1) {
        state[productId].quantity--;
        if (state[productId].quantity === 0) {
          state.splice(productId, 1);
        }
      }
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer;
