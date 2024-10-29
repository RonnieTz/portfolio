import renameLogo from '@/public/Rename.png';
import Image from 'next/image';
import './styles.css';

type Props = { title: 'Rename this folder' | 'Rename this file' };

const RenameFolder = ({ title }: Props) => {
  return (
    <div className="file-task-item">
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
