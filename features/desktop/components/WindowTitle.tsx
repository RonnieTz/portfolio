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
      left={'1%'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      boxSizing={'border-box'}
      padding={'0 15px 0 10px'}
      gap={'10px'}
    >
      <img height={'70%'} src={logo} alt="logo" />
      <Typography
        color={'rgba(225, 235, 245, 255)'}
        fontSize={15}
        fontWeight={500}
        fontFamily={'Gill Sans, sans-serif'}
        sx={{ textShadow: '1px 1px 3px black' }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default WindowTitle;
