import './styles.css';
import img from '@/public/Power.png';
import { useDispatch } from 'react-redux';
import { setTurnOff } from '@/app/redux/appSlice';
import Image from 'next/image';

const TurnOff = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setTurnOff(true));
      }}
      className="turn-off-button"
    >
      <Image
        priority={true}
        style={{ height: '100%', width: 'auto' }}
        src={img}
        alt="turn-off"
      />
      <span>Turn off computer</span>
    </div>
  );
};
export default TurnOff;
