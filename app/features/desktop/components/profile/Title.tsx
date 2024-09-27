import developer from '@/public/developer.svg';
import Image from 'next/image';

const Title = () => {
  return (
    <div className="profile-title">
      {/* <img
        height={'100%'}
        src={developer.src}
        alt="developer"
        className="profile-title-icon"
      /> */}
      <Image
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
