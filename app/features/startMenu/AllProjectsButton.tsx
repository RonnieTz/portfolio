import play from '@/public/play.png';
import { Typography } from '@mui/material';
import { time } from 'console';
import { useRef } from 'react';

type Props = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setTimeoutID: React.Dispatch<React.SetStateAction<NodeJS.Timeout | null>>;
  timeoutID: NodeJS.Timeout | null;
};

const AllProjectsButton = ({ setOpenMenu, setTimeoutID, timeoutID }: Props) => {
  const timestamp = useRef<number>(0);
  const timeIn = useRef<NodeJS.Timeout | null>(null);
  return (
    <div
      onMouseOver={() => {
        if (timeoutID) {
          clearTimeout(timeoutID);
        }
      }}
      onMouseEnter={(e) => {
        e.stopPropagation();
        timestamp.current = Date.now();
        if (timeoutID) {
          clearTimeout(timeoutID);
        }
        timeIn.current = setTimeout(() => {
          setOpenMenu(true);
        }, 200);
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        const timeout = setTimeout(() => {
          setOpenMenu(false);
        }, 600);

        if (Date.now() - timestamp.current < 500) {
          clearTimeout(timeIn.current!);
        }

        setTimeoutID(timeout);
      }}
      className="all-projects-button"
    >
      <Typography
        sx={{
          textShadow: '0 0 2px rgb(152, 152, 152)',
        }}
        fontWeight={600}
      >
        All Projects
      </Typography>
      <img height={'90%'} src={play.src} alt="logo" />
    </div>
  );
};

export default AllProjectsButton;
