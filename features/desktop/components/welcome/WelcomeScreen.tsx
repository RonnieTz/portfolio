import Bottombar from './Bottombar';
import FirstDivider from './FirstDivider';
import Middle from './Middle';
import SecondDivider from './SecondDivider';
import './styles.css';
import Topbar from './Topbar';

const WelcomeScreen = () => {
  return (
    <div className={'welcome-container'}>
      <Topbar />
      <FirstDivider />
      <Middle />
      <SecondDivider />
      <Bottombar />
    </div>
  );
};
export default WelcomeScreen;
