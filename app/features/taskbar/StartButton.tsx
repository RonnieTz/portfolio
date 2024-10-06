import startButton from '@/public/start-button-normal.png';
import startButtonHover from '@/public/start-button-hover.png';
import startButtonOpen from '@/public/start-button-open.png';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { setStartHover, setStartOpen } from '@/app/redux/app/appSlice';
import StartTooltip from './StartTooltip';
import Image from 'next/image';

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
      <Image
        priority={true}
        style={{ height: '100%', width: 'auto' }}
        src={
          start.open
            ? startButtonOpen
            : start.hover
            ? startButtonHover
            : startButton
        }
        alt="start button"
      />
      <StartTooltip />
    </div>
  );
};
export default StartButton;
