import Window from './components/windowTemplate/Window';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/redux/store';
import {
  setStartOpen,
  unSelectAllShortcuts,
  removeRenameStates,
  setLinkPosition,
  setLinkIsDragged,
} from '@/app/redux/app/appSlice';
import Profile from './components/profile/Profile';
import Folder from './components/folderWindows/Folder';
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
  copy_cut,
  clearClipboard,
} from '@/app/redux/contextMenu/contextSlice';
import ProjectLink from './components/shortcuts/ProjectLink';
import { Fragment, useEffect } from 'react';
import {
  cutPasteLink,
  cutPasteFolder,
  deleteLink,
} from '@/app/redux/app/appSlice';
import { copyPaste } from '@/app/redux/app/reducers/copyReducerThunk';
import MoveItem from './components/folderWindows/subWindows/move/MoveItem';

const backgroundSlots = new Array(16 * 8).fill(0).map((_, i) => i);

const DesktopMainArea = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { windows, links, draggingWindow } = useSelector(
    (state: RootState) => state.app
  );
  const selectedLink = links.find((link) => link.selected);
  const { showContext, target, clipboard } = useSelector(
    (state: RootState) => state.context
  );

  useEffect(() => {
    const clickCopy = (e: KeyboardEvent) => {
      if (selectedLink) {
        const { linkID, windowID } = selectedLink;
        const { type } = windows.find(
          (window) => window.windowID === windowID
        )!;

        if (e.key === 'Delete') {
          dispatch(deleteLink({ linkID }));
        }
        if (e.key === 'c' && e.ctrlKey) {
          dispatch(
            copy_cut({
              functionType: 'copy',
              target: {
                linkID,
                folderID: linkID,
                windowID,
                linkType: type === 'folder' ? 'folder' : 'program',
                targetType: 'link',
              },
            })
          );
        }
        if (e.key === 'x' && e.ctrlKey) {
          dispatch(
            copy_cut({
              functionType: 'cut',
              target: {
                linkID,
                folderID: linkID,
                windowID,
                linkType: type === 'folder' ? 'folder' : 'program',
                targetType: 'link',
              },
            })
          );
        }
      }
      if (clipboard?.functionType === 'cut') {
        if (e.key === 'v' && e.ctrlKey) {
          const link = links.find(
            (link) => link.linkID === clipboard?.target.linkID
          );
          if (clipboard?.target?.linkType === 'program') {
            dispatch(
              cutPasteLink({
                linkID: clipboard?.target.linkID!,
                linkNewLocation: target?.folderID!,
                linkLocation: link?.folderLocation!,
              })
            );
          }
          if (clipboard?.target?.linkType === 'folder') {
            const { linkID } = links.find(
              (link) => link.linkID === clipboard?.target.linkID
            )!;
            dispatch(
              cutPasteFolder({
                folderLinkID: linkID,
                newFolderLocation: target?.folderID!,
                windowID: target?.windowID!,
              })
            );
          }
          dispatch(clearClipboard());
        }
      }

      if (clipboard?.functionType === 'copy' && e.key === 'v' && e.ctrlKey) {
        dispatch(
          copyPaste({
            linkID: clipboard?.target?.linkID!,
            linkNewLocation: target?.folderID!,
          })
        );
      }
    };
    document.addEventListener('keyup', clickCopy);
    return () => {
      document.removeEventListener('keyup', clickCopy);
    };
  }, [clipboard, target, selectedLink, links, windows, dispatch]);

  return (
    <div
      onClick={() => {
        dispatch(setStartOpen(false));
        dispatch(unSelectAllShortcuts());
        dispatch(hideContextMenu());
        dispatch(removeRenameStates());
        if (!showContext) {
          dispatch(
            setTarget({
              target: {
                targetType: 'window',
                linkID: undefined,
                folderID: 'desktop',
                linkType: undefined,
                windowID: 'desktop',
              },
            })
          );
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
        dispatch(
          setTarget({
            target: {
              targetType: 'window',
              linkID: undefined,
              folderID: 'desktop',
              linkType: undefined,
              windowID: 'desktop',
            },
          })
        );
      }}
      onDragEnd={() => {
        dispatch(
          setLinkIsDragged({
            linkID: selectedLink?.linkID!,
            isDragged: false,
          })
        );
        dispatch(clearClipboard());
        dispatch(unSelectAllShortcuts());
        if (draggingWindow) {
          return;
        }
        const link = links.find(
          (link) => link.linkID === clipboard?.target.linkID
        );
        if (link?.folderLocation === target?.folderID) {
          return;
        }
        if (clipboard?.target?.linkType === 'program') {
          dispatch(
            cutPasteLink({
              linkID: clipboard?.target.linkID!,
              linkNewLocation: target?.folderID!,
              linkLocation: link?.folderLocation!,
            })
          );
        }
        if (clipboard?.target?.linkType === 'folder') {
          const { linkID } = links.find(
            (link) => link.linkID === clipboard?.target.linkID
          )!;
          dispatch(
            cutPasteFolder({
              folderLinkID: linkID,
              newFolderLocation: target?.folderID!,
              windowID: target?.windowID!,
            })
          );
        }
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(showContextMenu());
        dispatch(setPosition({ x: e.clientX, y: e.clientY }));
        dispatch(
          setTarget({
            target: {
              targetType: 'window',
              linkID: undefined,
              folderID: 'desktop',
              linkType: undefined,
              windowID: 'desktop',
            },
          })
        );
        dispatch(removeRenameStates());
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
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
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
              key={link.linkID + 'link'}
              rename={link.rename}
              folderLocation={link.folderLocation}
              position={link.position}
              isDragged={link.isDragged}
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
                left={window.position.x}
                top={window.position.y}
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
                {window.title === 'Move Item' && <MoveItem />}
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
                left={window.position.x}
                top={window.position.y}
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
                left={window.position.x}
                top={window.position.y}
                link=""
                subWindow={window.subWindow}
              >
                <Folder
                  folderID={window.windowID}
                  folderLocation={locations[currentLocation]?.locationID}
                  windowID={window.windowID}
                  subWindowID={window.subWindow}
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
                left={window.position.x}
                top={window.position.y}
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
      <div
        style={{
          opacity: 0,
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(16, 1fr)',
          gridTemplateRows: 'repeat(8, 1fr)',
          zIndex: -1,
        }}
      >
        {backgroundSlots.map((slot) => (
          <div
            key={slot}
            onDragOverCapture={(e) => {
              dispatch(
                setLinkPosition({
                  linkID: selectedLink?.linkID!,
                  position: { x: slot % 16, y: Math.floor(slot / 16) },
                })
              );
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxSizing: 'border-box',
            }}
          >
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopMainArea;
