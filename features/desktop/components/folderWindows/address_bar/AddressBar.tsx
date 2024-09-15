import BackArrow from '../navbar/BackArrow';
import Label from './Label';
import AddressGoButton from './AddressGoButton';
import AddressArea from './AddressArea';

const AddressBar = () => {
  return (
    <div className="address-bar">
      <Label />
      <AddressArea />
      <AddressGoButton />
    </div>
  );
};
export default AddressBar;
