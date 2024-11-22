import { useState, ReactNode } from 'react';
import SidebarItemDetails from './SidebarItemDetails';
import SidebarItemTitle from './SidebarItemTitle';
import FileFolderTasks from './FileFolderTasks';

type Props = {
  title: string;
  children: ReactNode;
};

const SidebarItem = ({ title, children }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="sidebar-item"
    >
      <SidebarItemTitle
        title={title}
        isHovered={isHovered}
        isExpanded={isExpanded}
      />
      <SidebarItemDetails isExpanded={isExpanded}>
        {children}
      </SidebarItemDetails>
    </div>
  );
};
export default SidebarItem;
