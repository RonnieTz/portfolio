import Format from './Format';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { setEditorTooltipShowValue } from '@/app/redux/editor/editorSlice';

type Props = {
  content: {
    id: string;
  };
};

const Navbar = ({ content }: Props) => {
  const dispatch = useDispatch();
  const { tooltipShow } = useSelector((state: RootState) => state.editor);
  return (
    <div className="editor-navbar">
      <span
        onMouseEnter={() => {
          dispatch(setEditorTooltipShowValue({ tooltipShow: 'File' }));
        }}
        className={
          'editor-navbar-item' +
          (tooltipShow.value === 'File' && tooltipShow.show
            ? ' editor-navbar-item-selected'
            : '')
        }
      >
        <span>File</span>
      </span>
      <span
        onMouseEnter={() => {
          dispatch(setEditorTooltipShowValue({ tooltipShow: 'Edit' }));
        }}
        className={
          'editor-navbar-item' +
          (tooltipShow.value === 'Edit' && tooltipShow.show
            ? ' editor-navbar-item-selected'
            : '')
        }
      >
        <span>Edit</span>
      </span>
      <Format content={content} />
      <span
        onMouseEnter={() => {
          dispatch(setEditorTooltipShowValue({ tooltipShow: 'View' }));
        }}
        className={
          'editor-navbar-item' +
          (tooltipShow.value === 'View' && tooltipShow.show
            ? ' editor-navbar-item-selected'
            : '')
        }
      >
        <span>View</span>
      </span>
      <span
        onMouseEnter={() => {
          dispatch(setEditorTooltipShowValue({ tooltipShow: 'Help' }));
        }}
        className={
          'editor-navbar-item' +
          (tooltipShow.value === 'Help' && tooltipShow.show
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
