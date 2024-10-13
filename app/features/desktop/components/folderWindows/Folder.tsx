import AddressBar from './address_bar/AddressBar';
import Navbar from './navbar/Navbar';
import './styles.css';
import TopBar from './topbar/TopBar';
import MainArea from './MainArea';

type Props = {
  folderID: string;
  folderLocation: string;
  windowID: string;
};

const Folder = ({ folderID, folderLocation, windowID }: Props) => {
  return (
    <div className="folder-window-container">
      <TopBar />
      <Navbar windowID={windowID} />
      <AddressBar folderID={folderID} />
      <MainArea folderLocation={folderLocation} folderID={folderID} />
    </div>
  );
};
export default Folder;
