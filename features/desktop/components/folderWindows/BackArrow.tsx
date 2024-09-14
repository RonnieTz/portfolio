import backArrow from '@/public/arrow-back.svg';
import arrow from '@/public/triangle-down.svg';

const BackArrow = () => {
  return (
    <div className="back-button">
      <span className="back-arrow">
        <img height={'70%'} src={backArrow.src} alt="back arrow" />
      </span>
      <span className="back-text">Back</span>
      <span className="arrow-down">
        <img height={'35%'} src={arrow.src} alt="arrow down" />
      </span>
    </div>
  );
};
export default BackArrow;
