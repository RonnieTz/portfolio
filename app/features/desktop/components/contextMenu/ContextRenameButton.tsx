import { useDispatch } from 'react-redux';
import { setRenameState } from '@/app/redux/app/appSlice';
import { hideContextMenu } from '@/app/redux/contextMenu/contextSlice';

type Props = {
  linkID: string | undefined;
};

const ContextRenameButton = ({ linkID }: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        if (linkID) dispatch(setRenameState({ linkID }));
        dispatch(hideContextMenu());
      }}
      className="context-menu-item"
    >
      Rename
    </div>
  );
};
export default ContextRenameButton;
