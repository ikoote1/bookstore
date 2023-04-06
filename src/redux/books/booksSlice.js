import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKSTOREID = 'U4HmerEPXvxyMCBtJZNQ';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/books';

const initialState = {
  bookItems: [],
  isLoading: true,
};

export const getBooks = createAsyncThunk('book/getBooka',
  async () => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  });

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
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        bookItems: action.payload.results,
      }))
      .addCase(getBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: 'State Error',
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
