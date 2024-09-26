import { Typography } from '@mui/material';
import css from '@/public/css.svg';

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
      <img height={'60%'} src={css.src} alt="" />
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
