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
  windowID: string;
  title: string;
};

const ProjectWindow = ({
  codesandboxLink,
  liveLink,
  children,
  gitHubLink,
  windowID,
  title,
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
        windowID={windowID}
        selectedWindow={selectedWindow}
        setSelectedWindow={setSelectedWindow}
        link={gitHubLink}
        title={title}
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
