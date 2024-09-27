import gradient from '@/public/welcomePic.jpg';
import Image from 'next/image';

const ShadowLight = () => {
  return (
    <div className="welcome-shadow-light">
      <Image
        priority={true}
        style={{ width: '100%', height: '100%' }}
        src={gradient}
        alt="gradient"
      />
    </div>
  );
};
export default ShadowLight;
