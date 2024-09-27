import { InitialState } from './types';
import project from '@/public/project.png';
import profile from '@/public/profile.png';
import folder from '@/public/Folder Closed.png';
import minesweeper from '@/public/Minesweeper.png';
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
};
