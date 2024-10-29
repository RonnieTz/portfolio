import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

type Props = {
  isExpanded: boolean;
  folderLocation: string;
  children: ReactNode;
};

const SidebarItemDetails = ({
  isExpanded,
  children,
  folderLocation,
}: Props) => {
  const { links } = useSelector((state: RootState) => state.app);
  const selectedFolder = links.find(
    (link) => link.folderLocation === folderLocation && link.selected
  );
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      style={{
        height: !isExpanded ? '0px' : selectedFolder ? '120px' : '40px',
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
