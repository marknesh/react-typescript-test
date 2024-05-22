import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const authSlice = createSlice({
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

export const { addOption } = authSlice.actions;

export default authSlice.reducer;
