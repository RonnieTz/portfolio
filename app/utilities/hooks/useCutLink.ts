import {
  copy_cut,
  hideContextMenu,
} from '@/app/redux/contextMenu/contextSlice';
import { useRedux } from './useRedux';
import { useSelectedLink } from './useSelectedLink';
import { unSelectAllShortcuts } from '@/app/redux/app/appSlice';

export const useCutLink = (folderLocationID: string) => {
  const [selectedLink] = useSelectedLink(folderLocationID);
  const [dispatch] = useRedux();

  const cutLink = () => {
    if (selectedLink) {
      dispatch(hideContextMenu());
      dispatch(unSelectAllShortcuts());
      dispatch(
        copy_cut({
          functionType: 'cut',
          target: {
            linkID: selectedLink.linkID,
            folderID: selectedLink.linkID,
            linkType: selectedLink.windowType,
            targetType: 'link',
            windowID: selectedLink.windowID,
          },
        })
      );
    }
  };
  return [cutLink] as const;
};
