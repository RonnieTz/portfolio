type Props = { isExpanded: boolean };

const SidebarItemDetails = ({ isExpanded }: Props) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={
        isExpanded ? 'sidebar-item-details' : 'sidebar-item-details-hidden'
      }
    >
      coming soon
    </div>
  );
};
export default SidebarItemDetails;
