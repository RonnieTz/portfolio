import { useState, useRef } from 'react';
import Tooltip from './Tooltip';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const timestamp = useRef<number>(0);
  const [mouseInTimer, setMouseInTimer] = useState<NodeJS.Timeout | null>(null);
  const [mouseOutTimer, setMouseOutTimer] = useState<NodeJS.Timeout | null>(
    null
  );
  return (
    <div className="minesweeper-navbar">
      <p
        onMouseOver={() => {
          if (mouseOutTimer) {
            clearTimeout(mouseOutTimer);
          }
        }}
        onClick={() => {
          setIsHovered(!isHovered);
        }}
        // onMouseEnter={(e) => {
        //   e.stopPropagation();
        //   timestamp.current = Date.now();
        //   setMouseInTimer(
        //     setTimeout(() => {
        //       setIsHovered(true);
        //     }, 200)
        //   );
        // }}
        onMouseOut={(e) => {
          // e.stopPropagation();
          // setMouseOutTimer(
          //   setTimeout(() => {
          //     setIsHovered(false);
          //   }, 300)
          // );
          if (Date.now() - timestamp.current < 200) {
            clearTimeout(mouseInTimer!);
          }
        }}
        style={{
          backgroundColor: isHovered ? 'rgb(48, 104, 192)' : undefined,
          color: isHovered ? 'rgb(228, 237, 242)' : undefined,
        }}
        className="ms-nav-button"
      >
        Game
      </p>
      {isHovered && (
        <Tooltip
          setIsHovered={setIsHovered}
          mouseOutTimer={mouseOutTimer}
          setMouseOutTimer={setMouseOutTimer}
        />
      )}
    </div>
  );
};
export default Navbar;
