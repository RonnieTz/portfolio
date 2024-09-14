import AddressBar from './AddressBar';
import Navbar from './Navbar';
import './styles.css';
import TopBar from './TopBar';
import MainArea from './MainArea';

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
