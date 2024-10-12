import { newFolder } from '@/app/redux/app/appSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import folder from '@/public/Folder Closed.png';
import Image from 'next/image';
import { hideContextMenu } from '@/app/redux/contextMenu/contextSlice';

type Props = { windowID: string | undefined; folderID: string | undefined };

const NewFolderButton = ({ folderID, windowID }: Props) => {
  const dispatch = useDispatch();
  const [newTextIsHovered, setNewTextIsHovered] = useState(false);
  return (
    <div
      onClick={() => {
        if (folderID)
          dispatch(newFolder({ folderID, windowID: windowID ?? '' }));
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
        src={folder}
        alt="text logo"
        style={{ height: '100%', width: 'auto' }}
      />
      <span
        style={{
          color: newTextIsHovered ? 'rgb(228, 237, 242)' : undefined,
        }}
      >
        Folder
      </span>
    </div>
  );
};
export default NewFolderButton;
