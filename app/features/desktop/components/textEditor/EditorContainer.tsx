import EditArea from './EditArea';
import Navbar from './navbar/Navbar';
import './styles.css';
import { useDispatch } from 'react-redux';
import { setEditorTooltipShow } from '@/app/redux/editor/editorSlice';

type Props = {
  contentID: string;
};

const EditorContainer = ({ contentID }: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setEditorTooltipShow({ tooltipShow: false }));
      }}
      className="editor-container"
    >
      <Navbar contentID={contentID} />
      <EditArea contentID={contentID} />
    </div>
  );
};
export default EditorContainer;
