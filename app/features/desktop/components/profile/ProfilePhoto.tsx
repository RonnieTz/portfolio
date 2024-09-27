import photo from '@/public/photo1.jpg';
import Image from 'next/image';

const ProfilePhoto = () => {
  return (
    <div className="profile-photo">
      <Image
        priority={true}
        style={{ height: '100%', width: 'auto' }}
        src={photo}
        alt="Profile Photo"
      />
    </div>
  );
};
export default ProfilePhoto;
