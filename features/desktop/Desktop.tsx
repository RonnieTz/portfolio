'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import image from '@/public/image.jpg';
import Taskbar from '../taskbar/Taskbar';
import Menu from '../startMenu/Menu';
import Window from './components/Window';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

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
      {windows.map((window, i) => (
        <Window
          key={window.id}
          fullScreen={window.fullScreen}
          minimized={window.minimized}
          link={window.link}
          title={window.title}
          zIndex={window.zIndex + 100}
          top={window.position.y}
          left={window.position.x}
          id={window.id}
          focused={window.focused}
        />
      ))}
      <Image
        src={image}
        layout={'fill'}
        objectFit={'cover'}
        alt="backgroundImage"
        style={{ position: 'absolute' }}
      />
      <Taskbar />
      <Menu />
    </Box>
  );
};

export default Desktop;
