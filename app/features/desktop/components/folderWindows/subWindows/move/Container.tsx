import desktop from '@/public/Desktop.png';
import Image from 'next/image';
import { useFolderTree } from '@/app/utilities/hooks/useFolderTree';
import Link from './Link';

type Folder = {
  folders: Folder[];
  id: string;
  name: string;
  selected: boolean;
  expanded: boolean;
};

type Props = {
  folderTree: {
    tree: Folder[];
    selectFolder: (id: string) => void;
    expandFolder: (id: string) => void;
    selectedFolder: string;
  };
};

const Container = ({ folderTree }: Props = { folderTree: useFolderTree() }) => {
  const { tree, selectFolder, expandFolder } = folderTree;

  return (
    <div className="move-item-window-container">
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
        <span style={{ fontFamily: 'sans-serif' }}>Desktop</span>
      </div>
      {tree.map(({ folders, id, name, selected, expanded }) => (
        <Link
          key={id}
          folders={folders}
          id={id}
          selected={selected}
          name={name}
          expanded={expanded}
          selectFolder={selectFolder}
          expandFolder={expandFolder}
        />
      ))}
    </div>
  );
};
export default Container;
