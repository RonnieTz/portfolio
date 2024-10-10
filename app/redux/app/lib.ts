import logo from '@/public/chess.svg';
import quizLogo from '@/public/quiz.png';
import portfolioLogo from '@/public/portfolio.svg';
import profileLogo from '@/public/profile.png';
import folderLogo from '@/public/Folder Closed.png';
import textLogo from '@/public/text.png';
import minesweeperLogo from '@/public/Minesweeper.png';
import {
  ProjectWindow,
  FolderWindow,
  ProgramWindow,
  TextFileWindow,
  SubWindow,
  ProfileWindow,
  Link,
} from './types';

export const chess: ProjectWindow = {
  title: 'Chess Game',
  liveLink: 'https://chess-game-flax.vercel.app/',
  codesandboxLink:
    'https://codesandbox.io/p/github/RonnieTz/chess_game/main?import=true&embed=1',
  gitHubLink: 'https://github.com/RonnieTz/chess_game',
  logo: logo as any,
  selected: false,
  type: 'project',
  size: { width: 650, height: 650 },
  windowID: 'ChessID123',
  fixedSize: false,
  fullScreen: false,
  minimized: false,
  focused: true,
  zIndex: 10,
  position: { y: Math.random() * 100, x: Math.random() * 300 },
  open: false,
};

export const chessLink: Link = {
  name: 'Chess Game',
  selected: false,
  linkID: 'ChessLinkID1',
  folderLocation: 'desktop',
  windowID: 'ChessID123',
  logo: logo as any,
};

export const quiz: ProjectWindow = {
  title: 'Quiz Game',
  liveLink: 'https://quiz-smoky-rho.vercel.app/',
  codesandboxLink:
    'https://codesandbox.io/p/github/RonnieTz/quiz/main?import=true&embed=1&file=%2Fapi%2Findex.js&showConsole=false',
  gitHubLink: 'https://github.com/RonnieTz/quiz',
  logo: quizLogo,
  selected: false,
  type: 'project',
  size: { width: 650, height: 650 },
  windowID: 'QuizID123',
  fixedSize: false,
  fullScreen: false,
  minimized: false,
  focused: true,
  zIndex: 10,
  position: { y: Math.random() * 100, x: Math.random() * 300 },
  open: false,
};

export const quizLink: Link = {
  name: 'Quiz Game',
  selected: false,
  linkID: 'QuizLinkID123',
  folderLocation: 'desktop',
  windowID: 'QuizID123',
  logo: quizLogo,
};

export const portfolio: ProjectWindow = {
  title: 'Portfolio',
  liveLink: '',
  codesandboxLink:
    'https://codesandbox.io/p/github/RonnieTz/portfolio/master?import=true&embed=1',
  gitHubLink: 'https://github.com/RonnieTz/portfolio',
  logo: portfolioLogo,
  selected: false,
  type: 'project',
  size: { width: 650, height: 650 },
  windowID: 'PortfolioID123',
  fixedSize: false,
  fullScreen: false,
  minimized: false,
  focused: true,
  zIndex: 10,
  position: { y: Math.random() * 100, x: Math.random() * 300 },
  open: false,
};

export const portfolioLink: Link = {
  name: 'Portfolio',
  selected: false,
  linkID: 'PortfolioLinkID123',
  folderLocation: 'desktop',
  windowID: 'PortfolioID123',
  logo: portfolioLogo,
};

export const folder: FolderWindow = {
  title: 'Folder',
  logo: folderLogo,
  selected: false,
  type: 'folder',
  size: { width: 650, height: 650 },
  windowID: 'FolderID123',
  fixedSize: false,
  fullScreen: false,
  minimized: false,
  focused: true,
  zIndex: 10,
  position: { y: Math.random() * 100, x: Math.random() * 300 },
  open: false,
  history: {
    locations: [],
    currentLocation: 0,
  },
};

export const folderLink: Link = {
  name: 'Folder',
  selected: false,
  linkID: 'FolderLinkID1',
  folderLocation: 'desktop',
  windowID: 'FolderID123',
  logo: folderLogo,
};

export const minesweeper: ProgramWindow = {
  title: 'Minesweeper',
  logo: minesweeperLogo,
  size: { width: 650, height: 650 },
  windowID: 'MinesweeperID123',
  fixedSize: true,
  fullScreen: false,
  minimized: false,
  focused: true,
  zIndex: 10,
  position: { y: Math.random() * 100, x: Math.random() * 300 },
  subWindow: '',
  selected: false,
  type: 'program',
  open: false,
};

export const minesweeperLink: Link = {
  name: 'Minesweeper',
  selected: false,
  linkID: 'MinesweeperLinkID123',
  folderLocation: 'desktop',
  windowID: 'MinesweeperID123',
  logo: minesweeperLogo,
};

export const scores: SubWindow = {
  type: 'subWindow',
  windowID: 'ScoresID123',
  title: 'Scores',
  logo: minesweeperLogo,
  size: { width: 300, height: 400 },
  fixedSize: true,
  fullScreen: false,
  minimized: false,
  focused: true,
  zIndex: 10,
  position: { y: Math.random() * 300, x: Math.random() * 400 },
  selected: false,
  open: false,
};

export const textEditorFonts: SubWindow = {
  type: 'subWindow',
  windowID: 'font',
  title: 'Fonts',
  logo: textLogo,
  size: { width: 500, height: 450 },
  fixedSize: true,
  fullScreen: false,
  minimized: false,
  focused: true,
  zIndex: 10,
  position: { y: Math.random() * 300, x: Math.random() * 400 },
  selected: false,
  open: false,
};

export const textFile: TextFileWindow = {
  title: 'Text File',
  logo: textLogo,
  content: 'text123',
  size: { width: 650, height: 650 },
  windowID: 'TextFileID123',
  fixedSize: false,
  fullScreen: false,
  minimized: false,
  focused: true,
  zIndex: 10,
  position: { y: Math.random() * 100, x: Math.random() * 300 },
  subWindow: '',
  selected: false,
  type: 'textFile',
  open: true,
};

export const textFileLink: Link = {
  name: 'Text File',
  selected: false,
  linkID: 'TextFileLinkID123',
  folderLocation: 'desktop',
  windowID: 'TextFileID123',
  logo: textLogo,
};

export const profile: ProfileWindow = {
  title: 'Profile',
  logo: profileLogo,
  size: { width: 650, height: 650 },
  windowID: 'ProfileID123',
  fixedSize: true,
  fullScreen: false,
  minimized: false,
  focused: true,
  zIndex: 10,
  open: false,
  selected: false,
  type: 'profile',
  position: { y: Math.random() * 100, x: Math.random() * 300 },
};

export const profileLink: Link = {
  name: 'Profile',
  selected: false,
  linkID: 'ProfileLinkID123',
  folderLocation: 'desktop',
  windowID: 'ProfileID123',
  logo: profileLogo,
};
