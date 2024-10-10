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
} from '@/app/redux/app/appSlice';
import {
  showContextMenu,
  setPosition,
  setTarget,
} from '@/app/redux/contextMenu/contextSlice';
import { useEffect } from 'react';
import './styles.css';

type Props = {
  logo: string;
  title: string;
  windowID: string;
  selected: boolean;
  liveLink: string;
  gitHubLink: string;
  codesadnboxLink: string;
  type: string;
  color: 'dark' | 'light';
  locationID: string;
  itemID: string;
  size: { width: number; height: number };
  contentID: string;
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
  locationID,
  size,
  contentID,
  windowID,
  itemID,
}: Props) => {
  const dispatch = useDispatch();
  const { windows } = useSelector((state: RootState) => state.app);

  const openWindow = () => {
    dispatch(
      newWindow({
        title,
        liveLink,
        gitHubLink,
        windowID,
        logo,
        codesadnboxLink,
        type,
        items,
        fixedSize: type === 'program' ? true : false,
        size,
        contentID,
        locationID,
      })
    );
  };

  useEffect(() => {
    const myfunction = (e: KeyboardEvent) => {
      if (selected && e.key === 'Enter') {
        openWindow();

        if (type === 'folder') {
        }
        dispatch(unSelectAllShortcuts());
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
        dispatch(unSelectAllShortcuts());
        dispatch(selectShortcut({ locationID, itemID }));
      }}
      onDoubleClick={() => {
        const folderWindowIsOpen = windows.some(
          (window) => window.type === type && type === 'folder'
        );
        dispatch(unSelectAllShortcuts());
        if (type === 'folder') {
        }
        if (folderWindowIsOpen) {
        }
        setTimeout(() => {
          openWindow();
        }, 200);
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        const x = e.clientX;
        const y = e.clientY;
        dispatch(unSelectAllShortcuts());
        dispatch(selectShortcut({ itemID, locationID }));
        dispatch(setPosition({ x, y }));
        dispatch(showContextMenu());
        dispatch(setTarget({ target: { type: 'File', name: title } }));
      }}
      style={{
        width: '80px',
        height: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '10px',
        position: 'relative',
        paddingTop: '5px',
      }}
    >
      {type !== 'folder' && type !== 'textFile' && <Arrow />}
      <Logo logo={logo} selected={selected} />
      <Title title={title} selected={selected} type={type} color={color} />
    </div>
  );
};
export default Shortcut;
