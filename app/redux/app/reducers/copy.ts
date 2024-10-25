import { nanoid, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer';
import {
  FolderWindow,
  InitialState,
  Link,
  SubWindow,
  TextFileWindow,
} from '../types';

export const copyPasteLink = (
  state: WritableDraft<InitialState>,
  action: PayloadAction<{
    linkID: string;
    linkNewLocation: string;
  }>
): void => {
  const { linkID, linkNewLocation } = action.payload;

  const { windowID, logo, rename, selected, windowType } = state.links.find(
    (link) => link.linkID === linkID
  )!;
  const { type } = state.windows.find(
    (window) => window.windowID === windowID
  )!;
  const findNewName = (existingName: string) => {
    let i = 1;
    let newName = existingName;
    const linksInNewLocation = state.links.filter(
      (item) => item.folderLocation === linkNewLocation
    );
    while (linksInNewLocation.some((item) => item.name === newName)) {
      i++;
      newName = `${existingName} (${i})`;
    }
    return newName;
  };
  if (type !== 'folder' && type !== 'textFile') {
    const { name } = state.links.find((link) => link.linkID === linkID)!;
    const newName = findNewName(name);
    const newLink: Link = {
      linkID: nanoid(),
      name: newName,
      folderLocation: linkNewLocation,
      logo,
      selected,
      windowID,
      rename,
      windowType,
      isDragged: false,
      position: { x: -1, y: -1 },
    };
    state.links.push(newLink);
  }
};

export const copyPasteTextFile = (
  state: WritableDraft<InitialState>,
  action: PayloadAction<{
    linkID: string;
    linkNewLocation: string;
    contentID: string;
  }>
): void => {
  const { linkID, linkNewLocation } = action.payload;
  const { windowID, logo, rename, selected, windowType, name, folderLocation } =
    state.links.find((link) => link.linkID === linkID)!;
  const { type } = state.windows.find(
    (window) => window.windowID === windowID
  )!;

  const findNewName = (existingName: string) => {
    let i = 1;
    let newName = existingName;
    const linksInNewLocation = state.links.filter(
      (item) => item.folderLocation === linkNewLocation
    );
    while (linksInNewLocation.some((item) => item.name === newName)) {
      i++;
      newName = `${existingName} (${i})`;
    }
    return newName;
  };
  if (type === 'textFile') {
    const newWindowID = nanoid();
    const newFontWindowID = newWindowID + 'font';
    const newLinkID = nanoid();
    const newName = findNewName(name);
    const newLink: Link = {
      linkID: newLinkID,
      name: newName,
      folderLocation: linkNewLocation,
      logo,
      selected,
      windowID: newWindowID,
      rename,
      windowType: 'program',
      isDragged: false,
      position: { x: -1, y: -1 },
    };
    const newWindow: TextFileWindow = {
      windowID: newWindowID,
      title: newName,
      logo,
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
      windowID: newFontWindowID,
      title: `Fonts`,
      logo,
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

    state.links.push(newLink);
    state.windows.push(newWindow, newFontWindow);
  }
};

export const copyPasteFolder = (
  state: WritableDraft<InitialState>,
  action: PayloadAction<{
    folderLinkID: string;
    newFolderLinkID: string;
    linkNewLocation: string;
    targetWindowID: string;
  }>
) => {
  const link = state.links.find(
    (link) => link.linkID === action.payload.folderLinkID
  )!;

  const { folderLinkID, newFolderLinkID } = action.payload;

  const findNewName = (existingName: string) => {
    const foldersInNewLocation = state.links.filter(
      (item) => item.folderLocation === action.payload.linkNewLocation
    );
    let i = 1;
    let newName = existingName;
    while (foldersInNewLocation.some((item) => item.name === newName)) {
      i++;
      newName = `${existingName} (${i})`;
    }
    return newName;
  };

  const newWindowID = nanoid();

  const newFolderLink: Link = {
    linkID: newFolderLinkID,
    name: findNewName(link.name),
    folderLocation: action.payload.linkNewLocation,
    logo: state.links.find((link) => link.linkID === folderLinkID)!.logo,
    selected: state.links.find((link) => link.linkID === folderLinkID)!
      .selected,
    windowID:
      action.payload.targetWindowID === 'desktop'
        ? newWindowID
        : action.payload.targetWindowID,
    rename: state.links.find((link) => link.linkID === folderLinkID)!.rename,
    windowType: state.links.find((link) => link.linkID === folderLinkID)!
      .windowType,
    isDragged: false,
    position: { x: -1, y: -1 },
  };
  const newFolderWindow: FolderWindow = {
    windowID: newWindowID,
    title: newFolderLink.name,
    logo: newFolderLink.logo,
    size: { width: 650, height: 650 },
    fixedSize: false,
    fullScreen: false,
    minimized: false,
    focused: true,
    zIndex: 10,
    position: { y: Math.random() * 100, x: Math.random() * 300 },
    selected: false,
    open: false,
    type: 'folder',
    history: { currentLocation: 0, locations: [] },
  };
  state.links.push(newFolderLink);
  if (action.payload.targetWindowID === 'desktop') {
    state.windows.push(newFolderWindow);
  }
};
