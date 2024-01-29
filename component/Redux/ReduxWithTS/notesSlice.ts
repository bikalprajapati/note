//  the noteReducer is implicitly 
// defined as part of the notesSlice created using createSlice. 
// The createSlice function automatically generates a reducer based
//  on the initial state and the reducer functions you provide.

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Note {
  title: string;
  desc: string;
}

const initialState: Array<Note> = [];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.push(action.payload);
    },
  },
});

export const {addNote} = notesSlice.actions;
export const noteSelector=(state:RootState)=>state.notes
export default notesSlice.reducer
