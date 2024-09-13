import Arrow from './Arrow';
import Logo from './Logo';
import Title from './Title';
import { useDispatch } from 'react-redux';
import {
  selectShortcut,
  newWindow,
  unSelectAllShortcuts,
} from '@/redux/appSlice';
import { useEffect } from 'react';

type Props = {
  logo: string;
  title: string;
  selected: boolean;
  liveLink?: string;
  gitHubLink?: string;
  codesadnboxLink?: string;
};

const Shortcut = ({
  logo,
  title,
  selected,
  codesadnboxLink,
  gitHubLink,
  liveLink,
}: Props) => {
  const dispatch = useDispatch();

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
          })
        );
        dispatch(unSelectAllShortcuts());
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
        dispatch(selectShortcut({ name: title }));
      }}
      onDoubleClick={() => {
        setTimeout(() => {
          dispatch(
            newWindow({
              title: 'Chess Game',
              liveLink,
              gitHubLink,
              id: String(Math.floor(Math.random() * 1000)),
              logo,
              codesadnboxLink,
            })
          );
          dispatch(unSelectAllShortcuts());
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
      <Arrow />
      <Logo logo={logo} selected={selected} />
      <Title title={title} selected={selected} />
    </div>
  );
};
export default Shortcut;
