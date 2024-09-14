import Window from './components/windowTemplate/Window';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { setStartOpen, unSelectAllShortcuts } from '@/redux/appSlice';
import ChessProject from './components/projects/chess/ChessProject';
import QuizProject from './components/projects/quiz/QuizProject';
import Profile from './components/profile/Profile';
import Shortcut from './components/shortcuts/Shortcut';
// import FolderWindow from './components/folderWindows/FolderWindow';

const DesktopMainArea = () => {
  const dispatch = useDispatch();
  const { windows, desktopShortcuts } = useSelector(
    (state: RootState) => state.app
  );

  return (
    <div
      onClick={() => {
        dispatch(setStartOpen(false));
        dispatch(unSelectAllShortcuts());
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: 'calc(100% - 37px)',
        zIndex: 1,
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        gap: '10px',
      }}
    >
      {windows.map((window, i) => (
        <Window
          key={window.id}
          fullScreen={window.fullScreen}
          minimized={window.minimized}
          link={window.liveLink!}
          title={window.title}
          zIndex={window.zIndex}
          top={window.position.y}
          left={window.position.x}
          id={window.id}
          focused={window.focused}
          logo={window.logo}
          children={
            window.title === 'Chess Game' ? (
              <ChessProject
                key={window.id}
                codesandboxLink={window.codesandboxLink!}
                liveLink={window.liveLink!}
                gitHubLink={window.gitHubLink!}
              />
            ) : window.title === 'Quiz Game' ? (
              <QuizProject
                key={window.id}
                codesandboxLink={window.codesandboxLink!}
                liveLink={window.liveLink!}
                gitHubLink={window.gitHubLink!}
              />
            ) : window.title === 'My Profile' ? (
              <Profile />
            ) : window.title === 'Projects' ? (
              // <FolderWindow />
              <>
                <p>test</p>
              </>
            ) : (
              <p>Not Found</p>
            )
          }
        />
      ))}
      {desktopShortcuts.map((project) => {
        return (
          <Shortcut
            key={project.name}
            logo={project.logo}
            title={project.name}
            selected={project.selected}
            codesadnboxLink={project.codesandboxLink}
            gitHubLink={project.gitHubLink}
            liveLink={project.liveLink}
          />
        );
      })}
    </div>
  );
};

export default DesktopMainArea;
