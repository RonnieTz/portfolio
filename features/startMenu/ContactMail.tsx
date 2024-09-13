import { Box, Typography } from '@mui/material';
import React from 'react';
import email_icon from '@/public/Email.png';

const ContactMail = () => {
  return (
    <Box
      position={'absolute'}
      zIndex={100}
      bottom={'2.4%'}
      left={'4%'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={2}
    >
      <img
        src={email_icon.src}
        alt="email"
        style={{ width: '25px', height: '25px' }}
      />
      <Typography
        color={'rgba(227, 239, 246, 255)'}
        sx={{ textShadow: '0 0 2px rgba(99, 158, 227, 255)' }}
        display={'inline'}
        // fontWeight={100}
      >
        ronis.tzol@gmail.com
      </Typography>
    </Box>
  );
};

export default ContactMail;
