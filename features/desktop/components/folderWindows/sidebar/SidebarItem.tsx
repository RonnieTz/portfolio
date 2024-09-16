import { useState } from 'react';
import SidebarItemDetails from './SidebarItemDetails';
import SidebarItemTitle from './SidebarItemTitle';

type Props = { title: string };

const SidebarItem = ({ title }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      onClick={() => {
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
      <SidebarItemDetails isExpanded={isExpanded} />
    </div>
  );
};
export default SidebarItem;
