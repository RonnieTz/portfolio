'use strict';

import Window from './components/Window';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { setStartOpen } from '@/redux/appSlice';
import Iframe from 'react-iframe';
import ProjectWindow from './components/ProjectWindow';

const DesktopMainArea = () => {
  const dispatch = useDispatch();
  const { windows } = useSelector((state: RootState) => state.app);
  return (
    <div
      onClick={() => {
        dispatch(setStartOpen(false));
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: 'calc(100% - 37px)',
        zIndex: 1,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {windows.map((window, i) => (
        <Window
          key={window.id}
          fullScreen={window.fullScreen}
          minimized={window.minimized}
          link={window.link}
          title={window.title}
          zIndex={window.zIndex}
          top={window.position.y}
          left={window.position.x}
          id={window.id}
          focused={window.focused}
          children={<ProjectWindow />}
        />
      ))}
    </div>
  );
};

export default DesktopMainArea;
