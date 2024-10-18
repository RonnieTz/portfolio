import { useDispatch } from 'react-redux';
import { setTurnOff } from '@/app/redux/app/appSlice';
import window from '@/public/turnoff.png';
import Image from 'next/image';

const TurnOffWindow = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        // dispatch(setTurnOff(false));
      }}
      className="turn-off-window"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="turn-off-window-container"
      >
        <Image
          src={window}
          style={{ width: '100%', height: '100%' }}
          alt="turn off window"
        />
      </div>
    </div>
  );
};
export default TurnOffWindow;
