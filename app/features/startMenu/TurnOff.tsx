import './styles.css';
import img from '@/public/Power.png';
import { useDispatch } from 'react-redux';
import { setTurnOff } from '@/app/redux/appSlice';

const TurnOff = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setTurnOff(true));
      }}
      className="turn-off-button"
    >
      <img height={'100%'} src={img.src} alt="turn-off" />
      <span>Turn off computer</span>
    </div>
  );
};
export default TurnOff;
