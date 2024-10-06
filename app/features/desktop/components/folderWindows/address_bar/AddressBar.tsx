import Label from './Label';
import AddressGoButton from './AddressGoButton';
import AddressArea from './AddressArea';

const AddressBar = () => {
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="address-bar"
    >
      <Label />
      <AddressArea />
      <AddressGoButton />
    </div>
  );
};
export default AddressBar;
