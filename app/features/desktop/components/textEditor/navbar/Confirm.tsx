import { useDispatch } from 'react-redux';
import { closeSubWindow } from '@/app/redux/app/appSlice';
import { setFontOptions } from '@/app/redux/editor/editorSlice';

type Props = {
  fontFamily: string;
  fontStyle: string;
  fontSize: number;
  id: string;
};

const Confirm = ({ fontFamily, fontSize, fontStyle, id }: Props) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(
            setFontOptions({
              fontFamily,
              fontSize,
              fontStyle,
              id,
            })
          );
          dispatch(closeSubWindow({ subWindowName: 'Font' }));
        }}
        className="editor-font-options-button"
      >
        OK
      </button>
      <button
        onClick={() => {
          dispatch(closeSubWindow({ subWindowName: 'Font' }));
        }}
        style={{ top: '18%' }}
        className="editor-font-options-button"
      >
        Cancel
      </button>
    </>
  );
};
export default Confirm;
