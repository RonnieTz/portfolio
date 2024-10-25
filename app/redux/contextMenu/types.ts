export type InitialState = {
  showContext: boolean;
  position: { x: number; y: number };
  target: Target | undefined;
  clipboard: Clipboard | undefined;
};

export type Clipboard = { functionType: 'cut' | 'copy'; target: Target };

export type Target = {
  targetType: 'link' | 'window';
  linkID: string | undefined;
  folderID: string | undefined;
  linkType: 'folder' | 'program' | undefined;
  windowID: string;
};
