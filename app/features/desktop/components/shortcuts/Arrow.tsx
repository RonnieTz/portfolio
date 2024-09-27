import arrow from '@/public/icon-arrow.svg';
import Image from 'next/image';

const Arrow = () => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '15px',
        height: '15px',
        border: '0.5px solid black',
        borderWidth: '1px 2px 2px 1px',
        top: '30px',
        left: '20px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
      }}
    >
      <Image style={{ width: '70%', height: 'auto' }} src={arrow} alt="arrow" />
    </div>
  );
};
export default Arrow;
