import { configureStore } from '@reduxjs/toolkit';
import appSlice from './app/appSlice';
import editorSlice from './editor/editorSlice';
import minesweeperSlice from './minesweeper/minesweeperSlice';
import contextSlice from './contextMenu/contextSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
    editor: editorSlice,
    minesweeper: minesweeperSlice,
    context: contextSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
