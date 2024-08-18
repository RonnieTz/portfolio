import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  start: { open: boolean; hover: boolean };
  windows: {
    position: { y: number; x: number };
    link: string;
    id: string;
    title: string;
    minimized: boolean;
    zIndex: number;
    fullScreen: boolean;
    focused: boolean;
  }[];
  tasks: { title: string; focused: boolean; id: string }[];
} = {
  start: { open: false, hover: false },
  windows: [],
  tasks: [],
};

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
      const window = state.windows.find(
        (window) => window.id === action.payload.id
      );
      if (window) {
        window.position.y = action.payload.y;
        window.position.x = action.payload.x;
      }
    },
    setWindowFullScreen: (
      state,
      action: PayloadAction<{ id: string; fullscreen: boolean }>
    ) => {
      const window = state.windows.find(
        (window) => window.id === action.payload.id
      );
      if (window) {
        window.fullScreen = action.payload.fullscreen;
      }
    },
    minimizeWindow: (state, action: PayloadAction<{ id: string }>) => {
      const window = state.windows.find(
        (window) => window.id === action.payload.id
      );
      const task = state.tasks.find((task) => task.id === action.payload.id);

      if (window && task) {
        window.minimized = true;
        window.focused = false;
        task.focused = false;
      }
    },
    focusWindow: (state, action: PayloadAction<{ id: string }>) => {
      const window = state.windows.find(
        (window) => window.id === action.payload.id
      );

      state.tasks.forEach((task) => {
        if (task.id === action.payload.id) {
          task.focused = true;
        } else {
          task.focused = false;
        }
      });

      if (window) {
        window.focused = true;
        window.zIndex = 50;
        state.windows.forEach((window) => {
          if (window.id !== action.payload.id) {
            window.focused = false;
            window.zIndex = 1;
          }
        });
        state.windows.sort((a, b) => {
          return a.focused === b.focused ? 0 : a.focused ? 1 : -1;
        });
      }
    },
    clickTask: (state, action: PayloadAction<{ id: string }>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      const window = state.windows.find(
        (window) => window.id === action.payload.id
      );
      if (window) {
        window.minimized = false;
        window.focused = true;
        window.zIndex = 50;
        state.windows.forEach((window) => {
          if (window.id !== action.payload.id) {
            window.focused = false;
            window.zIndex = 1;
          }
        });
        state.windows.sort((a, b) => {
          return a.focused === b.focused ? 0 : a.focused ? 1 : -1;
        });
      }
      if (task) {
        state.tasks.forEach((task) => {
          if (task.id === action.payload.id) {
            task.focused = true;
          } else {
            task.focused = false;
          }
        });
      }
    },

    closeWindow: (state, action: PayloadAction<{ id: string }>) => {
      state.windows = state.windows.filter(
        (window) => window.id !== action.payload.id
      );
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    newWindow: (
      state,
      action: PayloadAction<{ id: string; title: string; link: string }>
    ) => {
      state.windows.push({
        position: { y: 0, x: 0 },
        link: action.payload.link,
        id: action.payload.id,
        title: action.payload.title,
        minimized: false,
        zIndex: 1,
        fullScreen: true,
        focused: true,
      });
      state.tasks.push({
        title: action.payload.title,
        focused: true,
        id: action.payload.id,
      });
      state.start.open = false;
    },
  },
});

export const {
  setStartOpen,
  setStartHover,
  setWindowPosition,
  setWindowFullScreen,
  minimizeWindow,
  focusWindow,
  closeWindow,
  clickTask,
  newWindow,
} = appSlice.actions;
export default appSlice.reducer;
