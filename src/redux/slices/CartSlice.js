import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: [],
  },
  reducers: {
    addToCart: (state, action) => {
    //  console.log(action.payload, 'sam');
      let cart = [action.payload, ...state.cartData];
      state.cartData = cart;
      console.log(state.cartData,'yelo');
    
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cartData.filter(
        item => item.id !== action.payload.id,
      );
      state.cartData = removeFromCart;
    },
    incrementQuatity: (state, action) => {
      const itemInCart = state.cartData.find(
        item => item.id == action.payload.id,
      );
      itemInCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cartData.find(
        item => item.id == action.payload.id,
      );
      if (itemInCart.quantity == 1) {
        const removeFromCart = state.cartData.filter(
          item => item.id !== action.payload.id,
        );
        state.cartData = removeFromCart;
      } else {
        itemInCart.quantity--;
      }
    },
  },
});
export const {addToCart, removeFromCart, incrementQuatity, decrementQuantity} =
  cartSlice.actions;
export default cartSlice.reducer;
