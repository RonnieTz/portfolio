import Image from 'next/image';
import closedFolder from '@/public/Folder Closed.png';
import openedFolder from '@/public/Folder Opened.png';
import Checkbox from './Checkbox';

type Folder = {
  name: string;
  id: string;
  selected: boolean;
  folders: Folder[];
  expanded: boolean;
};

type Props = {
  name: string;
  id: string;
  selected: boolean;
  expanded: boolean;
  folders: Folder[];
  selectFolder: (id: string) => void;
  expandFolder: (id: string) => void;
};

const Link = ({
  name,
  id,
  selected,
  folders,
  expanded,
  selectFolder,
  expandFolder,
}: Props) => {
  return (
    <div className="move-item-window-link">
      <div className="move-item-window-link-title">
        <Checkbox
          isVisible={folders.length > 0}
          expanded={expanded}
          expandFolder={expandFolder}
          id={id}
        />
        <Image
          style={{ height: '20px', width: 'auto' }}
          src={!expanded ? closedFolder : openedFolder}
          alt="desktop"
        />
        <span
          onClick={() => selectFolder(id)}
          className="move-item-window-link-text"
          style={{
            backgroundColor: selected ? 'rgb(48, 104, 192)' : undefined,
            fontFamily: 'sans-serif',
            color: selected ? 'rgb(228, 237, 242 )' : undefined,
            padding: '0.1rem 0.3rem',
            borderRadius: '1px',
          }}
        >
          {name}
        </span>
      </div>
      {expanded &&
        folders.map((folder) => (
          <Link
            key={folder.id}
            expanded={folder.expanded}
            folders={folder.folders}
            id={folder.id}
            name={folder.name}
            selected={folder.selected}
            selectFolder={selectFolder}
            expandFolder={expandFolder}
          />
        ))}
    </div>
  );
};
export default Link;
