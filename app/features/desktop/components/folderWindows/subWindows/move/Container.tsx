import desktop from '@/public/Desktop.png';
import Image from 'next/image';
import { useFolderTree } from '@/app/utilities/hooks/useFolderTree';

const Container = () => {
  const { tree } = useFolderTree();
  console.log(tree);
  return (
    <div className="move-item-window-container">
      <div className="move-item-window-link">
        <Image
          style={{ height: '100%', width: 'auto' }}
          src={desktop}
          alt="desktop"
        />
        <span style={{ fontFamily: 'sans-serif' }}>Desktop</span>
      </div>
    </div>
  );
};
export default Container;
