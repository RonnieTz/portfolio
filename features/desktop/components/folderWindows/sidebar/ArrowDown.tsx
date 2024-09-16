import logo from '@/public/double-arrow-down.svg';
import logoLight from '@/public/double-arrow-down-light.svg';

type Props = { logo: string; isExpanded: boolean };
const ArrowDown = ({ logo, isExpanded }: Props) => {
  return (
    <div
      style={{ rotate: isExpanded ? '180deg' : undefined }}
      className="sidebar-item-arrow"
    >
      <img height={'60%'} width={'60%'} src={logo} alt="Arrow down" />
    </div>
  );
};
export default ArrowDown;
