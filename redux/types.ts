export type InitialState = {
  start: { open: boolean; hover: boolean };
  windows: {
    position: { y: number; x: number };
    link: string;
    id: string;
    title: string;
    minimized: boolean;
    zIndex: number;
    fullScreen: boolean;
    focused: boolean;
  }[];
};
