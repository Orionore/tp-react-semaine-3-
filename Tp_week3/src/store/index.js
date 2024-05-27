import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slice/productSlice.js';
import userSlice from './slice/userSlice.js';

// const middleware = (store) => (next) => (action) => {
//     console.log(action)
//     if (action.type !== increment.toString()) {
//       store.dispatch(increment())
//     }
//     next(action)
// }

const store = configureStore({
  reducer: {
    products: productSlice,
    user: userSlice,
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
//    logMiddleware
//   ])
});

export default store;