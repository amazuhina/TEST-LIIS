import {createSlice} from "@reduxjs/toolkit";
import {TStore} from "../redux/store";


interface TSliceState {
    isDarkTheme: boolean
}

const initialState: TSliceState  = {
    isDarkTheme: false
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: initialState,
    reducers: {
        toggleTheme: (state: TSliceState) => {
          state.isDarkTheme = !state.isDarkTheme
        },

    }
})


export const isDarkSelector = (state: TStore) => state.theme.isDarkTheme

export const {
    toggleTheme,
} = themeSlice.actions


export const themeReducer = themeSlice.reducer