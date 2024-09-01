import { Typography } from '@mui/material';
import javascript from '@/public/javascript.svg';

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
      <img height={'60%'} src={javascript.src} alt="" />
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
