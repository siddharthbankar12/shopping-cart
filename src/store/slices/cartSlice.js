import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    allProducts: JSON.parse(localStorage.getItem("all-products")) || [],
    cartProducts: [],
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.allProducts.push(action.payload);
    },

    updateCart: (state, action) => {
      const existingProduct = state.cartProducts.find(
        (p) => p.id === action.payload.id
      );
      if (existingProduct) {
        return;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
    },

    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const product = state.cartProducts.find((p) => p.id === id);
      if (product) {
        if (type === "increase") {
          product.quantity += 1;
        } else if (type === "decrease" && product.quantity > 1) {
          product.quantity -= 1;
        }
      }
    },

    removeProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },

    calculateTotal: (state) => {
      state.totalPrice = state.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateQuantity,
  updateCart,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
