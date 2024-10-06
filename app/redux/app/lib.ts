import logo from '@/public/chess.svg';
import quizLogo from '@/public/quiz.png';
import portfolioLogo from '@/public/portfolio.svg';

export const chess = {
  name: 'Chess Game',
  liveLink: 'https://chess-game-flax.vercel.app/',
  codesandboxLink:
    'https://codesandbox.io/p/github/RonnieTz/chess_game/main?import=true&embed=1',
  gitHubLink: 'https://github.com/RonnieTz/chess_game',
  logo: logo as any,
  selected: false,
  type: 'project',
  size: { width: 650, height: 650 },
};

export const quiz = {
  name: 'Quiz Game',
  liveLink: 'https://quiz-smoky-rho.vercel.app/',
  codesandboxLink:
    'https://codesandbox.io/p/github/RonnieTz/quiz/main?import=true&embed=1&file=%2Fapi%2Findex.js&showConsole=false',
  gitHubLink: 'https://github.com/RonnieTz/quiz',
  logo: quizLogo as any,
  selected: false,
  type: 'project',
  size: { width: 650, height: 650 },
};

export const portfolio = {
  name: 'Portfolio',
  liveLink: '',
  codesandboxLink:
    'https://codesandbox.io/p/github/RonnieTz/portfolio/master?import=true&embed=1',
  gitHubLink: 'https://github.com/RonnieTz/portfolio',
  logo: portfolioLogo as any,
  selected: false,
  type: 'project',
  size: { width: 650, height: 650 },
};