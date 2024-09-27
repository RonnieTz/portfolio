import { Typography } from '@mui/material';
import nodejs from '@/public/nodejs.svg';
import Image from 'next/image';

const Nodejs = () => {
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
      <Image style={{ height: '60%', width: 'auto' }} src={nodejs} alt="" />
      <Typography
        sx={{ ':hover': { cursor: 'default' } }}
        textAlign={'center'}
        fontSize={'0.7rem'}
        fontWeight={200}
      >
        NodeJS
      </Typography>
    </div>
  );
};

export default Nodejs;
