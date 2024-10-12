import EditArea from './EditArea';
import Navbar from './navbar/Navbar';
import './styles.css';
import { useDispatch } from 'react-redux';
import { setEditorTooltipShow } from '@/app/redux/editor/editorSlice';

type Props = {
  contentID: string;
  windowID: string;
  subWindowID: string;
};

const EditorContainer = ({ contentID, subWindowID, windowID }: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setEditorTooltipShow({ tooltipShow: false, contentID }));
      }}
      className="editor-container"
    >
      <Navbar
        contentID={contentID}
        subWindowID={subWindowID}
        windowID={windowID}
      />
      <EditArea contentID={contentID} />
    </div>
  );
};
export default EditorContainer;
