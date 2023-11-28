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
    //for increase quantity
    increaseQuantity: (state, { payload }) => {
      const isItemAlreadyExist = state.cart?.findIndex(
        (res: any) => res.id === payload.id
      );

      if (isItemAlreadyExist >= 0) {
        // alert("nothing  added");
        state.cart[isItemAlreadyExist].quantity += 1;
      } else {
        // alert("added");
        const itemToIncreaseQuantity = payload;
        itemToIncreaseQuantity.quantity = 1;
        state.cart.push(itemToIncreaseQuantity);
      }
    },
    //for decrease quantity
    decreaseQuantity: (state, { payload }) => {
      const index = state.cart.findIndex((res: any) => res.id === payload.id);
      console.log(index, "index");

      if (index >= 0) {
        if (state.cart[index].quantity > 1) {
          // alert("decreased");
          state.cart[index].quantity -= 1;
        }
      }
    },
    removeProductFromCart: (state, { payload }) => {
      console.log(payload, "payload");
      const updatedCart = state.cart.filter(
        (item: any) => item.id !== payload.id
      );
      state.cart = updatedCart;
    },
  },
});
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
