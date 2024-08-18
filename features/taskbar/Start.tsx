'use client';

import { Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { setStartOpen, setStartHover } from '@/redux/appSlice';

const Start = () => {
  const dispatch = useDispatch();
  const { start } = useSelector((state: RootState) => state.app);
  return (
    <Box
      onClick={() => {
        dispatch(setStartOpen(!start.open));
      }}
      onMouseEnter={() => dispatch(setStartHover(true))}
      onMouseLeave={() => dispatch(setStartHover(false))}
      height={'100%'}
      width={'8.4%'}
      position={'absolute'}
      bgcolor={start.open ? 'black' : 'white'}
      zIndex={100}
      sx={{
        cursor: 'pointer',
        opacity: start.open ? 0.3 : 0,
        borderRadius: '0 10px 10px 0',
        ':hover': { opacity: start.open ? 0.3 : 0.1 },
      }}
    ></Box>
  );
};

export default Start;
