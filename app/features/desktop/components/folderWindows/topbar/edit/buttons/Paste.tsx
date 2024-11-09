import { usePasteLink } from '@/app/utilities/hooks/usePasteLink';

type CutProps = {
  disabled: boolean;
  folderLocationID: string;
  windowID: string;
};

const Paste = ({ disabled, folderLocationID, windowID }: CutProps) => {
  const [pasteLink] = usePasteLink(folderLocationID, windowID);
  return (
    <div
      onClick={() => {
        if (disabled) return;
        pasteLink();
      }}
      className={`topbar-tooltip-item ${
        disabled ? 'topbar-tooltip-item-disabled' : ''
      }`}
    >
      Paste
      <span
        style={{
          fontFamily: 'inherit',
          position: 'absolute',
          right: '10%',
          fontWeight: '100',
        }}
      >
        Ctrl+V
      </span>
    </div>
  );
};
export default Paste;
