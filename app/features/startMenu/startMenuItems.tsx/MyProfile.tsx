import profile from '@/public/profile.png';
import './styles.css';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openWindow, setStartOpen } from '@/app/redux/app/appSlice';
import Image from 'next/image';

const MyProfile = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(
          openWindow({
            windowID: 'ProfileID123',
          })
        );
        dispatch(setStartOpen(false));
      }}
      className="menu-item-link"
    >
      <Image
        priority={true}
        style={{ height: '60%', width: 'auto' }}
        src={profile}
        alt="profile"
      />
      <Typography
        padding={0}
        fontWeight={500}
        fontSize={'0.9rem'}
        fontFamily={'winXP'}
      >
        My Profile
      </Typography>
    </div>
  );
};
export default MyProfile;
