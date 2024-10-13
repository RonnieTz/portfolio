import { PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../types';

export const set_WindowFullScreen = (
  state: InitialState,
  action: PayloadAction<{ windowID: string; fullscreen: boolean }>
) => {
  const window = state.windows.find(
    (window) => window.windowID === action.payload.windowID
  );
  if (window) {
    window.fullScreen = action.payload.fullscreen;
  }
};
