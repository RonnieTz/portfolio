import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { set_WindowPosition } from '../reducers/setWindowPosition';
import { set_WindowFullScreen } from '../reducers/setWindowFullScreen';
import { Folder } from './types';
import logo from '@/public/description.png';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTurnOff: (state, action: PayloadAction<boolean>) => {
      state.turnOff = action.payload;
    },
    setWelcome: (state, action: PayloadAction<boolean>) => {
      state.welcome = action.payload;
    },
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
        ratio: number | undefined;
        type: string;
        items: Folder[];
        fixedSize: boolean;
        size: { width: number; height: number };
        content: { id: string };
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
          position: { y: Math.random() * 100, x: Math.random() * 300 },
          liveLink: action.payload.liveLink,
          id: action.payload.id,
          title: action.payload.title,
          minimized: false,
          zIndex: 10,
          fullScreen: false,
          focused: true,
          logo: action.payload.logo,
          codesandboxLink: action.payload.codesadnboxLink,
          gitHubLink: action.payload.gitHubLink,
          ratio: action.payload.ratio,
          type: action.payload.type,
          items: action.payload.items,
          fixedSize: action.payload.fixedSize,
          size: action.payload.size,
          subWindow: '',
          content: action.payload.content,
          parent: '',
        });
        if (action.payload.type === 'folder') {
          state.folderHistory.history.push();
        }
      } else {
        state.windows[windowIndex].focused = true;
        state.windows[windowIndex].minimized = false;
        state.windows[windowIndex].zIndex = 10;
      }
    },
    newSubWindow: (
      state,
      action: PayloadAction<{
        windowID: string;
        subWindowName: string;
        subWindowSize: { width: number; height: number };
        position: { y: number; x: number };
        content: { id: string };
      }>
    ) => {
      const window = state.windows.find(
        (window) => window.id === action.payload.windowID
      );
      if (window) {
        window.subWindow = action.payload.subWindowName;
        window.focused = false;
        state.windows.push({
          position: {
            y: action.payload.position.y - 100,
            x: action.payload.position.x - 50,
          },
          liveLink: '',
          id: action.payload.subWindowName,
          title: action.payload.subWindowName,
          minimized: false,
          zIndex: 10,
          fullScreen: false,
          focused: true,
          logo: logo as any,
          codesandboxLink: '',
          gitHubLink: '',
          ratio: 1,
          type: 'subWindow',
          items: [],
          fixedSize: true,
          size: action.payload.subWindowSize,
          subWindow: '',
          content: action.payload.content,
          parent: action.payload.content.id,
        });
      }
    },
    closeSubWindow: (
      state,
      action: PayloadAction<{ subWindowName: string }>
    ) => {
      state.windows.forEach((window) => {
        if (window.subWindow === action.payload.subWindowName) {
          window.focused = true;
          window.subWindow = '';
        }
      });
      state.windows = state.windows.filter(
        (window) => window.id !== action.payload.subWindowName
      );
    },
    resizeWindow: (
      state,
      action: PayloadAction<{
        id: string;
        size: { width: number; height: number };
      }>
    ) => {
      const window = state.windows.find(
        (window) => window.title === action.payload.id
      );

      if (window) {
        window.size = action.payload.size;
      }
    },
    selectShortcut: (
      state,
      action: PayloadAction<{ location: string; name: string }>
    ) => {
      const folder = state.folders.locations.find(
        (folder) => folder.location === action.payload.location
      );
      if (folder) {
        folder.items.forEach((item) => {
          if (item.name === action.payload.name) {
            item.selected = true;
          } else {
            item.selected = false;
          }
        });
      }
    },
    unSelectAllShortcuts: (
      state,
      action: PayloadAction<{ location: string }>
    ) => {
      state.folders.locations.forEach((folder) => {
        folder.items.forEach((item) => {
          item.selected = false;
        });
      });
    },
    setLoaded: (state) => {
      state.loaded = true;
    },
    addWindowToHistory: (
      state,
      action: PayloadAction<{ folderName: string }>
    ) => {
      const historyLength = state.folderHistory.history.length;
      state.folderHistory.history = Array.from(
        new Set([...state.folderHistory.history, action.payload.folderName])
      );
      const index = state.folderHistory.history.findIndex(
        (folder) => folder === action.payload.folderName
      );
      state.folderHistory.currentFolder = index;
    },
    changeToFolder: (state, action: PayloadAction<{ folderName: string }>) => {
      const window = state.windows.find((window) => window.type === 'folder');
      if (window) {
        window.title = action.payload.folderName;
      }
    },
    navigateFolderBack: (state) => {
      const window = state.windows.find((window) => window.type === 'folder');
      if (state.folderHistory.currentFolder > 0) {
        state.folderHistory.currentFolder -= 1;
        if (window)
          window.title =
            state.folderHistory.history[state.folderHistory.currentFolder];
      }
    },
    navigateFolderForward: (state) => {
      const window = state.windows.find((window) => window.type === 'folder');
      if (
        state.folderHistory.currentFolder <
        state.folderHistory.history.length - 1
      ) {
        state.folderHistory.currentFolder += 1;
        if (window)
          window.title =
            state.folderHistory.history[state.folderHistory.currentFolder];
      }
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
  setWelcome,
  setTurnOff,
  setLoaded,
  addWindowToHistory,
  changeToFolder,
  navigateFolderBack,
  navigateFolderForward,
  resizeWindow,
  newSubWindow,
  closeSubWindow,
} = appSlice.actions;
export default appSlice.reducer;
