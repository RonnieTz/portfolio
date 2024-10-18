import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { unSelectAllShortcuts } from '@/app/redux/app/appSlice';
import {
  showContextMenu,
  setPosition,
  setTarget,
  setDragTarget,
} from '@/app/redux/contextMenu/contextSlice';
import ProjectLink from '../../shortcuts/ProjectLink';

type Props = {
  folderID: string;
  folderLocation: string;
};

const FolderArea = ({ folderID, folderLocation }: Props) => {
  const dispatch = useDispatch();
  const { links } = useSelector((state: RootState) => state.app);
  const { dragTarget } = useSelector((state: RootState) => state.context);

  return (
    <div
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(setDragTarget({ target: folderLocation }));
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(showContextMenu());
        dispatch(setPosition({ x: e.clientX, y: e.clientY }));
        dispatch(
          setTarget({
            target: {
              targetType: 'window',
              linkID: undefined,
              folderID: folderLocation,
              linkType: undefined,
            },
          })
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
