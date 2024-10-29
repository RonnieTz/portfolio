import copyLogo from '@/public/Copy.png';
import Image from 'next/image';
import './styles.css';

type Props = { title: 'Copy this folder' | 'Copy this file' };

const CopyFolder = ({ title }: Props) => {
  return (
    <div className="file-task-item">
      <Image
        style={{ height: '80%', width: 'auto' }}
        src={copyLogo}
        alt="Rename"
      />
      <div className="file-task-item-title">{title}</div>
    </div>
  );
};
export default CopyFolder;
