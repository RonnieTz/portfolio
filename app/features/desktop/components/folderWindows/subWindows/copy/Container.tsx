import desktop from '@/public/Desktop.png';
import Image from 'next/image';
import Link from './Link';

type Folder = {
  folders: Folder[];
  id: string;
};

type Props = {
  folderTree: {
    tree: Folder[];
    selectFolder: (id: string) => void;
    expandFolder: (id: string) => void;
    selectedFolder: string;
  };
};

const Container = ({ folderTree }: Props) => {
  const { tree, selectFolder, expandFolder, selectedFolder } = folderTree;

  return (
    <div
      onClick={() => {
        selectFolder('desktop');
      }}
      className="move-item-window-container"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          marginLeft: '5px',
        }}
        className="move-item-window-link"
      >
        <Image
          style={{ height: '20px', width: 'auto' }}
          src={desktop}
          alt="desktop"
        />
        <span
          onClick={() => {
            selectFolder('desktop');
          }}
          style={{
            fontFamily: 'sans-serif',
            backgroundColor:
              selectedFolder === 'desktop' ? 'rgb(48, 104, 192)' : undefined,
            color:
              selectedFolder === 'desktop' ? 'rgb(228, 237, 242 )' : undefined,
            padding: '0.1rem 0.3rem',
          }}
          className="move-item-window-link-text"
        >
          Desktop
        </span>
      </div>
      {tree.map(({ folders, id }) => (
        <Link
          key={id}
          folders={folders}
          id={id}
          selectFolder={selectFolder}
          expandFolder={expandFolder}
          selected={selectedFolder}
        />
      ))}
    </div>
  );
};
export default Container;
