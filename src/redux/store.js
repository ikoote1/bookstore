import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
