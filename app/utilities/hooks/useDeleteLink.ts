import { useRedux } from './useRedux';
import { deleteLink } from '@/app/redux/app/appSlice';
import { useSelectedLink } from './useSelectedLink';

export const useDeleteLink = (folderLocationID: string) => {
  const [selectedLink] = useSelectedLink(folderLocationID);
  const [dispatch] = useRedux();

  const deleteSelectedLink = () => {
    if (selectedLink) {
      dispatch(deleteLink({ linkID: selectedLink.linkID }));
    }
  };
  return [deleteSelectedLink] as const;
};
