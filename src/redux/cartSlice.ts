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
    updateQuantity: (state, { payload }) => {
      console.log(payload);
      const isItemAlreadyExist = state.cart?.findIndex(
        (res: any) => res.id === payload.id
      );

      if (isItemAlreadyExist >= 0) {
        // alert("nothing  added");
        state.cart[isItemAlreadyExist].quantity = payload.quantity;
        state.cart[isItemAlreadyExist].updatedPrice = payload.price;
        state.cart[isItemAlreadyExist].updatedPrice =
          state.cart[isItemAlreadyExist].price * payload.quantity;
      }
    },
    removeProductFromCart: (state, { payload }) => {
      const updatedCart = state.cart.filter(
        (item: any) => item.id !== payload.id
      );
      state.cart = updatedCart;
    },
  },
});
export const { addToCart, updateQuantity, removeProductFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
