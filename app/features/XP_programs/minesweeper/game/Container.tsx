import { useDispatch, useSelector } from 'react-redux';
import GameBoardContainer from './gameBoard/GameBoardContainer';
import ScoreBoardContainer from './scoreBoard/ScoreBoardContainer';
import { useEffect } from 'react';
import { ms_assignBomb } from '@/app/redux/appSlice';
import { RootState } from '@/app/redux/store';

const Container = () => {
  const { mineswweeper } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(ms_assignBomb({ i: 0, j: 0 }));
  // }, []);
  return (
    <div className="minesweeper-game-container">
      <ScoreBoardContainer />
      <GameBoardContainer />
    </div>
  );
};
export default Container;
