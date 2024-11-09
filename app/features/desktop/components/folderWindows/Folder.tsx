import AddressBar from './address_bar/AddressBar';
import Navbar from './navbar/Navbar';
import './styles.css';
import TopBar from './topbar/TopBar';
import MainArea from './MainArea';
import { useEffect, useState } from 'react';

type Props = {
  folderID: string;
  folderLocation: string;
  windowID: string;
  subWindowID: string;
};

const Folder = ({ folderID, folderLocation, windowID, subWindowID }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<
    'File' | 'Edit' | 'Views' | false
  >(false);

  return (
    <div
      onClick={(e) => {
        setIsMenuOpen(false);
      }}
      className="folder-window-container"
    >
      <TopBar
        windowID={windowID}
        folderLocationID={folderLocation}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Navbar windowID={windowID} />
      <AddressBar folderID={folderID} />
      <MainArea
        folderLocation={folderLocation}
        folderID={folderID}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
};
export default Folder;
