import Image from 'next/image';
import logo from '@/public/XP_logo.png';

const Top = () => {
  return (
    <div className="top">
      Turn off computer
      <Image
        style={{
          width: 'auto',
          height: '70%',
          position: 'absolute',
          right: '5%',
        }}
        alt="logo"
        src={logo}
      />
    </div>
  );
};
export default Top;
