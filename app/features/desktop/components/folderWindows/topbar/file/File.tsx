import Divider from '../Divider';
import Tooltip from '../Tooltip';
import Close from './buttons/Close';
import Delete from './buttons/Delete';
import { useSelectedLink } from '@/app/utilities/hooks/useSelectedLink';
import Rename from './buttons/Rename';
import New from './buttons/New';
import Open from './buttons/Open';
import { useState } from 'react';

type Props = {
  isMenuOpen: 'File' | 'Edit' | 'Views' | false;
  setIsMenuOpen: React.Dispatch<
    React.SetStateAction<'File' | 'Edit' | 'Views' | false>
  >;
  windowID: string;
  folderLocationID: string;
};

const File = ({
  isMenuOpen,
  setIsMenuOpen,
  windowID,
  folderLocationID,
}: Props) => {
  const [selectedLink] = useSelectedLink(folderLocationID);
  const [hoverTimeOut, setHoverTimeOut] = useState<NodeJS.Timeout | null>(null);
  return (
    <div
      onMouseEnter={() => {
        if (isMenuOpen) {
          if (hoverTimeOut) clearTimeout(hoverTimeOut);
          const timeOut = setTimeout(() => {
            setIsMenuOpen('File');
          }, 100);
          setHoverTimeOut(timeOut);
        }
      }}
      onMouseLeave={() => {
        if (hoverTimeOut) clearTimeout(hoverTimeOut);
      }}
      onClick={(e) => {
        e.stopPropagation();
        setIsMenuOpen(isMenuOpen === 'File' ? false : 'File');
      }}
      className="topbar-title"
      style={{
        backgroundColor:
          isMenuOpen === 'File' ? 'rgb(48, 104, 192)' : undefined,
        color: isMenuOpen === 'File' ? 'rgb(228, 237, 242)' : undefined,
      }}
    >
      <span className="topbar-title-text">File</span>
      {isMenuOpen === 'File' && (
        <Tooltip>
          <>
            {Boolean(selectedLink) && (
              <Open folderLocationID={folderLocationID} />
            )}
            <New folderID={folderLocationID} windowID={windowID} />
            <Divider />
            <Rename
              folderLocationID={folderLocationID}
              disabled={!Boolean(selectedLink)}
            />
            <Delete
              folderLocationID={folderLocationID}
              disabled={!Boolean(selectedLink)}
            />
            <Divider />
            <Close windowID={windowID} />
          </>
        </Tooltip>
      )}
    </div>
  );
};
export default File;
