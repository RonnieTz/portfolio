import { useDispatch } from 'react-redux';
import { setTurnOff, setStartOpen } from '@/app/redux/app/appSlice';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';

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
        <Top />
        <div className="divider-one"></div>
        <Middle />
        <div className="divider-two"></div>
        <Bottom />
      </div>
    </div>
  );
};
export default TurnOffWindow;
