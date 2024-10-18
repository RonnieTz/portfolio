import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  copy_cut,
  hideContextMenu,
} from '@/app/redux/contextMenu/contextSlice';

type Props = { enabled: boolean };

const ContextCopyButton = ({ enabled }: Props) => {
  const dispatch = useDispatch();
  const { target } = useSelector((state: RootState) => state.context);

  return (
    <div
      onClick={() => {
        if (enabled && target) {
        }
        dispatch(hideContextMenu());
      }}
      className={`context-menu-item ${enabled ? '' : 'button-disabled'}`}
    >
      Copy
    </div>
  );
};
export default ContextCopyButton;
