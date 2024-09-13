import arrow from '@/public/icon-arrow.svg';

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
      <img width={'70%'} src={arrow.src} alt="arrow" />
    </div>
  );
};
export default Arrow;
