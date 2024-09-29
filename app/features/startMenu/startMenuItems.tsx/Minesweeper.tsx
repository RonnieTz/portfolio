import logo from '@/public/Minesweeper.png';
import './styles.css';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { newWindow } from '@/app/redux/appSlice';
import Image from 'next/image';

const Minesweeper = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(
          newWindow({
            title: 'Minesweeper',
            id: 'Minesweeper',
            logo: logo as any,
            ratio: undefined,
            type: 'program',
            items: [],
            fixedSize: true,
            size: { width: 400, height: 400 * 1.3 },
          })
        );
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
