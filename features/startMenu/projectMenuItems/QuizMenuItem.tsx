import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setStartOpen, newWindow } from '@/redux/appSlice';
import logo from '@/public/quiz.svg';
import { Typography } from '@mui/material';

type Props = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const QuizMenuItem = ({ setOpenMenu }: Props) => {
  const { projects } = useSelector((state: RootState) => state.app);
  const project = projects.find((project) => project.name === 'Quiz Game');
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
              title: 'Quiz Game',
              liveLink: project?.liveLink!,
              gitHubLink: project?.gitHubLink!,
              id: String(Math.floor(Math.random() * 1000)),
              logo: logo.src,
              codesadnboxLink: project?.codesandboxLink!,
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
      <img height={'60%'} src={logo.src} alt="logo" />
      <Typography padding={0} fontWeight={400} fontSize={'0.9rem'}>
        Quiz Game
      </Typography>
    </div>
  );
};
export default QuizMenuItem;

{
  /* <iframe
  src="https://codesandbox.io/p/github/RonnieTz/quiz/main?import=true&embed=1&file=%2Fapi%2Findex.js&showConsole=true"
  style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
  title="RonnieTz/quiz/main"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>; */
}
