import icon from '@/public/Minimize.png';
import { setMinimize, setFocus } from '@/app/redux/app/appSlice';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { useRef } from 'react';

type Props = { id: string; focused: boolean };

const MinimizeButton = ({ id, focused }: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setFocus({ id, focus: false }));
        dispatch(setMinimize({ id, minimize: true }));
      }}
      className="window-button"
    >
      <Image
        priority={true}
        style={{
          filter: focused ? undefined : 'brightness(1.4)',
          height: '100%',
          width: 'auto',
        }}
        src={icon}
        alt="exit"
      />
    </div>
  );
};
export default MinimizeButton;
