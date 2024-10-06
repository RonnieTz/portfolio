import arrow from '@/public/triangle-down.svg';
import Image from 'next/image';

const ContextNewButton = () => {
  return (
    <div className="context-menu-item">
      <span style={{ fontFamily: 'inherit' }}>New</span>
      <Image
        style={{ position: 'absolute', right: 10, rotate: '-90deg' }}
        src={arrow}
        alt="arrow"
        height={17}
        width={17}
      />
    </div>
  );
};
export default ContextNewButton;
