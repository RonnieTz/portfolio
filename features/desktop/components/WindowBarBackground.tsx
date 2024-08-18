import { Box } from '@mui/material';
import React from 'react';
import windowBar from '@/public/windowTopBar.jpg';

const WindowBarBackground = ({ focused }: { focused: boolean }) => {
  return (
    <>
      <img
        src={windowBar.src}
        width={'100%'}
        height={'100%'}
        alt="window bar"
      />
      <Box
        position={'absolute'}
        width={'100%'}
        height={'93%'}
        bgcolor={'rgb(150, 200, 250)'}
        top={1}
        left={1}
        zIndex={10}
        sx={{ opacity: focused ? 0 : 0.4, transition: 'opacity 0.2s' }}
      ></Box>
    </>
  );
};

export default WindowBarBackground;
