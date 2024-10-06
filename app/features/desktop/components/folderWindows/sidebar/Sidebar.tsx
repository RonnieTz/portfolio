import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="sidebar"
    >
      <SidebarItem title="System Tasks" />
      <SidebarItem title="Other Places" />
      <SidebarItem title="Details" />
    </div>
  );
};
export default Sidebar;
