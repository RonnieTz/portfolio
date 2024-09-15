'use client';

import { Box } from '@mui/material';
import ButtonLayer from './ButtonLayer';
import { setWindowFullScreen, closeWindow } from '@/redux/appSlice';
import windowButtons from '@/public/windowButtons.jpg';
import ExitButton from './ExitButton';
import MinimizeButton from './MinimizeButton';
import MaximizeButton from './MaximizeButton';

type WindowBarButtonsProps = {
  id: string;
  fullScreen: boolean;
  focused: boolean;
};

const WindowBarButtons = ({
  id,
  fullScreen,
  focused,
}: WindowBarButtonsProps) => {
  return (
    <div className="button-container">
      {/* <ButtonLayer id={id} fullScreen={fullScreen} right="4px" name="exit" />
      <ButtonLayer
        fullScreen={fullScreen}
        right="32.5px"
        id={id}
        name="fullscreen"
      />
      <ButtonLayer
        id={id}
        fullScreen={fullScreen}
        right="61.5px"
        name="minimize"
      /> */}
      <MinimizeButton focused={focused} id={id} />
      <MaximizeButton focused={focused} fullScreen={fullScreen} id={id} />
      <ExitButton focused={focused} id={id} />
    </div>
  );
};

export default WindowBarButtons;
