import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  showContext: boolean;
  position: { x: number; y: number };
  target: { type: string; name: string };
} = {
  showContext: false,
  position: { x: 0, y: 0 },
  target: { type: '', name: '' },
};

const contextSlice = createSlice({
  name: 'context',
  initialState,
  reducers: {
    showContextMenu: (state) => {
      state.showContext = true;
    },
    hideContextMenu: (state) => {
      state.showContext = false;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setTarget: (
      state,
      action: PayloadAction<{
        target: {
          type: string;
          name: string;
        };
      }>
    ) => {
      state.target = action.payload.target;
    },
  },
});

export const { hideContextMenu, showContextMenu, setPosition, setTarget } =
  contextSlice.actions;
export default contextSlice.reducer;
