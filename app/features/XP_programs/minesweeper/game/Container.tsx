import GameBoardContainer from './gameBoard/GameBoardContainer';
import ScoreBoardContainer from './scoreBoard/ScoreBoardContainer';

const Container = () => {
  return (
    <div className="minesweeper-game-container">
      <ScoreBoardContainer />
      <GameBoardContainer />
    </div>
  );
};
export default Container;
