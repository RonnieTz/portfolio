import logo from '@/public/Folder Closed.png';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const AddressArea = () => {
  const {} = useSelector((state: RootState) => state.app);

  return (
    <div className="address-area">
      <Image
        priority={true}
        style={{ height: '25px', width: '25px' }}
        src={logo}
        alt="logo"
      />
      <span></span>
    </div>
  );
};
export default AddressArea;
