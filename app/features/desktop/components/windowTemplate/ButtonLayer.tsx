'use client';

import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  setWindowFullScreen,
  setMinimize,
  closeWindow,
  setFocus,
} from '@/app/redux/appSlice';

type ButtonLayerProps = {
  right: string;
  fullScreen: boolean;
  id: string;
  name: 'exit' | 'fullscreen' | 'minimize';
};

const ButtonLayer = ({ right, fullScreen, id, name }: ButtonLayerProps) => {
  const dispatch = useDispatch();

  return (
    <IconButton
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (name === 'fullscreen') {
          dispatch(setWindowFullScreen({ id, fullscreen: !fullScreen }));
        }
        if (name === 'minimize') {
          dispatch(setMinimize({ id, minimize: true }));
          dispatch(setFocus({ id, focus: false }));
          console.log(e);
        }
        if (name === 'exit') {
          dispatch(closeWindow({ id }));
        }
      }}
      sx={{
        height: '22px',
        width: '22px',
        position: 'absolute',
        right,
        top: '5px',
        zIndex: 1,
        bgcolor: 'transparent',
        borderRadius: '2px',
        ':hover': {
          bgcolor: 'white',
          opacity: 0.3,
          boxShadow: '0 0 5px 0px white',
        },
        ':active': { bgcolor: 'black', opacity: 0.3 },
        transition: 'all 0.2s',
      }}
    ></IconButton>
  );
};

export default ButtonLayer;
