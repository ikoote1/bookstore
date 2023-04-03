import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    isloading: true,
}

const categoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addBook:{

        },
        removeBook:{

        }
    }
})

export const {addBook, removeBook} = categoriesSlice.actions;

export default categoriesSlice