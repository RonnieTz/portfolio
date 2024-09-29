import Arrow from './Arrow';
import Logo from './Logo';
import Title from './Title';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  newWindow,
  unSelectAllShortcuts,
  selectShortcut,
  addWindowToHistory,
  changeToFolder,
} from '@/app/redux/appSlice';
import { useEffect, useCallback } from 'react';
import { Folder } from '@/app/redux/types';

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
  size: { width: number; height: number };
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
  size,
}: Props) => {
  const dispatch = useDispatch();
  const { windows } = useSelector((state: RootState) => state.app);

  const openWindow = useCallback(() => {
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
        fixedSize: type === 'program' ? true : false,
        size,
      })
    );
  }, [
    dispatch,
    title,
    liveLink,
    gitHubLink,
    logo,
    codesadnboxLink,
    type,
    items,
  ]);

  useEffect(() => {
    const myfunction = (e: KeyboardEvent) => {
      if (selected && e.key === 'Enter') {
        openWindow();

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
  }, [selected, dispatch, title, type, location, openWindow]);

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
          openWindow();
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
