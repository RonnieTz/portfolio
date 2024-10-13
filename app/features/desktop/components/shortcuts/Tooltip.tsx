import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { Link, TextFileWindow } from '@/app/redux/app/types';

type Props = {
  windowID: string;
  folderLocation: string;
  linkID: string;
};

const Tooltip = ({ windowID, folderLocation, linkID }: Props) => {
  const { windows, links } = useSelector((state: RootState) => state.app);
  const { textFiles } = useSelector((state: RootState) => state.editor);
  const window = windows.find((window) => window.windowID === windowID);
  const { content } = window as TextFileWindow;
  const dateModified = textFiles
    .find((file) => file.contentID === content)
    ?.dateModified.toLocaleString();

  const linksInFolder = links.filter((link) => link.folderLocation === linkID);

  const getLinksInFolder = (links: Link[]) => {
    const windowsFound = links.map((link) => {
      const window = windows.find(
        (window) => window.windowID === link.windowID
      );
      return window;
    });
    return windowsFound
      .filter((window) => window?.type !== 'folder')
      .map((window) => window?.title)
      .join(', ');
  };
  const getFoldersInFolder = (links: Link[]) => {
    const windowsFound = links.map((link) => {
      const window = windows.find(
        (window) => window.windowID === link.windowID
      );
      return window;
    });
    if (windowsFound.some((window) => window?.type === 'folder')) {
      return links
        .filter((link) => {
          return link.windowID === windowID;
        })
        .map((link) => link.name)
        .join(', ');
    }
  };

  return (
    <div
      className="link-tooltip"
      style={{ maxWidth: window?.type === 'folder' ? '300px' : undefined }}
    >
      {window?.type !== 'folder' && (
        <p style={{ textWrap: 'nowrap', margin: 0 }}>{`Type: ${
          window?.type === 'textFile' ? 'Text Document' : 'Program'
        }`}</p>
      )}
      {window?.type === 'textFile' && (
        <p
          style={{ textWrap: 'nowrap', margin: 0 }}
        >{`Date Modified: ${dateModified}`}</p>
      )}
      {window?.type === 'folder' && linksInFolder.length > 0 && (
        <p
          style={{
            textWrap: 'nowrap',
            margin: 0,
            overflow: 'clip',
            textOverflow: 'ellipsis',
          }}
        >
          {`Folders: ${getFoldersInFolder(linksInFolder) || ''}`}{' '}
        </p>
      )}
      {window?.type === 'folder' && linksInFolder.length > 0 && (
        <p
          style={{
            textWrap: 'nowrap',
            margin: 0,
            overflow: 'clip',
            textOverflow: 'ellipsis',
          }}
        >{`Files: ${getLinksInFolder(linksInFolder)}`}</p>
      )}
      {window?.type === 'folder' && linksInFolder.length === 0 && (
        <p style={{ textWrap: 'nowrap', margin: 0 }}>{`Folder is Empty`}</p>
      )}
    </div>
  );
};
export default Tooltip;
