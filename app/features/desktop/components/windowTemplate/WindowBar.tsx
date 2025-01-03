import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  setWindowPosition,
  setWindowFullScreen,
  setDraggingWindow,
} from '@/app/redux/app/appSlice';
import { hideContextMenu } from '@/app/redux/contextMenu/contextSlice';
import WindowBarBackground from './WindowBarBackground';
import WindowBarButtons from './WindowBarButtons';
import WindowTitle from './WindowTitle';

type WindowBarProps = {
  fullScreen: boolean;
  position: { x: number; y: number };
  setPosition: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  windowID: string;
  focused: boolean;
  title: string;
  logo: string;
  fixedSize: boolean;
  subWindow: string;
};

const WindowBar = ({
  fullScreen,
  position,
  setPosition,
  windowID,
  focused,
  title,
  logo,
  fixedSize,
  subWindow,
}: WindowBarProps) => {
  const ref = useRef({ x: 0, y: 0 });
  const dispatch = useDispatch();
  return (
    <div
      id="window"
      draggable={!fullScreen}
      onClick={() => {}}
      onDoubleClick={() => {
        if (fixedSize) return;
        dispatch(setWindowFullScreen({ windowID, fullscreen: !fullScreen }));
      }}
      onDragStart={(e) => {
        if (subWindow) return;
        const x = e.clientX;
        const y = e.clientY;
        e.dataTransfer.setDragImage(new Image(), 0, 0);
        ref.current = { x: x - position.x, y: y - position.y };
        dispatch(hideContextMenu());
        dispatch(setDraggingWindow(true));
      }}
      onDragEnd={(e) => {
        if (subWindow) return;
        const x = e.clientX;
        const y = e.clientY;
        setPosition({ x: x - ref.current.x, y: y - ref.current.y });
        dispatch(
          setWindowPosition({
            x: x - ref.current.x,
            y: y - ref.current.y,
            windowID,
          })
        );
        dispatch(setDraggingWindow(false));
      }}
      onDrag={(e) => {
        if (subWindow) return;
        setPosition({
          x: e.clientX - ref.current.x,
          y: e.clientY - ref.current.y,
        });
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      style={{
        height: '40px',
        width: '100%',
        position: 'relative',
        cursor: '-webkit-grab',
      }}
    >
      <WindowBarBackground focused={focused} />
      <WindowTitle logo={logo} title={title} />
      <WindowBarButtons
        fixedSize={fixedSize}
        focused={focused}
        windowID={windowID}
        fullScreen={fullScreen}
        subWindow={subWindow}
      />
    </div>
  );
};

export default WindowBar;
