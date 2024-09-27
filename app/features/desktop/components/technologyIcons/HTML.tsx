import { Typography } from '@mui/material';
import html from '@/public/html.svg';
import Image from 'next/image';

const HTML = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        marginTop: '10px',
      }}
    >
      <Image
        priority={true}
        style={{ height: '60%', width: 'auto' }}
        src={html}
        alt=""
      />
      <Typography
        sx={{ ':hover': { cursor: 'default' } }}
        textAlign={'center'}
        fontSize={'0.7rem'}
        fontWeight={200}
      >
        HTML
      </Typography>
    </div>
  );
};

export default HTML;
