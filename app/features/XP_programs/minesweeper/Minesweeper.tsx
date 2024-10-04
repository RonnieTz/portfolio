import Container from './game/Container';
import Navbar from './nav/Navbar';
import Scores from './nav/Scores';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/redux/store';
import './styles.css';
import AddNewScore from './game/scoreBoard/AddNewScore';
import { fetchHighScores } from '@/app/redux/reducers/fetchHighScores';
import { useEffect } from 'react';

const Minesweeper = () => {
  const dispatch = useDispatch<AppDispatch>();
  const minesweeper = useSelector((state: RootState) => state.minesweeper);
  const { highScores, gameover } = minesweeper;
  useEffect(() => {
    dispatch(fetchHighScores());
  }, [dispatch]);
  return (
    <div className="minesweeper-container">
      <Navbar />
      <Container />
      {highScores.show && <Scores />}
      {gameover && <AddNewScore />}
    </div>
  );
};
export default Minesweeper;
