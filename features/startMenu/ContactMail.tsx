import { Box } from '@mui/material';
import React from 'react';
import email_icon from '@/public/Email.png';
import { useState } from 'react';

const ContactMail = () => {
  const [hover, setHover] = useState(false);
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
      <a
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        href="mailto:ronis.tzol@gmail.com"
        style={{
          textShadow: '0 0 2px rgba(99, 158, 227, 255)',
          display: 'inline',
          color: !hover
            ? 'rgba(227, 239, 246, 255)'
            : 'rgba(255, 255, 255, 255)',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'all 0.3s',
          textDecoration: 'none',
          scale: !hover ? 1 : 1.1,
        }}
      >
        ronis.tzol@gmail.com
      </a>
    </Box>
  );
};

export default ContactMail;
