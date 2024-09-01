'use client';

import WidgetsIcon from '@mui/icons-material/Widgets';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  focusWindow,
  setMinimize,
  setWindowFullScreen,
} from '@/redux/appSlice';

type TaskProps = {
  title: string;
  focused: boolean;
  id: string;
  logo: string;
};

const Task = ({ focused, id, title, logo }: TaskProps) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(focusWindow({ id, focus: true }));
        dispatch(setMinimize({ id, minimize: false }));
      }}
      onDoubleClick={() => {
        dispatch(setWindowFullScreen({ id, fullscreen: true }));
      }}
      className="task"
      style={{
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        paddingLeft: '10px',
        paddingRight: '15px',
        gap: '10px',
        backgroundColor: focused
          ? 'rgba(24, 80, 184, 255)'
          : 'rgba(56, 128, 240, 255)',
        boxShadow: focused
          ? '-0.3px -0.3px 2px 0 rgb(50, 50, 70) , 0 0 2px 0px rgb(50, 50, 70) inset'
          : '0 0 1px 0px black, 0 0 7px 0px rgba(90, 190, 255, 255) inset',
        borderRadius: '5px',
        height: '100%',
        minWidth: '170px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        filter: 'contrast(1.2)',
      }}
    >
      <img height={'70%'} src={logo} alt="logo" />
      <Typography
        color={'rgba(225, 235, 245, 255)'}
        fontSize={15}
        fontWeight={500}
        fontFamily={'Gill Sans, sans-serif'}
        sx={{ textShadow: '1px 1px 3px black' }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default Task;
