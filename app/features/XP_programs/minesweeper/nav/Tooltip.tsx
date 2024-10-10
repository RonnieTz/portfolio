import { Dispatch, SetStateAction, useState } from 'react';
import TooltipDivider from './TooltipDivider';
import Tick from './Tick';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  resizeWindow,
  closeWindow,
  openWindow,
  setWindowPosition,
  setSubWindow,
} from '@/app/redux/app/appSlice';
import { setMsMode, ms_reset } from '@/app/redux/minesweeper/minesweeperSlice';

type Props = {
  setIsHovered: Dispatch<SetStateAction<boolean>>;
  setMouseOutTimer: Dispatch<SetStateAction<NodeJS.Timeout | null>>;
  mouseOutTimer: NodeJS.Timeout | null;
};

const Tooltip = ({ setIsHovered, mouseOutTimer, setMouseOutTimer }: Props) => {
  const dispatch = useDispatch();
  const { windows } = useSelector((state: RootState) => state.app);

  const mineswweeper = useSelector((state: RootState) => state.minesweeper);

  const { mode, highScores } = mineswweeper;

  return (
    <div
      onMouseEnter={() => {
        if (mouseOutTimer) {
          clearTimeout(mouseOutTimer);
          console.log(mouseOutTimer);
        }
      }}
      onMouseLeave={() => {
        const timeout = setTimeout(() => {
          setIsHovered(false);
        }, 300);
        setMouseOutTimer(timeout);
      }}
      className="ms-tooltip-container"
    >
      <p
        onClick={() => {
          dispatch(ms_reset());
          setIsHovered(false);
        }}
        className="ms-tooltip-item"
      >
        New
      </p>
      <TooltipDivider />
      <p
        onClick={() => {
          if (mode === 'begginer') return;
          dispatch(setMsMode('begginer'));
          setIsHovered(false);
          dispatch(ms_reset());
          dispatch(
            resizeWindow({
              size: { width: 400, height: 400 * 1.3 },
              id: 'Minesweeper',
            })
          );
        }}
        className="ms-tooltip-item"
      >
        {mode === 'begginer' && <Tick />}
        Begginer
      </p>
      <p
        onClick={() => {
          if (mode === 'intermediate') return;
          dispatch(setMsMode('intermediate'));
          setIsHovered(false);
          dispatch(ms_reset());
          dispatch(
            resizeWindow({
              size: { width: 500, height: 500 * 1.3 },
              id: 'Minesweeper',
            })
          );
        }}
        className="ms-tooltip-item"
      >
        {mode === 'intermediate' && <Tick />}
        Intermediate
      </p>
      <p
        onClick={() => {
          if (mode === 'expert') return;
          dispatch(setMsMode('expert'));
          setIsHovered(false);
          dispatch(ms_reset());
          dispatch(
            resizeWindow({
              size: { width: 965, height: 965 * 0.67 },
              id: 'Minesweeper',
            })
          );
        }}
        className="ms-tooltip-item"
      >
        {mode === 'expert' && <Tick />}
        Expert
      </p>
      <TooltipDivider />
      <p
        onClick={(e) => {
          const x = e.clientX;
          const y = e.clientY;
          e.stopPropagation();
          setIsHovered(false);
          dispatch(
            setWindowPosition({
              x,
              y,
              windowID: 'ScoresID123',
            })
          );
          dispatch(openWindow({ windowID: 'ScoresID123' }));
          dispatch(
            setSubWindow({
              windowID: 'MinesweeperID123',
              subWindow: 'ScoresID123',
            })
          );
        }}
        className="ms-tooltip-item"
      >
        Best scores...
      </p>
      <TooltipDivider />
      <p
        onClick={() => {
          dispatch(closeWindow({ windowID: 'Minesweeper' }));
          setIsHovered(false);
        }}
        className="ms-tooltip-item"
      >
        Exit
      </p>
    </div>
  );
};
export default Tooltip;
