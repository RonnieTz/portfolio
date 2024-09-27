import taskbar from '@/public/taskbar.jpg';
import Image from 'next/image';

const Background = () => {
  return (
    <Image
      priority={true}
      style={{ width: '100%', height: '100%', position: 'absolute' }}
      src={taskbar}
      alt="taskbar background"
    />
  );
};
export default Background;
