import React from 'react';
import ProjectWindow from '../projectWindows/ProjectWindow';
import PortfolioWindowDescription from './PortfolioWindowDescription';

type Props = {
  liveLink: string;
  codesandboxLink: string;
  gitHubLink: string;
  windowID: string;
};
const PortfolioProject = ({
  liveLink,
  codesandboxLink,
  gitHubLink,
  windowID,
}: Props) => {
  return (
    <ProjectWindow
      codesandboxLink={codesandboxLink}
      liveLink={liveLink}
      gitHubLink={gitHubLink}
      windowID={windowID}
      title="Portfolio"
    >
      <PortfolioWindowDescription />
    </ProjectWindow>
  );
};

export default PortfolioProject;
