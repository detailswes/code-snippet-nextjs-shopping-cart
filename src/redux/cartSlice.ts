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
      console.log(typeof state);
      const isItemAlreadyExist = state.cart?.findIndex(
        (res: any) => res.id === payload.id
      );

      if (isItemAlreadyExist >= 0) {
        // alert("nothing  added");
        modifiedQuantity(state, isItemAlreadyExist, payload);
      } else {
        state.cart.push(payload);
      }
    },
    updateQuantity: (state, { payload }) => {
      const isItemAlreadyExist = state.cart?.findIndex(
        (res: any) => res.id === payload.id
      );

      if (isItemAlreadyExist >= 0) {
        state.cart[isItemAlreadyExist].quantity = payload.quantity;
        state.cart[isItemAlreadyExist].updatedPrice = payload.price;
        state.cart[isItemAlreadyExist].updatedPrice =
          state.cart[isItemAlreadyExist].price * payload.quantity;
        modifiedQuantity(state, isItemAlreadyExist, payload);
      }
    },
    removeProductFromCart: (state, { payload }) => {
      const updatedCart = state.cart.filter(
        (item: any) => item.id !== payload.id
      );
      state.cart = updatedCart;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});
interface Payload {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { href: string; rate: number; count: number };
}
function modifiedQuantity(state: any, item: number, payload: Payload) {
  state.cart[item].quantity += 1;
  state.cart[item].updatedPrice = payload.price;
  state.cart[item].updatedPrice =
    state.cart[item].price * state.cart[item].quantity;
}
export const { addToCart, updateQuantity, removeProductFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
