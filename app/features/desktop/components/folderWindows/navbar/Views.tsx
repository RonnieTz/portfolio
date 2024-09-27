import views from '@/public/views.png';
import arrow from '@/public/triangle-down.svg';
import { useState } from 'react';
import Image from 'next/image';

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
      <Image
        priority={true}
        style={{ height: '70%', width: 'auto' }}
        src={views}
        alt="Views Icon"
      />
      <span className="arrow-down">
        <Image
          priority={true}
          style={{ height: '35%', width: '100%' }}
          src={arrow}
          alt="arrow down"
        />
      </span>
    </div>
  );
};
export default Views;
