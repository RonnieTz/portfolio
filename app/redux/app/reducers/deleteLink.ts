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
  console.log(link?.linkID);

  if (
    link?.linkID === 'PortfolioLinkID2' ||
    link?.linkID === 'QuizLinkID2' ||
    link?.linkID === 'ChessLinkID2'
  ) {
    return;
  }
  if (link) {
    state.links = state.links.filter(
      (link) => link.linkID !== action.payload.linkID
    );
    state.windows = state.windows.filter(
      (window) => window.windowID !== link.windowID
    );
  }
};
