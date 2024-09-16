import backArrow from '@/public/arrow-back.svg';
import arrow from '@/public/triangle-down.svg';
import VerticalDivider from './VerticalDivider';
import { useState } from 'react';

const BackArrow = () => {
  const [className, setClassName] = useState('back-button button-disabled');
  return (
    <div
      onMouseEnter={() => {
        if (!className.includes('button-disabled'))
          setClassName('back-button button-disabled hover');
      }}
      onMouseLeave={() => {
        setClassName('back-button button-disabled');
      }}
      className={className}
    >
      <span className="back-arrow">
        <img height={'70%'} src={backArrow.src} alt="back arrow" />
      </span>
      <span className="back-text">Back</span>
      {className.includes('hover') && (
        <span
          style={{
            height: '100%',
            position: 'absolute',
            left: '80%',
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
export default BackArrow;