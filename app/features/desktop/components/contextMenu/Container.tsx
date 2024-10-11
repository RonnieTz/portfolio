import './styles.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import ContextOpenButton from './ContextOpenButton';
import Divider from './Divider';
import ContextCopyButton from './ContextCopyButton';
import ContextCutButton from './ContextCutButton';
import ContextPasteButton from './ContextPasteButton';
import ContextDeleteButton from './ContextDeleteButton';
import ContextRenameButton from './ContextRenameButton';
import ContextViewButton from './ContextViewButton';
import ContextRefreshButton from './ContextRefreshButton';
import ContextNewButton from './ContextNewButton';
import ContextDetailsButton from './ContextDetailsButton';
import { openWindow } from '@/app/redux/app/appSlice';

const Container = () => {
  const { position, target } = useSelector((state: RootState) => state.context);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      style={{
        top: position.y,
        left: position.x,
      }}
      className="context-container"
    >
      <ContextOpenButton
        enabled={target?.type === 'link'}
        linkID={target?.type === 'link' ? target.linkID : undefined}
      />
      <ContextViewButton />
      <ContextRefreshButton />
      <Divider />
      <ContextCopyButton />
      <ContextCutButton />
      <ContextPasteButton />
      <Divider />
      <ContextNewButton />
      <Divider />
      <ContextDeleteButton />
      <ContextRenameButton
        linkID={target?.type === 'link' ? target.linkID : undefined}
      />
      <Divider />
      <ContextDetailsButton />
    </div>
  );
};
export default Container;
