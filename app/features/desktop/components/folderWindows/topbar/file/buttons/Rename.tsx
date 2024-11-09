import { useRenameLink } from '@/app/utilities/hooks/useRenameLink';

type CloseProps = {
  folderLocationID: string;
  disabled: boolean;
};

const Rename = ({ folderLocationID, disabled }: CloseProps) => {
  const [renameLink] = useRenameLink(folderLocationID);

  return (
    <div
      onClick={(e) => {
        if (disabled) return;
        renameLink();
      }}
      className={`topbar-tooltip-item ${
        disabled ? 'topbar-tooltip-item-disabled' : ''
      }`}
    >
      Rename
    </div>
  );
};
export default Rename;
