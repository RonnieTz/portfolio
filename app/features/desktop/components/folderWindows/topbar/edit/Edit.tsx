import Tooltip from '../Tooltip';
import Divider from '../Divider';
import { useState } from 'react';
import Cut from './buttons/Cut';
import Copy from './buttons/Copy';
import Paste from './buttons/Paste';
import CopyToFolder from './buttons/CopyToFolder';
import MoveToFolder from './buttons/MoveToFolder';
import { useSelectedLink } from '@/app/utilities/hooks/useSelectedLink';
import { useRedux } from '@/app/utilities/hooks/useRedux';

type Props = {
  isMenuOpen: 'File' | 'Edit' | 'Views' | false;
  setIsMenuOpen: React.Dispatch<
    React.SetStateAction<'File' | 'Edit' | 'Views' | false>
  >;
  folderLocationID: string;
  windowID: string;
};

const Edit = ({
  isMenuOpen,
  setIsMenuOpen,
  folderLocationID,
  windowID,
}: Props) => {
  const [hoverTimeOut, setHoverTimeOut] = useState<NodeJS.Timeout | null>(null);
  const [selectedLink] = useSelectedLink(folderLocationID);
  const [dispatch, app, context] = useRedux();
  const { clipboard } = context;
  return (
    <div
      onMouseEnter={() => {
        if (isMenuOpen) {
          if (hoverTimeOut) clearTimeout(hoverTimeOut);
          const timeOut = setTimeout(() => {
            setIsMenuOpen('Edit');
          }, 100);
          setHoverTimeOut(timeOut);
        }
      }}
      onMouseLeave={() => {
        if (hoverTimeOut) clearTimeout(hoverTimeOut);
      }}
      onClick={(e) => {
        e.stopPropagation();
        setIsMenuOpen(isMenuOpen === 'Edit' ? false : 'Edit');
      }}
      className="topbar-title"
      style={{
        backgroundColor:
          isMenuOpen === 'Edit' ? 'rgb(48, 104, 192)' : undefined,
        color: isMenuOpen === 'Edit' ? 'rgb(228, 237, 242)' : undefined,
      }}
    >
      <span className="topbar-title-text">Edit</span>
      {isMenuOpen === 'Edit' && (
        <Tooltip>
          <>
            <Cut
              disabled={!Boolean(selectedLink)}
              folderLocationID={folderLocationID}
            />
            <Copy
              disabled={!Boolean(selectedLink)}
              folderLocationID={folderLocationID}
            />
            <Paste
              disabled={Boolean(selectedLink) || !Boolean(clipboard)}
              folderLocationID={folderLocationID}
              windowID={windowID}
            />
            <Divider />
            <CopyToFolder
              disabled={!Boolean(selectedLink)}
              folderLocationID={folderLocationID}
            />
            <MoveToFolder
              disabled={!Boolean(selectedLink)}
              folderLocationID={folderLocationID}
              windowID={windowID}
            />
          </>
        </Tooltip>
      )}
    </div>
  );
};
export default Edit;
