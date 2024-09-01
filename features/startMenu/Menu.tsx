'use client';

import { Box, Button } from '@mui/material';
import React from 'react';
import menu from '@/public/menu.jpg';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { newWindow } from '@/redux/appSlice';
import ContactMail from './ContactMail';
import chess from '@/public/chess.svg';

const Menu = () => {
  const dispatch = useDispatch();
  const { start } = useSelector((state: RootState) => state.app);

  return (
    <Box
      width={!start.open ? '0' : '35%'}
      height={!start.open ? '0' : '75%'}
      borderRadius={'10px 10px 0 0'}
      overflow={'hidden'}
      bgcolor={'#f0f0f0'}
      zIndex={100}
      position={'absolute'}
      bottom={'35px'}
      sx={{ transition: 'all 0.2s' }}
    >
      <ContactMail />
      <Image
        style={{ filter: 'contrast(1.1)' }}
        src={menu}
        layout={'fill'}
        alt="menu"
      />
      <Box
        position={'absolute'}
        height={'77%'}
        width={'48.5%'}
        right={'1.2%'}
        top={'14%'}
        padding={'20px'}
        boxSizing={'border-box'}
      >
        <Button
          onClick={() => {
            dispatch(
              newWindow({
                title: 'Chess Game',
                link: '',
                id: String(Math.floor(Math.random() * 1000)),
                logo: chess.src,
              })
            );
          }}
        >
          Chess Game
        </Button>
      </Box>
    </Box>
  );
};

export default Menu;
