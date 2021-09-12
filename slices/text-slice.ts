import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TStore} from "../redux/store";



export interface AddTextPayload {
    text: string
}

interface TSliceState {
    text: string
}

const initialState: TSliceState = {
    text: ''
}


const textSlice = createSlice({
    name: 'textSlice',
    initialState: initialState,
    reducers: {
        addText: (state: TSliceState, action:PayloadAction<AddTextPayload>) => {
            state.text = action.payload.text
}


    }
})


export const textSelector = (store: TStore) => store.text.text




export const {
    addText
} = textSlice.actions


export const textReducer = textSlice.reducer