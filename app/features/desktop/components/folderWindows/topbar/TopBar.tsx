import Logo from './Logo';
import '../../contextMenu/styles.css';
import File from './file/File';
import Edit from './edit/Edit';
import Views from './views/Views';
import './styles.css';
import { useState } from 'react';

type Props = {
  windowID: string;
  folderLocationID: string;
  isMenuOpen: 'File' | 'Edit' | 'Views' | false;
  setIsMenuOpen: React.Dispatch<
    React.SetStateAction<'File' | 'Edit' | 'Views' | false>
  >;
};

const TopBar = ({
  windowID,
  folderLocationID,
  isMenuOpen,
  setIsMenuOpen,
}: Props) => {
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="topbar"
    >
      <File
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        windowID={windowID}
        folderLocationID={folderLocationID}
      />
      <Edit
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        folderLocationID={folderLocationID}
        windowID={windowID}
      />
      <Views isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Logo />
    </div>
  );
};
export default TopBar;
