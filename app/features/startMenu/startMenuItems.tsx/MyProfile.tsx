import profile from '@/public/profile.png';
import './styles.css';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import {
  openWindow,
  setLinkIsDragged,
  setStartOpen,
} from '@/app/redux/app/appSlice';
import Image from 'next/image';
import { copy_cut } from '@/app/redux/contextMenu/contextSlice';
import { copyPaste } from '@/app/redux/app/reducers/copyReducerThunk';

const MyProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { target } = useSelector((state: RootState) => state.context);
  return (
    <div
      draggable={true}
      onDragStart={() => {
        setTimeout(() => {
          dispatch(setStartOpen(false));
        }, 300);
        dispatch(
          setLinkIsDragged({ linkID: 'ProfileLinkID123', isDragged: true })
        );
        dispatch(
          copy_cut({
            functionType: 'copy',
            target: {
              targetType: 'link',
              linkID: 'ProfileLinkID123',
              folderID: 'ProfileLinkID123',
              linkType: 'program',
              windowID: 'MinesweeperID123',
            },
          })
        );
      }}
      onDragEnd={() => {
        dispatch(
          copyPaste({
            linkID: 'ProfileLinkID123',
            linkNewLocation: target?.folderID!,
          })
        );
      }}
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
