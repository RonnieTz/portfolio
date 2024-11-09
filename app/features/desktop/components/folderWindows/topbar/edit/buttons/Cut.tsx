import { useCutLink } from '@/app/utilities/hooks/useCutLink';

type CutProps = {
  disabled: boolean;
  folderLocationID: string;
};

const Cut = ({ disabled, folderLocationID }: CutProps) => {
  const [cutLink] = useCutLink(folderLocationID);
  return (
    <div
      onClick={(e) => {
        if (disabled) return;
        cutLink();
      }}
      className={`topbar-tooltip-item ${
        disabled ? 'topbar-tooltip-item-disabled' : ''
      }`}
    >
      Cut
      <span
        style={{
          fontFamily: 'inherit',
          position: 'absolute',
          right: '10%',
          fontWeight: '100',
        }}
      >
        Ctrl+X
      </span>
    </div>
  );
};
export default Cut;
