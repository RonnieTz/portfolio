import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { set_WindowPosition } from './reducers/setWindowPosition';
import { set_WindowFullScreen } from './reducers/setWindowFullScreen';
import { allReducers } from './reducers/allReducers';

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
      action: PayloadAction<{ y: number; x: number; windowID: string }>
    ) => {
      set_WindowPosition(state, action);
    },
    setWindowFullScreen: (
      state,
      action: PayloadAction<{ windowID: string; fullscreen: boolean }>
    ) => {
      set_WindowFullScreen(state, action);
    },

    closeWindow: (state, action: PayloadAction<{ windowID: string }>) => {
      const window = state.windows.find(
        (window) => window.windowID === action.payload.windowID
      );

      if (window) {
        window.open = false;
      }
      if (window?.type === 'folder') {
        window.history = {
          locations: [],
          currentLocation: 0,
        };
      }

      state.taskList = state.taskList.filter(
        (window) => window.windowID !== action.payload.windowID
      );
    },
    setMinimize: (
      state,
      action: PayloadAction<{ windowID: string; minimize: boolean }>
    ) => {
      const window = state.windows.find(
        (window) => window.windowID === action.payload.windowID
      );
      const taskListWindow = state.taskList.find(
        (window) => window.windowID === action.payload.windowID
      );
      if (window) {
        window.minimized = action.payload.minimize;
      }
      if (taskListWindow) {
        taskListWindow.minimized = action.payload.minimize;
      }
    },
    focusWindow: (
      state,
      action: PayloadAction<{ windowID: string; focus: boolean }>
    ) => {
      state.windows.forEach((window) => {
        if (window.windowID === action.payload.windowID) {
          window.focused = true;
          window.zIndex = 10;
        } else {
          window.focused = false;
          window.zIndex = 5;
        }
      });
      state.taskList.forEach((window) => {
        if (window.windowID === action.payload.windowID) {
          window.focused = true;
        } else {
          window.focused = false;
        }
      });
    },
    setFocus: (
      state,
      action: PayloadAction<{ windowID: string; focus: boolean }>
    ) => {
      console.log(action.payload);

      const window = state.windows.find(
        (window) => window.windowID === action.payload.windowID
      );
      const taskListWindow = state.taskList.find(
        (window) => window.windowID === action.payload.windowID
      );
      if (window) {
        window.focused = action.payload.focus;
      }
      if (taskListWindow) {
        taskListWindow.focused = action.payload.focus;
      }
    },
    openWindow: (state, action: PayloadAction<{ windowID: string }>) => {
      const window = state.windows.find(
        (window) => window.windowID === action.payload.windowID
      );
      if (window) {
        window.open = true;
        window.minimized = false;
        window.focused = true;
        window.zIndex = 10;
        if (
          state.taskList.every(
            (task) => task.windowID !== action.payload.windowID
          )
        ) {
          state.taskList.push(window);
        }
      }
      state.windows.forEach((window) => {
        if (window.windowID !== action.payload.windowID) {
          window.focused = false;
          window.zIndex = 5;
        }
      });
      state.taskList.forEach((window) => {
        if (window.windowID !== action.payload.windowID) {
          window.focused = false;
        }
      });
    },

    setSubWindow: (
      state,
      action: PayloadAction<{ subWindow: string; windowID: string }>
    ) => {
      const window = state.windows.find(
        (window) => window.windowID === action.payload.windowID
      );
      const taskListWindow = state.taskList.find(
        (window) => window.windowID === action.payload.windowID
      );
      if (window) {
        if (window.type === 'program' || window.type === 'textFile') {
          window.subWindow = action.payload.subWindow;
        }
      }
      if (taskListWindow) {
        if (
          taskListWindow.type === 'program' ||
          taskListWindow.type === 'textFile'
        ) {
          taskListWindow.subWindow = action.payload.subWindow;
        }
      }
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
    selectShortcut: (state, action: PayloadAction<{ linkID: string }>) => {
      state.links.forEach((link) => {
        if (link.linkID === action.payload.linkID) {
          link.selected = true;
        } else {
          link.selected = false;
        }
      });
    },
    unSelectAllShortcuts: (state) => {
      state.links.forEach((link) => {
        link.selected = false;
      });
    },
    setLoaded: (state) => {
      state.loaded = true;
    },

    changeToFolder: (
      state,
      action: PayloadAction<{
        windowID: string;
        title: string;
        location: string;
      }>
    ) => {
      const window = state.windows.find(
        (window) => window.windowID === action.payload.windowID
      );

      if (window?.type === 'folder') {
        const { history } = window;
        const { locations, currentLocation } = history;
        window.history.locations = locations.slice(0, currentLocation + 1);
        window.history.locations.push({
          title: action.payload.title,
          locationID: action.payload.location,
        });
        if (window.history.locations.length === 1) {
          return;
        }
        window.history.currentLocation = window.history.locations.length - 1;
      }
    },
    renameLink: (
      state,
      action: PayloadAction<{ linkID: string; newName: string }>
    ) => {
      const link = state.links.find(
        (link) => link.linkID === action.payload.linkID
      );
      const window = state.windows.find(
        (window) => window.windowID === link?.windowID
      );

      if (link) {
        link.rename = false;
      }
      if (window?.type === 'project') {
        return;
      }
      if (link) {
        link.name = action.payload.newName;
        if (window) {
          window.title = action.payload.newName;
        }
      }
    },
    setRenameState: (state, action: PayloadAction<{ linkID: string }>) => {
      const link = state.links.find(
        (link) => link.linkID === action.payload.linkID
      );
      if (link) {
        link.rename = true;
      }
    },
    removeRenameStates: (state) => {
      state.links.forEach((link) => {
        link.rename = false;
      });
    },
    navigateFolderBack: (
      state,
      action: PayloadAction<{ windowID: string }>
    ) => {
      const window = state.windows.find(
        (window) => window.windowID === action.payload.windowID
      );
      if (window?.type === 'folder') {
        if (window.history.currentLocation > 0) {
          window.history.currentLocation -= 1;
        }
      }
    },
    navigateFolderForward: (
      state,
      action: PayloadAction<{ windowID: string }>
    ) => {
      const window = state.windows.find(
        (window) => window.windowID === action.payload.windowID
      );
      if (window?.type === 'folder') {
        if (
          window.history.currentLocation <
          window.history.locations.length - 1
        ) {
          window.history.currentLocation += 1;
        }
      }
    },
    ...allReducers,
  },
});

export const {
  setStartOpen,
  setStartHover,
  setWindowPosition,
  setWindowFullScreen,
  setMinimize,
  closeWindow,
  openWindow,
  focusWindow,
  setFocus,
  selectShortcut,
  unSelectAllShortcuts,
  setWelcome,
  setTurnOff,
  setLoaded,
  changeToFolder,
  navigateFolderBack,
  navigateFolderForward,
  resizeWindow,
  setSubWindow,
  renameLink,
  setRenameState,
  removeRenameStates,
  newFolder,
  deleteLink,
  newTextFile,
} = appSlice.actions;
export default appSlice.reducer;
