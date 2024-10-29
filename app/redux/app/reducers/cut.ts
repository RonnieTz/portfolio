import { nanoid, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer';
import { FolderWindow, InitialState } from '../types'; // Adjust the import path as necessary

export const cutPasteLink = (
  state: WritableDraft<InitialState>,
  action: PayloadAction<{
    linkID: string;
    linkLocation: string;
    linkNewLocation: string;
  }>
): void => {
  const { linkID, linkNewLocation } = action.payload;

  if (linkID === linkNewLocation) {
    return;
  }
  const link = state.links.find((link) => link.linkID === linkID);
  state.links = state.links.filter((link) => link.linkID !== linkID);
  if (link) {
    const { name } = link;
    const linksInNewLocation = state.links.filter(
      (item) => item.folderLocation === linkNewLocation
    );
    if (linksInNewLocation.some((item) => item.name === name)) {
      const findNewName = (existingName: string) => {
        let i = 1;
        let newName = existingName;
        while (linksInNewLocation.some((item) => item.name === newName)) {
          i++;
          newName = `${existingName} (${i})`;
        }
        return newName;
      };
      link.name = findNewName(name);
    }
    link.folderLocation = linkNewLocation;
    link.dateModified = new Date();
    state.links.push(link);
  }
};

export const cutPasteFolder = (
  state: WritableDraft<InitialState>,
  action: PayloadAction<{
    folderLinkID: string;
    newFolderLocation: string;
    windowID: string;
  }>
) => {
  const findSubFolders = (folderLinkID: string) => {
    const linksInFolder = state.links.filter(
      (link) => link.folderLocation === folderLinkID
    );
    const subFolders: string[] = [];
    linksInFolder.forEach((link) => {
      if (link.windowID) {
        subFolders.push(link.linkID);
        subFolders.push(...findSubFolders(link.linkID));
      }
    });
    return subFolders.filter((linkID) => {
      const { windowID } = state.links.find((link) => link.linkID === linkID)!;
      const { type } = state.windows.find(
        (window) => window.windowID === windowID
      )!;
      return type === 'folder';
    });
  };
  const { folderLinkID, newFolderLocation } = action.payload;
  const subfolders = [...findSubFolders(folderLinkID), folderLinkID];

  if (subfolders.includes(newFolderLocation)) {
    return;
  }
  const folder = state.links.find((link) => link.linkID === folderLinkID);
  if (folder) {
    const { name } = folder;
    const foldersInNewLocation = state.links.filter(
      (item) => item.folderLocation === newFolderLocation
    );
    if (foldersInNewLocation.some((item) => item.name === name)) {
      const findNewName = (existingName: string) => {
        let i = 1;
        let newName = existingName;
        while (foldersInNewLocation.some((item) => item.name === newName)) {
          i++;
          newName = `${existingName} (${i})`;
        }
        return newName;
      };
      folder.name = findNewName(name);
    }
    folder.folderLocation = newFolderLocation;
    folder.windowID = action.payload.windowID;
    subfolders.forEach((linkID) => {
      const link = state.links.find((link) => link.linkID === linkID);
      if (link) {
        link.windowID = action.payload.windowID;
      }
    });
    if (folder.folderLocation === 'desktop') {
      const windowID = nanoid();
      const newFolderWindow: FolderWindow = {
        windowID,
        type: 'folder',
        open: false,
        focused: true,
        minimized: false,
        fullScreen: false,
        fixedSize: false,
        size: { width: 600, height: 600 },
        position: { x: Math.random() * 200, y: Math.random() * 200 },
        zIndex: state.windows.length,
        title: folder.name,
        logo: folder.logo,
        history: {
          currentLocation: 0,
          locations: [],
        },
        selected: false,
      };
      state.windows.push(newFolderWindow);
      folder.windowID = windowID;
      subfolders.forEach((linkID) => {
        const link = state.links.find((link) => link.linkID === linkID);
        if (link) {
          link.windowID = windowID;
        }
      });
    }
  }
};
