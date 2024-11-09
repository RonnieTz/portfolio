import renameLogo from '@/public/Rename.png';
import Image from 'next/image';
import { useRedux } from '@/app/utilities/hooks/useRedux';
import { setRenameState } from '@/app/redux/app/appSlice';
import './styles.css';

type Props = {
  title: 'Rename this folder' | 'Rename this file';
  folderLocationID: string;
};

const RenameFolder = ({ title, folderLocationID }: Props) => {
  const [dispatch, app] = useRedux();
  const { links } = app;

  const selectedFolder = links.find(
    (link) => link.folderLocation === folderLocationID && link.selected
  );

  return (
    <div
      onClick={() => {
        if (selectedFolder) {
          dispatch(setRenameState({ linkID: selectedFolder.linkID }));
        }
      }}
      className="file-task-item"
    >
      <Image
        style={{ height: '80%', width: 'auto' }}
        src={renameLogo}
        alt="Rename"
      />
      <div className="file-task-item-title">{title}</div>
    </div>
  );
};
export default RenameFolder;
