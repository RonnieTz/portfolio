import { useRedux } from '@/app/utilities/hooks/useRedux';
import {
  closeWindow,
  focusWindow,
  setSubWindow,
  newFolder,
} from '@/app/redux/app/appSlice';
import { useOpenCopyToFolder } from '@/app/utilities/hooks/useOpenCopyToFolder';
import { copyPaste } from '@/app/redux/app/reducers/copyReducerThunk';

type Props = {
  windowID: string;
  selectedFolder: string;
  expandFolder: (id: string) => void;
};

const Footer = ({ windowID, selectedFolder, expandFolder }: Props) => {
  const [_, copyToFolder] = useOpenCopyToFolder(windowID);

  const [dispatch, app] = useRedux();
  const { windows, links, selectedLinkForMoveWindow } = app;
  const link = links.find((link) => link.linkID === selectedFolder);

  const parentWindowID = windows.find(
    (window) => window.type === 'folder' && window.subWindow === windowID
  )?.windowID;
  const close = () => {
    dispatch(closeWindow({ windowID }));
    dispatch(setSubWindow({ windowID: parentWindowID!, subWindow: '' }));
    dispatch(focusWindow({ windowID: parentWindowID!, focus: true }));
  };
  return (
    <div className="move-item-window-footer">
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(
            newFolder({ folderID: selectedFolder, windowID: link?.windowID! })
          );
          if (!link?.expanded) {
            expandFolder(selectedFolder);
          }
        }}
        className="move-item-window-button"
      >
        Make New Folder
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          // copyToFolder({ newFolderLocation: selectedFolder });
          // close();
          dispatch(
            copyPaste({
              linkID: selectedLinkForMoveWindow,
              linkNewLocation: selectedFolder,
            })
          );
        }}
        style={{
          translate: '45px',
        }}
        className="move-item-window-button"
      >
        Copy
      </button>
      <button onClick={close} className="move-item-window-button">
        Cancel
      </button>
    </div>
  );
};
export default Footer;
