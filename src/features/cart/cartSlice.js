// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1, price: 1500 });
      } else {
        existingItem.quantity++;
      }
    },
    removeItem(state, action) {
      const id = action.payload.id;
      const existingItem = state.items.find(item => item.id === id);
      if (!existingItem) return; // ถ้าไม่มี item ให้ return
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        // ถ้ามีชิ้นเดียว ให้ลบออกจาก array
        state.items = state.items.filter(item => item.id !== id);
      } else {
        // ถ้ามีหลายชิ้น ให้ลด quantity
        existingItem.quantity--;
      }
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
