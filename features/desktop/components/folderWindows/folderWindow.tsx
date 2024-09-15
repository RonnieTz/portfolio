import AddressBar from './address_bar/AddressBar';
import Navbar from './navbar/Navbar';
import './styles.css';
import TopBar from './topbar/TopBar';
import MainArea from './MainArea';
//changed

const FolderWindow = () => {
  return (
    <div className="folder-window-container">
      <TopBar />
      <Navbar />
      <AddressBar />
      <MainArea />
    </div>
  );
};
export default FolderWindow;
