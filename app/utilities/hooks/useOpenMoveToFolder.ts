import { useRedux } from './useRedux';
import { newSubWindow, setSubWindow } from '@/app/redux/app/appSlice';
import { cutPasteFolder, cutPasteLink } from '@/app/redux/app/appSlice';

export const useOpenMoveToFolder = (windowID: string) => {
  const [dispatch, app] = useRedux();
  const { selectedLinkForMoveWindow, links } = app;

  const openMoveToFolder = () => {
    dispatch(
      newSubWindow({
        windowID,
        subWindowID: windowID + '-move-to-folder',
        title: 'Move Item',
      })
    );
    dispatch(
      setSubWindow({
        subWindow: windowID + '-move-to-folder',
        windowID,
      })
    );
  };

  const moveToFolder = ({
    newFolderLocation,
  }: {
    newFolderLocation: string;
  }) => {
    const link = links.find(
      (link) => link.linkID === selectedLinkForMoveWindow
    );

    if (link?.windowType === 'program') {
      dispatch(
        cutPasteLink({
          linkID: selectedLinkForMoveWindow,
          linkLocation: link.folderLocation,
          linkNewLocation: newFolderLocation,
        })
      );
    } else {
      if (newFolderLocation === 'desktop') {
        dispatch(
          cutPasteFolder({
            folderLinkID: selectedLinkForMoveWindow,
            newFolderLocation,
            windowID: '',
          })
        );
      } else {
        const { windowID } = links.find(
          (link) => link.linkID === newFolderLocation
        )!;
        dispatch(
          cutPasteFolder({
            folderLinkID: selectedLinkForMoveWindow,
            newFolderLocation,
            windowID,
          })
        );
      }
    }
  };

  return [openMoveToFolder, moveToFolder] as const;
};
