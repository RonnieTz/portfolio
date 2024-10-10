import FolderArea from './folderArea/FolderArea';
import Sidebar from './sidebar/Sidebar';

type Props = {
  folderID: string;
  folderLocation: string;
};

const MainArea = ({ folderID, folderLocation }: Props) => {
  return (
    <div className="main-area">
      <Sidebar />
      <FolderArea folderID={folderID} folderLocation={folderLocation} />
    </div>
  );
};
export default MainArea;
