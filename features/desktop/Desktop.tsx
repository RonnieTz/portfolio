'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import image from '@/public/image.jpg';
import Taskbar from '../taskbar/Taskbar';
import Menu from '../startMenu/Menu';
import DesktopMainArea from './DesktopMainArea';
import { useEffect } from 'react';

const Desktop = () => {
  useEffect(() => {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });
    return () => {
      document.removeEventListener('contextmenu', (event) => {
        event.preventDefault();
      });
    };
  }, []);
  return (
    <Box
      height={'100vh'}
      width={'100vw'}
      boxSizing={'border-box'}
      position={'relative'}
      overflow={'hidden'}
    >
      <Image
        src={image}
        layout={'fill'}
        objectFit={'cover'}
        alt="backgroundImage"
        style={{ position: 'absolute' }}
      />
      <DesktopMainArea />
      <Taskbar />
      <Menu />
    </Box>
  );
};

export default Desktop;
