import icon from '@/public/Exit.png';
import { useDispatch } from 'react-redux';
import { closeWindow } from '@/app/redux/appSlice';
import Image from 'next/image';

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
      <Image
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
