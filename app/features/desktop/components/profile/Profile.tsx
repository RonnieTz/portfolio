import About from './About';
import CoverContainer from './CoverContainer';
import './profileStyles.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <CoverContainer />
      <About />
    </div>
  );
};
export default Profile;
