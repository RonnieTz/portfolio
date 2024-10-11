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
} from '@/app/redux/contextMenu/contextSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import Rename from './Rename';
import './styles.css';

type Props = {
  title: string;
  windowID: string;
  logo: string;
  selected: boolean;
  color: 'dark' | 'light';
  linkID: string;
  rename: boolean;
};
const ProjectLink = ({
  color,
  logo,
  selected,
  title,
  windowID,
  linkID,
  rename,
}: Props) => {
  const dispatch = useDispatch();
  const { windows } = useSelector((state: RootState) => state.app);
  const window = windows.find((window) => window.windowID === windowID)!;
  const { open, type } = window;

  return (
    <div
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
      }}
      onDoubleClick={() => {
        if (type === 'folder' && open) {
          dispatch(changeToFolder({ windowID, title, location: linkID }));
        }
        dispatch(changeToFolder({ windowID, title, location: linkID }));
        dispatch(openWindow({ windowID }));
        dispatch(unSelectAllShortcuts());
      }}
      className="project-link"
    >
      <Logo key={windowID} logo={logo} selected={selected} />
      {!rename && (
        <Title color={color} selected={selected} title={title} type="project" />
      )}
      {rename && <Rename placeholder={title} linkID={linkID} />}
    </div>
  );
};
export default ProjectLink;
