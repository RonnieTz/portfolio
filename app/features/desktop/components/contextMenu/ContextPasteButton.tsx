import { buttonDisabled } from './library';

const ContextPasteButton = () => {
  return (
    <div
      style={true ? buttonDisabled : undefined}
      className="context-menu-item"
    >
      Paste
    </div>
  );
};
export default ContextPasteButton;
