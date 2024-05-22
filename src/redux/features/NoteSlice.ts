import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (_, action: PayloadAction<string>) => {
      return {
        value: action.payload,
      };
    },
  },
});

export const { addNote } = noteSlice.actions;

export default noteSlice.reducer;
