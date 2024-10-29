import { useDispatch } from 'react-redux';
import { setTurnOff } from '@/app/redux/app/appSlice';

const Bottom = () => {
  const dispatch = useDispatch();
  return (
    <div className="bottom">
      <button
        onClick={() => {
          dispatch(setTurnOff(false));
        }}
        className="turn-off-cancel-button"
      >
        Cancel
      </button>
    </div>
  );
};
export default Bottom;
