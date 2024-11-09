import Logo from './Logo';
import Title from './Title';
import './styles.css';
import {
  selectShortcut,
  openWindow,
  unSelectAllShortcuts,
  changeToFolder,
  setLinkIsDragged,
} from '@/app/redux/app/appSlice';
import {
  showContextMenu,
  setPosition,
  setTarget,
  hideContextMenu,
  copy_cut,
} from '@/app/redux/contextMenu/contextSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import Rename from './Rename';
import './styles.css';
import { useEffect } from 'react';
import Tooltip from './Tooltip';
import { useState } from 'react';

type Props = {
  title: string;
  windowID: string;
  logo: string;
  selected: boolean;
  color: 'dark' | 'light';
  linkID: string;
  rename: boolean;
  folderLocation: string;
  position: { x: number; y: number };
  isDragged: boolean;
  setMenuOpen?: React.Dispatch<
    React.SetStateAction<'File' | 'Edit' | 'Views' | false>
  >;
};
const ProjectLink = ({
  color,
  logo,
  selected,
  title,
  windowID,
  linkID,
  rename,
  folderLocation,
  position,
  isDragged,
  setMenuOpen,
}: Props) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout | null>(null);
  const { windows } = useSelector((state: RootState) => state.app)!;
  const { clipboard } = useSelector((state: RootState) => state.context);

  const window = windows.find((window) => window.windowID === windowID);

  const linkIsCut = (linkID: string) => {
    if (clipboard) {
      if (
        clipboard.target.linkID === linkID &&
        clipboard.functionType === 'cut'
      ) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const clickEnter = (e: KeyboardEvent) => {
      if (rename) return;
      if (e.key === 'Enter' && selected && !rename) {
        dispatch(changeToFolder({ windowID, title, location: linkID }));
        dispatch(openWindow({ windowID }));
        dispatch(unSelectAllShortcuts());
        setIsHovered(false);
      }
    };
    addEventListener('keydown', clickEnter);
    return () => {
      removeEventListener('keydown', clickEnter);
    };
  }, [selected, rename, dispatch, windowID, title, linkID]);

  return (
    <div
      draggable={true}
      onMouseEnter={() => {
        const newTimeout = setTimeout(() => {
          setIsHovered(true);
        }, 400);
        setTimeoutID(newTimeout);
      }}
      onMouseLeave={() => {
        if (timeoutID) {
          clearTimeout(timeoutID);
          setIsHovered(false);
        }
      }}
      onDragStart={() => {
        dispatch(selectShortcut({ linkID }));
        dispatch(setLinkIsDragged({ linkID, isDragged: true }));
        dispatch(
          setTarget({
            target: {
              targetType: 'link',
              linkID,
              folderID: linkID,
              linkType: window?.type === 'folder' ? 'folder' : 'program',
              windowID,
            },
          })
        );
        dispatch(
          copy_cut({
            functionType: 'cut',
            target: {
              targetType: 'link',
              linkID,
              folderID: linkID,
              linkType: window?.type === 'folder' ? 'folder' : 'program',
              windowID,
            },
          })
        );
        setIsHovered(false);
      }}
      onContextMenu={(e) => {
        const x = e.clientX;
        const y = e.clientY;
        e.preventDefault();
        e.stopPropagation();
        dispatch(selectShortcut({ linkID }));
        dispatch(showContextMenu());
        dispatch(setPosition({ x, y }));
        dispatch(
          setTarget({
            target: {
              targetType: 'link',
              linkID,
              folderID: linkID,
              linkType: window?.type === 'folder' ? 'folder' : 'program',
              windowID,
            },
          })
        );
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (setMenuOpen) {
          setMenuOpen(false);
        }
        dispatch(selectShortcut({ linkID }));
        dispatch(hideContextMenu());
      }}
      onDoubleClick={() => {
        dispatch(changeToFolder({ windowID, title, location: linkID }));
        dispatch(openWindow({ windowID }));
        dispatch(unSelectAllShortcuts());
        setIsHovered(false);
      }}
      className="project-link"
      style={{
        height: color === 'dark' ? '80px' : undefined,
        position: folderLocation === 'desktop' ? 'absolute' : undefined,
        top:
          folderLocation === 'desktop'
            ? `${position?.y * 12.57 + 2}%`
            : undefined,
        left:
          folderLocation === 'desktop'
            ? `${position?.x * 6.23 + 0.5}%`
            : undefined,
        opacity: isDragged ? 0 : 1,
      }}
    >
      <Logo
        key={windowID}
        logo={logo}
        selected={selected}
        isCut={linkIsCut(linkID)}
      />
      {!rename && (
        <Title color={color} selected={selected} title={title} type="project" />
      )}
      {rename && <Rename placeholder={title} linkID={linkID} />}
      {isHovered && (
        <Tooltip
          windowID={windowID}
          folderLocation={folderLocation}
          linkID={linkID}
        />
      )}
    </div>
  );
};
export default ProjectLink;
