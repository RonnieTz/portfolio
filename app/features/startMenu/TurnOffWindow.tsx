import { useDispatch } from 'react-redux';
import { setTurnOff } from '@/app/redux/app/appSlice';

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
      ></div>
    </div>
  );
};
export default TurnOffWindow;
