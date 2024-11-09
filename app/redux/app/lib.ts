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
  position: { y: Math.random() * 100, x: Math.random() * 100 },
  open: false,
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
  position: { y: Math.random() * 100, x: Math.random() * 100 },
  open: false,
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
  position: { y: Math.random() * 20, x: Math.random() * 20 },
  open: false,
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
  position: { y: Math.random() * 100, x: Math.random() * 100 },
  subWindow: '',
  selected: false,
  type: 'program',
  open: false,
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
  position: { y: Math.random() * 100, x: Math.random() * 100 },
  selected: false,
  open: false,
  content: '',
};

export const textEditorFonts: SubWindow = {
  type: 'subWindow',
  windowID: 'TextFileID123font',
  title: 'Fonts',
  logo: textLogo,
  size: { width: 500, height: 450 },
  fixedSize: true,
  fullScreen: false,
  minimized: false,
  focused: true,
  zIndex: 10,
  position: { y: Math.random() * 100, x: Math.random() * 100 },
  selected: false,
  open: false,
  content: 'text123',
};

export const textFile: TextFileWindow = {
  title: 'Text File',
  logo: textLogo,
  content: 'text123',
  size: { width: 600, height: 600 },
  windowID: 'TextFileID123',
  fixedSize: false,
  fullScreen: false,
  minimized: false,
  focused: true,
  zIndex: 10,
  position: { y: Math.random() * 100, x: Math.random() * 100 },
  subWindow: '',
  selected: false,
  type: 'textFile',
  open: false,
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
  position: { y: Math.random() * 100, x: Math.random() * 100 },
};

export const folder: FolderWindow = {
  title: 'Folder',
  logo: folderLogo,
  selected: false,
  type: 'folder',
  size: { width: 600, height: 600 },
  windowID: 'FolderID123',
  fixedSize: false,
  fullScreen: false,
  minimized: false,
  focused: true,
  zIndex: 10,
  position: { y: Math.random() * 100, x: Math.random() * 200 },
  open: false,
  history: {
    locations: [],
    currentLocation: 0,
  },
  subWindow: '',
};

export const profileLink: Link = {
  name: 'Profile',
  selected: false,
  linkID: 'ProfileLinkID123',
  folderLocation: 'desktop',
  windowID: 'ProfileID123',
  logo: profileLogo,
  rename: false,
  windowType: 'program',
  position: { x: -1, y: -1 },
  isDragged: false,
  dateModified: new Date(),
};

export const minesweeperLink: Link = {
  name: 'Minesweeper',
  selected: false,
  linkID: 'MinesweeperLinkID123',
  folderLocation: 'desktop',
  windowID: 'MinesweeperID123',
  logo: minesweeperLogo,
  rename: false,
  windowType: 'program',
  position: { x: -1, y: -1 },
  isDragged: false,
  dateModified: new Date(),
};

export const textFileLink: Link = {
  name: 'Text File',
  selected: false,
  linkID: 'TextFileLinkID123',
  folderLocation: 'desktop',
  windowID: 'TextFileID123',
  logo: textLogo,
  rename: false,
  windowType: 'program',
  position: { x: -1, y: -1 },
  isDragged: false,
  dateModified: new Date(),
};

export const folderLink: Link = {
  name: 'Folder',
  selected: false,
  linkID: 'FolderLinkID1',
  folderLocation: 'desktop',
  windowID: 'FolderID123',
  logo: folderLogo,
  rename: false,
  windowType: 'folder',
  position: { x: -1, y: -1 },
  isDragged: false,
  dateModified: new Date(),
};

export const chessLink: Link = {
  name: 'Chess Game',
  selected: false,
  linkID: 'ChessLinkID1',
  folderLocation: 'desktop',
  windowID: 'ChessID123',
  logo: logo as any,
  rename: false,
  windowType: 'program',
  position: { x: -1, y: -1 },
  isDragged: false,
  dateModified: new Date(),
};

export const quizLink: Link = {
  name: 'Quiz Game',
  selected: false,
  linkID: 'QuizLinkID123',
  folderLocation: 'desktop',
  windowID: 'QuizID123',
  logo: quizLogo,
  rename: false,
  windowType: 'program',
  position: { x: -1, y: -1 },
  isDragged: false,
  dateModified: new Date(),
};

export const portfolioLink: Link = {
  name: 'Portfolio',
  selected: false,
  linkID: 'PortfolioLinkID123',
  folderLocation: 'desktop',
  windowID: 'PortfolioID123',
  logo: portfolioLogo,
  rename: false,
  windowType: 'program',
  position: { x: -1, y: -1 },
  isDragged: false,
  dateModified: new Date(),
};
