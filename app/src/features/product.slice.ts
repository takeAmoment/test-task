import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllProductsApi, getProductByIdApi } from "api/products";
import axios from "axios";
import { IProduct, ProductSliceState } from "types/types";

const initialState: ProductSliceState = {
  product: null,
  amountPages: 0,
  products: [],
  error: null,
  status: "idle",
};

export const getAllProducts = createAsyncThunk(
  "products/get",
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await getAllProductsApi(page);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/get",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await getProductByIdApi(id);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct>) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.error = null;
        if (action.payload) {
          state.products = action.payload?.data;
          state.amountPages = action.payload?.total_pages;
        }
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
        state.products = [];
        state.amountPages = 0;
      })
      .addCase(getProductById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.status = "idle";
        state.error = null;
        if (action.payload) {
          state.products.push(action.payload?.data);
          state.amountPages = 0;
        }
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
        state.products = [];
      });
  },
});

export const { setProduct } = productSlice.actions;

export const productReducer = productSlice.reducer;
