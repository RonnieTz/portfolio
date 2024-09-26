import views from '@/public/views.png';
import arrow from '@/public/triangle-down.svg';
import { useState } from 'react';

const Views = () => {
  const [className, setClassName] = useState('views');
  return (
    <div
      onMouseEnter={() => {
        setClassName('views hover');
      }}
      onMouseLeave={() => {
        setClassName('views');
      }}
      className={className}
    >
      <img height={'70%'} src={views.src} alt="Views Icon" />
      <span className="arrow-down">
        <img height={'35%'} src={arrow.src} alt="arrow down" />
      </span>
    </div>
  );
};
export default Views;
