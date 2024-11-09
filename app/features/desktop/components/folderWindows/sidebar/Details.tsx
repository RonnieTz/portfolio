import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import './styles.css';

type Props = {
  folderLocation: string;
};

const Details = ({ folderLocation }: Props) => {
  const { links, windows } = useSelector((state: RootState) => state.app);
  const selectedFolder = links.find(
    (link) => link.folderLocation === folderLocation && link.selected
  );

  const folder = links.find((link) => link.linkID === folderLocation);

  const type = () => {
    if (selectedFolder) {
      const window = windows.find(
        (window) => window.windowID === selectedFolder?.windowID
      );
      return window?.type === 'textFile' ? 'Text Document' : window?.type;
    } else if (folder) {
      return 'Folder';
    }
  };

  const date = () => {
    if (selectedFolder) {
      return new Date(selectedFolder.dateModified).toLocaleString();
    } else if (folder) {
      return new Date(folder.dateModified).toLocaleString();
    } else {
      return '';
    }
  };

  return (
    <div className="details-container">
      <div className="details-title">
        {selectedFolder ? selectedFolder.name : folder?.name}
      </div>
      <div className="details-type">{type()}</div>
      <div className="details-date-modified">{`Date Modified: ${date()}`}</div>
    </div>
  );
};
export default Details;
