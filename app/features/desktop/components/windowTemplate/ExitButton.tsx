import icon from '@/public/Exit.png';
import { useDispatch } from 'react-redux';
import { closeWindow } from '@/app/redux/appSlice';

type Props = { id: string; focused: boolean };

const ExitButton = ({ id, focused }: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(closeWindow({ id }));
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
export default ExitButton;
