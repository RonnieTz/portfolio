type Props = { logo: string; isExpanded: boolean };
import Image from 'next/image';
const ArrowDown = ({ logo, isExpanded }: Props) => {
  return (
    <div className="sidebar-item-arrow">
      <Image
        style={{
          height: '60%',
          width: '60%',
          rotate: isExpanded ? '180deg' : undefined,
          transition: '0.2s',
        }}
        src={logo}
        alt="Arrow down"
      />
    </div>
  );
};
export default ArrowDown;
