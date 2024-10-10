import './styles.css';
import Window from '../windowTemplate/Window';
import type { ProjectWindow } from '@/app/redux/app/types';
import ChessProject from './chess/ChessProject';
import QuizProject from './quiz/QuizProject';
import PortfolioProject from './portfolio/PortfolioProject';

type Props = {
  codesandboxLink: string;
  fixedSize: boolean;
  focused: boolean;
  fullScreen: boolean;
  gitHubLink: string;
  liveLink: string;
  logo: string;
  minimized: boolean;
  size: { width: number; height: number };
  title: string;
  windowID: string;
  zIndex: number;
};

const Project = ({
  codesandboxLink,
  fixedSize,
  focused,
  fullScreen,
  gitHubLink,
  liveLink,
  logo,
  minimized,
  size,
  title,
  windowID,
  zIndex,
}: Props) => {
  return (
    <Window
      fixedSize={fixedSize}
      focused={focused}
      fullScreen={fullScreen}
      left={100 + Math.random() * 100}
      top={100 + Math.random() * 100}
      logo={logo}
      minimized={minimized}
      title={title}
      link={liveLink}
      windowID={windowID}
      key={windowID}
      size={size}
      subWindow={''}
      zIndex={zIndex}
    >
      {title === 'Chess Game' && (
        <ChessProject
          codesandboxLink={codesandboxLink}
          gitHubLink={gitHubLink}
          liveLink={liveLink}
        />
      )}
      {title === 'Quiz Game' && (
        <QuizProject
          codesandboxLink={codesandboxLink}
          gitHubLink={gitHubLink}
          liveLink={liveLink}
        />
      )}
      {title === 'Portfolio' && (
        <PortfolioProject
          codesandboxLink={codesandboxLink}
          gitHubLink={gitHubLink}
          liveLink={liveLink}
        />
      )}
    </Window>
  );
};
export default Project;
