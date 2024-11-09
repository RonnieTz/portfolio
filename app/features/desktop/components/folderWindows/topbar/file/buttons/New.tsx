import Image from 'next/image';
import arrow from '@/public/triangle-down.svg';
import { useState } from 'react';
import NewFolderButton from '../../../../contextMenu/newButton/NewFolderButton';
import NewTextFileButton from '../../../../contextMenu/newButton/NewTextFileButton';

type CloseProps = {
  folderID: string;
  windowID: string;
};

const New = ({ folderID, windowID }: CloseProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeOut, setHoverTimeOut] = useState<NodeJS.Timeout | null>(null);

  return (
    <div
      onMouseEnter={() => {
        if (hoverTimeOut) clearTimeout(hoverTimeOut);
        const timeOut = setTimeout(() => {
          setIsHovered(true);
        }, 100);
        setHoverTimeOut(timeOut);
      }}
      onMouseLeave={() => {
        if (hoverTimeOut) clearTimeout(hoverTimeOut);
        setIsHovered(false);
      }}
      onClick={(e) => {}}
      className="topbar-tooltip-item"
    >
      <span
        style={{
          fontFamily: 'inherit',
          color: isHovered ? 'rgb(228, 237, 242)' : undefined,
        }}
      >
        New
      </span>
      <Image
        style={{ position: 'absolute', right: 10, rotate: '-90deg' }}
        src={arrow}
        alt="arrow"
        height={17}
        width={17}
      />
      {isHovered && (
        <div className="context-menu-new-button-tooltip">
          <NewTextFileButton folderID={folderID} />
          <NewFolderButton folderID={folderID} windowID={windowID} />
        </div>
      )}
    </div>
  );
};
export default New;
