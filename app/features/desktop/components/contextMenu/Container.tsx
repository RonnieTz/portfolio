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
import ContextNewButton from './newButton/ContextNewButton';
import ContextDetailsButton from './ContextDetailsButton';

const Container = () => {
  const { position, target } = useSelector((state: RootState) => state.context);
  const { links } = useSelector((state: RootState) => state.app);
  const folderID = target?.folderID;

  const windowID = links.find((link) => link.linkID === folderID)?.windowID;
  const isLink = target?.targetType === 'link';
  const isFolder = target?.targetType === 'window';

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
        enabled={isLink}
        linkID={isLink ? target.linkID : undefined}
      />
      {folderID !== 'desktop' && isFolder && (
        <ContextViewButton enabled={isFolder} />
      )}
      <ContextRefreshButton enabled={isFolder} />
      <Divider />
      <ContextCopyButton enabled={isLink} />
      <ContextCutButton enabled={isLink} />
      <ContextPasteButton />
      <Divider />
      <ContextNewButton
        folderID={folderID}
        windowID={windowID}
        enabled={isFolder}
      />
      <Divider />
      <ContextDeleteButton
        enabled={isLink}
        linkID={
          target?.targetType === 'link' ? target.linkID! : target?.linkID!
        }
      />
      <ContextRenameButton
        enabled={isLink}
        linkID={isLink ? target.linkID : undefined}
      />
      <Divider />
      <ContextDetailsButton enabled={isLink} />
    </div>
  );
};
export default Container;
