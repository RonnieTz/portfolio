import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, TooltipShow, TextFile } from './initialState';

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setEditorTooltipShowValue: (
      state,
      action: PayloadAction<{ tooltipShow: TooltipShow; contentID: string }>
    ) => {
      const file = state.textFiles.find(
        (file) => file.contentID === action.payload.contentID
      );
      if (file) {
        file.tooltipShow.value = action.payload.tooltipShow;
      }
    },
    setEditorTooltipShow: (
      state,
      action: PayloadAction<{ tooltipShow: boolean; contentID: string }>
    ) => {
      const file = state.textFiles.find(
        (file) => file.contentID === action.payload.contentID
      );
      if (file) {
        file.tooltipShow.show = action.payload.tooltipShow;
      }
    },
    setTextWrap: (
      state,
      action: PayloadAction<{ textWrap: boolean; contentID: string }>
    ) => {
      const file = state.textFiles.find(
        (file) => file.contentID === action.payload.contentID
      );
      if (file) {
        file.wrap = action.payload.textWrap;
      }
    },
    saveTextFile: (
      state,
      action: PayloadAction<{ contentID: string; content: string }>
    ) => {
      const file = state.textFiles.find(
        (file) => file.contentID === action.payload.contentID
      );
      if (file) {
        file.content = action.payload.content;
      }
    },
    setFontOptions: (
      state,
      action: PayloadAction<{
        fontFamily: string;
        fontStyle: string;
        fontSize: number;
        contentID: string;
      }>
    ) => {
      const file = state.textFiles.find(
        (file) => file.contentID === action.payload.contentID
      );
      if (file) {
        file.fontOptions = {
          fontFamily: action.payload.fontFamily,
          fontStyle: action.payload.fontStyle,
          fontSize: action.payload.fontSize,
        };
      }
    },
    newTextData: (state, action: PayloadAction<{ contentID: string }>) => {
      const file: TextFile = {
        contentID: action.payload.contentID,
        content: '',
        wrap: false,
        fontOptions: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontStyle: 'Normal',
        },
        tooltipShow: { value: '', show: false },
      };
      state.textFiles.push(file);
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
  newTextData,
} = editorSlice.actions;
