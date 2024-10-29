import Bottombar from './Bottombar';
import FirstDivider from './FirstDivider';
import SecondDivider from './SecondDivider';
import ShadowLight from './ShadowLight';
import logo from '@/public/XP_logo.png';
import './styles.css';
import Topbar from './Topbar';
import Image from 'next/image';

const TurningOffScreen = () => {
  return (
    <div className="turning-off-screen">
      <Topbar />
      <FirstDivider />
      <div
        style={{
          height: 'calc(100% - 266px)',
          width: '100%',
          position: 'relative',
        }}
      >
        <ShadowLight />
        <Image
          alt="logo"
          src={logo}
          style={{
            width: 'auto',
            height: '20%',
            position: 'absolute',
            top: '40%',
            left: '60%',
            translate: '-50% -50%',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: ' 60%',
            left: '43%',
            fontFamily: 'Roboto',
            fontSize: '1.4rem',
            color: 'rgb(248, 252, 248)',
          }}
        >
          Windows is shutting down...
        </span>
        <span
          style={{
            position: 'absolute',
            top: ' 47%',
            left: '50%',
            fontSize: '3rem',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            color: 'rgb(248, 252, 248)',
          }}
        >
          Windows
        </span>
        <span
          style={{
            position: 'absolute',
            top: ' 48%',
            left: '64%',
            fontSize: '1.6rem',
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: 'rgb(232, 124, 48)',
          }}
        >
          XP
        </span>
        <span
          style={{
            position: 'absolute',
            top: ' 46%',
            left: '50%',
            fontSize: '0.9rem',
            fontWeight: '100',
            fontFamily: 'Roboto',
            color: 'rgb(248, 252, 248)',
          }}
        >
          Microsoft
        </span>
      </div>
      <SecondDivider />
      <Bottombar />
    </div>
  );
};
export default TurningOffScreen;
