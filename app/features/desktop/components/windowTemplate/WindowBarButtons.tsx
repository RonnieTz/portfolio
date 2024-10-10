'use client';

import ExitButton from './ExitButton';
import MinimizeButton from './MinimizeButton';
import MaximizeButton from './MaximizeButton';

type WindowBarButtonsProps = {
  windowID: string;
  fullScreen: boolean;
  focused: boolean;
  fixedSize: boolean;
  subWindow: string;
};

const WindowBarButtons = ({
  windowID,
  fullScreen,
  focused,
  fixedSize,
  subWindow,
}: WindowBarButtonsProps) => {
  return (
    <div className="button-container">
      <MinimizeButton focused={focused} id={windowID} />
      <MaximizeButton
        fixedSize={fixedSize}
        focused={focused}
        fullScreen={fullScreen}
        id={windowID}
      />
      <ExitButton focused={focused} subWindow={subWindow} id={windowID} />
    </div>
  );
};

export default WindowBarButtons;
