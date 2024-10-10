import icon from '@/public/Exit.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  closeWindow,
  focusWindow,
  setSubWindow,
} from '@/app/redux/app/appSlice';
import Image from 'next/image';

import type { ProgramWindow } from '@/app/redux/app/types';

type Props = { id: string; focused: boolean; subWindow: string };

const ExitButton = ({ id, focused }: Props) => {
  const { windows } = useSelector((state: RootState) => state.app);
  const currentWindow = windows.find(
    (window) => window.windowID === id
  )! as ProgramWindow;
  const subWindow = currentWindow.windowID;
  const parentWindowID = windows.find(
    (window) => window.type === 'program' && window.subWindow === subWindow
  )?.windowID;

  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        setTimeout(() => {
          dispatch(closeWindow({ windowID: id }));
          dispatch(setSubWindow({ windowID: parentWindowID!, subWindow: '' }));
          dispatch(focusWindow({ windowID: parentWindowID!, focus: true }));
        }, 200);
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
export default ExitButton;
