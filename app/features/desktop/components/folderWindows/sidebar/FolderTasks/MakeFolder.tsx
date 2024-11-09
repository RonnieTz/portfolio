import newFolderLogo from '@/public/New Folder.png';
import Image from 'next/image';
import './styles.css';
import { useRedux } from '@/app/utilities/hooks/useRedux';
import {
  newFolder,
  removeRenameStates,
  unSelectAllShortcuts,
} from '@/app/redux/app/appSlice';

type Props = { folderLocation: string };

const MakeFolder = ({ folderLocation }: Props) => {
  const [dispatch, app] = useRedux();
  const { links } = app;
  const windowID = links.find(
    (link) => link.linkID === folderLocation
  )?.windowID;

  return (
    <div
      onClick={() => {
        if (windowID) {
          dispatch(removeRenameStates());
          dispatch(newFolder({ windowID, folderID: folderLocation }));
          dispatch(unSelectAllShortcuts());
        }
      }}
      className="file-task-item"
    >
      <Image
        style={{ height: '80%', width: 'auto' }}
        src={newFolderLogo}
        alt="Rename"
      />
      <div className="file-task-item-title">Make a new folder</div>
    </div>
  );
};
export default MakeFolder;
