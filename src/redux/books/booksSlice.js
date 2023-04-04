import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook:() => {

    },
    removeBook:(state, action) => {
      const itemId = action.payload;
      state.bookItems = state.bookItems.filter((item) => item.id !== itemId)
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
