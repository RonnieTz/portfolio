import React from 'react';
import windowBar from '@/public/windowTopBar.jpg';
import Image from 'next/image';

const WindowBarBackground = ({ focused }: { focused: boolean }) => {
  return (
    <Image
      style={{
        filter: focused ? 'none' : 'brightness(1.4)',
        transition: 'all 0.2s',
        height: '100%',
        width: '100%',
      }}
      src={windowBar}
      alt="window bar"
    />
  );
};

export default WindowBarBackground;
