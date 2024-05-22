import { configureStore } from '@reduxjs/toolkit';
import optionsReducer from '@/redux/features/OptionSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import notesReducer from '@/redux/features/NoteSlice';

export const store = configureStore({
  reducer: {
    optionsReducer,
    notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
