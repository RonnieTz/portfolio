import backArrow from '@/public/arrow-back.svg';
import arrow from '@/public/triangle-down.svg';
import VerticalDivider from './VerticalDivider';
import { useSelector, useDispatch } from 'react-redux';
import { navigateFolderBack } from '@/app/redux/app/appSlice';
import { RootState } from '@/app/redux/store';
import { useState } from 'react';
import Image from 'next/image';
import { FolderWindow } from '@/app/redux/app/types';

type Props = {
  windowID: string;
};

const BackArrow = ({ windowID }: Props) => {
  const dispatch = useDispatch();
  const { windows } = useSelector((state: RootState) => state.app);
  const { history } = windows.find(
    (window) => window.windowID === windowID
  )! as FolderWindow;

  const { currentLocation, locations } = history;
  console.log(locations.length);

  return (
    <div
      onClick={() => {
        dispatch(navigateFolderBack({ windowID }));
      }}
      className={`forward-button ${
        locations.length === 1 || currentLocation === 0 ? 'button-disabled' : ''
      }`}
    >
      <span className="back-arrow">
        <Image
          priority={true}
          style={{ width: '70%', height: '70%' }}
          src={backArrow}
          alt="back arrow"
        />
      </span>
      <VerticalDivider />
      <span className="back-text">Back</span>
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
