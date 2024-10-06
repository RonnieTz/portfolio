'use client';

import ExitButton from './ExitButton';
import MinimizeButton from './MinimizeButton';
import MaximizeButton from './MaximizeButton';

type WindowBarButtonsProps = {
  id: string;
  fullScreen: boolean;
  focused: boolean;
  fixedSize: boolean;
  subWindow: string;
};

const WindowBarButtons = ({
  id,
  fullScreen,
  focused,
  fixedSize,
  subWindow,
}: WindowBarButtonsProps) => {
  return (
    <div className="button-container">
      <MinimizeButton focused={focused} id={id} />
      <MaximizeButton
        fixedSize={fixedSize}
        focused={focused}
        fullScreen={fullScreen}
        id={id}
      />
      <ExitButton focused={focused} subWindow={subWindow} id={id} />
    </div>
  );
};

export default WindowBarButtons;
