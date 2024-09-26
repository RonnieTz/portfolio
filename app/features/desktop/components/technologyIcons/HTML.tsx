import { Typography } from '@mui/material';
import html from '@/public/html.svg';

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
      <img height={'60%'} src={html.src} alt="" />
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
