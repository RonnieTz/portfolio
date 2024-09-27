import logo from '@/public/XP_logo.png';
import Loader from './Loader';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="load-screen-logo">
      {/* <img
        style={{ width: '40%', position: 'absolute', right: '17%', top: '15%' }}
        src={logo.src}
        alt="logo"
      /> */}
      <Image
        style={{
          width: '40%',
          position: 'absolute',
          right: '17%',
          top: '15%',
          height: 'auto',
        }}
        src={logo}
        alt="logo"
      />
      <span className="load-screen-windows">Windows</span>
      <span className="load-screen-microsoft">Microsoft</span>
      <span className="load-screen-XP">XP</span>
      <Loader />
    </div>
  );
};
export default Logo;
