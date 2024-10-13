import Logo from './Logo';
import Title from './Title';
import './styles.css';
import {
  selectShortcut,
  openWindow,
  unSelectAllShortcuts,
  changeToFolder,
} from '@/app/redux/app/appSlice';
import {
  showContextMenu,
  setPosition,
  setTarget,
  hideContextMenu,
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
}: Props) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const clickEnter = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && selected) {
        console.log(title);
      }
    };
    addEventListener('keyup', clickEnter);
    return () => {
      removeEventListener('keyup', clickEnter);
    };
  }, [selected]);

  return (
    <div
      onMouseEnter={() => {
        const newTimeout = setTimeout(() => {
          setIsHovered(true);
        }, 500);
        setTimeoutID(newTimeout);
      }}
      onMouseLeave={() => {
        if (timeoutID) {
          clearTimeout(timeoutID);
          setIsHovered(false);
        }
      }}
      onContextMenu={(e) => {
        const x = e.clientX;
        const y = e.clientY;
        e.preventDefault();
        e.stopPropagation();
        dispatch(selectShortcut({ linkID }));
        dispatch(showContextMenu());
        dispatch(setPosition({ x, y }));
        dispatch(setTarget({ target: { type: 'link', linkID } }));
      }}
      onClick={(e) => {
        e.stopPropagation();
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
      style={{ height: color === 'dark' ? '80px' : undefined }}
    >
      <Logo key={windowID} logo={logo} selected={selected} />
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
