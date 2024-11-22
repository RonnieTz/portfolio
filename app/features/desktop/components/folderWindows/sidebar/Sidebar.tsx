import SidebarItem from './SidebarItem';
import FileFolderTasks from './FileFolderTasks';
import Details from './Details';

type Props = { folderLocation: string; windowID: string };

const Sidebar = ({ folderLocation, windowID }: Props) => {
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="sidebar"
    >
      <SidebarItem title="File and Folders Tasks">
        <FileFolderTasks folderLocation={folderLocation} windowID={windowID} />
      </SidebarItem>
      <SidebarItem title="Details">
        <Details folderLocation={folderLocation} />
      </SidebarItem>
    </div>
  );
};
export default Sidebar;
