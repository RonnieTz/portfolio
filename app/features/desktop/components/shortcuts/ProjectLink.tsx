import Logo from './Logo';
import Title from './Title';
import './styles.css';
import {
  selectShortcut,
  openWindow,
  unSelectAllShortcuts,
  changeToFolder,
} from '@/app/redux/app/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

type Props = {
  title: string;
  windowID: string;
  logo: string;
  selected: boolean;
  color: 'dark' | 'light';
  linkID: string;
};
const ProjectLink = ({
  color,
  logo,
  selected,
  title,
  windowID,
  linkID,
}: Props) => {
  const dispatch = useDispatch();
  const { windows } = useSelector((state: RootState) => state.app);
  const window = windows.find((window) => window.windowID === windowID)!;
  const { open, type } = window;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        dispatch(selectShortcut({ linkID }));
        console.log(title, linkID);
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
      <Title color={color} selected={selected} title={title} type="project" />
    </div>
  );
};
export default ProjectLink;
