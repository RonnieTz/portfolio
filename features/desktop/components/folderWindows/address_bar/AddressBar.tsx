import Label from './Label';
import AddressGoButton from './AddressGoButton';
import AddressArea from './AddressArea';

type Props = {
  title: string;
};

const AddressBar = ({ title }: Props) => {
  return (
    <div className="address-bar">
      <Label />
      <AddressArea title={title} />
      <AddressGoButton />
    </div>
  );
};
export default AddressBar;
