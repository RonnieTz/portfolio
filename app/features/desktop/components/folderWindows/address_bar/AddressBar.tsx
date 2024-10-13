import Label from './Label';
import AddressGoButton from './AddressGoButton';
import AddressArea from './AddressArea';

type Props = {
  folderID: string;
};

const AddressBar = ({ folderID }: Props) => {
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="address-bar"
    >
      <Label />
      <AddressArea folderID={folderID} />
      <AddressGoButton />
    </div>
  );
};
export default AddressBar;
