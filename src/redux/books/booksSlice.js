import { createSlice } from '@reduxjs/toolkit';
import bookItems from '../bookItems';

const initialState = {
  bookItems,
  isLoading: true,
};
// console.log(bookItems);

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.bookItems.push(newBook);
    },
    removeBook: (state, action) => {
      const bookIdToRemove = action.payload;
      const filteredBookItems = state.bookItems.filter((book) => book.id !== bookIdToRemove);
      return { ...state, bookItems: filteredBookItems };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
