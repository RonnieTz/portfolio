'use client';

import { Box } from '@mui/material';
import React from 'react';
import Start from './Start';
import TimeBox from './TimeBox';
import StartTooltip from './StartTooltip';
import TaskArea from './TaskArea';

const Taskbar = () => {
  return (
    <Box
      height={'37px'}
      width={'100%'}
      bgcolor={'blue'}
      position={'absolute'}
      bottom={'0'}
      zIndex={100}
    >
      <StartTooltip />
      <Start />
      <TaskArea />
      <TimeBox />
    </Box>
  );
};

export default Taskbar;
