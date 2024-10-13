import forwardArrow from '@/public/arrow-forward.svg';
import arrow from '@/public/triangle-down.svg';
import VerticalDivider from './VerticalDivider';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { useState } from 'react';
import { navigateFolderForward } from '@/app/redux/app/appSlice';
import Image from 'next/image';
import { FolderWindow } from '@/app/redux/app/types';

type Props = {
  windowID: string;
};

const ForwardArrow = ({ windowID }: Props) => {
  const dispatch = useDispatch();
  const { windows } = useSelector((state: RootState) => state.app);
  const { history } = windows.find(
    (window) => window.windowID === windowID
  )! as FolderWindow;
  const { currentLocation, locations } = history;

  return (
    <div
      onClick={() => {
        if (currentLocation < locations.length - 1) {
          dispatch(navigateFolderForward({ windowID }));
        }
      }}
      className={`forward-button ${
        currentLocation < locations.length - 1 ? '' : 'button-disabled'
      }`}
      style={{ width: '55px' }}
    >
      <span className="back-arrow">
        <Image
          priority={true}
          style={{ width: '70%', height: '70%' }}
          src={forwardArrow}
          alt="forward arrow"
        />
      </span>
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
