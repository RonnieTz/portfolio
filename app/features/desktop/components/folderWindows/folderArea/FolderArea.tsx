import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { unSelectAllShortcuts } from '@/app/redux/app/appSlice';
import {
  showContextMenu,
  setPosition,
  setTarget,
} from '@/app/redux/contextMenu/contextSlice';
import ProjectLink from '../../shortcuts/ProjectLink';

type Props = {
  folderID: string;
  folderLocation: string;
};

const FolderArea = ({ folderID, folderLocation }: Props) => {
  const dispatch = useDispatch();
  const { links } = useSelector((state: RootState) => state.app);
  const { showContext } = useSelector((state: RootState) => state.context);

  return (
    <div
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(
          setTarget({
            target: {
              folderID: folderLocation,
              linkID: undefined,
              linkType: undefined,
              targetType: 'window',
              windowID: folderID,
            },
          })
        );
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
              windowID: folderID,
            },
          })
        );
      }}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(unSelectAllShortcuts());
        if (!showContext) {
          dispatch(
            setTarget({
              target: {
                targetType: 'window',
                linkID: undefined,
                folderID: folderLocation,
                linkType: undefined,
                windowID: folderID,
              },
            })
          );
        }
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
