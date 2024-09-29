import Shortcut from '../../shortcuts/Shortcut';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { unSelectAllShortcuts } from '@/app/redux/appSlice';

const FolderArea = () => {
  const dispatch = useDispatch();
  const { folderHistory, folders } = useSelector(
    (state: RootState) => state.app
  );
  const { currentFolder, history } = folderHistory;
  const currentFolderName = history[currentFolder];
  const currentFolderItems = folders.locations.find(
    (folder) => folder.location === currentFolderName
  )?.items;

  return (
    <div
      onClick={() => {
        dispatch(unSelectAllShortcuts({ location: currentFolderName }));
      }}
      className="folder-area"
    >
      {currentFolderItems?.map((item) => (
        <Shortcut
          key={item.name}
          title={item.name}
          logo={item.logo}
          selected={item.selected}
          type={item.type}
          items={item.items!}
          location={item.location!}
          color="dark"
          liveLink={item.liveLink}
          gitHubLink={item.gitHubLink}
          codesadnboxLink={item.codesandboxLink}
          size={item.size!}
        />
      ))}
    </div>
  );
};
export default FolderArea;
