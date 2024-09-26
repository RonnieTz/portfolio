import { Box } from '@mui/material';
import MyProfile from './startMenuItems.tsx/MyProfile';

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
    </Box>
  );
};
export default RightSide;
