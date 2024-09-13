const Title = ({ title, selected }: { title: string; selected: boolean }) => {
  return (
    <div
      style={{
        fontSize: '0.7rem',
        color: 'rgb(227, 230, 225)',
        textShadow: '0.5px 0.5px 3px rgb(20, 20, 20)',
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
