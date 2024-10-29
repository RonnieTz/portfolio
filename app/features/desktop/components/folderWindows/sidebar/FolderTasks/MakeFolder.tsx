import newFolderLogo from '@/public/New Folder.png';
import Image from 'next/image';
import './styles.css';

const MakeFolder = () => {
  return (
    <div className="file-task-item">
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
