import FolderArea from './folderArea/FolderArea';
import Sidebar from './sidebar/Sidebar';

type Props = {
  folderID: string;
  folderLocation: string;
  windowID: string;
  setIsMenuOpen: React.Dispatch<
    React.SetStateAction<'File' | 'Edit' | 'Views' | false>
  >;
};

const MainArea = ({
  folderID,
  folderLocation,
  setIsMenuOpen,
  windowID,
}: Props) => {
  return (
    <div className="main-area">
      <Sidebar folderLocation={folderLocation} windowID={windowID} />
      <FolderArea
        folderID={folderID}
        folderLocation={folderLocation}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
};
export default MainArea;
