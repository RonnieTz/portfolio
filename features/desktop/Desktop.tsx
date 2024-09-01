'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import image from '@/public/image.jpg';
import Taskbar from '../taskbar/Taskbar';
import Menu from '../startMenu/Menu';
import Window from './components/Window';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import DesktopMainArea from './DesktopMainArea';

const Desktop = () => {
  const { windows } = useSelector((state: RootState) => state.app);
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
