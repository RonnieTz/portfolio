import forwardArrow from '@/public/arrow-forward.svg';
import arrow from '@/public/triangle-down.svg';
import VerticalDivider from './VerticalDivider';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { useState } from 'react';
import { navigateFolderForward } from '@/app/redux/app/appSlice';
import Image from 'next/image';

const ForwardArrow = () => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  // const className =
  //   currentFolder < locationHistory.length - 1
  //     ? 'forward-button'
  //     : 'forward-button button-disabled';
  return (
    <div
      onClick={() => {
        // if (currentFolder < locationHistory.length - 1) {
        //   dispatch(navigateFolderForward());
        // }
      }}
      onMouseEnter={() => {
        // if (currentFolder < locationHistory.length - 1) setHover(true);
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
          src={forwardArrow}
          alt="forward arrow"
        />
      </span>
      {/* {className.includes('hover') && (
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
      )} */}
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
export default ForwardArrow;
