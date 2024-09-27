import logo from '@/public/Folder Closed.png';
import Image from 'next/image';

type Props = {
  title: string;
};
const AddressArea = ({ title }: Props) => {
  return (
    <div className="address-area">
      <Image
        priority={true}
        style={{ height: '25px', width: '25px' }}
        src={logo}
        alt="logo"
      />
      <span>{title}</span>
    </div>
  );
};
export default AddressArea;
