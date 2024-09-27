import { Typography } from '@mui/material';
import css from '@/public/css.svg';
import Image from 'next/image';

const CSS = () => {
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
      <Image style={{ height: '60%', width: 'auto' }} src={css} alt="" />
      <Typography
        sx={{ ':hover': { cursor: 'default' } }}
        textAlign={'center'}
        fontSize={'0.7rem'}
        fontWeight={200}
      >
        CSS
      </Typography>
    </div>
  );
};

export default CSS;
