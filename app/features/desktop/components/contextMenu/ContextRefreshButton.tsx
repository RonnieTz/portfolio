import { useDispatch } from 'react-redux';
import { hideContextMenu } from '@/app/redux/contextMenu/contextSlice';

type Props = { enabled: boolean };

const ContextRefreshButton = ({ enabled }: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(hideContextMenu());
        window.location.reload();
      }}
      className={`context-menu-item ${enabled ? '' : 'button-disabled'}`}
    >
      Refresh
    </div>
  );
};
export default ContextRefreshButton;
