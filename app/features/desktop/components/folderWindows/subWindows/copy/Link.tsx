import Image from 'next/image';
import closedFolder from '@/public/Folder Closed.png';
import openedFolder from '@/public/Folder Opened.png';
import Checkbox from './Checkbox';
import { useRedux } from '@/app/utilities/hooks/useRedux';
import { setTarget } from '@/app/redux/contextMenu/contextSlice';

type Folder = {
  id: string;
  folders: Folder[];
};

type Props = {
  id: string;
  folders: Folder[];
  selectFolder: (id: string) => void;
  expandFolder: (id: string) => void;
  selected: string;
};

const Link = ({ id, folders, selectFolder, expandFolder, selected }: Props) => {
  const [dispatch, app] = useRedux();
  const { links } = app;
  const link = links.find((link) => link.linkID === id);
  return (
    <div className="move-item-window-link">
      <div className="move-item-window-link-title">
        <Checkbox
          isVisible={folders.length > 0}
          expanded={link?.expanded!}
          expandFolder={expandFolder}
          id={id}
        />

        <Image
          style={{ height: '20px', width: 'auto' }}
          src={!link?.expanded ? closedFolder : openedFolder}
          alt="desktop"
        />
        <span
          onClick={(e) => {
            e.stopPropagation();
            selectFolder(id);
            dispatch(
              setTarget({
                target: {
                  folderID: id,
                  targetType: 'window',
                  linkID: id,
                  linkType: 'folder',
                  windowID: link?.windowID!,
                },
              })
            );
          }}
          className="move-item-window-link-text"
          style={{
            backgroundColor: selected === id ? 'rgb(48, 104, 192)' : undefined,
            color: selected === id ? 'rgb(228, 237, 242 )' : undefined,
            fontFamily: 'sans-serif',
            padding: '0.1rem 0.3rem',
            borderRadius: '1px',
          }}
        >
          {link?.name}
        </span>
      </div>
      {link?.expanded &&
        folders.map((folder) => {
          return (
            <Link
              key={folder.id}
              folders={folder.folders}
              id={folder.id}
              selectFolder={selectFolder}
              expandFolder={expandFolder}
              selected={selected}
            />
          );
        })}
    </div>
  );
};
export default Link;
