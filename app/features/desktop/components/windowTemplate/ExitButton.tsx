import icon from '@/public/Exit.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  closeWindow,
  closeSubWindow,
  focusWindow,
} from '@/app/redux/app/appSlice';
import Image from 'next/image';

type Props = { id: string; focused: boolean; subWindow: string };

const ExitButton = ({ id, focused, subWindow }: Props) => {
  const { windows } = useSelector((state: RootState) => state.app);
  const window = windows.find((window) => window.subWindow === subWindow);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(closeSubWindow({ subWindowName: id }));
        dispatch(closeWindow({ id }));
        if (window) {
          dispatch(focusWindow({ id: window.id, focus: true }));
        }
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
