'use client';
import { Box } from '@mui/material';
import image from '@/public/image.jpg';
import Taskbar from '../taskbar/Taskbar';
import Menu from '../startMenu/Menu';
import DesktopMainArea from './DesktopMainArea';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { setWelcome, setLoaded, newWindow } from '@/app/redux/app/appSlice';
import WelcomeScreen from './components/welcome/WelcomeScreen';
import TurnOffWindow from '../startMenu/TurnOffWindow';
import LoadScreen from './components/load/LoadScreen';
import Image from 'next/image';

const Desktop = () => {
  const { welcome, turnOff, loaded } = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch();
  const sessionLoaded = sessionStorage.getItem('loaded');
  useEffect(() => {
    if (sessionLoaded === 'true') {
      dispatch(setLoaded());
    }

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });
    setTimeout(() => {
      dispatch(setLoaded());
    }, 2000);
    setTimeout(() => {
      dispatch(setWelcome(false));
      sessionStorage.setItem('loaded', 'true');
    }, 4000);

    return () => {
      document.removeEventListener('contextmenu', (event) => {
        event.preventDefault();
      });
    };
  }, [dispatch, sessionLoaded]);
  return (
    <>
      {turnOff && <TurnOffWindow />}
      {!loaded && welcome && <LoadScreen />}
      {loaded && welcome && !sessionLoaded && <WelcomeScreen />}
      {sessionLoaded && (
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
