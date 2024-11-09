const Footer = () => {
  return (
    <div className="move-item-window-footer">
      <button className="move-item-window-button">Make New Folder</button>
      <button
        style={{
          translate: '45px',
        }}
        className="move-item-window-button"
      >
        Move
      </button>
      <button className="move-item-window-button">Cancel</button>
    </div>
  );
};
export default Footer;
