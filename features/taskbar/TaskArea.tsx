import { Box } from '@mui/material';
import React from 'react';
import Task from './Task';
import Image from 'next/image';
import taskbar from '@/public/taskbar.jpg';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const TaskArea = () => {
  const { windows } = useSelector((state: RootState) => state.app);
  return (
    <Box>
      <Image
        style={{ filter: 'contrast(1.1)' }}
        src={taskbar}
        layout={'fill'}
        alt="taskbar"
      />
      <Box
        position={'absolute'}
        width={'83.6%'}
        height={'78%'}
        right={'7.2%'}
        top={'12%'}
        display={'flex'}
      >
        {windows.map((window) => {
          return (
            <Task
              title={window.title}
              focused={window.focused}
              id={window.id}
              key={window.id}
              logo={window.logo}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default TaskArea;
