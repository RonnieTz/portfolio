'use client';
import './styles.css';
import React, { useState, ReactNode, useRef } from 'react';
import WindowBody from './WindowBody';
import WindowBar from './WindowBar';
import { useDispatch } from 'react-redux';
import { focusWindow, setMinimize } from '@/app/redux/app/appSlice';

type WindowProps = {
  top: number;
  left: number;
  link: string;
  title: string;
  minimized: boolean;
  zIndex: number;
  fullScreen: boolean;
  id: string;
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
  id,
  focused,
  children,
  logo,
  fixedSize,
  size,
  subWindow,
}: WindowProps) => {
  const [position, setPosition] = useState({ x: left, y: top });
  const windowRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  return (
    <div
      className="window"
      ref={windowRef}
      onClick={(e) => {
        const x = e.clientX;
        const y = e.clientY;

        if (subWindow) {
          dispatch(focusWindow({ id: subWindow, focus: true }));
          dispatch(setMinimize({ id: subWindow, minimize: false }));
          return;
        }

        dispatch(focusWindow({ id, focus: true }));
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
        id={id}
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
