import { useDispatch } from 'react-redux';
import { closeWindow } from '@/app/redux/app/appSlice';
import { setFontOptions } from '@/app/redux/editor/editorSlice';

type Props = {
  fontFamily: string;
  fontStyle: string;
  fontSize: number;
  contentID: string;
};

const Confirm = ({ fontFamily, fontSize, fontStyle, contentID }: Props) => {
  const dispatch = useDispatch();

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
              id: contentID,
            })
          );
          dispatch(closeWindow({ windowID: 'font' }));
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
