import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarItem title="System Tasks" />
      <SidebarItem title="Other Places" />
      <SidebarItem title="Details" />
    </div>
  );
};
export default Sidebar;
