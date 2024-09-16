import Addresss from './Addresss';
import CoverPhoto from './CoverPhoto';
import Name from './Name';
import ProfilePhoto from './ProfilePhoto';
import Title from './Title';

const CoverContainer = () => {
  return (
    <div className="cover-container">
      <CoverPhoto />
      <ProfilePhoto />
      <Name />
      <Addresss />
      <Title />
    </div>
  );
};
export default CoverContainer;
