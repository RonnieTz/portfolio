import { InitialState } from './types';
import folder from '@/public/Folder Closed.png';
import { chess, quiz, portfolio } from './lib';

export const initialState: InitialState = {
  start: { open: false, hover: false },
  windows: [],
  welcome: true,
  turnOff: false,
  loaded: false,
  projects: [
    { ...chess, location: '' },
    { ...quiz, location: '' },
    { ...portfolio, location: '' },
  ],
  folders: {
    locations: [
      {
        location: 'Desktop',
        items: [
          {
            name: 'Projects',
            selected: false,
            logo: folder as any,
            type: 'folder',
            items: [
              { ...chess, location: 'Desktop' },
              { ...quiz, location: 'Desktop' },
              { ...portfolio, location: 'Desktop' },
            ],
            location: 'Desktop',
            size: { width: 650, height: 650 },
          },
        ],
      },
      {
        location: 'Projects',
        items: [
          { ...chess, location: 'Projects' },
          { ...quiz, location: 'Projects' },
          { ...portfolio, location: 'Projects' },
          {
            name: 'Test Folder',
            selected: false,
            logo: folder as any,
            type: 'folder',
            items: [{ ...chess, location: 'Test Folder' }],
            location: 'Projects',
            size: { width: 650, height: 650 },
          },
        ],
      },
      {
        location: 'Test Folder',
        items: [{ ...chess, location: 'Test Folder' }],
      },
    ],
  },
  folderHistory: { history: ['Desktop'], currentFolder: 0 },
  mineswweeper: {
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
  },
};
