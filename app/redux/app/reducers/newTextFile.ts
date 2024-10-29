import { WritableDraft } from 'immer';
import { InitialState, Link, SubWindow, TextFileWindow } from '../types';
import { nanoid, PayloadAction } from '@reduxjs/toolkit';
import textLogo from '@/public/text.png';

export const newTextFile = (
  state: WritableDraft<InitialState>,
  action: PayloadAction<{ folderID: string; contentID: string }>
) => {
  const existingLinkInFolder = state.links.filter(
    (link) => link.folderLocation === action.payload.folderID
  );

  function findNewName() {
    let i = 1;
    let newName = 'New Text File';
    while (existingLinkInFolder.some((link) => link.name === newName)) {
      i++;
      newName = `New Text File (${i})`;
    }
    return newName;
  }
  const findEmptyPosition = () => {
    let x = 0;
    let y = 0;
    while (
      state.links.some(({ position }) => position.x === x && position.y === y)
    ) {
      y++;
      if (y === 8) {
        y = 0;
        x++;
        if (x === 15 && y === 7) {
          return;
        }
      }
    }
    return { x, y };
  };
  const windowID = nanoid();
  const fontWindowID = windowID + 'font';
  const linkID = nanoid();
  const newLink: Link = {
    linkID,
    name: findNewName(),
    folderLocation: action.payload.folderID,
    logo: textLogo,
    selected: false,
    windowID,
    rename: true,
    windowType: 'program',
    isDragged: false,
    position: findEmptyPosition() || { x: -1, y: -1 },
    dateModified: new Date(),
  };
  const newWindow: TextFileWindow = {
    windowID,
    title: findNewName(),
    logo: textLogo,
    size: { width: 650, height: 650 },
    fixedSize: false,
    fullScreen: false,
    minimized: false,
    focused: true,
    zIndex: 10,
    position: { y: Math.random() * 100, x: Math.random() * 300 },
    selected: false,
    open: false,
    type: 'textFile',
    content: action.payload.contentID,
    subWindow: '',
  };
  const newFontWindow: SubWindow = {
    windowID: fontWindowID,
    title: `Fonts`,
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
    type: 'subWindow',
    content: action.payload.contentID,
  };
  state.windows.push(newWindow, newFontWindow);
  state.links.push(newLink);
};
