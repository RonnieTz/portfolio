import { PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../types';

export const set_WindowPosition = (
  state: InitialState,
  action: PayloadAction<{ y: number; x: number; id: string }>
) => {
  const window = state.windows.find(
    (window) => window.id === action.payload.id
  );
  if (window) {
    window.position.y = action.payload.y;
    window.position.x = action.payload.x;
  }
};
