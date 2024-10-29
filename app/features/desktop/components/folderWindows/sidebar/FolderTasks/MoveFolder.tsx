import moveLogo from '@/public/Move.png';
import Image from 'next/image';
import './styles.css';

type Props = { title: 'Move this folder' | 'Move this file' };

const MoveFolder = ({ title }: Props) => {
  return (
    <div className="file-task-item">
      <Image
        style={{ height: '80%', width: 'auto' }}
        src={moveLogo}
        alt="Rename"
      />
      <div className="file-task-item-title">{title}</div>
    </div>
  );
};
export default MoveFolder;
