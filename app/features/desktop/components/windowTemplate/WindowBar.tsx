import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  setWindowPosition,
  setWindowFullScreen,
  // focusWindow,
} from '@/app/redux/appSlice';
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
  id: string;
  focused: boolean;
  title: string;
  logo: string;
};

const WindowBar = ({
  fullScreen,
  position,
  setPosition,
  id,
  focused,
  title,
  logo,
}: WindowBarProps) => {
  const ref = useRef({ x: 0, y: 0 });
  const dispatch = useDispatch();
  return (
    <div
      id="window"
      draggable={!fullScreen}
      onClick={() => {}}
      onDoubleClick={() => {
        dispatch(setWindowFullScreen({ id, fullscreen: !fullScreen }));
      }}
      onDragStart={(e) => {
        const x = e.clientX;
        const y = e.clientY;
        e.dataTransfer.setDragImage(new Image(), 0, 0);
        ref.current = { x: x - position.x, y: y - position.y };
        // dispatch(focusWindow({ id, focus: true }));
      }}
      onDragEnd={(e) => {
        const x = e.clientX;
        const y = e.clientY;
        setPosition({ x: x - ref.current.x, y: y - ref.current.y });
        dispatch(
          setWindowPosition({
            x: x - ref.current.x,
            y: y - ref.current.y,
            id,
          })
        );
      }}
      onDrag={(e) => {
        setPosition({
          x: e.clientX - ref.current.x,
          y: e.clientY - ref.current.y,
        });
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
      <WindowBarButtons focused={focused} id={id} fullScreen={fullScreen} />
    </div>
  );
};

export default WindowBar;
