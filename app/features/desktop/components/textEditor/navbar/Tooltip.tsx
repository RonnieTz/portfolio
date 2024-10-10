import Tick from './Tick';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  setTextWrap,
  setEditorTooltipShow,
} from '@/app/redux/editor/editorSlice';
import { openWindow } from '@/app/redux/app/appSlice';

type Props = {
  contentID: string;
};

const Tooltip = ({ contentID }: Props) => {
  const dispatch = useDispatch();
  const { textFiles } = useSelector((state: RootState) => state.editor);
  const file = textFiles.find((file) => file.id === contentID)!;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="editor-tooltip"
    >
      <span
        onClick={() => {
          dispatch(setTextWrap({ fileId: contentID, textWrap: !file.wrap }));
        }}
        className="editor-tooltip-item"
      >
        <span>Word Wrap</span>
        {file.wrap && <Tick />}
      </span>
      <span
        onClick={(e) => {
          const x = e.clientX;
          const y = e.clientY;
          dispatch(
            openWindow({
              windowID: 'font',
            })
            // newSubWindow({
            //   subWindowName: 'Font',
            //   position: { x, y },
            //   windowID: file.name,
            //   subWindowSize: { width: 500, height: 450 },
            //   contentID: contentID,
            //   subWindowID: 'Font' + Math.random() * 100000,
            // })
          );
          dispatch(setEditorTooltipShow({ tooltipShow: false }));
        }}
        className="editor-tooltip-item"
      >
        <span>Fonts...</span>
      </span>
    </div>
  );
};
export default Tooltip;
