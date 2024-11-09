import FolderArea from './folderArea/FolderArea';
import Sidebar from './sidebar/Sidebar';

type Props = {
  folderID: string;
  folderLocation: string;
  setIsMenuOpen: React.Dispatch<
    React.SetStateAction<'File' | 'Edit' | 'Views' | false>
  >;
};

const MainArea = ({ folderID, folderLocation, setIsMenuOpen }: Props) => {
  return (
    <div className="main-area">
      <Sidebar folderLocation={folderLocation} />
      <FolderArea
        folderID={folderID}
        folderLocation={folderLocation}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
};
export default MainArea;
