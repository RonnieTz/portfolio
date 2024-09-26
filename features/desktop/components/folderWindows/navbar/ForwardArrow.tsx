import forwardArrow from '@/public/arrow-forward.svg';
import arrow from '@/public/triangle-down.svg';
import VerticalDivider from './VerticalDivider';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { useState } from 'react';
import { navigateFolderForward } from '@/redux/appSlice';

const ForwardArrow = () => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const { folderHistory } = useSelector((state: RootState) => state.app);
  const { currentFolder, history } = folderHistory;
  const className =
    currentFolder < history.length - 1
      ? 'forward-button'
      : 'forward-button button-disabled';
  return (
    <div
      onClick={() => {
        if (currentFolder < history.length - 1) {
          dispatch(navigateFolderForward());
        }
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={`${className} ${hover ? 'hover' : ''}`}
    >
      <span className="back-arrow">
        <img height={'70%'} src={forwardArrow.src} alt="forward arrow" />
      </span>
      {className.includes('hover') && (
        <span
          style={{
            height: '100%',
            position: 'absolute',
            left: '68%',
            top: '5%',
          }}
        >
          <VerticalDivider />
        </span>
      )}
      <span className="arrow-down">
        <img height={'35%'} src={arrow.src} alt="arrow down" />
      </span>
    </div>
  );
};
export default ForwardArrow;
