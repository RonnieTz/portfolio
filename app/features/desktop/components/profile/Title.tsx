import developer from '@/public/developer.svg';
import Image from 'next/image';

const Title = () => {
  return (
    <div className="profile-title">
      <Image
        priority={true}
        style={{ height: '100%', width: 'auto' }}
        src={developer}
        alt="developer"
        className="profile-title-icon"
      />
      <span style={{ fontFamily: 'inherit' }}>Web Developer</span>
    </div>
  );
};
export default Title;
