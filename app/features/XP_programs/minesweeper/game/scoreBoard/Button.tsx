import smile from '@/public/smile.png';
import surprise from '@/public/surprise.png';
import sad from '@/public/sad.png';
import happy from '@/public/happy.png';
import sunglasses from '@/public/sunglasses.png';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { ms_reset } from '@/app/redux/minesweeper/minesweeperSlice';

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);
  const mineswweeper = useSelector((state: RootState) => state.minesweeper);
  const { windows } = useSelector((state: RootState) => state.app);
  const window = windows.find((window) => window.title === 'Minesweeper');
  const { bombClicked } = mineswweeper;
  const dispatch = useDispatch();
  const emoji = () => {
    if (isClicked) return surprise;
    if (bombClicked.clicked) return sad;
    if (mineswweeper.successClick) return happy;
    if (mineswweeper.gameover) return sunglasses;
    return smile;
  };

  return (
    <div
      onMouseDown={() => {
        setIsClicked(true);
      }}
      onMouseUp={async () => {
        setIsClicked(false);
        if (window?.subWindow) return;
        dispatch(ms_reset());
      }}
      className="ms-button"
    >
      <Image
        style={{ height: '75%', width: 'auto' }}
        src={emoji()}
        alt="smile"
      />
    </div>
  );
};
export default Button;
