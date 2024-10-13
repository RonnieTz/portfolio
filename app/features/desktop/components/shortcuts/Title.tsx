const Title = ({
  title,
  selected,
  type,
  color,
}: {
  title: string;
  selected: boolean;
  type: string;
  color: 'dark' | 'light';
}) => {
  return (
    <div
      style={{
        fontSize: '0.7rem',
        maxWidth: '100%',
        color:
          color === 'light' || (color === 'dark' && selected)
            ? 'rgb(227, 230, 225)'
            : 'rgb(25, 25, 25)',
        textShadow:
          color === 'light' ? '0.5px 0.5px 3px rgb(20, 20, 20)' : undefined,
        fontFamily: 'Gill Sans, sans-serif',
        letterSpacing: '0.1px',
        cursor: 'default',
        backgroundColor: selected ? 'rgb(48, 94, 192)' : 'transparent',
        padding: '2px 5px',
        transition: 'all 0.1s',
        border: selected
          ? '1.2px dotted rgb(175, 137, 68)'
          : '1.2px solid transparent',
        textAlign: 'center',
        overflow: 'hidden',
        textWrap: 'wrap',
        boxSizing: 'border-box',
        direction: 'ltr',
        wordWrap: 'break-word',
      }}
    >
      {title}
    </div>
  );
};
export default Title;
