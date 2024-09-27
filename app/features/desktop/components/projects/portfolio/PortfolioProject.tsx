import React from 'react';
import ProjectWindow from '../projectWindows/ProjectWindow';
import PortfolioWindowDescription from './PortfolioWindowDescription';

type Props = {
  liveLink: string;
  codesandboxLink: string;
  gitHubLink: string;
};
const PortfolioProject = ({ liveLink, codesandboxLink, gitHubLink }: Props) => {
  return (
    <ProjectWindow
      codesandboxLink={codesandboxLink}
      liveLink={liveLink}
      gitHubLink={gitHubLink}
    >
      <PortfolioWindowDescription />
    </ProjectWindow>
  );
};

export default PortfolioProject;
