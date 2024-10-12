import arrow from '@/public/triangle-down.svg';
import text from '@/public/text.png';
import folder from '@/public/Folder Closed.png';
import Image from 'next/image';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { newTextFile } from '@/app/redux/app/appSlice';
import { useDispatch } from 'react-redux';
import NewTextFileButton from './NewTextFileButton';
import NewFolderButton from './NewFolderButton';

type Props = {
  folderID: string | undefined;
  windowID: string | undefined;
};

const ContextNewButton = ({ folderID, windowID }: Props) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [newTextIsHovered, setNewTextIsHovered] = useState(false);
  const [newFolderIsHovered, setNewFolderIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="context-menu-item"
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
