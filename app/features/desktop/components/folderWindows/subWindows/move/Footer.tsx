import { useRedux } from '@/app/utilities/hooks/useRedux';
import {
  closeWindow,
  focusWindow,
  setSubWindow,
  newFolder,
} from '@/app/redux/app/appSlice';
import { useOpenMoveToFolder } from '@/app/utilities/hooks/useOpenMoveToFolder';

type Props = {
  windowID: string;
  selectedFolder: string;
  expandFolder: (id: string) => void;
};

const Footer = ({ windowID, selectedFolder, expandFolder }: Props) => {
  const [_, moveToFolder] = useOpenMoveToFolder(windowID);
  const [dispatch, app] = useRedux();
  const { windows, links } = app;
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
          moveToFolder({ newFolderLocation: selectedFolder });
          close();
        }}
        style={{
          translate: '45px',
        }}
        className="move-item-window-button"
      >
        Move
      </button>
      <button onClick={close} className="move-item-window-button">
        Cancel
      </button>
    </div>
  );
};
export default Footer;
