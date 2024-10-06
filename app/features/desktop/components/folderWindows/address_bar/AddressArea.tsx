import logo from '@/public/Folder Closed.png';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const AddressArea = () => {
  const { folderHistory } = useSelector((state: RootState) => state.app);
  const { history, currentFolder } = folderHistory;
  const folderName = history.slice(0, currentFolder + 1).join('/');

  return (
    <div className="address-area">
      <Image
        priority={true}
        style={{ height: '25px', width: '25px' }}
        src={logo}
        alt="logo"
      />
      <span>{folderName}</span>
    </div>
  );
};
export default AddressArea;
