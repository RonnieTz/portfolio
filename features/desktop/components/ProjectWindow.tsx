'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import ProjectWindowNavigation from './ProjectWindowNavigation';
import ProjectWindowDescription from './ProjectWindowDescription';
import ProjectWindowExternal from './ProjectWindowExternal';

const ProjectWindow = () => {
  const [selectedWindow, setSelectedWindow] = useState('description');
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {selectedWindow === 'description' && <ProjectWindowDescription />}
      <ProjectWindowNavigation
        selectedWindow={selectedWindow}
        setSelectedWindow={setSelectedWindow}
      />

      <ProjectWindowExternal
        link="https://codesandbox.io/p/github/RonnieTz/chess_game/main?import=true&embed=1"
        show={selectedWindow === 'codesandbox'}
      />
      <ProjectWindowExternal
        link="https://chess-game-flax.vercel.app/"
        show={selectedWindow === 'live'}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProjectWindow), {
  ssr: false,
});
