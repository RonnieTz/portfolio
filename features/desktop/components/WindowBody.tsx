import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import windowBody from '@/public/windowBody.jpg';

const WindowBody = ({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) => {
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
          border: '1px solid blue',
          boxSizing: 'border-box',
          borderWidth: ' 0 2px 2px 2px',
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
