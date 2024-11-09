export type ProjectWindow = {
  type: 'project';
  windowID: string;
  title: string;
  logo: any;
  size: { width: number; height: number };
  fixedSize: boolean;
  fullScreen: boolean;
  minimized: boolean;
  focused: boolean;
  zIndex: number;
  position: { y: number; x: number };
  liveLink: string;
  codesandboxLink: string;
  gitHubLink: string;
  selected: boolean;
  open: boolean;
};

export type SubWindow = {
  type: 'subWindow';
  windowID: string;
  title: string;
  logo: any;
  size: { width: number; height: number };
  fixedSize: boolean;
  fullScreen: boolean;
  minimized: boolean;
  focused: boolean;
  zIndex: number;
  position: { y: number; x: number };
  selected: boolean;
  open: boolean;
  content: string;
};

export type ProgramWindow = {
  type: 'program';
  windowID: string;
  title: string;
  logo: any;
  size: { width: number; height: number };
  fixedSize: boolean;
  fullScreen: boolean;
  minimized: boolean;
  focused: boolean;
  zIndex: number;
  position: { y: number; x: number };
  subWindow: string;
  selected: boolean;
  open: boolean;
};

export type TextFileWindow = {
  type: 'textFile';
  windowID: string;
  title: string;
  logo: any;
  size: { width: number; height: number };
  fixedSize: boolean;
  fullScreen: boolean;
  minimized: boolean;
  focused: boolean;
  zIndex: number;
  position: { y: number; x: number };
  content: string;
  subWindow: string;
  selected: boolean;
  open: boolean;
};

export type FolderWindow = {
  type: 'folder';
  windowID: string;
  title: string;
  logo: any;
  size: { width: number; height: number };
  fixedSize: boolean;
  fullScreen: boolean;
  minimized: boolean;
  focused: boolean;
  zIndex: number;
  position: { y: number; x: number };
  selected: boolean;
  open: boolean;
  history: {
    locations: { title: string; locationID: string }[];
    currentLocation: number;
  };
  subWindow: string;
};

export type ProfileWindow = {
  type: 'profile';
  windowID: string;
  title: string;
  logo: any;
  size: { width: number; height: number };
  fixedSize: boolean;
  fullScreen: boolean;
  minimized: boolean;
  focused: boolean;
  zIndex: number;
  position: { y: number; x: number };
  selected: boolean;
  open: boolean;
};

export type WindowType =
  | ProjectWindow
  | ProgramWindow
  | FolderWindow
  | TextFileWindow
  | SubWindow
  | ProfileWindow;

export type Link = {
  selected: boolean;
  name: string;
  linkID: string;
  windowID: string;
  windowType: 'folder' | 'program';
  folderLocation: string;
  logo: any;
  rename: boolean;
  position: { y: number; x: number };
  isDragged: boolean;
  dateModified: Date;
};

export type InitialState = {
  start: { open: boolean; hover: boolean };
  welcome: boolean;
  windows: WindowType[];
  turnOff: boolean;
  loaded: boolean;
  turningOff: boolean;
  taskList: WindowType[];
  links: Link[];
  draggingWindow: boolean;
  selectedLinkForMoveWindow: string;
};
