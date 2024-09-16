import { InitialState } from './types';
import chess from '@/public/chess.svg';
import quiz from '@/public/quiz.svg';
import project from '@/public/project.png';
import profile from '@/public/profile.png';

export const initialState: InitialState = {
  start: { open: false, hover: false },
  windows: [],
  projects: [
    {
      name: 'Chess Game',
      liveLink: 'https://chess-game-flax.vercel.app/',
      codesandboxLink:
        'https://codesandbox.io/p/github/RonnieTz/chess_game/main?import=true&embed=1',
      gitHubLink: 'https://github.com/RonnieTz/chess_game',
      logo: chess.src,
      selected: false,
      type: 'project',
    },
    {
      name: 'Quiz Game',
      liveLink: 'https://quiz-smoky-rho.vercel.app/',
      codesandboxLink:
        'https://codesandbox.io/p/github/RonnieTz/quiz/main?import=true&embed=1&file=%2Fapi%2Findex.js&showConsole=false',
      gitHubLink: 'https://github.com/RonnieTz/quiz',
      logo: quiz.src,
      selected: false,
      type: 'project',
    },
  ],
  shortcuts: [
    {
      name: 'My Profile',
      selected: false,
      logo: profile.src,
      type: 'shortcut',
    },
    {
      name: 'Projects',
      selected: false,
      logo: project.src,
      type: 'shortcut',
    },
  ],
};
