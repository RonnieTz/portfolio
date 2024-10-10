import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  setEditorTooltipShowValue,
  setEditorTooltipShow,
} from '@/app/redux/editor/editorSlice';

import Tooltip from './Tooltip';
type Props = {
  contentID: string;
};
const Format = ({ contentID }: Props) => {
  const dispatch = useDispatch();
  const { tooltipShow } = useSelector((state: RootState) => state.editor);
  return (
    <span
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setEditorTooltipShow({ tooltipShow: !tooltipShow.show }));
      }}
      onMouseEnter={() => {
        dispatch(setEditorTooltipShowValue({ tooltipShow: 'Format' }));
      }}
      className={
        'editor-navbar-item' +
        (tooltipShow.value === 'Format' && tooltipShow.show
          ? ' editor-navbar-item-selected'
          : '')
      }
    >
      <span>Format</span>
      {tooltipShow.value === 'Format' && tooltipShow.show && (
        <Tooltip contentID={contentID} />
      )}
    </span>
  );
};
export default Format;
