import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  setEditorTooltipShowValue,
  setEditorTooltipShow,
} from '@/app/redux/editor/editorSlice';

import Tooltip from './Tooltip';
type Props = {
  contentID: string;
  windowID: string;
  subWindowID: string;
};
const Format = ({ contentID, subWindowID, windowID }: Props) => {
  const dispatch = useDispatch();
  const { textFiles } = useSelector((state: RootState) => state.editor);
  const file = textFiles.find((file) => file.contentID === contentID);
  return (
    <span
      onClick={(e) => {
        e.stopPropagation();
        console.log(file);

        dispatch(
          setEditorTooltipShow({
            tooltipShow: !file?.tooltipShow.show!,
            contentID,
          })
        );
      }}
      onMouseEnter={() => {
        dispatch(
          setEditorTooltipShowValue({ contentID, tooltipShow: 'Format' })
        );
      }}
      className={
        'editor-navbar-item' +
        (file?.tooltipShow.value === 'Format' && file?.tooltipShow.show
          ? ' editor-navbar-item-selected'
          : '')
      }
    >
      <span>Format</span>
      {file?.tooltipShow.value === 'Format' && file?.tooltipShow.show && (
        <Tooltip
          contentID={contentID}
          subWindowID={subWindowID}
          windowID={windowID}
        />
      )}
    </span>
  );
};
export default Format;
