import SidebarItem from './SidebarItem';
import FileFolderTasks from './FileFolderTasks';

type Props = { folderLocation: string };

const Sidebar = ({ folderLocation }: Props) => {
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="sidebar"
    >
      <SidebarItem
        folderLocation={folderLocation}
        title="File and Folders Tasks"
      >
        <FileFolderTasks folderLocation={folderLocation} />
      </SidebarItem>
      <SidebarItem folderLocation={folderLocation} title="Details">
        <div></div>
      </SidebarItem>
    </div>
  );
};
export default Sidebar;
