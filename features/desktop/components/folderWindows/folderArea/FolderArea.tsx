import Shortcut from '../../shortcuts/Shortcut';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const FolderArea = () => {
  const { projects } = useSelector((state: RootState) => state.app);
  return (
    <div className="folder-area">
      {projects.map((shortcut, index) => (
        <Shortcut
          key={index}
          logo={shortcut.logo}
          title={shortcut.name}
          selected={shortcut.selected}
          codesadnboxLink={shortcut.codesandboxLink}
          gitHubLink={shortcut.gitHubLink}
          liveLink={shortcut.liveLink}
          type={shortcut.type}
        />
      ))}
    </div>
  );
};
export default FolderArea;
