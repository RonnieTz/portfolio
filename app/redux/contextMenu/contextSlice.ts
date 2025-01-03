import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { Target } from './types';

const contextSlice = createSlice({
  name: 'context',
  initialState,
  reducers: {
    showContextMenu: (state) => {
      state.showContext = true;
    },
    hideContextMenu: (state) => {
      state.showContext = false;
      state.target = undefined;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setTarget: (
      state,
      action: PayloadAction<{
        target: Target;
      }>
    ) => {
      state.target = action.payload.target;
    },

    copy_cut: (
      state,
      action: PayloadAction<{
        target: Target;
        functionType: 'cut' | 'copy';
      }>
    ) => {
      state.clipboard = action.payload;
    },
    clearClipboard: (state) => {
      state.clipboard = undefined;
    },
  },
});

export const {
  hideContextMenu,
  showContextMenu,
  setPosition,
  setTarget,
  copy_cut,
  clearClipboard,
} = contextSlice.actions;
export default contextSlice.reducer;
