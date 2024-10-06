export const initialState: {
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
