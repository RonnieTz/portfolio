import logo from '@/public/Minesweeper.png';
import './styles.css';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/app/redux/store';
import {
  cutPasteFolder,
  openWindow,
  setLinkIsDragged,
  setStartOpen,
} from '@/app/redux/app/appSlice';
import Image from 'next/image';
import { copy_cut, setTarget } from '@/app/redux/contextMenu/contextSlice';
import { copyPaste } from '@/app/redux/app/reducers/copyReducerThunk';
import { set } from 'mongoose';

const Minesweeper = () => {
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
          setLinkIsDragged({ linkID: 'MinesweeperLinkID123', isDragged: true })
        );
        dispatch(
          copy_cut({
            functionType: 'copy',
            target: {
              targetType: 'link',
              linkID: 'MinesweeperLinkID123',
              folderID: 'MinesweeperLinkID123',
              linkType: 'program',
              windowID: 'MinesweeperID123',
            },
          })
        );
      }}
      onDragEnd={() => {
        dispatch(
          copyPaste({
            linkID: 'MinesweeperLinkID123',
            linkNewLocation: target?.folderID!,
          })
        );
      }}
      onClick={() => {
        dispatch(
          openWindow({
            windowID: 'MinesweeperID123',
          })
        );
        dispatch(setStartOpen(false));
      }}
      className="menu-item-link"
    >
      <Image
        priority={true}
        style={{ height: '60%', width: 'auto' }}
        src={logo}
        alt="profile"
      />
      <Typography
        padding={0}
        fontWeight={500}
        fontSize={'0.9rem'}
        fontFamily={'winXP'}
        letterSpacing={'0.5px'}
      >
        Minesweeper
      </Typography>
    </div>
  );
};
export default Minesweeper;
