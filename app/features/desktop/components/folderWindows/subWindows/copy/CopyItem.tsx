import Intro from './Intro';
import '../style.css';
import { useRedux } from '@/app/utilities/hooks/useRedux';
import Container from './Container';
import Instruction from './Instruction';
import Footer from './Footer';
import { useFolderTree } from '@/app/utilities/hooks/useFolderTree';

type Props = { windowID: string };

const CopyItem = ({ windowID }: Props) => {
  const folderTree = useFolderTree();
  const [dispatch, app] = useRedux();
  const { selectedLinkForMoveWindow } = app;
  const link = app.links.find(
    (link) => link.linkID === selectedLinkForMoveWindow
  );

  return (
    <div className="move-item-window">
      <Intro title={link?.name!} />
      <Container folderTree={folderTree} />
      <Instruction />
      <Footer
        windowID={windowID}
        selectedFolder={folderTree.selectedFolder}
        expandFolder={folderTree.expandFolder}
      />
    </div>
  );
};
export default CopyItem;
