import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/app/redux/store';
import {
  cutPasteLink,
  cutPasteFolder,
  copyPasteLink,
} from '@/app/redux/app/appSlice';
import {
  hideContextMenu,
  clearClipboard,
} from '@/app/redux/contextMenu/contextSlice';
import { copyPaste } from '@/app/redux/app/reducers/copyReducerThunk';

const ContextPasteButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { target, clipboard } = useSelector(
    (state: RootState) => state.context
  );
  const { links } = useSelector((state: RootState) => state.app);
  const disabled = !clipboard || target?.targetType !== 'window';
  return (
    <div
      onClick={() => {
        if (
          clipboard?.functionType === 'cut' &&
          clipboard.target?.targetType === 'link' &&
          target?.targetType === 'window' &&
          clipboard.target.linkType === 'program'
        ) {
          const { folderLocation: linkLocation, linkID } = links.find(
            (link) => {
              if (clipboard.target?.targetType === 'link') {
                return link.linkID === clipboard.target.linkID;
              }
            }
          )!;

          const linkNewLocation = target.folderID;
          dispatch(
            cutPasteLink({
              linkID,
              linkLocation,
              linkNewLocation: linkNewLocation!,
            })
          );
          dispatch(clearClipboard());
        }
        if (
          clipboard?.functionType === 'cut' &&
          clipboard.target?.targetType === 'link' &&
          target?.targetType === 'window' &&
          clipboard.target.linkType === 'folder'
        ) {
          const { linkID } = links.find(
            (link) => link.linkID === clipboard.target.linkID
          )!;
          const newFolderLocation = target.folderID;
          dispatch(
            cutPasteFolder({
              folderLinkID: linkID,
              newFolderLocation: newFolderLocation!,
              windowID: target.windowID,
            })
          );
        }

        const { linkID } = links.find((link) => {
          if (clipboard?.target?.targetType === 'link') {
            return link.linkID === clipboard?.target.linkID;
          }
        })!;

        const linkNewLocation = target?.folderID;
        dispatch(
          copyPaste({
            linkID,
            linkNewLocation: linkNewLocation!,
          })
        );

        dispatch(clearClipboard());
        dispatch(hideContextMenu());
      }}
      className={`context-menu-item ${disabled ? 'button-disabled' : ''}`}
    >
      Paste
    </div>
  );
};
export default ContextPasteButton;
