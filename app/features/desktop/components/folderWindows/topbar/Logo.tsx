import logo from '@/public/XP_logo.png';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="logo-container">
      <Image
        priority={true}
        style={{ width: 'auto', height: '80%' }}
        src={logo}
        alt="XP logo"
      />
    </div>
  );
};
export default Logo;
