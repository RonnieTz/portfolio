import './styles.css';

const Tooltip = ({ text, title }: { title: string; text: string }) => {
  return (
    <div className="turn-off-button-tooltip">
      <div className="turn-off-button-tooltip-title">{title}</div>
      <div className="turn-off-button-tooltip-text">{text}</div>
    </div>
  );
};
export default Tooltip;
