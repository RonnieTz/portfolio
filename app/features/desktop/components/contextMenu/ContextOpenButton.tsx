import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  changeToFolder,
  openWindow,
  unSelectAllShortcuts,
} from '@/app/redux/app/appSlice';
import { hideContextMenu } from '@/app/redux/contextMenu/contextSlice';

type Props = { enabled: boolean; linkID: string | undefined };

const ContextOpenButton = ({ enabled, linkID }: Props) => {
  const dispatch = useDispatch();
  const { links } = useSelector((state: RootState) => state.app);
  const link = links.find((link) => link.linkID === linkID);

  return (
    <div
      onClick={() => {
        if (enabled && linkID) {
          dispatch(openWindow({ windowID: link!.windowID }));
          dispatch(
            changeToFolder({
              windowID: link!.windowID,
              title: link!.name,
              location: linkID,
            })
          );
        }
        dispatch(hideContextMenu());
        dispatch(unSelectAllShortcuts());
      }}
      style={{ fontWeight: 'bolder' }}
      className={`context-menu-item ${!enabled && 'button-disabled'}`}
    >
      Open
    </div>
  );
};
export default ContextOpenButton;
