import { PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer';
import { InitialState } from '../types'; // Adjust the import path as necessary

export const deleteLink = (
  state: WritableDraft<InitialState>,
  action: PayloadAction<{ linkID: string }>
): void => {
  const link = state.links.find(
    (link) => link.linkID === action.payload.linkID
  );

  if (link) {
    state.links = state.links.filter(
      (link) => link.linkID !== action.payload.linkID
    );
    const window = state.windows.find(
      (window) => window.windowID === link.windowID
    );
    const removeItemsInFolder = (folderLocation: string) => {
      const linksInFolder = state.links.filter(
        (link) => link.folderLocation === folderLocation
      );
      linksInFolder.forEach((link) => {
        state.links = state.links.filter((item) => item.linkID !== link.linkID);
        if (window?.type === 'folder') {
          removeItemsInFolder(link.linkID);
        }
      });
    };
    if (window?.type === 'folder') {
      removeItemsInFolder(link.linkID);
    }
  }
};
