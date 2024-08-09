import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          return state.filter((i) => i.id !== action.payload);
        } else {
          item.quantity -= 1;
        }
      }
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
