'use client';

import { Box } from '@mui/material';
import ButtonLayer from './ButtonLayer';
import {
  setWindowFullScreen,
  minimizeWindow,
  closeWindow,
} from '@/redux/appSlice';
import windowButtons from '@/public/windowButtons.jpg';

type WindowBarButtonsProps = {
  id: string;
  fullScreen: boolean;
};

const WindowBarButtons = ({ id, fullScreen }: WindowBarButtonsProps) => {
  return (
    <Box
      width={'88px'}
      height={'30px'}
      bgcolor={'white'}
      position={'absolute'}
      right={3}
      top={5}
      borderRadius={'5px'}
      overflow={'hidden'}
      sx={{ cursor: 'default' }}
      zIndex={10}
    >
      <ButtonLayer
        id={id}
        fullScreen={fullScreen}
        func={closeWindow}
        right="4px"
        name="exit"
      />
      <ButtonLayer
        fullScreen={fullScreen}
        func={setWindowFullScreen}
        right="32.5px"
        id={id}
        name="fullscreen"
      />
      <ButtonLayer
        id={id}
        fullScreen={fullScreen}
        func={minimizeWindow}
        right="61.5px"
        name="minimize"
      />
      <img src={windowButtons.src} alt="window buttons" height={'100%'} />
    </Box>
  );
};

export default WindowBarButtons;
