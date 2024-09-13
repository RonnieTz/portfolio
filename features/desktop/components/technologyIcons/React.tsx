import { Typography } from '@mui/material';
import react from '@/public/react.svg';

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
      <img height={'60%'} src={react.src} alt="" />
      <Typography
        sx={{ ':hover': { cursor: 'default' } }}
        textAlign={'center'}
        fontSize={'0.7rem'}
        fontWeight={200}
      >
        React
      </Typography>
    </div>
  );
};

export default Javascript;
