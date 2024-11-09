'use client';
import './styles.css';
import React, { useState, ReactNode, useEffect } from 'react';
import WindowBody from './WindowBody';
import WindowBar from './WindowBar';
import { useDispatch } from 'react-redux';
import { focusWindow, setFocus, setMinimize } from '@/app/redux/app/appSlice';

type WindowProps = {
  top: number;
  left: number;
  link: string;
  title: string;
  minimized: boolean;
  zIndex: number;
  fullScreen: boolean;
  windowID: string;
  focused: boolean;
  children: ReactNode;
  logo: string;
  fixedSize: boolean;
  size: { width: number; height: number };
  subWindow: string;
};

const Window = ({
  fullScreen,
  left,
  link,
  minimized,
  title,
  top,
  zIndex,
  windowID,
  focused,
  children,
  logo,
  fixedSize,
  size,
  subWindow,
}: WindowProps) => {
  const [position, setPosition] = useState({ x: left, y: top });
  const dispatch = useDispatch();

  const flick = () => {
    if (subWindow !== '') {
      const flickSubWindow = (time: number, focus: boolean) => {
        setTimeout(() => {
          if (time === 100) {
            dispatch(focusWindow({ windowID: subWindow, focus: true }));
          }
          dispatch(setFocus({ windowID: subWindow, focus }));
        }, time);
      };

      flickSubWindow(100, true);
      flickSubWindow(200, false);
      flickSubWindow(300, true);
      flickSubWindow(400, false);
      flickSubWindow(500, true);
      flickSubWindow(600, false);
      flickSubWindow(700, true);

      dispatch(setMinimize({ windowID: subWindow, minimize: false }));
      return;
    }
  };

  return (
    <div
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="window"
      onClickCapture={(e) => {
        if (!subWindow) {
          dispatch(focusWindow({ windowID, focus: true }));
          return;
        }
        e.stopPropagation();
        flick();
      }}
      onDoubleClickCapture={(e) => {
        if (!subWindow) return;
        e.stopPropagation();
        flick();
      }}
      onDragStartCapture={(e) => {
        if (!subWindow) return;
        e.stopPropagation();
        flick();
      }}
      style={{
        backgroundColor: 'whitesmoke',
        height: fullScreen ? '100%' : `${size.height}px`,
        width: fullScreen ? '100%' : `${size.width}px`,
        position: 'absolute',
        zIndex: zIndex,
        top: fullScreen ? 0 : position.y,
        left: fullScreen ? 0 : position.x,
        borderRadius: '5px 5px 3px 3px',
        overflow: 'hidden',
        display: minimized ? 'none' : 'initial',
        minHeight: `${size.height}px`,
        minWidth: `${size.width}px`,
        transition: '',
        resize: !fullScreen && !fixedSize ? 'both' : 'none',
      }}
    >
      <WindowBar
        fixedSize={fixedSize}
        fullScreen={fullScreen}
        position={position}
        setPosition={setPosition}
        windowID={windowID}
        focused={focused}
        title={title}
        logo={logo}
        subWindow={subWindow}
      />
      <WindowBody link={link}>{children}</WindowBody>
    </div>
  );
};

export default Window;
