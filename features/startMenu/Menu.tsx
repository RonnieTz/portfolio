'use client';

import { Box, Button } from '@mui/material';
import React from 'react';
import menu from '@/public/menu.jpg';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { newWindow } from '@/redux/appSlice';

const Menu = () => {
  const dispatch = useDispatch();
  const { start } = useSelector((state: RootState) => state.app);
  return (
    <Box
      width={'35%'}
      height={'75%'}
      borderRadius={'10px 10px 0 0'}
      overflow={'hidden'}
      zIndex={100}
      position={'absolute'}
      bottom={'35px'}
    >
      {start.open && (
        <>
          <Image src={menu} layout={'fill'} alt="menu" />
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
                    title: 'New Window',
                    link: 'https://postcode-book.vercel.app/login',
                    id: String(Math.floor(Math.random() * 1000)),
                  })
                );
              }}
            >
              New Window
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Menu;
