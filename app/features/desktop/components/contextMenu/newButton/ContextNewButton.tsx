import arrow from '@/public/triangle-down.svg';
import Image from 'next/image';
import { useState } from 'react';
import NewTextFileButton from './NewTextFileButton';
import NewFolderButton from './NewFolderButton';

type Props = {
  folderID: string | undefined;
  windowID: string | undefined;
  enabled: boolean;
};

const ContextNewButton = ({ folderID, windowID, enabled }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        if (!enabled) return;
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className={`context-menu-item ${!enabled ? 'button-disabled' : ''}`}
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
export default ContextNewButton;
