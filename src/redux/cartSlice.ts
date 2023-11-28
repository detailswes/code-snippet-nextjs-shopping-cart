import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  cart: [],
  error: null,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
