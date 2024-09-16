const Title = ({
  title,
  selected,
  type,
}: {
  title: string;
  selected: boolean;
  type: string;
}) => {
  return (
    <div
      style={{
        fontSize: '0.7rem',
        color:
          type === 'shortcut' || (type === 'project' && selected)
            ? 'rgb(227, 230, 225)'
            : 'rgb(25, 25, 25)',
        textShadow:
          type === 'shortcut'
            ? '0.5px 0.5px 3px rgb(20, 20, 20)'
            : '0.5px 0.5px 0.5px rgb(73, 73, 73)',
        fontFamily: 'winXP, Gill Sans, sans-serif',
        letterSpacing: '0.1px',
        cursor: 'default',
        backgroundColor: selected ? 'rgb(48, 94, 192)' : 'transparent',
        padding: '0 4px',
        transition: 'all 0.1s',
        border: selected
          ? '1.2px dotted rgb(175, 137, 68)'
          : '1.2px solid transparent',
      }}
    >
      {title}
    </div>
  );
};
export default Title;
