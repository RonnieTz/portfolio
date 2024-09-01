'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import timeBox from '@/public/timebox.jpg';
import { useState, useEffect } from 'react';

const TimeBox = () => {
  const [time, setTime] = useState('');
  const [showDate, setShowDate] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      const hour = new Date().getHours();
      const minute = new Date().getMinutes();
      const seconds = new Date().getSeconds();
      setTime(
        `${String(hour).length === 1 ? 0 : ''}${hour}:${
          String(minute).length === 1 ? 0 : ''
        }${minute}:${String(seconds).length === 1 ? 0 : ''}${seconds}`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      height={'100%'}
      width={'7%'}
      bgcolor={'red'}
      right={0}
      position={'absolute'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        position={'absolute'}
        height={'0.9rem'}
        width={'110px'}
        zIndex={100}
        border={'2px solid black'}
        top={-20}
        right={0}
        display={showDate ? 'flex' : 'none'}
        alignItems={'center'}
        justifyContent={'center'}
        bgcolor={'white'}
        color={'black'}
        padding={'2px 4px'}
        fontSize={12}
        fontFamily={'Gill Sans, sans-serif'}
      >
        {new Date().toDateString()}
      </Box>
      <Image
        style={{ position: 'absolute' }}
        src={timeBox}
        layout={'fill'}
        alt="taskbar"
      />

      <Typography
        fontWeight={100}
        fontFamily={'Monaco, monospace'}
        fontSize={14}
        sx={{ textShadow: '1px 1px 5px black', cursor: 'default' }}
        position={'absolute'}
        color={'white'}
      >
        <span
          onMouseEnter={(e) => {
            setShowDate(true);
          }}
          onMouseLeave={(e) => {
            setShowDate(false);
          }}
        >
          {time}
        </span>
      </Typography>
    </Box>
  );
};

export default TimeBox;
