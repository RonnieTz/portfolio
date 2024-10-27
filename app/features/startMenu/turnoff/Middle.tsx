import restart from '@/public/Restart.png';
import turnoff from '@/public/Power.png';
import standby from '@/public/Standby.png';
import Image from 'next/image';

const Middle = () => {
  return (
    <div className="middle">
      <Image
        style={{ height: '30%', width: 'auto', opacity: 0.2 }}
        src={standby}
        alt="restart"
      />
      <Image
        style={{ height: '30%', width: 'auto' }}
        src={turnoff}
        alt="turnoff"
      />
      <Image
        onClick={() => {}}
        style={{ height: '30%', width: 'auto' }}
        src={restart}
        alt="restart"
      />
    </div>
  );
};
export default Middle;
