import { InitialState } from './types';
import {
  chess,
  quiz,
  portfolio,
  folder,
  minesweeper,
  textFile,
  scores,
  profile,
  chessLink,
  quizLink,
  portfolioLink,
  folderLink,
  minesweeperLink,
  profileLink,
  textFileLink,
  textEditorFonts,
} from './lib';

export const initialState: InitialState = {
  start: { open: false, hover: false },
  windows: [
    scores,
    { ...folder, title: 'My Projects' },
    chess,
    quiz,
    portfolio,
    minesweeper,
    textFile,
    profile,
    textEditorFonts,
  ],
  welcome: true,
  turnOff: false,
  loaded: false,
  taskList: [],
  links: [
    { ...folderLink, name: 'My Projects' },
    profileLink,
    {
      ...chessLink,
      folderLocation: 'FolderLinkID1',
      linkID: 'ChessLinkID2',
    },
    {
      ...quizLink,
      folderLocation: 'FolderLinkID1',
      linkID: 'QuizLinkID2',
    },
    {
      ...portfolioLink,
      folderLocation: 'FolderLinkID1',
      linkID: 'PortfolioLinkID2',
    },
    textFileLink,
  ],
};
