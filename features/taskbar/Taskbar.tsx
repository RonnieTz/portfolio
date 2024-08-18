'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import taskbar from '@/public/taskbar.jpg';
import React from 'react';
import Start from './Start';
import TimeBox from './TimeBox';
import StartTooltip from './StartTooltip';
import Task from './Task';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Taskbar = () => {
  const { windows, tasks } = useSelector((state: RootState) => state.app);
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
      <Box>
        <Image src={taskbar} layout={'fill'} alt="taskbar" />
        <Box
          position={'absolute'}
          width={'83.6%'}
          height={'78%'}
          right={'7.2%'}
          top={'12%'}
          display={'flex'}
        >
          {tasks.map((task) => {
            return (
              <Task
                title={task.title}
                focused={task.focused}
                id={task.id}
                key={task.id}
              />
            );
          })}
          ;
          {/* {windows.map((window) => {
            return (
              <Task
                title={window.title}
                focused={window.focused}
                id={window.id}
                key={window.id}
              />
            );
          })} */}
        </Box>
      </Box>
      <TimeBox />
    </Box>
  );
};

export default Taskbar;
