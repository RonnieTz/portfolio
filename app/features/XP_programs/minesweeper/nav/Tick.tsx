import Image from 'next/image';
import tick from '@/public/tick.svg';

const Tick = () => {
  return (
    <span>
      <Image
        src={tick}
        alt="tick"
        height={25}
        width={25}
        style={{
          position: 'absolute',
          top: '3px',
          left: '0',
        }}
      />
    </span>
  );
};
export default Tick;
