'use client';
import './styles.css';
import React from 'react';
import TimeBox from './TimeBox';
import TaskArea from './TaskArea';
import Background from './Background';
import StartButton from './StartButton';

const Taskbar = () => {
  return (
    <div className="taskbar">
      <TimeBox />
      <TaskArea />
      <Background />
      <StartButton />
    </div>
  );
};

export default Taskbar;
