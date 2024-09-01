'use client';

import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

const StartTooltip = () => {
  const { start } = useSelector((state: RootState) => state.app);
  const startRef = useRef(null);
  return (
    <CSSTransition
      in={start.hover}
      timeout={200}
      classNames="window"
      nodeRef={startRef}
      unmountOnExit
    >
      <Box
        ref={startRef}
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
    </CSSTransition>
  );
};

export default StartTooltip;
