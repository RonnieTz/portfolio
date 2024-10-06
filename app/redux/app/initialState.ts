import { InitialState } from './types';
import folder from '@/public/Folder Closed.png';
import text from '@/public/text.png';
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
          {
            name: 'New text document file',
            selected: false,
            logo: text as any,
            type: 'textFile',
            location: 'Projects',
            size: { width: 650, height: 650 },
            content: {
              id: 'text123',
            },
          },
          {
            name: 'New text document file 2',
            selected: false,
            logo: text as any,
            type: 'textFile',
            location: 'Projects',
            size: { width: 650, height: 650 },
            content: {
              id: 'text1234',
            },
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