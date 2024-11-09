import { useRedux } from '@/app/utilities/hooks/useRedux';
import { closeWindow } from '@/app/redux/app/appSlice';

type CloseProps = {
  windowID: string;
};

const Close = ({ windowID }: CloseProps) => {
  const [dispatch] = useRedux();
  return (
    <div
      onClick={(e) => {
        dispatch(closeWindow({ windowID }));
      }}
      className="topbar-tooltip-item"
    >
      Close
    </div>
  );
};
export default Close;
