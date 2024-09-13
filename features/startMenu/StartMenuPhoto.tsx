import photo from '@/public/photo1.jpg';

const StartMenuPhoto = () => {
  return (
    <div
      style={{
        width: '12.6%',
        height: '10%',
        position: 'absolute',
        top: '2%',
        left: '2.3%',
        borderRadius: '2px',
        boxSizing: 'border-box',
        zIndex: 100,
      }}
    >
      <img width={'100%'} height={'100%'} src={photo.src} alt="photo" />
    </div>
  );
};
export default StartMenuPhoto;
