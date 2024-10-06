import Tick from './Tick';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  setTextWrap,
  setEditorTooltipShow,
} from '@/app/redux/editor/editorSlice';
import { newSubWindow } from '@/app/redux/app/appSlice';

type Props = {
  content: {
    id: string;
  };
};

const Tooltip = ({ content }: Props) => {
  const dispatch = useDispatch();
  const { textFiles } = useSelector((state: RootState) => state.editor);
  const file = textFiles.find((file) => file.id === content.id)!;
  console.log(content);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="editor-tooltip"
    >
      <span
        onClick={() => {
          dispatch(setTextWrap({ fileId: content.id, textWrap: !file.wrap }));
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
            newSubWindow({
              subWindowName: 'Font',
              content: { id: content.id },
              position: { x, y },
              windowID: file.name,
              subWindowSize: { width: 500, height: 450 },
            })
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
