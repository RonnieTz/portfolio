type Props = { enabled: boolean };

const ContextDetailsButton = ({ enabled }: Props) => {
  return (
    <div className={`context-menu-item ${enabled ? '' : 'button-disabled'}`}>
      Details
    </div>
  );
};
export default ContextDetailsButton;
