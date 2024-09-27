import ArrowDown from './ArrowDown';
import logo from '@/public/double-arrow-down.svg';
import logoLight from '@/public/double-arrow-down-light.svg';

type Props = { isHovered: boolean; title: string; isExpanded: boolean };

const SidebarItemTitle = ({ isHovered, title, isExpanded }: Props) => {
  return (
    <div className="sidebar-item-title">
      <span>{title}</span>
      <ArrowDown isExpanded={isExpanded} logo={isHovered ? logoLight : logo} />
    </div>
  );
};
export default SidebarItemTitle;
