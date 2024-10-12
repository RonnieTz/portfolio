import { useDispatch, useSelector } from 'react-redux';
import {
  closeWindow,
  focusWindow,
  setSubWindow,
} from '@/app/redux/app/appSlice';
import { setFontOptions } from '@/app/redux/editor/editorSlice';
import { RootState } from '@/app/redux/store';

type Props = {
  fontFamily: string;
  fontStyle: string;
  fontSize: number;
  contentID: string;
  windowID: string;
};

const Confirm = ({
  fontFamily,
  fontSize,
  fontStyle,
  contentID,
  windowID,
}: Props) => {
  const dispatch = useDispatch();

  const { windows } = useSelector((state: RootState) => state.app);

  const parentWindowID = windows.find(
    (window) =>
      (window.type === 'program' || window.type === 'textFile') &&
      window.subWindow === windowID
  )?.windowID;

  return (
    <>
      <button
        onContextMenu={(e) => {
          console.log(contentID);
        }}
        onClick={() => {
          dispatch(
            setFontOptions({
              fontFamily,
              fontSize,
              fontStyle,
              contentID,
            })
          );
          dispatch(closeWindow({ windowID }));
          dispatch(setSubWindow({ windowID: parentWindowID!, subWindow: '' }));
          dispatch(focusWindow({ windowID: parentWindowID!, focus: true }));
        }}
        className="editor-font-options-button"
      >
        OK
      </button>
      <button
        onClick={() => {
          dispatch(closeWindow({ windowID: 'font' }));
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
