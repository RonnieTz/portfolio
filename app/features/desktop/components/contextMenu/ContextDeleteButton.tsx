import { deleteLink } from '@/app/redux/app/appSlice';
import { hideContextMenu } from '@/app/redux/contextMenu/contextSlice';
import { useDispatch } from 'react-redux';

type Props = { enabled: boolean; linkID?: string };

const ContextDeleteButton = ({ enabled, linkID }: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        if (enabled) dispatch(deleteLink({ linkID: linkID! }));
        dispatch(hideContextMenu());
      }}
      className={`context-menu-item ${enabled ? '' : 'button-disabled'}`}
    >
      Delete
    </div>
  );
};
export default ContextDeleteButton;
