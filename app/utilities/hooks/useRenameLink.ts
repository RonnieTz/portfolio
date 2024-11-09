import { useRedux } from './useRedux';
import { setRenameState } from '@/app/redux/app/appSlice';

import { useSelectedLink } from './useSelectedLink';

export const useRenameLink = (folderLocationID: string) => {
  const [selectedLink] = useSelectedLink(folderLocationID);
  const [dispatch] = useRedux();

  const renameSelectedLink = () => {
    if (selectedLink) {
      dispatch(setRenameState({ linkID: selectedLink.linkID }));
    }
  };
  return [renameSelectedLink] as const;
};
