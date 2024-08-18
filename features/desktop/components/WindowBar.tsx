import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setWindowPosition, focusWindow } from '@/redux/appSlice';
import WindowBarBackground from './WindowBarBackground';
import WindowBarButtons from './WindowBarButtons';

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
};

const WindowBar = ({
  fullScreen,
  position,
  setPosition,
  id,
  focused,
}: WindowBarProps) => {
  const ref = useRef({ x: 0, y: 0 });
  const dispatch = useDispatch();
  return (
    <div
      id="window"
      draggable={!fullScreen}
      onClick={() => {
        dispatch(focusWindow({ id }));
      }}
      onDragStart={(e) => {
        const x = e.clientX;
        const y = e.clientY;
        e.dataTransfer.setDragImage(new Image(), 0, 0);
        ref.current = { x: x - position.x, y: y - position.y };
        dispatch(focusWindow({ id }));
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
      <WindowBarButtons id={id} fullScreen={fullScreen} />
    </div>
  );
};

export default WindowBar;
