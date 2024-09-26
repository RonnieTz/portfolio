import Arrow from './Arrow';
import Logo from './Logo';
import Title from './Title';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import {
  newWindow,
  unSelectAllShortcuts,
  selectShortcut,
  addWindowToHistory,
  changeToFolder,
} from '@/redux/appSlice';
import { useEffect } from 'react';
import { Folder } from '@/redux/types';

type Props = {
  logo: string;
  title: string;
  selected: boolean;
  liveLink?: string;
  gitHubLink?: string;
  codesadnboxLink?: string;
  type: string;
  color: 'dark' | 'light';
  items: Folder[];
  location: string;
};

const Shortcut = ({
  logo,
  title,
  selected,
  codesadnboxLink,
  gitHubLink,
  liveLink,
  type,
  color,
  items,
  location,
}: Props) => {
  const dispatch = useDispatch();
  const { windows } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    const myfunction = (e: KeyboardEvent) => {
      if (selected && e.key === 'Enter') {
        dispatch(
          newWindow({
            title,
            liveLink,
            gitHubLink,
            id: String(Math.floor(Math.random() * 1000)),
            logo,
            codesadnboxLink,
            ratio: 1,
            type,
            items,
          })
        );
        if (type === 'folder') {
          dispatch(addWindowToHistory({ folderName: title }));
        }
        dispatch(unSelectAllShortcuts({ location }));
      }
    };
    document.addEventListener('keyup', myfunction);
    return () => {
      document.removeEventListener('keyup', myfunction);
    };
  }, [selected]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        dispatch(selectShortcut({ name: title, location }));
      }}
      onDoubleClick={() => {
        const folderWindowIsOpen = windows.some(
          (window) => window.type === type
        );
        dispatch(unSelectAllShortcuts({ location }));
        if (type === 'folder') {
          dispatch(addWindowToHistory({ folderName: title }));
        }
        if (folderWindowIsOpen) {
          dispatch(changeToFolder({ folderName: title }));
          return;
        }
        setTimeout(() => {
          dispatch(
            newWindow({
              title,
              liveLink,
              gitHubLink,
              id: String(Math.floor(Math.random() * 1000)),
              logo,
              codesadnboxLink,
              ratio: 1,
              type,
              items,
            })
          );
        }, 200);
      }}
      style={{
        width: '80px',
        height: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'relative',
      }}
    >
      {type !== 'folder' && <Arrow />}
      <Logo logo={logo} selected={selected} />
      <Title title={title} selected={selected} type={type} color={color} />
    </div>
  );
};
export default Shortcut;
