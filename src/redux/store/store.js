import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
//importing sevices
import {postApi} from '../services/post';
import CartReducer from '../slices/CartSlice';

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    cart:CartReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(postApi.middleware),
});
setupListeners(store.dispatch);
