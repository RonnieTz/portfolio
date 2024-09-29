import smile from '@/public/smile.png';
import surprise from '@/public/surprise.png';
import sad from '@/public/sad.png';
import happy from '@/public/happy.png';
import sunglasses from '@/public/sunglasses.png';
import { readData, writeData } from '../../jsonAPI';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { ms_reset } from '@/app/redux/appSlice';

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { mineswweeper } = useSelector((state: RootState) => state.app);
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
        dispatch(ms_reset());
        console.log(await writeData({ newData: 'newData' }));
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
