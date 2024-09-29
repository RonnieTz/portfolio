import maximize from '@/public/Maximize.png';
import restore from '@/public/Restore.png';
import Image from 'next/image';

import { useDispatch } from 'react-redux';
import { setWindowFullScreen } from '@/app/redux/appSlice';

type Props = {
  fullScreen: boolean;
  id: string;
  focused: boolean;
  fixedSize: boolean;
};

const MaximizeButton = ({ fullScreen, id, focused, fixedSize }: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        if (fixedSize) return;
        dispatch(setWindowFullScreen({ id, fullscreen: !fullScreen }));
      }}
      className={`window-button ${fixedSize ? 'button-disabled' : ''}`}
    >
      <Image
        priority={true}
        style={{
          filter: focused ? undefined : 'brightness(1.4)',
          height: '100%',
          width: 'auto',
        }}
        src={!fullScreen ? maximize : restore}
        alt="exit"
      />
    </div>
  );
};
export default MaximizeButton;
