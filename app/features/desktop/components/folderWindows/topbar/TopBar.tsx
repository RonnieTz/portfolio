import Logo from './Logo';
import Tooltip from './Tooltip';
import { useState } from 'react';

const TopBar = () => {
  const [titles, setTitles] = useState(
    ['File', 'Action', 'Media', 'Clipboard', 'View', 'Help'].map((title) => {
      return { title, tooltip: false };
    })
  );
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="topbar"
    >
      {titles.map((title, index) => (
        <div
          onMouseEnter={() => {
            const newTitles = [...titles];
            newTitles[index].tooltip = true;
            setTitles(newTitles);
          }}
          onMouseLeave={() => {
            const newTitles = [...titles];
            newTitles[index].tooltip = false;
            setTitles(newTitles);
          }}
          key={title.title}
          className="topbar-title"
        >
          {title.title}
          {title.tooltip && <Tooltip />}
        </div>
      ))}
      <Logo />
    </div>
  );
};
export default TopBar;
