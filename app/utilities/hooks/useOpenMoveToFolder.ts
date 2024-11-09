import { useRedux } from './useRedux';
import { newSubWindow, setSubWindow } from '@/app/redux/app/appSlice';

export const useOpenMoveToFolder = (
  folderLocationID: string,
  windowID: string
) => {
  const [dispatch, app] = useRedux();
  //   const { windows } = app;

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

  return [openMoveToFolder];
};
