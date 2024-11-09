import Intro from './Intro';
import '../style.css';
import { useRedux } from '@/app/utilities/hooks/useRedux';
import Container from './Container';
import Instruction from './Instruction';
import Footer from './Footer';

const MoveItem = () => {
  const [dispatch, app] = useRedux();
  const { selectedLinkForMoveWindow } = app;
  const link = app.links.find(
    (link) => link.linkID === selectedLinkForMoveWindow
  );
  return (
    <div className="move-item-window">
      <Intro title={link?.name!} />
      <Container />
      <Instruction />
      <Footer />
    </div>
  );
};
export default MoveItem;
