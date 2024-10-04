import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import calculatorSlice from './calculatorSlice';
import minesweeperSlice from './minesweeperSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
    calculator: calculatorSlice,
    minesweeper: minesweeperSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
