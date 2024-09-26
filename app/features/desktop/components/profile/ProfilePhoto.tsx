import photo from '@/public/photo1.jpg';

const ProfilePhoto = () => {
  return (
    <div className="profile-photo">
      <img height={'100%'} src={photo.src} alt="Profile Photo" />
    </div>
  );
};
export default ProfilePhoto;
