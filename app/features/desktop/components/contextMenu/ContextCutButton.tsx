type Props = { enabled: boolean };

const ContextCutButton = ({ enabled }: Props) => {
  return (
    <div className={`context-menu-item ${enabled ? '' : 'button-disabled'}`}>
      Cut
    </div>
  );
};
export default ContextCutButton;
