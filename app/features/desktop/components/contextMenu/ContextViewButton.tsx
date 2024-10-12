import arrow from '@/public/triangle-down.svg';
import Image from 'next/image';
import { useState } from 'react';

const ContextViewButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="context-menu-item"
    >
      <span
        style={{
          fontFamily: 'inherit',
          color: isHovered ? 'rgb(228, 237, 242)' : undefined,
        }}
      >
        View
      </span>
      <Image
        style={{ position: 'absolute', right: 10, rotate: '-90deg' }}
        src={arrow}
        alt="arrow"
        height={17}
        width={17}
      />
    </div>
  );
};
export default ContextViewButton;
