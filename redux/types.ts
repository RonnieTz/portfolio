export type InitialState = {
  start: { open: boolean; hover: boolean };
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
  }[];
  desktopShortcuts: {
    name: string;
    liveLink?: string;
    codesandboxLink?: string;
    gitHubLink?: string;
    logo: string;
    selected: boolean;
  }[];
};
