'use client';

import { Box } from '@mui/material';
import React, { useState } from 'react';
import WindowBody from './WindowBody';
import WindowBar from './WindowBar';

type WindowProps = {
  top: number;
  left: number;
  link: string;
  title: string;
  minimized: boolean;
  zIndex: number;
  fullScreen: boolean;
  id: string;
  focused: boolean;
};

const Window = ({
  fullScreen,
  left,
  link,
  minimized,
  title,
  top,
  zIndex,
  id,
  focused,
}: WindowProps) => {
  const [position, setPosition] = useState({ x: left, y: top });

  return (
    <Box
      bgcolor={'whitesmoke'}
      height={fullScreen ? 'calc(100% - 37px)' : `500px`}
      width={fullScreen ? '100%' : `500px`}
      position={'absolute'}
      zIndex={10}
      top={fullScreen ? 0 : position.y}
      left={fullScreen ? 0 : position.x}
      borderRadius={'5px 5px 3px 3px'}
      overflow={'hidden'}
      display={minimized ? 'none' : 'initial'}
      sx={{
        minHeight: '400px',
        minWidth: '400px',
        overflow: 'hidden',
      }}
    >
      <WindowBar
        fullScreen={fullScreen}
        position={position}
        setPosition={setPosition}
        id={id}
        focused={focused}
      />
      <WindowBody link={link} zIndex={zIndex} />
    </Box>
  );
};

export default Window;
