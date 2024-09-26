import AddressBar from './address_bar/AddressBar';
import Navbar from './navbar/Navbar';
import './styles.css';
import TopBar from './topbar/TopBar';
import MainArea from './MainArea';

type Props = {
  title: string;
};

const Folder = ({ title }: Props) => {
  return (
    <div className="folder-window-container">
      <TopBar />
      <Navbar />
      <AddressBar title={title} />
      <MainArea />
    </div>
  );
};
export default Folder;
