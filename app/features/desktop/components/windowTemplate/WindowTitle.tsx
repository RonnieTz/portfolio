import { Box, Typography } from '@mui/material';
import chess from '@/public/chess.svg';

type Props = {
  title: string;
  logo: string;
};

const WindowTitle = ({ title, logo }: Props) => {
  return (
    <Box
      position={'absolute'}
      zIndex={1000}
      height={'35px'}
      minWidth={'100px'}
      top={'3px'}
      left={'1px'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      boxSizing={'border-box'}
      padding={'0 15px 0 10px'}
      gap={'2px'}
    >
      <img height={'70%'} src={logo} alt="logo" />
      <Typography
        color={'rgba(225, 235, 245, 255)'}
        fontSize={15}
        fontWeight={500}
        fontFamily={'winXP, Gill Sans, sans-serif'}
        sx={{ textShadow: '1px 1px 3px black', translate: '0 2px' }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default WindowTitle;