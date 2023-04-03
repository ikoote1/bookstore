import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    isloading: true,
}

const categoriesSlice = createSlice({
    name: 'category',
    initialState,
})

export default categoriesSlice