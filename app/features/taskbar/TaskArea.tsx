import { Box } from '@mui/material';
import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const TaskArea = () => {
  const { windows, taskList } = useSelector((state: RootState) => state.app);

  return (
    <Box>
      <Box
        position={'absolute'}
        width={'calc(100% - 230px)'}
        zIndex={100}
        height={'78%'}
        right={'110px'}
        top={'12%'}
        display={'flex'}
      >
        {taskList.map((window) => {
          if (window.open === false) {
            return <></>;
          }
          return (
            <Task
              title={window.title}
              focused={window.focused}
              windowID={window.windowID}
              key={window.windowID}
              logo={window.logo}
              fixedSize={window.fixedSize}
              subWindow={window.type === 'program' ? window.subWindow : ''}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default TaskArea;
