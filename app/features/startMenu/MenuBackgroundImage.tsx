import menu from '@/public/menu.jpg';

const MenuBackgroundImage = () => {
  return (
    <img
      style={{ filter: 'contrast(1.1)', width: '100%', height: '100%' }}
      src={menu.src}
      alt="menu"
    />
  );
};
export default MenuBackgroundImage;
