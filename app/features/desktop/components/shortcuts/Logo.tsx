import Image from 'next/image';

const Logo = ({ logo, selected }: { logo: string; selected: boolean }) => {
  return (
    <Image
      priority={true}
      src={logo}
      alt="logo"
      style={{
        width: '50%',
        height: '50%',
        filter: selected
          ? 'sepia(100%) hue-rotate(190deg) saturate(1800%)'
          : 'none',
      }}
    />
  );
};
export default Logo;
