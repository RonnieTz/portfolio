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
  profileLink,
  textFileLink,
  textEditorFonts,
  minesweeperLink,
} from './lib';
import { nanoid } from '@reduxjs/toolkit';

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
  loaded: true,
  taskList: [],
  links: [
    { ...folderLink, name: 'My Projects', position: { x: 0, y: 2 } },
    { ...profileLink, position: { x: 0, y: 3 } },
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
    // textFileLink,
    {
      ...minesweeperLink,
      folderLocation: 'MinesweeperLinkID123',
    },
    {
      ...minesweeperLink,
      folderLocation: 'desktop',
      linkID: nanoid(),
      position: { x: 0, y: 1 },
    },
  ],
  draggingWindow: false,
};
