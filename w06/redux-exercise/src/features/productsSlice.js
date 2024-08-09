import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, updateProduct } from "../api/products";

const initialState = {
  status: "new",
  products: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await getProducts();
    return data;
  },
  {
    condition(arg, thunkApi) {
      const postsStatus = getProductsStatus(thunkApi.getState());
      if (postsStatus !== "new") {
        return false;
      }
    },
  }
);

export const saveProduct = createAsyncThunk(
  "products/updateProduct",
  async (data) => {
    const res = await updateProduct(data);
    return res;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increaseQuantity(state, action) {
      const { id } = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product) {
        product.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const { id } = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product) {
        product.quantity--;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.products.push(...action.payload);
      })
      .addCase(saveProduct.pending, (state, action) => {
        console.log('Update product pending');
      })
      .addCase(saveProduct.fulfilled, (state, action) => {
        console.log('Update product fulfilled', action.payload);
      })
      .addCase(saveProduct.rejected, (state, action) => {
        console.log('Update product rejected', action.error.message);
      });
  },
});

export const { increaseQuantity, decreaseQuantity } = productsSlice.actions;

export const getProductsStatus = (state) => state.products.status;

export const getAllProducts = (state) => state.products.products;

export const getProductById = (state, id) => {
  const p = state.products.products.find((prod) => prod.id == id);
  return p;
}

export default productsSlice.reducer;
