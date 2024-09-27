import cover from '@/public/cover.jpg';
import Image from 'next/image';

const CoverPhoto = () => {
  return <Image className="cover-photo" src={cover} alt="Cover Photo" />;
  // <img className="cover-photo" src={cover.src} alt="Cover Photo" />;
};
export default CoverPhoto;
