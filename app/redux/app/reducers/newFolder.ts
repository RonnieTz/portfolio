import { WritableDraft } from 'immer';
import { FolderWindow, InitialState, Link } from '../types';
import { nanoid, PayloadAction } from '@reduxjs/toolkit';
import folderLogo from '@/public/Folder Closed.png';

export const newFolder = (
  state: WritableDraft<InitialState>,
  action: PayloadAction<{ folderID: string; windowID: string }>
) => {
  const existingLinkInFolder = state.links.filter(
    (link) => link.folderLocation === action.payload.folderID
  );

  function findNewName() {
    let i = 1;
    let newName = 'New Folder';
    while (existingLinkInFolder.some((link) => link.name === newName)) {
      i++;
      newName = `New Folder (${i})`;
    }
    return newName;
  }
  const linkID = nanoid();
  const newWindowID = nanoid();

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

  if (action.payload.folderID === 'desktop') {
    const newName = findNewName();
    const newLink: Link = {
      linkID,
      name: newName,
      folderLocation: 'desktop',
      logo: folderLogo,
      selected: false,
      windowID: newWindowID,
      rename: true,
      windowType: 'folder',
      isDragged: false,
      position: findEmptyPosition() || { x: -1, y: -1 },
      dateModified: new Date(),
    };

    const newWindow: FolderWindow = {
      title: newName,
      logo: folderLogo,
      selected: false,
      type: 'folder',
      size: { width: 650, height: 650 },
      windowID: newWindowID,
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
    state.windows.push(newWindow);
    state.links.push(newLink);
    return;
  }

  const newLink: Link = {
    linkID,
    name: findNewName(),
    folderLocation: action.payload.folderID,
    logo: folderLogo,
    selected: false,
    windowID: action.payload.windowID,
    rename: true,
    windowType: 'folder',
    isDragged: false,
    position: { y: -1, x: -1 },
    dateModified: new Date(),
  };
  state.links.push(newLink);
};
