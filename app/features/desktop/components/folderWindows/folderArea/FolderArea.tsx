import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  unSelectAllShortcuts,
  removeRenameStates,
} from '@/app/redux/app/appSlice';
import {
  showContextMenu,
  setPosition,
  setTarget,
  hideContextMenu,
} from '@/app/redux/contextMenu/contextSlice';
import ProjectLink from '../../shortcuts/ProjectLink';

type Props = {
  folderID: string;
  folderLocation: string;
  setIsMenuOpen: React.Dispatch<
    React.SetStateAction<'File' | 'Edit' | 'Views' | false>
  >;
};

const FolderArea = ({ folderID, folderLocation, setIsMenuOpen }: Props) => {
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
        setIsMenuOpen(false);
        dispatch(unSelectAllShortcuts());
        dispatch(removeRenameStates());
        dispatch(hideContextMenu());
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
              isDragged={false}
              position={{ x: 2, y: 2 }}
              setMenuOpen={setIsMenuOpen}
            />
          );
        }
      })}
    </div>
  );
};
export default FolderArea;
