import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    addOption: (_, action: PayloadAction<string>) => {
      return {
        value: action.payload,
      };
    },
  },
});

export const { addOption } = optionSlice.actions;

export default optionSlice.reducer;
