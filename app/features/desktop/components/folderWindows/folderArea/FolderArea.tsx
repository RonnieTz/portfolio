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
        dispatch(setPosition({ x: e.clientX, y: e.clientY }));
        dispatch(
          setTarget({ target: { type: 'folder', folderID: folderLocation } })
        );
      }}
      onClick={() => {
        dispatch(unSelectAllShortcuts());
      }}
      className="folder-area"
    >
      {links.map((link) => {
        if (link.folderLocation === folderLocation) {
          return (
            <ProjectLink
              color="dark"
              logo={link.logo}
              selected={link.selected}
              title={link.name}
              windowID={link.windowID}
              linkID={link.linkID}
              key={link.linkID}
              rename={link.rename}
              folderLocation={link.folderLocation}
            />
          );
        }
      })}
    </div>
  );
};
export default FolderArea;
