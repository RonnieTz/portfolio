import deleteLogo from '@/public/Delete.png';
import Image from 'next/image';
import './styles.css';

type Props = { title: 'Delete this folder' | 'Delete this file' };

const DeleteFolder = ({ title }: Props) => {
  return (
    <div className="file-task-item">
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
