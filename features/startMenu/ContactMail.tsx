import { Box } from '@mui/material';
import React from 'react';
import email_icon from '@/public/Email.png';
import { useState } from 'react';

const ContactMail = () => {
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);
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
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          navigator.clipboard.writeText('ronis.tzol@gmail.com');
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
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
        }}
      >
        ronis.tzol@gmail.com
      </div>
      {hover && (
        <div
          style={{
            position: 'relative',
            color: 'black',
            backgroundColor: 'white',
            borderRadius: '5px',
            padding: '0.2rem 0.5rem',
            fontSize: '0.8rem',
            border: '1px solid black',
            left: '-160px',
            top: '-20px',
            // transition: 'all 0.2s',
            animation: 'fadeIn 0.2s',
          }}
        >
          {!copied ? 'Copy email address to clipboard' : 'Copied!'}
        </div>
      )}
    </Box>
  );
};

export default ContactMail;
