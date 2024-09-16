import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';

import { set_WindowPosition } from './reducers/setWindowPosition';
import { set_WindowFullScreen } from './reducers/setWindowFullScreen';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setStartOpen: (state, action) => {
      state.start.open = action.payload;
    },
    setStartHover: (state, action) => {
      state.start.hover = action.payload;
    },
    setWindowPosition: (
      state,
      action: PayloadAction<{ y: number; x: number; id: string }>
    ) => {
      set_WindowPosition(state, action);
    },
    setWindowFullScreen: (
      state,
      action: PayloadAction<{ id: string; fullscreen: boolean }>
    ) => {
      set_WindowFullScreen(state, action);
    },

    closeWindow: (state, action: PayloadAction<{ id: string }>) => {
      state.windows = state.windows.filter(
        (window) => window.id !== action.payload.id
      );
    },
    setMinimize: (
      state,
      action: PayloadAction<{ id: string; minimize: boolean }>
    ) => {
      const window = state.windows.find(
        (window) => window.id === action.payload.id
      );
      if (window) {
        window.minimized = action.payload.minimize;
      }
    },
    focusWindow: (
      state,
      action: PayloadAction<{ id: string; focus: boolean }>
    ) => {
      state.windows.forEach((window) => {
        if (window.id === action.payload.id) {
          window.focused = true;
          window.zIndex = 10;
        } else {
          window.focused = false;
          window.zIndex = 5;
        }
      });
    },
    setFocus: (
      state,
      action: PayloadAction<{ id: string; focus: boolean }>
    ) => {
      const window = state.windows.find(
        (window) => window.id === action.payload.id
      );
      if (window) {
        window.focused = action.payload.focus;
      }
    },
    newWindow: (
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        logo: string;
        liveLink?: string;
        codesadnboxLink?: string;
        gitHubLink?: string;
      }>
    ) => {
      state.windows.forEach((window) => {
        window.focused = false;
        window.zIndex = 5;
      });
      state.start.open = false;
      const windowIndex = state.windows.findIndex(
        (window) => window.title === action.payload.title
      );

      if (windowIndex === -1) {
        state.windows.push({
          position: { y: 100, x: 100 },
          liveLink: action.payload.liveLink,
          id: action.payload.id,
          title: action.payload.title,
          minimized: false,
          zIndex: 10,
          fullScreen: true,
          focused: true,
          logo: action.payload.logo,
          codesandboxLink: action.payload.codesadnboxLink,
          gitHubLink: action.payload.gitHubLink,
        });
      } else {
        state.windows[windowIndex].focused = true;
        state.windows[windowIndex].minimized = false;
        state.windows[windowIndex].zIndex = 10;
      }
    },
    selectShortcut: (
      state,
      action: PayloadAction<{ name: string; type: string }>
    ) => {
      if (action.payload.type === 'project') {
        state.projects.forEach((project) => {
          if (project.name === action.payload.name) {
            project.selected = true;
          } else {
            project.selected = false;
          }
        });
      }
      if (action.payload.type === 'shortcut') {
        state.shortcuts.forEach((project) => {
          if (project.name === action.payload.name) {
            project.selected = true;
          } else {
            project.selected = false;
          }
        });
      }
    },
    unSelectAllShortcuts: (state, action: PayloadAction<{ type: string }>) => {
      state.projects.forEach((project) => {
        project.selected = false;
      });
      state.shortcuts.forEach((project) => {
        project.selected = false;
      });
    },
  },
});

export const {
  setStartOpen,
  setStartHover,
  setWindowPosition,
  setWindowFullScreen,
  setMinimize,
  closeWindow,
  newWindow,
  focusWindow,
  setFocus,
  selectShortcut,
  unSelectAllShortcuts,
} = appSlice.actions;
export default appSlice.reducer;
