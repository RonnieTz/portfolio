import { Dispatch, SetStateAction, useState } from 'react';
import TooltipDivider from './TooltipDivider';
import Tick from './Tick';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  setMsMode,
  ms_reset,
  resizeWindow,
  closeWindow,
} from '@/app/redux/appSlice';

type Props = {
  setIsHovered: Dispatch<SetStateAction<boolean>>;
  setMouseOutTimer: Dispatch<SetStateAction<NodeJS.Timeout | null>>;
  mouseOutTimer: NodeJS.Timeout | null;
};

const Tooltip = ({ setIsHovered, mouseOutTimer, setMouseOutTimer }: Props) => {
  const [selected, setSelected] = useState<
    'begginer' | 'intermediate' | 'expert'
  >('begginer');
  const dispatch = useDispatch();
  const { mineswweeper, windows } = useSelector(
    (state: RootState) => state.app
  );
  const { mode } = mineswweeper;
  console.log(windows);

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
          dispatch(setMsMode('begginer'));
          setIsHovered(false);
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
          dispatch(setMsMode('intermediate'));
          setIsHovered(false);
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
          dispatch(setMsMode('expert'));
          setIsHovered(false);
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
      <p className="ms-tooltip-item">Best scores...</p>
      <TooltipDivider />
      <p
        onClick={() => {
          dispatch(closeWindow({ id: 'Minesweeper' }));
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
