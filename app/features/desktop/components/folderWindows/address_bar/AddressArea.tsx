import logo from '@/public/Folder Closed.png';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { FolderWindow } from '@/app/redux/app/types';
import { useRef, useEffect } from 'react';
type Props = {
  folderID: string;
};

const AddressArea = ({ folderID }: Props) => {
  const { windows } = useSelector((state: RootState) => state.app);
  const { history } = windows.find(
    (window) => window.windowID === folderID
  )! as FolderWindow;
  const ref = useRef<HTMLInputElement>(null);
  const { locations, currentLocation } = history;
  const address = locations
    .slice(0, currentLocation + 1)
    .map((location) => location.title)
    .join('/');
  useEffect(() => {
    ref.current?.focus();
  }, [address]);

  return (
    <div className="address-area">
      <Image
        priority={true}
        style={{ height: '25px', width: '25px' }}
        src={logo}
        alt="logo"
      />
      <input
        ref={ref}
        autoFocus
        onChange={() => {}}
        style={{
          height: '100%',
          width: 'calc(100% - 25px)',
          boxSizing: 'border-box',
          border: 'none',
          outline: 'none',
          fontSize: '14px',
          fontFamily: 'Roboto',
        }}
        value={address}
      />
    </div>
  );
};
export default AddressArea;
