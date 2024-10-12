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
      gitHubLink={gitHubLink}
      windowID="quiz"
      title="Quiz Game"
    >
      <QuizWindowDescription />
    </ProjectWindow>
  );
};

export default QuizProject;
