import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { setStartOpen, openWindow } from '@/app/redux/app/appSlice';
import logo from '@/public/quiz.png';
import { Typography } from '@mui/material';
import Image from 'next/image';

type Props = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const QuizMenuItem = ({ setOpenMenu }: Props) => {
  const { windows } = useSelector((state: RootState) => state.app);
  const window = windows.find((project) => project.title === 'Quiz Game')!;
  const dispatch = useDispatch();

  return (
    <div
      className="all-projects-menu-item"
      onClick={() => {
        setOpenMenu(false);
        dispatch(setStartOpen(false));
        setTimeout(() => {
          dispatch(
            openWindow({
              windowID: window.windowID,
            })
          );
        }, 200);
      }}
      style={{
        width: '100%',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '15px',
        gap: '10px',
        cursor: 'pointer',
        boxSizing: 'border-box',
      }}
    >
      <Image
        priority={true}
        style={{ height: '60%', width: 'auto' }}
        src={logo}
        alt="logo"
      />
      <Typography padding={0} fontWeight={400} fontSize={'0.9rem'}>
        Quiz Game
      </Typography>
    </div>
  );
};
export default QuizMenuItem;
