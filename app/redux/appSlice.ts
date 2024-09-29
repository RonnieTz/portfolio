import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';

import { set_WindowPosition } from './reducers/setWindowPosition';
import { set_WindowFullScreen } from './reducers/setWindowFullScreen';
import { Folder } from './types';

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
          position: { y: Math.random() * 100, x: Math.random() * 760 },
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
      const folder = state.folders.locations.find(
        (folder) => folder.location === action.payload.location
      );
      if (folder) {
        folder.items.forEach((item) => {
          item.selected = false;
        });
      }
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
    ms_selectCell: (state, action: PayloadAction<{ i: number; j: number }>) => {
      const cell = state.mineswweeper.board[action.payload.i][action.payload.j];

      const selectAllEmptyCells = (i: number, j: number) => {
        const neighbors = [
          [i - 1, j - 1],
          [i - 1, j],
          [i - 1, j + 1],
          [i, j - 1],
          [i, j + 1],
          [i + 1, j - 1],
          [i + 1, j],
          [i + 1, j + 1],
        ];

        neighbors.forEach(([x, y]) => {
          if (
            x >= 0 &&
            x < state.mineswweeper.board.length &&
            y >= 0 &&
            y < state.mineswweeper.board[0].length
          ) {
            const neighborCell = state.mineswweeper.board[x][y];
            if (!neighborCell.clicked && !neighborCell.flag) {
              neighborCell.clicked = true;
              if (neighborCell.value === 0) {
                selectAllEmptyCells(x, y);
              }
            }
          }
        });
      };
      if (cell.value === 0) {
        selectAllEmptyCells(action.payload.i, action.payload.j);
      }
      cell.clicked = true;
      if (
        state.mineswweeper.board.every((row) => {
          return row.every((cell) => {
            return cell.value === 'bomb' || cell.clicked;
          });
        })
      ) {
        console.log('game over');
        state.mineswweeper.gameover = true;
      }
    },
    ms_flagCell: (state, action: PayloadAction<{ i: number; j: number }>) => {
      const cell = state.mineswweeper.board[action.payload.i][action.payload.j];
      cell.flag = !cell.flag;
    },
    ms_assignBomb: (state, action: PayloadAction<{ i: number; j: number }>) => {
      const { i, j } = action.payload;

      for (let x = 0; x < state.mineswweeper.totalBombs; ) {
        const randomRow = Math.floor(
          Math.random() * state.mineswweeper.board.length
        );
        const randomCol = Math.floor(
          Math.random() * state.mineswweeper.board[0].length
        );

        if (randomRow === i && randomCol === j) {
          continue;
        }

        if (state.mineswweeper.board[randomRow][randomCol].value !== 'bomb') {
          state.mineswweeper.board[randomRow][randomCol].value = 'bomb';
        }

        x++;
      }
      const neighborCellIsBomb = (i: number, j: number) => {
        const neighbors = [
          [i - 1, j - 1],
          [i - 1, j],
          [i - 1, j + 1],
          [i, j - 1],
          [i, j + 1],
          [i + 1, j - 1],
          [i + 1, j],
          [i + 1, j + 1],
        ];

        let bombCount = 0;
        neighbors.forEach(([x, y]) => {
          if (
            x >= 0 &&
            x < state.mineswweeper.board.length &&
            y >= 0 &&
            y < state.mineswweeper.board[0].length
          ) {
            if (state.mineswweeper.board[x][y].value === 'bomb') {
              bombCount++;
            }
          }
        });
        return bombCount;
      };

      state.mineswweeper.board.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell.value !== 'bomb') {
            cell.value = neighborCellIsBomb(i, j);
          }
        });
      });
      state.mineswweeper.firstClick = false;
    },
    clickBomb: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.mineswweeper.bombClicked = {
        clicked: true,
        x: action.payload.x,
        y: action.payload.y,
      };

      state.mineswweeper.board.forEach((row) => {
        row.forEach((cell) => {
          if (cell.value === 'bomb' && !cell.flag) {
            cell.clicked = true;
          }
        });
      });
    },
    ms_reset: (state) => {
      state.mineswweeper.board = Array.from({ length: 10 }, () =>
        Array.from({ length: 10 }, () => ({
          clicked: false,
          flag: false,
          value: 0,
        }))
      );
      state.mineswweeper.bombClicked = { clicked: false, x: 0, y: 0 };
      state.mineswweeper.firstClick = true;
      state.mineswweeper.totalBombs = 10;
      state.mineswweeper.timer = 0;
      state.mineswweeper.gameover = false;
    },
    setTimer: (state) => {
      if (
        state.mineswweeper.firstClick ||
        state.mineswweeper.bombClicked.clicked ||
        state.mineswweeper.gameover
      ) {
        return;
      }
      state.mineswweeper.timer += 1;
    },
    setGameOver: (state) => {
      state.mineswweeper.gameover = true;
    },
    setSuccessClick: (state, action: PayloadAction<boolean>) => {
      state.mineswweeper.successClick = action.payload;
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
  ms_selectCell,
  ms_flagCell,
  ms_assignBomb,
  clickBomb,
  ms_reset,
  setTimer,
  setGameOver,
  setSuccessClick,
} = appSlice.actions;
export default appSlice.reducer;
