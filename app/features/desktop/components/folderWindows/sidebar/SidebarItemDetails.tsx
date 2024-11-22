import { ReactNode } from 'react';

type Props = {
  isExpanded: boolean;
  children: ReactNode;
};

const SidebarItemDetails = ({ isExpanded, children }: Props) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={
        isExpanded ? 'sidebar-item-details' : 'sidebar-item-details-hidden'
      }
    >
      {children}
    </div>
  );
};
export default SidebarItemDetails;
