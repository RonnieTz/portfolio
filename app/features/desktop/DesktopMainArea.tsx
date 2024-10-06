import Window from './components/windowTemplate/Window';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { setStartOpen, unSelectAllShortcuts } from '@/app/redux/app/appSlice';
import ChessProject from './components/projects/chess/ChessProject';
import QuizProject from './components/projects/quiz/QuizProject';
import Profile from './components/profile/Profile';
import FolderWindow from './components/folderWindows/Folder';
import PortfolioProject from './components/projects/portfolio/PortfolioProject';
import Minesweeper from '../XP_programs/minesweeper/Minesweeper';
import Shortcut from './components/shortcuts/Shortcut';
import Project from './components/projects/Project';
import EditorContainer from './components/textEditor/EditorContainer';
import Scores from '../XP_programs/minesweeper/nav/Scores';
import FontOptions from './components/textEditor/navbar/FontOptions';

const DesktopMainArea = () => {
  const dispatch = useDispatch();
  const { windows, folders } = useSelector((state: RootState) => state.app);
  const desktopItems = folders.locations.find(
    (item) => item.location === 'Desktop'
  )?.items;

  return (
    <div
      onClick={() => {
        dispatch(setStartOpen(false));
        dispatch(unSelectAllShortcuts({ location: 'Desktop' }));
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
      {windows.map((window) => (
        <Window
          key={window.id}
          fixedSize={window.fixedSize}
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
          size={window.size}
          subWindow={window.subWindow}
        >
          {window.type === 'project' ? (
            <Project key={window.id}>
              {window.title === 'Chess Game' && (
                <ChessProject
                  codesandboxLink={window.codesandboxLink!}
                  gitHubLink={window.gitHubLink!}
                  liveLink={window.liveLink!}
                  key={window.id}
                />
              )}
              {window.title === 'Quiz Game' && (
                <QuizProject
                  codesandboxLink={window.codesandboxLink!}
                  gitHubLink={window.gitHubLink!}
                  liveLink={window.liveLink!}
                  key={window.id}
                />
              )}
              {window.title === 'Portfolio' && (
                <PortfolioProject
                  codesandboxLink={window.codesandboxLink!}
                  gitHubLink={window.gitHubLink!}
                  liveLink={window.liveLink!}
                  key={window.id}
                />
              )}
            </Project>
          ) : window.type === 'folder' ? (
            <FolderWindow title={window.title} />
          ) : window.type === 'program' ? (
            window.title === 'My Profile' ? (
              <Profile />
            ) : window.title === 'Minesweeper' ? (
              <Minesweeper />
            ) : (
              <></>
            )
          ) : window.type === 'textFile' ? (
            <EditorContainer content={window.content!} />
          ) : window.type === 'subWindow' ? (
            window.title === 'Scores' ? (
              <Scores />
            ) : window.title === 'Font' ? (
              <FontOptions id={window.parent} />
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </Window>
      ))}
      {desktopItems?.map((item) => (
        <Shortcut
          key={item.name}
          color="light"
          items={item.items!}
          logo={item.logo}
          selected={item.selected}
          title={item.name}
          type={item.type}
          codesadnboxLink={item.codesandboxLink}
          gitHubLink={item.gitHubLink}
          liveLink={item.liveLink}
          location={item.location!}
          size={item.size!}
          content={item.content!}
        />
      ))}
    </div>
  );
};

export default DesktopMainArea;
