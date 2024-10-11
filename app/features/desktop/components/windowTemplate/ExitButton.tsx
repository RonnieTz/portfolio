import icon from '@/public/Exit.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  closeWindow,
  focusWindow,
  setSubWindow,
} from '@/app/redux/app/appSlice';
import Image from 'next/image';

type Props = { id: string; focused: boolean; subWindow: string };

const ExitButton = ({ id, focused, subWindow }: Props) => {
  const { windows } = useSelector((state: RootState) => state.app);

  const parentWindowID = windows.find(
    (window) =>
      (window.type === 'program' || window.type === 'textFile') &&
      window.subWindow === id
  )?.windowID;

  const dispatch = useDispatch();
  return (
    <div
      onContextMenu={() => {}}
      onClick={() => {
        dispatch(closeWindow({ windowID: subWindow }));

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
