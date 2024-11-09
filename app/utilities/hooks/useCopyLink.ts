import {
  copy_cut,
  hideContextMenu,
} from '@/app/redux/contextMenu/contextSlice';
import { useRedux } from './useRedux';
import { useSelectedLink } from './useSelectedLink';
import { unSelectAllShortcuts } from '@/app/redux/app/appSlice';

export const useCopyLink = (folderLocationID: string) => {
  const [selectedLink] = useSelectedLink(folderLocationID);
  const [dispatch] = useRedux();

  const copyLink = () => {
    if (selectedLink) {
      dispatch(hideContextMenu());
      dispatch(unSelectAllShortcuts());
      dispatch(
        copy_cut({
          functionType: 'copy',
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
  return [copyLink] as const;
};
