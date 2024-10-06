import forwardArrow from '@/public/arrow-forward.svg';
import Image from 'next/image';
import { useState } from 'react';

const AddressGoButton = () => {
  const [className, setClassName] = useState('address-button button-disabled');
  return (
    <div
      onMouseEnter={() => {
        setClassName('address-button hover button-disabled');
      }}
      onMouseLeave={() => {
        setClassName('address-button button-disabled');
      }}
      className={className}
    >
      <span className="address-arrow">
        <Image
          priority={true}
          style={{ width: '70%', height: '70%' }}
          src={forwardArrow}
          alt="forward arrow"
        />
      </span>
      <span className="back-text">Go</span>
    </div>
  );
};
export default AddressGoButton;
