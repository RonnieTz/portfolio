type CutProps = {
  disabled: boolean;
  folderLocationID: string;
};

const CopyToFolder = ({ disabled, folderLocationID }: CutProps) => {
  return (
    <div
      onClick={(e) => {}}
      className={`topbar-tooltip-item ${
        disabled ? 'topbar-tooltip-item-disabled' : ''
      }`}
    >
      Copy To Folder...
    </div>
  );
};
export default CopyToFolder;
