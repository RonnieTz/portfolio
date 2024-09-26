import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { setStartOpen, newWindow } from '@/app/redux/appSlice';
import chess from '@/public/chess.svg';
import { Typography } from '@mui/material';

type Props = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChessMenuItem = ({ setOpenMenu }: Props) => {
  const { projects } = useSelector((state: RootState) => state.app);
  const project = projects.find((project) => project.name === 'Chess Game');
  const dispatch = useDispatch();
  return (
    <div
      className="all-projects-menu-item"
      onClick={() => {
        setOpenMenu(false);
        dispatch(setStartOpen(false));
        setTimeout(() => {
          dispatch(
            newWindow({
              title: 'Chess Game',
              liveLink: project?.liveLink!,
              gitHubLink: project?.gitHubLink!,
              id: String(Math.floor(Math.random() * 1000)),
              logo: chess.src,
              codesadnboxLink: project?.codesandboxLink!,
              ratio: undefined,
              type: 'project',
              items: [],
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
      <img height={'60%'} src={chess.src} alt="chess logo" />
      <Typography padding={0} fontWeight={400} fontSize={'0.9rem'}>
        Chess Game
      </Typography>
    </div>
  );
};
export default ChessMenuItem;
