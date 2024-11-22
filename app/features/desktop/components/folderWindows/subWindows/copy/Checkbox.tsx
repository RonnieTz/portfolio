type Props = {
  isVisible: boolean;
  expanded: boolean;
  expandFolder: (id: string) => void;
  id: string;
};

const Checkbox = ({ isVisible, expanded, expandFolder, id }: Props) => {
  return (
    <div
      style={{ opacity: isVisible ? 1 : 0 }}
      className="move-item-window-checkbox"
      onClick={(e) => {
        e.stopPropagation();
        if (isVisible) expandFolder(id);
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          translate: '-50% -50%',
          width: '4px',
          height: '0',
          border: 'solid 1px black',
        }}
      ></div>
      {!expanded && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            translate: '-50% -50%',
            width: '0',
            height: '4px',
            border: 'solid 1px black',
          }}
        ></div>
      )}
    </div>
  );
};
export default Checkbox;
