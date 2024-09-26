import { PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../types';

export const set_WindowFullScreen = (
  state: InitialState,
  action: PayloadAction<{ id: string; fullscreen: boolean }>
) => {
  const window = state.windows.find(
    (window) => window.id === action.payload.id
  );
  if (window) {
    window.fullScreen = action.payload.fullscreen;
  }
};
