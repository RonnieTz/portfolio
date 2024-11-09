import deleteLogo from '@/public/Delete.png';
import Image from 'next/image';
import { useRedux } from '@/app/utilities/hooks/useRedux';
import { deleteLink } from '@/app/redux/app/appSlice';
import './styles.css';

type Props = {
  title: 'Delete this folder' | 'Delete this file';
  folderLocationID: string;
};

const DeleteFolder = ({ title, folderLocationID }: Props) => {
  const [dispatch, app] = useRedux();
  const { links } = app;
  const selectedFolder = links.find(
    (link) => link.folderLocation === folderLocationID && link.selected
  );
  return (
    <div
      onClick={() => {
        if (selectedFolder)
          dispatch(deleteLink({ linkID: selectedFolder.linkID }));
      }}
      className="file-task-item"
    >
      <Image
        style={{ height: '80%', width: 'auto' }}
        src={deleteLogo}
        alt="Rename"
      />
      <div className="file-task-item-title">{title}</div>
    </div>
  );
};
export default DeleteFolder;
