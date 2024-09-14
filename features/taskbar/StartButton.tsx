import startButton from '@/public/start-button-normal.png';
import startButtonHover from '@/public/start-button-hover.png';
import startButtonOpen from '@/public/start-button-open.png';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { setStartHover, setStartOpen } from '@/redux/appSlice';
import StartTooltip from './StartTooltip';

const StartButton = () => {
  const { start } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setStartOpen(!start.open));
      }}
      onMouseEnter={() => {
        dispatch(setStartHover(true));
      }}
      onMouseLeave={() => {
        dispatch(setStartHover(false));
      }}
      className="start-button"
    >
      <img
        width={'100%'}
        height={'100%'}
        src={
          start.open
            ? startButtonOpen.src
            : start.hover
            ? startButtonHover.src
            : startButton.src
        }
        alt="start button"
      />
      <StartTooltip />
    </div>
  );
};
export default StartButton;
