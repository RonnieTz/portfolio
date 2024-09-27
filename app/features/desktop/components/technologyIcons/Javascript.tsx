import { Typography } from '@mui/material';
import javascript from '@/public/javascript.svg';
import Image from 'next/image';

const Javascript = () => {
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
        src={javascript}
        alt=""
      />
      <Typography
        sx={{ ':hover': { cursor: 'default' } }}
        textAlign={'center'}
        fontSize={'0.7rem'}
        fontWeight={200}
      >
        JavaScript
      </Typography>
    </div>
  );
};

export default Javascript;
