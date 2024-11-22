import { useCopyLink } from '@/app/utilities/hooks/useCopyLink';

type CutProps = {
  disabled: boolean;
  folderLocationID: string;
};

const Copy = ({ disabled, folderLocationID }: CutProps) => {
  const [copyLink] = useCopyLink(folderLocationID);
  return (
    <div
      onClick={() => {
        if (disabled) return;
        copyLink();
      }}
      className={`topbar-tooltip-item ${
        disabled ? 'topbar-tooltip-item-disabled' : ''
      }`}
    >
      Copy
      <span
        style={{
          fontFamily: 'inherit',
          position: 'absolute',
          right: '10%',
          fontWeight: '100',
        }}
      >
        Ctrl+C
      </span>
    </div>
  );
};
export default Copy;
