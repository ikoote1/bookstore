import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: () => {

    },
    removeBook: () => {
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
