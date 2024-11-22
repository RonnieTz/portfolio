import moveLogo from '@/public/Move.png';
import Image from 'next/image';
import './styles.css';
import { useOpenMoveToFolder } from '@/app/utilities/hooks/useOpenMoveToFolder';
import {
  setSelectedLinkForMoveWindow,
  unSelectAllShortcuts,
} from '@/app/redux/app/appSlice';
import { useRedux } from '@/app/utilities/hooks/useRedux';

type Props = { title: 'Move this folder' | 'Move this file'; windowID: string };

const MoveFolder = ({ title, windowID }: Props) => {
  const [dispatch, app] = useRedux();
  const [openMoveToFolder] = useOpenMoveToFolder(windowID);
  const selectedLink = app.links.find((link) => link.selected);
  return (
    <div
      onClick={() => {
        dispatch(setSelectedLinkForMoveWindow(selectedLink?.linkID!));
        openMoveToFolder();
        dispatch(unSelectAllShortcuts());
      }}
      className="file-task-item"
    >
      <Image
        style={{ height: '80%', width: 'auto' }}
        src={moveLogo}
        alt="Rename"
      />
      <div className="file-task-item-title">{title}</div>
    </div>
  );
};
export default MoveFolder;
