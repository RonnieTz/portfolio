import { Box } from '@mui/material';
import MyProfile from './startMenuItems.tsx/MyProfile';
import Minesweeper from './startMenuItems.tsx/Minesweeper';

const RightSide = () => {
  return (
    <Box
      position={'absolute'}
      height={'77%'}
      width={'48.5%'}
      right={'1.2%'}
      top={'14%'}
      boxSizing={'border-box'}
    >
      <MyProfile />
      <Minesweeper />
    </Box>
  );
};
export default RightSide;
