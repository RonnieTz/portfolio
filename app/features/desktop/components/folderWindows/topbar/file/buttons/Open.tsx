import { useOpenLink } from '@/app/utilities/hooks/useOpenLink';

type CloseProps = {
  folderLocationID: string;
};

const Open = ({ folderLocationID }: CloseProps) => {
  const [openSelectedLink] = useOpenLink(folderLocationID);
  return (
    <div
      style={{ fontWeight: 600 }}
      onClick={(e) => {
        openSelectedLink();
      }}
      className="topbar-tooltip-item"
    >
      Open
    </div>
  );
};
export default Open;
