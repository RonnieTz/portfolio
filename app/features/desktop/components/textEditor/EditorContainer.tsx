import EditArea from './EditArea';
import Navbar from './navbar/Navbar';
import './styles.css';
import { useDispatch } from 'react-redux';
import { setEditorTooltipShow } from '@/app/redux/editor/editorSlice';

type Props = {
  content: {
    id: string;
  };
};

const EditorContainer = ({ content }: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setEditorTooltipShow({ tooltipShow: false }));
      }}
      className="editor-container"
    >
      <Navbar content={content} />
      <EditArea content={content} />
    </div>
  );
};
export default EditorContainer;
