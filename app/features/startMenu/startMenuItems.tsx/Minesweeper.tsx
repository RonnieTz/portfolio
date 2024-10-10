import logo from '@/public/Minesweeper.png';
import './styles.css';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { openWindow, setStartOpen } from '@/app/redux/app/appSlice';
import Image from 'next/image';

const Minesweeper = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state: RootState) => state.minesweeper);
  return (
    <div
      onClick={() => {
        dispatch(
          openWindow({
            windowID: 'MinesweeperID123',
          })
        );
        dispatch(setStartOpen(false));
      }}
      className="menu-item-link"
    >
      <Image
        priority={true}
        style={{ height: '60%', width: 'auto' }}
        src={logo}
        alt="profile"
      />
      <Typography
        padding={0}
        fontWeight={500}
        fontSize={'0.9rem'}
        fontFamily={'winXP'}
        letterSpacing={'0.5px'}
      >
        Minesweeper
      </Typography>
    </div>
  );
};
export default Minesweeper;
