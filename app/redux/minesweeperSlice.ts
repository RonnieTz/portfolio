import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchHighScores } from './reducers/fetchHighScores';
import { ScoreType } from '../utilities/database/getScores';

const initialState: {
  board: { clicked: boolean; value: number | 'bomb'; flag: boolean }[][];
  totalBombs: number;
  firstClick: boolean;
  bombClicked: { clicked: boolean; x: number; y: number };
  successClick: boolean;
  timer: number;
  gameover: boolean;
  mode: 'begginer' | 'intermediate' | 'expert';
  highScores: {
    show: boolean;
    scores: {
      level: string;
      scores: {
        name: string;
        time: number;
      }[];
    }[];
  };
} = {
  board: new Array(12)
    .fill(0)
    .map(() =>
      new Array(12)
        .fill(0)
        .map(() => ({ clicked: false, value: 0, flag: false }))
    ),
  totalBombs: 20,
  firstClick: true,
  bombClicked: { clicked: false, x: 0, y: 0 },
  timer: 0,
  gameover: false,
  successClick: false,
  mode: 'begginer',
  highScores: {
    show: false,
    scores: [
      {
        level: 'begginer',
        scores: [
          { name: 'Anonymous', time: 999 },
          { name: 'Anonymous', time: 999 },
          { name: 'Anonymous', time: 999 },
        ],
      },
      {
        level: 'intermediate',
        scores: [
          { name: 'Anonymous', time: 999 },
          { name: 'Anonymous', time: 999 },
          { name: 'Anonymous', time: 999 },
        ],
      },
      {
        level: 'expert',
        scores: [
          { name: 'Anonymous', time: 999 },
          { name: 'Anonymous', time: 999 },
          { name: 'Anonymous', time: 999 },
        ],
      },
    ],
  },
};

export const minesweeperSlice = createSlice({
  name: 'minesweeper',
  initialState,
  reducers: {
    ms_selectCell: (state, action: PayloadAction<{ i: number; j: number }>) => {
      const cell = state.board[action.payload.i][action.payload.j];

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
            x < state.board.length &&
            y >= 0 &&
            y < state.board[0].length
          ) {
            const neighborCell = state.board[x][y];
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
        state.board.every((row) => {
          return row.every((cell) => {
            return cell.value === 'bomb' || cell.clicked;
          });
        })
      ) {
        state.gameover = true;
        console.log('gameover');
      }
    },
    ms_flagCell: (state, action: PayloadAction<{ i: number; j: number }>) => {
      const cell = state.board[action.payload.i][action.payload.j];
      cell.flag = !cell.flag;
    },
    ms_assignBomb: (state, action: PayloadAction<{ i: number; j: number }>) => {
      const { i, j } = action.payload;

      for (let x = 0; x < state.totalBombs; ) {
        const randomRow = Math.floor(Math.random() * state.board.length);
        const randomCol = Math.floor(Math.random() * state.board[0].length);

        if (
          (randomRow === i || randomRow === i + 1 || randomRow === i - 1) &&
          (randomCol === j || randomCol === j + 1 || randomCol === j - 1)
        ) {
          continue;
        }

        if (state.board[randomRow][randomCol].value !== 'bomb') {
          state.board[randomRow][randomCol].value = 'bomb';
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
            x < state.board.length &&
            y >= 0 &&
            y < state.board[0].length
          ) {
            if (state.board[x][y].value === 'bomb') {
              bombCount++;
            }
          }
        });
        return bombCount;
      };

      state.board.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell.value !== 'bomb') {
            cell.value = neighborCellIsBomb(i, j);
          }
        });
      });
      state.firstClick = false;
    },
    clickBomb: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.bombClicked = {
        clicked: true,
        x: action.payload.x,
        y: action.payload.y,
      };

      state.board.forEach((row) => {
        row.forEach((cell) => {
          if (cell.value === 'bomb' && !cell.flag) {
            cell.clicked = true;
          }
        });
      });
    },
    ms_reset: (state) => {
      const { mode } = state;

      state.board = Array.from(
        {
          length:
            mode === 'begginer'
              ? 12
              : mode === 'intermediate'
              ? 20
              : mode === 'expert'
              ? 20
              : 12,
        },
        () =>
          Array.from(
            {
              length:
                mode === 'begginer'
                  ? 12
                  : mode === 'intermediate'
                  ? 20
                  : mode === 'expert'
                  ? 40
                  : 12,
            },
            () => ({
              clicked: false,
              flag: false,
              value: 0,
            })
          )
      );
      state.bombClicked = { clicked: false, x: 0, y: 0 };
      state.firstClick = true;
      state.totalBombs =
        mode === 'begginer' ? 20 : mode === 'intermediate' ? 60 : 100;
      state.timer = 0;
      state.gameover = false;
    },
    setTimer: (state) => {
      if (state.firstClick || state.bombClicked.clicked || state.gameover) {
        return;
      }
      state.timer += 1;
    },
    setGameOver: (state) => {
      state.gameover = true;
    },
    setSuccessClick: (state, action: PayloadAction<boolean>) => {
      state.successClick = action.payload;
    },
    setMsMode: (
      state,
      action: PayloadAction<'begginer' | 'intermediate' | 'expert'>
    ) => {
      state.mode = action.payload;
      switch (action.payload) {
        case 'begginer':
          state.totalBombs = 20;
          state.board = Array.from({ length: 12 }, () =>
            Array.from({ length: 12 }, () => ({
              clicked: false,
              flag: false,
              value: 0,
            }))
          );
          break;
        case 'intermediate':
          state.totalBombs = 60;
          state.board = Array.from({ length: 20 }, () =>
            Array.from({ length: 20 }, () => ({
              clicked: false,
              flag: false,
              value: 0,
            }))
          );
          break;
        case 'expert':
          state.totalBombs = 100;
          state.board = Array.from({ length: 20 }, () =>
            Array.from({ length: 40 }, () => ({
              clicked: false,
              flag: false,
              value: 0,
            }))
          );
          break;
      }
    },
    showHighScores: (state, action: PayloadAction<boolean>) => {
      state.highScores.show = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchHighScores.fulfilled,
      (state, action: PayloadAction<ScoreType>) => {
        const scores = action.payload.scores.map((score) => {
          return {
            level: score.level,
            scores: [
              { name: score.first.name, time: score.first.time },
              { name: score.second.name, time: score.second.time },
              { name: score.third.name, time: score.third.time },
            ],
          };
        });
        state.highScores.scores = scores;
      }
    );
  },
});

export default minesweeperSlice.reducer;
export const {
  ms_selectCell,
  ms_flagCell,
  ms_assignBomb,
  clickBomb,
  ms_reset,
  setTimer,
  setGameOver,
  setSuccessClick,
  setMsMode,
  showHighScores,
} = minesweeperSlice.actions;
