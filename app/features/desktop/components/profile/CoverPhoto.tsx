import cover from '@/public/cover.jpg';
import Image from 'next/image';

const CoverPhoto = () => {
  return (
    <Image
      priority={true}
      className="cover-photo"
      src={cover}
      alt="Cover Photo"
    />
  );
};
export default CoverPhoto;
