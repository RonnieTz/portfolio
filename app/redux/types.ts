export type Folder = {
  name: string;
  selected: boolean;
  logo: string;
  type: string;
  items?: Folder[];
  liveLink?: string;
  codesandboxLink?: string;
  gitHubLink?: string;
  location?: string;
  size: { width: number; height: number };
};

export type InitialState = {
  start: { open: boolean; hover: boolean };
  welcome: boolean;
  windows: {
    position: { y: number; x: number };
    liveLink?: string;
    codesandboxLink?: string;
    gitHubLink?: string;
    id: string;
    title: string;
    minimized: boolean;
    zIndex: number;
    fullScreen: boolean;
    focused: boolean;
    logo: string;
    ratio: number | undefined;
    type: string;
    items: Folder[];
    fixedSize: boolean;
    size: { width: number; height: number };
  }[];
  projects: Folder[];
  turnOff: boolean;
  loaded: boolean;
  folders: {
    locations: { location: string; items: Folder[] }[];
  };
  folderHistory: { history: string[]; currentFolder: number };
  mineswweeper: {
    board: { clicked: boolean; value: number | 'bomb'; flag: boolean }[][];
    totalBombs: number;
    firstClick: boolean;
    bombClicked: { clicked: boolean; x: number; y: number };
    successClick: boolean;
    timer: number;
    gameover: boolean;
  };
};
