import { useOpenMoveToFolder } from '@/app/utilities/hooks/useOpenMoveToFolder';
import { setSelectedLinkForMoveWindow } from '@/app/redux/app/appSlice';
import { useRedux } from '@/app/utilities/hooks/useRedux';

type CutProps = {
  disabled: boolean;
  folderLocationID: string;
  windowID: string;
};

const MoveToFolder = ({ disabled, folderLocationID, windowID }: CutProps) => {
  const [dispatch, app] = useRedux();
  const [openMoveToFolder] = useOpenMoveToFolder(folderLocationID, windowID);
  const selectedLink = app.links.find((link) => link.selected);

  return (
    <div
      onClick={(e) => {
        if (disabled) return;
        dispatch(setSelectedLinkForMoveWindow(selectedLink?.linkID!));
        openMoveToFolder();
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
