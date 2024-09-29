'use client';
import './styles.css';
import React, { useState, ReactNode, useRef } from 'react';
import WindowBody from './WindowBody';
import WindowBar from './WindowBar';
import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import { focusWindow } from '@/app/redux/appSlice';

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
}: WindowProps) => {
  const [position, setPosition] = useState({ x: left, y: top });
  const windowRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  return (
    <CSSTransition in={!minimized} timeout={200} classNames={'window'}>
      <div
        className="window"
        ref={windowRef}
        onClick={() => {
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
        />
        <WindowBody link={link}>{children}</WindowBody>
      </div>
    </CSSTransition>
  );
};

export default Window;
