import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categoriesSlice';
import bookReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    book: bookReducer,
  },
});

export default store;
