import profile from '@/public/profile.svg';
import './styles.css';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { newWindow } from '@/redux/appSlice';

const MyProfile = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(
          newWindow({
            title: 'My Profile',
            liveLink: '',
            gitHubLink: '',
            id: String(Math.floor(Math.random() * 100000)),
            logo: profile.src,
            codesadnboxLink: '',
          })
        );
      }}
      className="menu-item-link"
    >
      <img height={'60%'} src={profile.src} alt="chess logo" />
      <Typography padding={0} fontWeight={500} fontSize={'0.9rem'}>
        My Profile
      </Typography>
    </div>
  );
};
export default MyProfile;
