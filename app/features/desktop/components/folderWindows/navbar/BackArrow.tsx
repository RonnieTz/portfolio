import backArrow from '@/public/arrow-back.svg';
import arrow from '@/public/triangle-down.svg';
import VerticalDivider from './VerticalDivider';
import { useSelector, useDispatch } from 'react-redux';
import { navigateFolderBack } from '@/app/redux/app/appSlice';
import { RootState } from '@/app/redux/store';
import { useState } from 'react';
import Image from 'next/image';

const BackArrow = () => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  // const className =
  //   currentFolder > 0 && locationHistory.length > 1
  //     ? 'back-button'
  //     : 'back-button button-disabled';
  return (
    <div
      onClick={() => {
        // if (currentFolder > 0) {
        //   dispatch(navigateFolderBack());
        // }
      }}
      onMouseEnter={() => {
        // if (currentFolder > 0 && locationHistory.length > 1) setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={'forward-button button-disabled'}
    >
      <span className="back-arrow">
        <Image
          priority={true}
          style={{ width: '70%', height: '70%' }}
          src={backArrow}
          alt="back arrow"
        />
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
        <Image
          priority={true}
          style={{ height: '35%', width: '100%' }}
          src={arrow}
          alt="arrow down"
        />
      </span>
    </div>
  );
};
export default BackArrow;
