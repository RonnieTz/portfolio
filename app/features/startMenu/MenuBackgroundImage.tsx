import menu from '@/public/menu.jpg';
import Image from 'next/image';

const MenuBackgroundImage = () => {
  return (
    <Image
      priority={true}
      style={{ filter: 'contrast(1.1)', width: '100%', height: '100%' }}
      src={menu}
      alt="menu"
    />
  );
};
export default MenuBackgroundImage;
