import BombNumber from './BombNumber';
import Button from './Button';
import Timer from './Timer';

const ScoreBoardContainer = () => {
  return (
    <div className="minesweeper-board-container">
      <BombNumber />
      <Button />
      <Timer />
    </div>
  );
};
export default ScoreBoardContainer;
