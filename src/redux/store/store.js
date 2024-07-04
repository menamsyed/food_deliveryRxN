import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
//importing sevices
import {postApi} from '../services/post';
import CartReducer from '../slices/CartSlice';
import ProductReducer from '../slices/ProductSlice';
export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    cart: CartReducer,
    product: ProductReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(postApi.middleware),
});
setupListeners(store.dispatch);
