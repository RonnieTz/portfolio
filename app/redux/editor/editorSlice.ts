import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, TooltipShow } from './initialState';

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setEditorTooltipShowValue: (
      state,
      action: PayloadAction<{ tooltipShow: TooltipShow }>
    ) => {
      state.tooltipShow.value = action.payload.tooltipShow;
    },
    setEditorTooltipShow: (
      state,
      action: PayloadAction<{ tooltipShow: boolean }>
    ) => {
      state.tooltipShow.show = action.payload.tooltipShow;
    },
    setTextWrap: (
      state,
      action: PayloadAction<{ textWrap: boolean; fileId: string }>
    ) => {
      const file = state.textFiles.find(
        (file) => file.id === action.payload.fileId
      );
      if (file) {
        file.wrap = action.payload.textWrap;
      }
    },
    saveTextFile: (
      state,
      action: PayloadAction<{ id: string; text: string }>
    ) => {
      const file = state.textFiles.find(
        (file) => file.id === action.payload.id
      );
      if (file) {
        file.content = action.payload.text;
      }
    },
    setFontOptions: (
      state,
      action: PayloadAction<{
        fontFamily: string;
        fontStyle: string;
        fontSize: number;
        id: string;
      }>
    ) => {
      console.log(action.payload);

      const file = state.textFiles.find(
        (file) => file.id === action.payload.id
      );
      if (file) {
        file.fontOptions = {
          fontFamily: action.payload.fontFamily,
          fontStyle: action.payload.fontStyle,
          fontSize: action.payload.fontSize,
        };
      }
    },
  },
});

export default editorSlice.reducer;
export const {
  setEditorTooltipShowValue,
  setEditorTooltipShow,
  setTextWrap,
  saveTextFile,
  setFontOptions,
} = editorSlice.actions;
