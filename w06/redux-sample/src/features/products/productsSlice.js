import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts  } from '../../api/products';

const initialState = [];

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const data = await getProducts();
  console.log('data', data);
  return data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increase(state, action) {
      const { id } = action.payload;
      const product = state.find((p) => p.id === id);
      if (product) {
        product.quantity++;
      }
    },
    decrease(state, action) {
      const { id } = action.payload;
      const product = state.find((p) => p.id === id);
      if (product) {
        product.quantity--;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        console.log('pending.....');
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log('action', action);
        state.push(...action.payload);
      });
  },
})

export const { increase, decrease } = productsSlice.actions

export default productsSlice.reducer;
