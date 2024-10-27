import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  copy_cut,
  hideContextMenu,
} from '@/app/redux/contextMenu/contextSlice';
import { unSelectAllShortcuts } from '@/app/redux/app/appSlice';

type Props = { enabled: boolean };

const ContextCopyButton = ({ enabled }: Props) => {
  const dispatch = useDispatch();
  const { target } = useSelector((state: RootState) => state.context);

  return (
    <div
      onClick={() => {
        dispatch(hideContextMenu());
        dispatch(unSelectAllShortcuts());
        if (enabled) {
          dispatch(copy_cut({ functionType: 'copy', target: target! }));
        }
      }}
      className={`context-menu-item ${enabled ? '' : 'button-disabled'}`}
    >
      Copy
    </div>
  );
};
export default ContextCopyButton;