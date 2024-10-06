import Image from 'next/image';
import flag from '@/public/flag.png';
import bomb from '@/public/bomb.png';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  ms_selectCell,
  ms_flagCell,
  ms_assignBomb,
  clickBomb,
  setSuccessClick,
} from '@/app/redux/minesweeper/minesweeperSlice';
import dynamic from 'next/dynamic';

const GameBoardContainer = () => {
  const mineswweeper = useSelector((state: RootState) => state.minesweeper);
  const { windows } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const window = windows.find((window) => window.title === 'Minesweeper');

  return (
    <div
      style={{ gridTemplateRows: `repeat(${mineswweeper.board.length},1fr)` }}
      className="minesweeper-game-board-container"
    >
      {mineswweeper.board.map((row, i) => (
        <div
          style={{
            gridTemplateColumns: `repeat(${mineswweeper.board[0].length},1fr)`,
          }}
          key={i}
          className="minesweeper-board-row"
        >
          {row.map((cell, j) => (
            <div
              style={{
                backgroundColor:
                  mineswweeper.bombClicked.x === i &&
                  mineswweeper.bombClicked.y === j &&
                  mineswweeper.bombClicked.clicked
                    ? 'rgb(255, 0, 0)'
                    : undefined,
              }}
              onClick={() => {
                if (
                  cell.flag ||
                  cell.clicked ||
                  mineswweeper.bombClicked.clicked ||
                  mineswweeper.gameover ||
                  window?.subWindow
                ) {
                  return;
                }

                if (mineswweeper.firstClick) {
                  dispatch(ms_assignBomb({ i, j }));
                }

                dispatch(ms_selectCell({ i, j }));
                if (cell.value === 'bomb') {
                  dispatch(clickBomb({ x: i, y: j }));
                }
                if (cell.value === 0 && !cell.flag && !cell.clicked) {
                  dispatch(setSuccessClick(true));
                  setTimeout(() => {
                    dispatch(setSuccessClick(false));
                  }, 1000);
                }
              }}
              key={j}
              onContextMenu={(e) => {
                if (
                  cell.clicked ||
                  mineswweeper.bombClicked.clicked ||
                  mineswweeper.gameover ||
                  window?.subWindow
                )
                  return;
                e.stopPropagation();
                e.preventDefault();
                dispatch(ms_flagCell({ i, j }));
              }}
              className={`minesweeper-game-board-box ${
                cell.clicked ? 'minesweeper-game-board-box-selected' : ''
              }`}
            >
              {cell.clicked && cell.value === 'bomb' && (
                <Image
                  src={bomb}
                  alt="flag"
                  style={{
                    width: '80%',
                    height: '80%',
                    boxSizing: 'border-box',
                    position: 'absolute',
                  }}
                />
              )}
              {cell.clicked && cell.value !== 'bomb' && cell.value > 0 && (
                <span
                  style={{
                    color:
                      cell.value === 1
                        ? 'rgb(0, 0, 248)'
                        : cell.value === 2
                        ? 'rgb(0, 128, 0)'
                        : cell.value === 3
                        ? 'rgb(255, 0, 0)'
                        : cell.value === 4
                        ? 'rgb(0, 0, 128)'
                        : cell.value === 5
                        ? 'rgb(128, 0, 0)'
                        : cell.value
                        ? 'rgb(0, 128,128)'
                        : 'rgb(0, 0, 128)',
                    position: 'absolute',
                  }}
                >
                  {cell.value}
                </span>
              )}
              {cell.flag && (
                <Image
                  src={flag}
                  alt="flag"
                  style={{
                    width: '80%',
                    height: '80%',
                    boxSizing: 'border-box',
                    position: 'absolute',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default dynamic(() => Promise.resolve(GameBoardContainer), {
  ssr: false,
});
