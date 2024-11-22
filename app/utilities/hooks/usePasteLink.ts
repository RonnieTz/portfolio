import {
  clearClipboard,
  hideContextMenu,
} from '@/app/redux/contextMenu/contextSlice';
import { useRedux } from './useRedux';
import {
  cutPasteFolder,
  cutPasteLink,
  unSelectAllShortcuts,
} from '@/app/redux/app/appSlice';
import { copyPaste } from '@/app/redux/app/reducers/copyReducerThunk';

export const usePasteLink = (folderLocationID: string, windowID: string) => {
  const [dispatch, app, context] = useRedux();
  const { links } = app;
  const { clipboard } = context;

  const pasteLink = () => {
    if (
      clipboard?.functionType === 'cut' &&
      clipboard.target?.targetType === 'link' &&
      clipboard.target.linkType === 'program'
    ) {
      const { folderLocation: linkLocation, linkID } = links.find((link) => {
        if (clipboard.target?.targetType === 'link') {
          return link.linkID === clipboard.target.linkID;
        }
      })!;

      dispatch(
        cutPasteLink({
          linkID,
          linkLocation,
          linkNewLocation: folderLocationID,
        })
      );
      dispatch(clearClipboard());
    }
    if (
      clipboard?.functionType === 'cut' &&
      clipboard.target?.targetType === 'link' &&
      clipboard.target.linkType === 'folder'
    ) {
      const { linkID } = links.find(
        (link) => link.linkID === clipboard.target.linkID
      )!;
      dispatch(
        cutPasteFolder({
          folderLinkID: linkID,
          newFolderLocation: folderLocationID,
          windowID,
        })
      );
    }

    const { linkID } = links.find((link) => {
      if (clipboard?.target?.targetType === 'link') {
        return link.linkID === clipboard?.target.linkID;
      }
    })!;

    dispatch(
      copyPaste({
        linkID,
        linkNewLocation: folderLocationID,
      })
    );

    dispatch(clearClipboard());
    dispatch(hideContextMenu());
    dispatch(unSelectAllShortcuts());
  };

  return [pasteLink] as const;
};
