import BackArrow from './BackArrow';
import ForwardArrow from './ForwardArrow';
import VerticalDivider from './VerticalDivider';
import Views from './Views';

type Props = {
  windowID: string;
};

const Navbar = ({ windowID }: Props) => {
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="navbar"
    >
      <BackArrow windowID={windowID} />
      <ForwardArrow windowID={windowID} />
      <VerticalDivider />
      <Views />
    </div>
  );
};
export default Navbar;
