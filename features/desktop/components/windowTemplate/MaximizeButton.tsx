import icon from '@/public/Maximize.png';
import { useDispatch } from 'react-redux';
import { setWindowFullScreen } from '@/redux/appSlice';

type Props = { fullScreen: boolean; id: string; focused: boolean };

const MaximizeButton = ({ fullScreen, id, focused }: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setWindowFullScreen({ id, fullscreen: !fullScreen }));
      }}
      className="window-button"
    >
      <img
        style={{ filter: focused ? undefined : 'brightness(1.4)' }}
        src={icon.src}
        height={'100%'}
        alt="exit"
      />
    </div>
  );
};
export default MaximizeButton;
