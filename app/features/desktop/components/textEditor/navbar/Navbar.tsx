import Format from './Format';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { setEditorTooltipShowValue } from '@/app/redux/editor/editorSlice';

type Props = {
  contentID: string;
  windowID: string;
  subWindowID: string;
};

const Navbar = ({ contentID, subWindowID, windowID }: Props) => {
  const dispatch = useDispatch();
  const { textFiles } = useSelector((state: RootState) => state.editor);
  const file = textFiles.find((file) => file.contentID === contentID);
  return (
    <div className="editor-navbar">
      <span
        onMouseEnter={() => {
          dispatch(
            setEditorTooltipShowValue({ contentID, tooltipShow: 'File' })
          );
        }}
        className={
          'editor-navbar-item' +
          (file?.tooltipShow.value === 'File' && file?.tooltipShow.show
            ? ' editor-navbar-item-selected'
            : '')
        }
      >
        <span>File</span>
      </span>
      <span
        onMouseEnter={() => {
          dispatch(
            setEditorTooltipShowValue({ tooltipShow: 'Edit', contentID })
          );
        }}
        className={
          'editor-navbar-item' +
          (file?.tooltipShow.value === 'Edit' && file?.tooltipShow.show
            ? ' editor-navbar-item-selected'
            : '')
        }
      >
        <span>Edit</span>
      </span>
      <Format
        contentID={contentID}
        subWindowID={subWindowID}
        windowID={windowID}
      />
      <span
        onMouseEnter={() => {
          dispatch(
            setEditorTooltipShowValue({ tooltipShow: 'View', contentID })
          );
        }}
        className={
          'editor-navbar-item' +
          (file?.tooltipShow.value === 'View' && file?.tooltipShow.show
            ? ' editor-navbar-item-selected'
            : '')
        }
      >
        <span>View</span>
      </span>
      <span
        onMouseEnter={() => {
          dispatch(
            setEditorTooltipShowValue({ tooltipShow: 'Help', contentID })
          );
        }}
        className={
          'editor-navbar-item' +
          (file?.tooltipShow.value === 'Help' && file?.tooltipShow.show
            ? ' editor-navbar-item-selected'
            : '')
        }
      >
        <span>Help</span>
      </span>
    </div>
  );
};
export default Navbar;
