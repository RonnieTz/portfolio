import { Box } from '@mui/material';
import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const TaskArea = () => {
  const { windows } = useSelector((state: RootState) => state.app);
  return (
    <Box>
      <Box
        position={'absolute'}
        width={'calc(100% - 220px)'}
        zIndex={100}
        height={'78%'}
        right={'110px'}
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
