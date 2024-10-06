import Image from 'next/image';
import tick from '@/public/tick.svg';

const Tick = () => {
  return (
    <Image
      height={25}
      width={25}
      alt="tick"
      src={tick}
      style={{ position: 'absolute', right: 10 }}
    />
  );
};
export default Tick;
