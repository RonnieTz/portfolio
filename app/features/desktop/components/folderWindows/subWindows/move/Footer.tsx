import { useRedux } from '@/app/utilities/hooks/useRedux';
import {
  closeWindow,
  focusWindow,
  setSubWindow,
  newFolder,
} from '@/app/redux/app/appSlice';

type Props = {
  windowID: string;
  selectedFolder: string;
  expandFolder: (id: string) => void;
};

const Footer = ({ windowID, selectedFolder, expandFolder }: Props) => {
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
        onClick={() => {
          dispatch(
            newFolder({ folderID: selectedFolder, windowID: link?.windowID! })
          );
          expandFolder(selectedFolder);
        }}
        className="move-item-window-button"
      >
        Make New Folder
      </button>
      <button
        onClick={(e) => {}}
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
