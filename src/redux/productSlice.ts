import useAxios from "@/helpers/useAxios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductList = createAsyncThunk(
  "product/fetchProductList",
  async (paramss, thunkAPI) => {
    try {
      const { data }: any = await useAxios.get("products");
      // console.log(data, "data");
      return data;
    } catch (error) {
      // console.log(error);
      //   thunkAPI.dispatch(showErrorMessage("Something went wrong"));
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  products: [],
  count: 0,
  error: null,
  isLoading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload;
        state.error = null;
      })
      .addCase(fetchProductList.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
