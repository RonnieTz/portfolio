export type InitialState = {
  showContext: boolean;
  position: { x: number; y: number };
  target: Target;
};

export type Target =
  | { type: 'link'; linkID: string }
  | { type: 'folder'; folderID: string }
  | undefined;
