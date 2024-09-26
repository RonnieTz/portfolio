import React from 'react';
import ProjectWindow from '../projectWindows/ProjectWindow';
import QuizWindowDescription from './QuizWindowDescription';

type Props = {
  liveLink: string;
  codesandboxLink: string;
  gitHubLink: string;
};
const QuizProject = ({ liveLink, codesandboxLink, gitHubLink }: Props) => {
  return (
    <ProjectWindow
      codesandboxLink={codesandboxLink}
      liveLink={liveLink}
      children={<QuizWindowDescription />}
      gitHubLink={gitHubLink}
    />
  );
};

export default QuizProject;
