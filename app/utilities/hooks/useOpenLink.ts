import { useRedux } from './useRedux';
import { useSelectedLink } from './useSelectedLink';
import { openWindow, changeToFolder } from '@/app/redux/app/appSlice';

export const useOpenLink = (folderLocationID: string) => {
  const [selectedLink] = useSelectedLink(folderLocationID);
  const [dispatch] = useRedux();

  const openSelectedLink = () => {
    if (selectedLink) {
      dispatch(openWindow({ windowID: selectedLink.windowID }));
      dispatch(
        changeToFolder({
          windowID: selectedLink.windowID,
          title: selectedLink.name,
          location: selectedLink.linkID,
        })
      );
    }
  };
  return [openSelectedLink] as const;
};
