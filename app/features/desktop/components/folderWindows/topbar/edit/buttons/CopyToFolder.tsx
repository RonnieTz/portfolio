import { useOpenCopyToFolder } from '@/app/utilities/hooks/useOpenCopyToFolder';
import {
  setSelectedLinkForMoveWindow,
  unSelectAllShortcuts,
} from '@/app/redux/app/appSlice';
import { useRedux } from '@/app/utilities/hooks/useRedux';
import { copy_cut } from '@/app/redux/contextMenu/contextSlice';
type Props = {
  disabled: boolean;
  folderLocationID: string;
  windowID: string;
};

const CopyToFolder = ({ disabled, folderLocationID, windowID }: Props) => {
  const [dispatch, app] = useRedux();
  const { selectedLinkForMoveWindow } = app;
  const link = app.links.find(
    (link) => link.linkID === selectedLinkForMoveWindow
  );

  const [openCopyToFolder] = useOpenCopyToFolder(windowID);
  const selectedLink = app.links.find((link) => link.selected);

  return (
    <div
      onClick={() => {
        if (disabled) return;
        console.log(windowID);
        dispatch(setSelectedLinkForMoveWindow(selectedLink?.linkID!));
        openCopyToFolder();
        dispatch(
          copy_cut({
            functionType: 'copy',
            target: {
              targetType: 'link',
              linkID: selectedLinkForMoveWindow,
              folderID: link?.folderLocation,
              windowID: link?.windowID!,
              linkType: link?.windowType,
            },
          })
        );
        dispatch(unSelectAllShortcuts());
      }}
      className={`topbar-tooltip-item ${
        disabled ? 'topbar-tooltip-item-disabled' : ''
      }`}
    >
      Copy To Folder...
    </div>
  );
};
export default CopyToFolder;
