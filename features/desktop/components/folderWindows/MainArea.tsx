import FolderArea from './folderArea/FolderArea';
import Sidebar from './sidebar/Sidebar';

const MainArea = () => {
  return (
    <div className="main-area">
      <Sidebar />
      <FolderArea />
    </div>
  );
};
export default MainArea;
