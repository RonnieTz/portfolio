import type { InitialState } from './types';

export const initialState: InitialState = {
  showContext: false,
  position: { x: 0, y: 0 },
  clipboard: undefined,
  target: undefined,
};
