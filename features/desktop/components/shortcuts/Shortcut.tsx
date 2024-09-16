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
  type: string;
};

const Shortcut = ({
  logo,
  title,
  selected,
  codesadnboxLink,
  gitHubLink,
  liveLink,
  type,
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
        dispatch(unSelectAllShortcuts({ type }));
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
        dispatch(selectShortcut({ name: title, type }));
      }}
      onDoubleClick={() => {
        setTimeout(() => {
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
          dispatch(unSelectAllShortcuts({ type }));
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
      <Title title={title} selected={selected} type={type} />
    </div>
  );
};
export default Shortcut;
