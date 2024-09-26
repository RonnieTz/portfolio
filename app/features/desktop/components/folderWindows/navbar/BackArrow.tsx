import backArrow from '@/public/arrow-back.svg';
import arrow from '@/public/triangle-down.svg';
import VerticalDivider from './VerticalDivider';
import { useSelector, useDispatch } from 'react-redux';
import { navigateFolderBack } from '@/app/redux/appSlice';
import { RootState } from '@/app/redux/store';
import { useState } from 'react';

const BackArrow = () => {
  const dispatch = useDispatch();
  const { folderHistory } = useSelector((state: RootState) => state.app);
  const [hover, setHover] = useState(false);
  const { currentFolder, history } = folderHistory;
  const className =
    currentFolder > 1 && history.length > 1
      ? 'back-button'
      : 'back-button button-disabled';
  return (
    <div
      onClick={() => {
        if (currentFolder > 0) {
          dispatch(navigateFolderBack());
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
        <img height={'70%'} src={backArrow.src} alt="back arrow" />
      </span>
      <span className="back-text">Back</span>
      {hover && (
        <span
          style={{
            height: '100%',
            position: 'absolute',
            left: '80%',
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
export default BackArrow;
