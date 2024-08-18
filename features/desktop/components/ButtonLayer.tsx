'use client';

import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';

type ButtonLayerProps = {
  right: string;
  func: any;
  fullScreen: boolean;
  id: string;
  name: 'exit' | 'fullscreen' | 'minimize';
};

const ButtonLayer = ({
  right,
  func,
  fullScreen,
  id,
  name,
}: ButtonLayerProps) => {
  const dispatch = useDispatch();

  return (
    <IconButton
      onClick={() => {
        console.log(name);

        if (name === 'fullscreen') {
          dispatch(func({ id, fullscreen: !fullScreen }));
        }
        if (name === 'minimize' || name === 'exit') {
          dispatch(func({ id }));
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
        ':hover': { bgcolor: 'white', opacity: 0.3 },
        ':active': { bgcolor: 'black', opacity: 0.3 },
      }}
    ></IconButton>
  );
};

export default ButtonLayer;
