import logo from '@/public/Minesweeper.png';
import './styles.css';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { newWindow } from '@/app/redux/app/appSlice';
import Image from 'next/image';

const Minesweeper = () => {
  const dispatch = useDispatch();
  const minesweeper = useSelector((state: RootState) => state.minesweeper);
  const { mode } = minesweeper;
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
            size: {
              width:
                mode === 'begginer'
                  ? 400
                  : mode === 'intermediate'
                  ? 500
                  : mode === 'expert'
                  ? 965
                  : 400,
              height:
                mode === 'begginer'
                  ? 400 * 1.3
                  : mode === 'intermediate'
                  ? 500 * 1.3
                  : mode === 'expert'
                  ? 500 * 1.3
                  : 400 * 1.3,
            },
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
