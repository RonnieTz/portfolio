'use client';

import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const StartTooltip = () => {
  const { start } = useSelector((state: RootState) => state.app);
  return (
    <Box
      position={'absolute'}
      height={'0.9rem'}
      width={'100px'}
      zIndex={100}
      border={'2px solid black'}
      top={-20}
      left={'5%'}
      display={start.hover ? 'flex' : 'none'}
      alignItems={'center'}
      justifyContent={'center'}
      bgcolor={'white'}
      color={'black'}
      padding={'2px 4px'}
      fontSize={12}
      fontFamily={'Gill Sans, sans-serif'}
    >
      Click here to begin
    </Box>
  );
};

export default StartTooltip;
