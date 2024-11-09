import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/redux/store';

export const useRedux = () => {
  const dispatch = useDispatch<AppDispatch>();
  const app = useSelector((state: RootState) => state.app);
  const context = useSelector((state: RootState) => state.context);
  return [dispatch, app, context] as const;
};
