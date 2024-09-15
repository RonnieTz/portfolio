import { Box } from '@mui/material';
import React from 'react';
import windowBar from '@/public/windowTopBar.jpg';

const WindowBarBackground = ({ focused }: { focused: boolean }) => {
  return (
    <>
      <img
        style={{
          filter: focused ? 'none' : 'brightness(1.4)',
          transition: 'all 0.2s',
        }}
        src={windowBar.src}
        width={'100%'}
        height={'100%'}
        alt="window bar"
      />
    </>
  );
};

export default WindowBarBackground;
