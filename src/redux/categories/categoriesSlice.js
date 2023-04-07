import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  isloading: true,
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => {
      const newState = { ...state, categories: ['Under construction'] };
      return newState;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
