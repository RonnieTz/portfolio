import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { copyPasteLink, copyPasteTextFile, copyPasteFolder } from '../appSlice';
import { newTextData, saveTextFile } from '../../editor/editorSlice';
import { TextFileWindow } from '../types';

export const copyPaste = createAsyncThunk(
  'app/copyTextFile',
  async (
    payload: {
      linkID: string;
      linkNewLocation: string;
    },
    thunkAPI
  ) => {
    const { getState, dispatch } = thunkAPI;
    const state = getState() as RootState;
    const { app, context, editor } = state;
    const { clipboard, target } = context;
    console.log(app.links);

    const { windowID } = app.links.find((link) => {
      return link.linkID === payload.linkID;
    })!;
    const { type } = app.windows.find((window) => {
      return window.windowID === windowID;
    })!;
    const copyProgramLink = (linkID: string, linkNewLocation: string) => {
      dispatch(copyPasteLink({ linkID, linkNewLocation }));
    };

    const copyTextFileLink = (linkID: string, linkNewLocation: string) => {
      const { windowID } = app.links.find((link) => {
        return link.linkID === linkID;
      })!;
      const { content: oldContentID } = app.windows.find((window) => {
        return window.windowID === windowID;
      })! as TextFileWindow;
      const { content: contentData } = editor.textFiles.find((file) => {
        return file.contentID === oldContentID;
      })!;

      const contentID = nanoid();
      dispatch(
        copyPasteTextFile({
          linkID,
          linkNewLocation,
          contentID,
        })
      );
      dispatch(newTextData({ contentID }));
      dispatch(saveTextFile({ contentID, content: contentData }));
    };

    if (
      clipboard?.functionType === 'copy' &&
      clipboard.target?.targetType === 'link' &&
      target?.targetType === 'window' &&
      clipboard.target.linkType === 'program'
    ) {
      if (type === 'textFile') {
        copyTextFileLink(payload.linkID, payload.linkNewLocation);
      }
      if (type !== 'textFile' && type !== 'folder') {
        copyProgramLink(payload.linkID, payload.linkNewLocation);
      }
    }
    if (
      clipboard?.functionType === 'copy' &&
      clipboard.target?.targetType === 'link' &&
      target?.targetType === 'window' &&
      clipboard.target.linkType === 'folder'
    ) {
      const { windowID } = app.links.find((link) => {
        return link.linkID === payload.linkID;
      })!;
      const { type } = app.windows.find((window) => {
        return window.windowID === windowID;
      })!;
      if (type === 'folder') {
        const copyPasteFolderLink = (
          linkID: string,
          linkNewLocation: string,
          newFolderLinkID: string
        ) => {
          dispatch(
            copyPasteFolder({
              folderLinkID: linkID,
              linkNewLocation,
              newFolderLinkID,
              targetWindowID: target.windowID,
            })
          );
          const getLinksInFolder = (folderLinkID: string) => {
            return app.links.filter((link) => {
              return link.folderLocation === folderLinkID;
            });
          };
          const linksInFolder = getLinksInFolder(linkID);

          linksInFolder.forEach((link) => {
            const { linkID, name } = link;
            const { windowID } = app.links.find((link) => {
              return link.linkID === linkID;
            })!;
            const { type } = app.windows.find((window) => {
              return window.windowID === windowID;
            })!;

            if (type !== 'textFile' && type !== 'folder') {
              copyProgramLink(linkID, newFolderLinkID);
            }
            if (type === 'textFile') {
              copyTextFileLink(linkID, newFolderLinkID);
            }
            if (type === 'folder') {
              copyPasteFolderLink(linkID, newFolderLinkID, nanoid());
            }
          });
        };
        copyPasteFolderLink(payload.linkID, payload.linkNewLocation, nanoid());
      }
    }
  }
);
