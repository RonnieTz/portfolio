import { newTextFile } from '@/app/redux/app/appSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import text from '@/public/text.png';
import Image from 'next/image';
import { hideContextMenu } from '@/app/redux/contextMenu/contextSlice';
import { newTextData } from '@/app/redux/editor/editorSlice';
import { nanoid } from '@reduxjs/toolkit';

type Props = {
  folderID: string | undefined;
};

const NewTextFileButton = ({ folderID }: Props) => {
  const dispatch = useDispatch();
  const [newTextIsHovered, setNewTextIsHovered] = useState(false);
  return (
    <div
      onClick={() => {
        if (folderID) {
          const contentID = nanoid();
          dispatch(newTextFile({ folderID, contentID }));
          dispatch(newTextData({ contentID }));
        }
        dispatch(hideContextMenu());
      }}
      onMouseEnter={() => {
        setNewTextIsHovered(true);
      }}
      onMouseLeave={() => {
        setNewTextIsHovered(false);
      }}
      className="context-menu-item"
      style={{ height: '18px' }}
    >
      <Image
        src={text}
        alt="text logo"
        style={{ height: '100%', width: 'auto' }}
      />
      <span
        style={{
          color: newTextIsHovered ? 'rgb(228, 237, 242)' : undefined,
        }}
      >
        Text Document
      </span>
    </div>
  );
};
export default NewTextFileButton;
