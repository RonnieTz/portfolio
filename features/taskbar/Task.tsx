'use client';

import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  focusWindow,
  setMinimize,
  setWindowFullScreen,
  setFocus,
} from '@/redux/appSlice';

type TaskProps = {
  title: string;
  focused: boolean;
  id: string;
  logo: string;
};

const Task = ({ focused, id, title, logo }: TaskProps) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onDoubleClick={() => {
        dispatch(setWindowFullScreen({ id, fullscreen: true }));
      }}
      onClick={() => {
        if (focused) {
          dispatch(setMinimize({ id, minimize: true }));
          dispatch(setFocus({ id, focus: false }));
          return;
        }
        dispatch(focusWindow({ id, focus: true }));
        dispatch(setMinimize({ id, minimize: false }));
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
        minWidth: '50px',
        width: '15%',
        cursor: 'pointer',
        transition: 'all 0.2s',
        filter: '',
        overflow: 'hidden',
      }}
    >
      <img height={'70%'} src={logo} alt="logo" />
      <Typography
        color={'rgba(225, 235, 245, 255)'}
        fontSize={15}
        fontWeight={500}
        fontFamily={'Gill Sans, sans-serif'}
        sx={{ textShadow: '1px 1px 3px black', textWrap: 'nowrap' }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default Task;
