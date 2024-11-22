'use client';
import { Box } from '@mui/material';
import image from '@/public/wallpaper.webp';
import Taskbar from '../taskbar/Taskbar';
import Menu from '../startMenu/Menu';
import DesktopMainArea from './DesktopMainArea';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { setWelcome, setLoaded } from '@/app/redux/app/appSlice';
import WelcomeScreen from './components/welcome/WelcomeScreen';
import TurnOffWindow from '../startMenu/turnoff/TurnOffWindow';
import LoadScreen from './components/load/LoadScreen';
import Image from 'next/image';
import TurningOffScreen from './components/welcome/TurningOffScreen';

const Desktop = () => {
  const { welcome, turnOff, loaded, turningOff } = useSelector(
    (state: RootState) => state.app
  );
  useEffect(() => {}, [turningOff]);
  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });
    setTimeout(() => {
      dispatch(setLoaded(false));
    }, 2000);
    setTimeout(() => {
      dispatch(setWelcome(false));
    }, 4000);

    return () => {
      document.removeEventListener('contextmenu', (event) => {
        event.preventDefault();
      });
    };
  }, [dispatch]);
  return (
    <>
      {turningOff && <TurningOffScreen />}
      {turnOff && <TurnOffWindow />}
      {loaded && welcome && <LoadScreen />}
      {!loaded && welcome && <WelcomeScreen />}
      {!loaded && !welcome && (
        <Box
          height={'100vh'}
          width={'100vw'}
          boxSizing={'border-box'}
          position={'relative'}
          overflow={'hidden'}
        >
          <Image
            priority={true}
            src={image}
            alt="backgroundImage"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <DesktopMainArea />
          <Taskbar />
          <Menu />
        </Box>
      )}
    </>
  );
};

export default Desktop;
