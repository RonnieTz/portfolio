import { useOpenMoveToFolder } from '@/app/utilities/hooks/useOpenMoveToFolder';
import {
  setSelectedLinkForMoveWindow,
  unSelectAllShortcuts,
} from '@/app/redux/app/appSlice';
import { useRedux } from '@/app/utilities/hooks/useRedux';

type CutProps = {
  disabled: boolean;
  folderLocationID: string;
  windowID: string;
};

const MoveToFolder = ({ disabled, folderLocationID, windowID }: CutProps) => {
  const [dispatch, app] = useRedux();
  const [openMoveToFolder] = useOpenMoveToFolder(windowID);
  const selectedLink = app.links.find((link) => link.selected);

  return (
    <div
      onClick={() => {
        if (disabled) return;
        dispatch(setSelectedLinkForMoveWindow(selectedLink?.linkID!));
        openMoveToFolder();
        dispatch(unSelectAllShortcuts());
      }}
      className={`topbar-tooltip-item ${
        disabled ? 'topbar-tooltip-item-disabled' : ''
      }`}
    >
      Move To Folder...
    </div>
  );
};
export default MoveToFolder;
