import gradient from '@/public/welcomePic.jpg';

const ShadowLight = () => {
  return (
    <div className="welcome-shadow-light">
      <img width={'100%'} height={'100%'} src={gradient.src} alt="gradient" />
    </div>
  );
};
export default ShadowLight;
