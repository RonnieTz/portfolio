'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ProjectWindowNavigation from './ProjectWindowNavigation';
import ProjectWindowExternal from './ProjectWindowExternal';

type Props = {
  liveLink: string;
  codesandboxLink: string;
  gitHubLink: string;
  children: React.ReactNode;
};

const ProjectWindow = ({
  codesandboxLink,
  liveLink,
  children,
  gitHubLink,
}: Props) => {
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
      {selectedWindow === 'description' && children}
      <ProjectWindowNavigation
        selectedWindow={selectedWindow}
        setSelectedWindow={setSelectedWindow}
        link={gitHubLink}
      />

      <ProjectWindowExternal
        link={codesandboxLink}
        show={selectedWindow === 'codesandbox'}
      />
      <ProjectWindowExternal link={liveLink} show={selectedWindow === 'live'} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProjectWindow), {
  ssr: false,
});
