import forwardArrow from '@/public/arrow-forward.svg';
import arrow from '@/public/triangle-down.svg';
import VerticalDivider from './VerticalDivider';
import { useState } from 'react';

const ForwardArrow = () => {
  const [className, setClassName] = useState('forward-button');
  return (
    <div
      onMouseEnter={() => {
        setClassName('forward-button hover');
      }}
      onMouseLeave={() => {
        setClassName('forward-button');
      }}
      className={className}
    >
      <span className="back-arrow">
        <img height={'70%'} src={forwardArrow.src} alt="forward arrow" />
      </span>
      {className.includes('hover') && (
        <span
          style={{
            height: '100%',
            position: 'absolute',
            left: '68%',
            top: '5%',
          }}
        >
          <VerticalDivider />
        </span>
      )}
      <span className="arrow-down">
        <img height={'35%'} src={arrow.src} alt="arrow down" />
      </span>
    </div>
  );
};
export default ForwardArrow;
