import { configureStore } from '@reduxjs/toolkit';
import optionsReducer from '../redux/features/OptionSlice';

export const store = configureStore({
  reducer: {
    optionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
