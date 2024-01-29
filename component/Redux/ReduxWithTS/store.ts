//to use redux with toolkit install redux toolkit and react-redux


import { configureStore } from "@reduxjs/toolkit";
import notesReducer from './notesSlice'

export const store = configureStore({
    reducer:{
        notes:notesReducer,

    }
})

export type  AppDispatch = typeof store.dispatch
export type RootState = ReturnType <typeof store.getState>

