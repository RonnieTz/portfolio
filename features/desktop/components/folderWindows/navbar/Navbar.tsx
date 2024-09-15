import BackArrow from './BackArrow';
import ForwardArrow from './ForwardArrow';
import VerticalDivider from './VerticalDivider';
import Views from './Views';

const Navbar = () => {
  return (
    <div className="navbar">
      <BackArrow />
      <ForwardArrow />
      <VerticalDivider />
      <Views />
    </div>
  );
};
export default Navbar;
