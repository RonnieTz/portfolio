'use client';

import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  focusWindow,
  setMinimize,
  setWindowFullScreen,
  setFocus,
} from '@/app/redux/app/appSlice';
import Image from 'next/image';

type TaskProps = {
  title: string;
  focused: boolean;
  windowID: string;
  logo: string;
  fixedSize: boolean;
  subWindow: string;
};

const Task = ({
  focused,
  windowID,
  title,
  logo,
  fixedSize,
  subWindow,
}: TaskProps) => {
  const dispatch = useDispatch();
  return (
    <div
      onDoubleClick={() => {
        if (fixedSize) return;
        dispatch(setWindowFullScreen({ windowID, fullscreen: true }));
      }}
      onClick={() => {
        console.log(subWindow);

        if (focused) {
          dispatch(setMinimize({ windowID, minimize: true }));
          dispatch(setFocus({ windowID, focus: false }));
          return;
        }

        if (subWindow) {
          dispatch(focusWindow({ windowID: subWindow, focus: true }));
          dispatch(setMinimize({ windowID: subWindow, minimize: false }));
          return;
        }

        dispatch(setMinimize({ windowID, minimize: false }));
        dispatch(focusWindow({ windowID, focus: true }));
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
        minWidth: '30px',
        width: '150px',
        flex: '1',
        maxWidth: '150px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        filter: '',
        overflow: 'hidden',
      }}
    >
      <Image
        priority={true}
        src={logo}
        alt="logo"
        style={{ cursor: 'pointer', width: 'auto', height: '70%' }}
      />
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
