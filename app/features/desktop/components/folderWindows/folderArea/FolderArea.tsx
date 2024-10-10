import Shortcut from '../../shortcuts/Shortcut';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { unSelectAllShortcuts } from '@/app/redux/app/appSlice';
import {
  showContextMenu,
  setPosition,
  setTarget,
} from '@/app/redux/contextMenu/contextSlice';
import ProjectLink from '../../shortcuts/ProjectLink';
import { FolderWindow } from '@/app/redux/app/types';

type Props = {
  folderID: string;
  folderLocation: string;
};

const FolderArea = ({ folderID, folderLocation }: Props) => {
  const dispatch = useDispatch();
  const { links, windows } = useSelector((state: RootState) => state.app);

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(showContextMenu());
      }}
      onClick={() => {
        dispatch(unSelectAllShortcuts());
      }}
      className="folder-area"
    >
      {links.map((link) => {
        const window = windows.find(
          (window) => window.windowID === link.folderLocation
        )! as FolderWindow;

        console.log(link.folderLocation, folderLocation);

        if (link.folderLocation === folderLocation) {
          return (
            <ProjectLink
              color="dark"
              logo={link.logo}
              selected={link.selected}
              title={link.name}
              windowID={link.windowID}
              linkID={link.linkID}
              key={link.windowID + 'link'}
            />
          );
        }
      })}
    </div>
  );
};
export default FolderArea;
