import { useDeleteLink } from '@/app/utilities/hooks/useDeleteLink';

type CloseProps = {
  folderLocationID: string;
  disabled: boolean;
};

const Delete = ({ folderLocationID, disabled }: CloseProps) => {
  const [deleteLink] = useDeleteLink(folderLocationID);

  return (
    <div
      onClick={(e) => {
        if (disabled) return;
        deleteLink();
      }}
      className={`topbar-tooltip-item ${
        disabled ? 'topbar-tooltip-item-disabled' : ''
      }`}
    >
      Delete
    </div>
  );
};
export default Delete;
