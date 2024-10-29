import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import RenameFolder from './FolderTasks/RenameFolder';
import MoveFolder from './FolderTasks/MoveFolder';
import CopyFolder from './FolderTasks/CopyFolder';
import DeleteFolder from './FolderTasks/DeleteFolder';
import MakeFolder from './FolderTasks/MakeFolder';

type Props = { folderLocation: string };

const FileFolderTasks = ({ folderLocation }: Props) => {
  const dispatch = useDispatch();
  const { links } = useSelector((state: RootState) => state.app);
  const selectedFolder = links.find(
    (link) => link.folderLocation === folderLocation && link.selected
  );
  return (
    <div>
      {!selectedFolder && <MakeFolder />}
      {selectedFolder && (
        <>
          <RenameFolder
            title={
              selectedFolder.windowType === 'folder'
                ? 'Rename this folder'
                : 'Rename this file'
            }
          />
          <MoveFolder
            title={
              selectedFolder.windowType === 'folder'
                ? 'Move this folder'
                : 'Move this file'
            }
          />
          <CopyFolder
            title={
              selectedFolder.windowType === 'folder'
                ? 'Copy this folder'
                : 'Copy this file'
            }
          />
          <DeleteFolder
            title={
              selectedFolder.windowType === 'folder'
                ? 'Delete this folder'
                : 'Delete this file'
            }
          />
        </>
      )}
    </div>
  );
};
export default FileFolderTasks;
