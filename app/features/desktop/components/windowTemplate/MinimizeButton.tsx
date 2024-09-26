import icon from '@/public/Minimize.png';
import { setMinimize, setFocus } from '@/app/redux/appSlice';
import { useDispatch } from 'react-redux';

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
      <img
        style={{ filter: focused ? undefined : 'brightness(1.4)' }}
        src={icon.src}
        alt="exit"
      />
    </div>
  );
};
export default MinimizeButton;
