import Window from './components/windowTemplate/Window';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  setStartOpen,
  unSelectAllShortcuts,
  removeRenameStates,
} from '@/app/redux/app/appSlice';
import ChessProject from './components/projects/chess/ChessProject';
import QuizProject from './components/projects/quiz/QuizProject';
import Profile from './components/profile/Profile';
import Folder from './components/folderWindows/Folder';
import PortfolioProject from './components/projects/portfolio/PortfolioProject';
import Minesweeper from '../XP_programs/minesweeper/Minesweeper';
import Project from './components/projects/Project';
import EditorContainer from './components/textEditor/EditorContainer';
import Scores from '../XP_programs/minesweeper/nav/Scores';
import FontOptions from './components/textEditor/navbar/FontOptions';
import Container from './components/contextMenu/Container';
import Program from '../XP_programs/Program';
import {
  hideContextMenu,
  setPosition,
  showContextMenu,
  setTarget,
} from '@/app/redux/contextMenu/contextSlice';
import ProjectLink from './components/shortcuts/ProjectLink';
import { Fragment } from 'react';

const DesktopMainArea = () => {
  const dispatch = useDispatch();
  const { windows, links } = useSelector((state: RootState) => state.app);
  const { showContext } = useSelector((state: RootState) => state.context);

  return (
    <div
      onClick={() => {
        dispatch(setStartOpen(false));
        dispatch(unSelectAllShortcuts());
        dispatch(hideContextMenu());
        dispatch(removeRenameStates());
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(showContextMenu());
        dispatch(setPosition({ x: e.clientX, y: e.clientY }));
        dispatch(
          setTarget({ target: { type: 'folder', folderID: 'desktop' } })
        );
        dispatch(removeRenameStates());
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
      {links.map((link) => {
        if (link.folderLocation === 'desktop') {
          return (
            <ProjectLink
              color="light"
              logo={link.logo}
              selected={link.selected}
              title={link.name}
              windowID={link.windowID}
              linkID={link.linkID}
              key={link.windowID + 'link'}
              rename={link.rename}
            />
          );
        }
      })}
      {showContext && <Container />}

      {windows.map((window) => {
        if (window.type === 'project' && window.open) {
          return (
            <Project
              fixedSize={window.fixedSize}
              focused={window.focused}
              fullScreen={window.fullScreen}
              logo={window.logo}
              minimized={window.minimized}
              title={window.title}
              liveLink={window.liveLink}
              windowID={window.windowID}
              key={window.windowID + 'project'}
              size={window.size}
              zIndex={window.zIndex}
              codesandboxLink={window.codesandboxLink}
              gitHubLink={window.gitHubLink}
            />
          );
        }
        {
          if (window.type === 'program' && window.open) {
            return (
              <Program
                fixedSize={window.fixedSize}
                focused={window.focused}
                fullScreen={window.fullScreen}
                logo={window.logo}
                minimized={window.minimized}
                open={window.open}
                position={window.position}
                selected={window.selected}
                size={window.size}
                title={window.title}
                windowID={window.windowID}
                zIndex={window.zIndex}
                key={window.windowID + 'program'}
                subWindow={window.subWindow}
              />
            );
          }
        }
        {
          if (window.type === 'subWindow' && window.open) {
            return (
              <Window
                fixedSize={window.fixedSize}
                focused={window.focused}
                fullScreen={window.fullScreen}
                logo={window.logo}
                minimized={window.minimized}
                size={window.size}
                title={window.title}
                windowID={window.windowID}
                zIndex={window.zIndex}
                key={window.windowID + 'subWindow'}
                left={100 + Math.random() * 100}
                top={100 + Math.random() * 100}
                link=""
                subWindow=""
              >
                {window.title === 'Scores' && <Scores />}
                {window.title.includes('Fonts') && (
                  <FontOptions
                    contentID={window.content}
                    windowID={window.windowID}
                  />
                )}
              </Window>
            );
          }
        }
        {
          if (window.type === 'profile' && window.open) {
            return (
              <Window
                fixedSize={window.fixedSize}
                focused={window.focused}
                fullScreen={window.fullScreen}
                logo={window.logo}
                minimized={window.minimized}
                size={window.size}
                title={window.title}
                windowID={window.windowID}
                zIndex={window.zIndex}
                key={window.windowID + 'profile'}
                left={100 + Math.random() * 100}
                top={100 + Math.random() * 100}
                link=""
                subWindow=""
              >
                <Profile />
              </Window>
            );
          }
        }
        {
          if (window.type === 'folder' && window.open) {
            const { history } = window;
            const { currentLocation, locations } = history;
            return (
              <Window
                fixedSize={window.fixedSize}
                focused={window.focused}
                fullScreen={window.fullScreen}
                logo={window.logo}
                minimized={window.minimized}
                size={window.size}
                title={locations[currentLocation]?.title}
                windowID={window.windowID}
                zIndex={window.zIndex}
                key={window.windowID + 'profile'}
                left={100 + Math.random() * 100}
                top={100 + Math.random() * 100}
                link=""
                subWindow=""
              >
                <Folder
                  folderID={window.windowID}
                  folderLocation={locations[currentLocation]?.locationID}
                />
              </Window>
            );
          }
        }
        {
          if (window.type === 'textFile' && window.open) {
            return (
              <Window
                fixedSize={window.fixedSize}
                focused={window.focused}
                fullScreen={window.fullScreen}
                logo={window.logo}
                minimized={window.minimized}
                size={window.size}
                title={window.title}
                windowID={window.windowID}
                zIndex={window.zIndex}
                key={window.windowID + 'chess'}
                left={100 + Math.random() * 100}
                top={100 + Math.random() * 100}
                link=""
                subWindow={window.subWindow}
              >
                <EditorContainer
                  contentID={window.content}
                  windowID={window.windowID}
                  subWindowID={window.subWindow}
                />
              </Window>
            );
          }
        }
        return <Fragment key={window.windowID + 'program'} />;
      })}
    </div>
  );
};

export default DesktopMainArea;
