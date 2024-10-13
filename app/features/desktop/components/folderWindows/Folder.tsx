import AddressBar from './address_bar/AddressBar';
import Navbar from './navbar/Navbar';
import './styles.css';
import TopBar from './topbar/TopBar';
import MainArea from './MainArea';

type Props = {
  folderID: string;
  folderLocation: string;
};

const Folder = ({ folderID, folderLocation }: Props) => {
  return (
    <div className="folder-window-container">
      <TopBar />
      <Navbar />
      <AddressBar folderID={folderID} />
      <MainArea folderLocation={folderLocation} folderID={folderID} />
    </div>
  );
};
export default Folder;
