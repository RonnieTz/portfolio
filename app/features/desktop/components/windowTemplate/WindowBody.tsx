import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import windowBody from '@/public/windowBody.jpg';

const WindowBody = ({ children }: { link: string; children: ReactNode }) => {
  return (
    <Box
      height={'calc(100% - 40px)'}
      width={'100%'}
      position={'absolute'}
      bottom={0}
    >
      <Box
        width={'100%'}
        height={'100%'}
        sx={{
          border: '1px solid rgb(0, 84, 224)',
          boxSizing: 'border-box',
          borderWidth: ' 0 2.5px 2.5px 2.5px',
        }}
      >
        {children}
      </Box>
      <img
        src={windowBody.src}
        width={'100%'}
        height={'100%'}
        alt="window body"
      />
    </Box>
  );
};

export default WindowBody;