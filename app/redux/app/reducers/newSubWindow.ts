import { WritableDraft } from 'immer';
import { FolderWindow, InitialState, SubWindow, ProgramWindow } from '../types';
import { PayloadAction } from '@reduxjs/toolkit';
import folder from '@/public/Folder Closed.png';
import { act } from 'react';

export const newSubWindow = (
  state: WritableDraft<InitialState>,
  action: PayloadAction<{
    windowID: string;
    subWindowID: string;
    title: string;
  }>
) => {
  const window = state.windows.find(
    (window) => window.windowID === action.payload.windowID
  ) as ProgramWindow;
  const subWindow = state.windows.find(
    (window) => window.windowID === action.payload.subWindowID
  ) as SubWindow;

  const task = state.taskList.find(
    (window) => window.windowID === action.payload.windowID
  );

  const newWindow: SubWindow = {
    fixedSize: true,
    fullScreen: false,
    focused: true,
    minimized: false,
    zIndex: 100,
    open: true,
    windowID: action.payload.subWindowID,
    content: '',
    title: action.payload.title,
    logo: folder,
    size: { width: 400, height: 500 },
    position: { x: 100, y: 100 },
    selected: false,
    type: 'subWindow',
  };
  if (window) {
    window.subWindow = action.payload.subWindowID;
    window.focused = false;
  }

  if (!subWindow) {
    state.windows.push(newWindow);
    state.taskList.push(newWindow);
  } else {
    subWindow.open = true;
    subWindow.focused = true;
    subWindow.minimized = false;
    subWindow.zIndex = 100;
    subWindow.position = window.position;
    state.taskList.push(subWindow);
  }
  if (task) {
    task.focused = false;
  }
};
