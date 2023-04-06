import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKSTOREID = 'WkLflBe9JDNDC1w9GY1R';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${BOOKSTOREID}/books`;

export const getBooks = createAsyncThunk('book/getBooks',
  async () => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error;
    }
  });

export const postBook = createAsyncThunk('book/postBook',
  async (book) => {
    try {
      const resp = await axios.post(url, book);
      return resp.data;
    } catch (error) {
      return error;
    }
  });

const initialState = {
  bookItems: [],
  isLoading: true,
  isBookAdded: true,
};

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
      .addCase(getBooks.fulfilled, (state, action) => {
        console.log(action.payload);
        const bookList = action.payload;
        const newBookList = [];
        Object.keys(bookList).forEach((book) => newBookList.push({
          item_id: book,
          title: bookList[book][0].title,
          author: bookList[book][0].author,
        }));
        return {
          ...state,
          isLoading: false,
          bookItems: newBookList,
        };
      })
      .addCase(getBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: 'State Error',
      }))
      .addCase(postBook.pending, (state) => ({
        ...state,
        isBookAdded: false,
      }))
      .addCase(postBook.fulfilled, (state) => ({
        ...state,
        isBookAdded: true,
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
