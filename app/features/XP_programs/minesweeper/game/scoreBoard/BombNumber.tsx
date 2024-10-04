import Number from './Number';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const BombNumber = () => {
  const mineswweeper = useSelector((state: RootState) => state.minesweeper);
  const { totalBombs } = mineswweeper;
  const totalFlags = mineswweeper.board.reduce(
    (acc, row) =>
      acc + row.reduce((acc, cell) => (cell.flag ? acc + 1 : acc), 0),
    0
  );

  const num = totalBombs - totalFlags;
  const digit1 = Math.floor(num / 100);
  const digit2 = Math.floor(num / 10) % 10;
  const digit3 = num % 10;

  return (
    <div className="ms-score">
      <Number key={2} num={digit1} />
      <Number key={3} num={digit2} />
      <Number key={1} num={digit3} />
    </div>
  );
};
export default BombNumber;
