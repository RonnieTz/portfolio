import Container from './game/Container';
import Navbar from './nav/Navbar';
import Scores from './nav/Scores';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/redux/store';
import './styles.css';
import AddNewScore from './game/scoreBoard/AddNewScore';
import { fetchHighScores } from '@/app/redux/minesweeper/fetchHighScores';
import { useEffect } from 'react';
import Window from '../../desktop/components/windowTemplate/Window';

type Props = {
  windowID: string;
  title: string;
  logo: any;
  size: { width: number; height: number };
  fixedSize: boolean;
  fullScreen: boolean;
  minimized: boolean;
  focused: boolean;
  zIndex: number;
  position: { y: number; x: number };
  selected: boolean;
  open: boolean;
  subWindow: string;
};

const Minesweeper = ({
  fixedSize,
  focused,
  fullScreen,
  logo,
  minimized,
  size,
  title,
  windowID,
  zIndex,
  subWindow,
}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const minesweeper = useSelector((state: RootState) => state.minesweeper);

  const { highScores, gameover, mode } = minesweeper;
  useEffect(() => {
    dispatch(fetchHighScores());
  }, [dispatch]);

  return (
    <Window
      fixedSize={fixedSize}
      focused={focused}
      fullScreen={fullScreen}
      logo={logo}
      minimized={minimized}
      size={{
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
      }}
      title={title}
      windowID={windowID}
      zIndex={zIndex}
      left={window.innerWidth / 2 - size.width / 2}
      top={window.innerHeight / 2 - size.height / 2}
      link=""
      subWindow={subWindow}
    >
      <Navbar />
      <Container />
      {highScores.show && <Scores />}
      {gameover && <AddNewScore />}
    </Window>
  );
};
export default Minesweeper;
