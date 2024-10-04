import Number from './Number';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { useEffect } from 'react';
import { setTimer } from '@/app/redux/minesweeperSlice';

const Timer = () => {
  const mineswweeper = useSelector((state: RootState) => state.minesweeper);
  const dispatch = useDispatch();
  const { timer, bombClicked, firstClick } = mineswweeper;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setTimer());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const digit1 = Math.floor(timer / 100);
  const digit2 = Math.floor(timer / 10) % 10;
  const digit3 = timer % 10;
  return (
    <div className="ms-score">
      <Number key={1} num={digit1} />
      <Number key={2} num={digit2} />
      <Number key={3} num={digit3} />
    </div>
  );
};
export default Timer;
