import arrow from '@/public/triangle-down.svg';
import Image from 'next/image';
import { useState } from 'react';

type Props = { enabled: boolean };

const ContextViewButton = ({ enabled }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        if (!enabled) return;
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className={`context-menu-item ${!enabled ? 'button-disabled' : ''}`}
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
