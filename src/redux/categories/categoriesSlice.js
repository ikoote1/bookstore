import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  isloading: true,
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: {

    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice;
