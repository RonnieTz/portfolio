import logo from '@/public/Folder Closed.png';

type Props = {
  title: string;
};
const AddressArea = ({ title }: Props) => {
  return (
    <div className="address-area">
      <img height={'50%'} src={logo.src} alt="logo" />
      <span>{title}</span>
    </div>
  );
};
export default AddressArea;
