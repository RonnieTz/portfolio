import React from 'react';
import ProjectWindow from '../projectWindows/ProjectWindow';
import ChessWindowDescription from './ChessWindowDescription';

type Props = {
  liveLink: string;
  codesandboxLink: string;
  gitHubLink: string;
};
const ChessProject = ({ liveLink, codesandboxLink, gitHubLink }: Props) => {
  return (
    <ProjectWindow
      codesandboxLink={codesandboxLink}
      liveLink={liveLink}
      gitHubLink={gitHubLink}
      windowID="chess"
      title="Chess Game"
    >
      <ChessWindowDescription />
    </ProjectWindow>
  );
};

export default ChessProject;
