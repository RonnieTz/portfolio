type Props = { enabled: boolean };

const ContextCopyButton = ({ enabled }: Props) => {
  return (
    <div className={`context-menu-item ${enabled ? '' : 'button-disabled'}`}>
      Copy
    </div>
  );
};
export default ContextCopyButton;
