import { nanoid } from '@reduxjs/toolkit';
import { useRedux } from './useRedux';
import {
  newSubWindow,
  setSubWindow,
  copyPasteFolder,
  copyPasteLink,
  copyPasteTextFile,
  newTextFile,
} from '@/app/redux/app/appSlice';
import { newTextData, saveTextFile } from '@/app/redux/editor/editorSlice';

export const useOpenCopyToFolder = (windowID: string) => {
  const [dispatch, app, clipboard, editor] = useRedux();
  const { selectedLinkForMoveWindow, links } = app;

  const openCopyToFolder = () => {
    dispatch(
      newSubWindow({
        windowID,
        subWindowID: windowID + '-copy-to-folder',
        title: 'Copy Item',
      })
    );
    dispatch(
      setSubWindow({
        subWindow: windowID + '-copy-to-folder',
        windowID,
      })
    );
  };

  const copyToFolder = ({
    newFolderLocation,
  }: {
    newFolderLocation: string;
  }) => {
    const link = links.find(
      (link) => link.linkID === selectedLinkForMoveWindow
    );
    const window = app.windows.find(
      (window) => window.windowID === link?.windowID
    );

    if (window && window.type !== 'folder' && window.type !== 'textFile') {
      dispatch(
        copyPasteLink({
          linkID: selectedLinkForMoveWindow,
          linkNewLocation: newFolderLocation,
        })
      );
    }
    if (window && window.type === 'folder') {
      const link = links.find((link) => link.linkID === newFolderLocation);
      dispatch(
        copyPasteFolder({
          folderLinkID: selectedLinkForMoveWindow,
          linkNewLocation: newFolderLocation,
          newFolderLinkID: nanoid(),
          targetWindowID: link ? link.windowID : 'desktop',
        })
      );
    }
    if (window && window.type === 'textFile') {
      const contentID = nanoid();
      const content = editor.textFiles.find(
        (file) => file.contentID === window.content
      )!;
      dispatch(
        copyPasteTextFile({
          contentID,
          linkID: selectedLinkForMoveWindow,
          linkNewLocation: newFolderLocation,
        })
      );
      dispatch(newTextData({ contentID }));
      dispatch(saveTextFile({ contentID, content: content.content }));
    }
  };

  return [openCopyToFolder, copyToFolder] as const;
};
