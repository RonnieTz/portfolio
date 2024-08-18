import { Box } from '@mui/material';
import React, { Suspense } from 'react';
import Iframe from 'react-iframe';
import windowBody from '@/public/windowBody.jpg';

const WindowBody = ({ link, zIndex }: { link: string; zIndex: number }) => {
  return (
    <Box
      height={'calc(100% - 40px)'}
      width={'100%'}
      bgcolor={'white'}
      position={'absolute'}
      bottom={0}
    >
      <Box
        position={'absolute'}
        bgcolor={'white'}
        left={'1px'}
        bottom={'5px'}
        width={'calc(100% - 6px)'}
        height={'calc(100% - 5px)'}
        zIndex={zIndex}
        sx={{
          border: '1px solid blue',
          boxSizing: 'border-box',
          borderWidth: ' 0 1px 1px 1px',
        }}
      >
        <Iframe url={link} width="100%" height="100%" />
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
